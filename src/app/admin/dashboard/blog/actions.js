"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import db from "../../../../../prisma/db";

// ✅ Helper to save uploaded image
async function saveImage(file) {
  if (!file) return null;

  const uploadDir = path.join(process.cwd(), "public/images/blog");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  fs.writeFileSync(filePath, buffer);

  return `/images/blog/${fileName}`;
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
  try {
    const title = formData.get("title");
    let slug = formData.get("slug");
    const content = formData.get("content");
    const categoryId = parseInt(formData.get("categoryId"));
    const imageFile = formData.get("image");

    // sanitize slug
    slug = slug.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const uniqueSlug = await getUniqueSlug(slug);

    const imagePath = await saveImage(imageFile);

    const blog = await db.blog.create({
      data: {
        title,
        slug: uniqueSlug,
        content,
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

// ✅ Update blog
export async function updateBlog(formData) {
  try {
    const id = parseInt(formData.get("id"));
    const title = formData.get("title");
    let slug = formData.get("slug");
    const content = formData.get("content");
    const categoryId = parseInt(formData.get("categoryId"));
    const imageFile = formData.get("image");

    // sanitize slug
    slug = slug.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const uniqueSlug = await getUniqueSlug(slug, id);

    let imagePath = null;
    if (imageFile && typeof imageFile.name === "string") {
      imagePath = await saveImage(imageFile);
    }

    const updatedData = {
      title,
      slug: uniqueSlug,
      content,
      categoryId,
    };

    if (imagePath) updatedData.image = imagePath;

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
        image: true,
        createdAt: true,
        category: { select: { name: true, slug: true } },
      },
    });
    return blog;
  } catch (error) {
    console.error("❌ Error fetching blog by slug:", error);
    throw new Error("Failed to fetch blog by slug");
  }
}
