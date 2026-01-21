"use server";
import { revalidatePath } from "next/cache";
import db from "../../../../../prisma/db";
import { verifyAdmin } from "@/lib/auth";

export async function createTemplateCategory(name, slug) {
    await verifyAdmin();
    if (!name || !slug) throw new Error("All fields are required");

    // Ensure slug uniqueness
    let finalSlug = slug;
    let count = 1;
    while (await db.templateCategory.findFirst({ where: { slug: finalSlug } })) {
        finalSlug = `${slug}-${count}`;
        count++;
    }

    const templateCategory = await db.templateCategory.create({
        data: { name, slug: finalSlug },
    });
    revalidatePath("/admin/dashboard/template-category");
    return templateCategory;
}

export async function updateTemplateCategory(id, name, slug) {
    await verifyAdmin();
    if (!id || !name || !slug) throw new Error("All fields are required");

    // Ensure slug uniqueness (excluding current record)
    let finalSlug = slug;
    let count = 1;
    while (await db.templateCategory.findFirst({ where: { slug: finalSlug, NOT: { id: Number(id) } } })) {
        finalSlug = `${slug}-${count}`;
        count++;
    }

    const templateCategory = await db.templateCategory.update({
        where: { id: Number(id) },
        data: { name, slug: finalSlug },
    });
    revalidatePath("/admin/dashboard/template-category");
    return templateCategory;
}

export async function deleteTemplateCategory(id) {
    await verifyAdmin();
    if (!id) throw new Error("ID is required");
    const templateCategory = await db.templateCategory.delete({ where: { id: Number(id) } });
    revalidatePath("/admin/dashboard/template-category");
    return templateCategory;
}

export async function getTemplateCategories() {
    return await db.templateCategory.findMany({ orderBy: { id: "desc" } });
}
