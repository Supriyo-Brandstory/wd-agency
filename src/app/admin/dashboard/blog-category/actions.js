"use server";
import { revalidatePath } from "next/cache";
import db from "../../../../../prisma/db";
import { verifyAdmin } from "@/lib/auth";

export async function createBlogCategory(name, slug, description) {
  await verifyAdmin();
  if (!name || !slug || !description) throw new Error("All fields are required");

  // Ensure slug uniqueness
  let finalSlug = slug;
  let count = 1;
  while (await db.blogCategory.findFirst({ where: { slug: finalSlug } })) {
    finalSlug = `${slug}-${count}`;
    count++;
  }

  const blogCategory = await db.blogCategory.create({
    data: { name, slug: finalSlug, description },
  });
  revalidatePath("/admin/dashboard/blog-category");
  return blogCategory;
}

export async function updateBlogCategory(id, name, slug, description) {
  await verifyAdmin();
  if (!id || !name || !slug || !description) throw new Error("All fields are required");

  // Ensure slug uniqueness (excluding current record)
  let finalSlug = slug;
  let count = 1;
  while (await db.blogCategory.findFirst({ where: { slug: finalSlug, NOT: { id: Number(id) } } })) {
    finalSlug = `${slug}-${count}`;
    count++;
  }

  const blogCategory = await db.blogCategory.update({
    where: { id: Number(id) },
    data: { name, slug: finalSlug, description },
  });
  revalidatePath("/admin/dashboard/blog-category");
  return blogCategory;
}

export async function deleteBlogCategory(id) {
  await verifyAdmin();
  if (!id) throw new Error("ID is required");
  const blogCategory = await db.blogCategory.delete({ where: { id: Number(id) } });
  revalidatePath("/admin/dashboard/blog-category");
  return blogCategory;
}

export async function getBlogCategories(page = null, limit = 10) {
  if (page !== null && page !== undefined) {
    const skip = (page - 1) * limit;
    const [categories, total] = await Promise.all([
      db.blogCategory.findMany({
        skip,
        take: limit,
        orderBy: { id: "desc" },
      }),
      db.blogCategory.count(),
    ]);
    return { categories, total };
  }
  return await db.blogCategory.findMany({ orderBy: { id: "desc" } });
}

export async function getBlogCategoryById(id) {
  try {
    return await db.blogCategory.findUnique({
      where: { id: Number(id) },
    });
  } catch (error) {
    console.error("Error fetching blog category by ID:", error);
    throw new Error("Failed to fetch blog category by ID");
  }
}
