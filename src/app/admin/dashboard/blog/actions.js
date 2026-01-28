"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import db from "../../../../../prisma/db";
import { verifyAdmin } from "@/lib/auth";

// ✅ Helper to save uploaded image with sanitized name and avoid conflicts
async function saveImage(file, folder = "blog") {
  if (!file) return null;

  // Validate file type
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
  const ext = path.extname(file.name).toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    throw new Error("Invalid file type. Only images are allowed.");
  }

  const uploadDir = path.join(process.cwd(), `public/images/${folder}`);
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Sanitize file name: replace spaces with '-' and remove special chars
  const originalName = file.name;
  let baseName = path.basename(originalName, ext)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")         // replace spaces with '-'
    .replace(/[^a-z0-9-]/g, "");  // remove special characters

  let fileName = baseName + ext.toLowerCase();
  let filePath = path.join(uploadDir, fileName);
  let counter = 1;

  // Increment filename if it already exists
  while (fs.existsSync(filePath)) {
    fileName = `${baseName}-${counter}${ext.toLowerCase()}`;
    filePath = path.join(uploadDir, fileName);
    counter++;
  }

  // Save file to disk
  const arrayBuffer = await file.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

  // Return relative path for DB
  return `/images/${folder}/${fileName}`;
}


// ✅ Ensure slug uniqueness
async function getUniqueSlug(baseSlug, excludeId = null) {
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await db.blog.findFirst({
      where: {
        slug,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    if (!existing) break;
    slug = `${baseSlug}-${counter++}`;
  }
  return slug;
}



// ✅ Create blog
export async function createBlog(formData) {
  await verifyAdmin();
  try {
    const title = formData.get("title");
    let slug = formData.get("slug");
    const content = formData.get("content");
    const checklistTitle = formData.get("checklistTitle");
    const checklistItems = formData.get("checklistItems");
    const categoryId = parseInt(formData.get("categoryId"));
    const imageFile = formData.get("image");

    // sanitize slug
    slug = slug.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const uniqueSlug = await getUniqueSlug(slug);

    const imagePath = await saveImage(imageFile, "blog");

    const blog = await db.blog.create({
      data: {
        title,
        slug: uniqueSlug,
        content,
        checklistTitle,
        checklistItems,
        categoryId,
        image: imagePath,
      },
    });

    revalidatePath("/admin/dashboard/blog");
    return blog;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw new Error("Failed to create blog");
  }
}

// ✅ Update blog with previous image deletion
export async function updateBlog(formData) {
  await verifyAdmin();
  try {
    const id = parseInt(formData.get("id"));
    const title = formData.get("title");
    let slug = formData.get("slug");
    const content = formData.get("content");
    const checklistTitle = formData.get("checklistTitle");
    const checklistItems = formData.get("checklistItems");
    const categoryId = parseInt(formData.get("categoryId"));
    const imageFile = formData.get("image");

    // sanitize slug
    slug = slug.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const uniqueSlug = await getUniqueSlug(slug, id);

    const updatedData = {
      title,
      slug: uniqueSlug,
      content,
      checklistTitle,
      checklistItems,
      categoryId,
    };

    if (imageFile && typeof imageFile.name === "string") {
      // Fetch existing blog to get current image
      const existingBlog = await db.blog.findUnique({ where: { id } });
      if (existingBlog && existingBlog.image) {
        const oldImagePath = path.join(process.cwd(), "public", existingBlog.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath); // Delete old image
        }
      }

      // Save new image
      const newImagePath = await saveImage(imageFile, "blog");
      updatedData.image = newImagePath;
    }

    const blog = await db.blog.update({
      where: { id },
      data: updatedData,
    });

    revalidatePath("/admin/dashboard/blog");
    return blog;
  } catch (error) {
    console.error("Error updating blog:", error);
    throw new Error("Failed to update blog");
  }
}

// ✅ Delete blog
export async function deleteBlog(id) {
  await verifyAdmin();
  try {
    const blog = await db.blog.findUnique({ where: { id: parseInt(id) } });
    if (blog?.image) {
      const imagePath = path.join(process.cwd(), "public", blog.image);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    await db.blog.delete({ where: { id: parseInt(id) } });

    revalidatePath("/admin/dashboard/blog");
    return true;
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw new Error("Failed to delete blog");
  }
}

// ✅ Get all blogs with category data
export async function getBlogs() {
  try {
    const blogs = await db.blog.findMany({
      include: { category: true },
      orderBy: { id: "desc" },
    });
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}




// ✅ Fetch paginated blogs for each category
// ✅ Fetch paginated blogs for each category
export async function getPaginatedBlogsByCategory(page = 1, pageSize = 12) {
  try {
    const categories = await db.blogCategory.findMany({
      orderBy: { name: "asc" },
    });

    const categoriesWithBlogs = await Promise.all(
      categories.map(async (category) => {
        const total = await db.blog.count({ where: { categoryId: category.id } });

        const blogs = await db.blog.findMany({
          where: { categoryId: category.id },
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            title: true,
            slug: true,
            image: true,
            content: true,
            createdAt: true,
            categoryId: true,
            category: {
              select: { id: true, name: true, slug: true },
            },
          },
          skip: (page - 1) * pageSize,
          take: pageSize,
        });

        return { ...category, blogs, total };
      })
    );

    return categoriesWithBlogs;
  } catch (error) {
    console.error("❌ Error fetching paginated blogs by category:", error);
    throw new Error("Failed to fetch paginated blogs by category");
  }
}


export async function getBlogBySlug(slug) {
  try {
    const blog = await db.blog.findUnique({
      where: { slug },
      select: {
        id: true,
        title: true,
        content: true, // HTML or markdown content
        checklistTitle: true,
        checklistItems: true,
        image: true,
        createdAt: true,
        category: { select: { name: true, slug: true } },
      },
    });
    return blog;
  } catch (error) {
    console.error("❌ Error fetching blog by slug:", error);
    throw new Error(`Failed to fetch blog by slug: ${error.message}`);
  }
}

// ✅ Get latest blogs for slider (optional category filter)
export async function getLatestBlogs(category = null, limit = 10) {
  try {
    const where = {};
    if (category) {
      where.category = {
        name: { equals: category }
      };
    }

    const blogs = await db.blog.findMany({
      where,
      include: { category: true },
      orderBy: { id: "desc" },
      take: limit,
    });
    return blogs;
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    return [];
  }
}
