"use server";
import { revalidatePath } from "next/cache";
import db from "../../../../../prisma/db";

export async function createBlogCategory(name, slug, description) {
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
  if (!id) throw new Error("ID is required");
  const blogCategory = await db.blogCategory.delete({ where: { id: Number(id) } });
  revalidatePath("/admin/dashboard/blog-category");
  return blogCategory;
}

export async function getBlogCategories() {
  return await db.blogCategory.findMany({ orderBy: { id: "desc" } });
}
