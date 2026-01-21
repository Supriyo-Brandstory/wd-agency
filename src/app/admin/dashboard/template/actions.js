"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import db from "../../../../../prisma/db";
import AdmZip from "adm-zip";
import { verifyAdmin } from "@/lib/auth";

// Helper to extract uploaded ZIP for demo
async function saveAndExtractZip(file, slug) {
    if (!file || typeof file === "string") return null;

    const uploadDir = path.join(process.cwd(), "public/demos", slug);
    if (fs.existsSync(uploadDir)) {
        fs.rmSync(uploadDir, { recursive: true, force: true });
    }
    fs.mkdirSync(uploadDir, { recursive: true });

    const buffer = Buffer.from(await file.arrayBuffer());
    const zip = new AdmZip(buffer);
    zip.extractAllTo(uploadDir, true);

    return `/demos/${slug}`;
}

// Helper to save uploaded image
async function saveImage(file, folder = "template") {
    if (!file || typeof file === "string") return file; // Already a path or empty

    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
    const ext = path.extname(file.name).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
        throw new Error("Invalid file type. Only images are allowed.");
    }

    const uploadDir = path.join(process.cwd(), `public/images/${folder}`);
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    const baseName = path.basename(file.name, ext)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

    let fileName = baseName + ext;
    let filePath = path.join(uploadDir, fileName);
    let counter = 1;

    while (fs.existsSync(filePath)) {
        fileName = `${baseName}-${counter}${ext}`;
        filePath = path.join(uploadDir, fileName);
        counter++;
    }

    const arrayBuffer = await file.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

    return `/images/${folder}/${fileName}`;
}

async function getUniqueSlug(baseSlug, excludeId = null) {
    let slug = baseSlug;
    let counter = 1;

    while (true) {
        const existing = await db.template.findFirst({
            where: {
                slug,
                ...(excludeId ? { NOT: { id: Number(excludeId) } } : {}),
            },
        });
        if (!existing) break;
        slug = `${baseSlug}-${counter++}`;
    }
    return slug;
}

export async function createTemplate(formData) {
    await verifyAdmin();
    try {
        const title = formData.get("title");
        let slug = formData.get("slug");
        const price = formData.get("price");
        const description = formData.get("description"); // This will be the main description
        const features = formData.get("features"); // String of features
        const categoryId = parseInt(formData.get("categoryId"));
        const imageFile = formData.get("image");
        const demoZipFile = formData.get("demoZip");

        slug = slug.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        const uniqueSlug = await getUniqueSlug(slug);

        const imagePath = await saveImage(imageFile, "template");
        const demoFolder = await saveAndExtractZip(demoZipFile, uniqueSlug);

        // livePreviewUrl is auto-generated as /demo-live/[slug]
        const livePreviewUrl = `/demo-live/${uniqueSlug}`;

        const template = await db.template.create({
            data: {
                title,
                slug: uniqueSlug,
                price,
                image: imagePath,
                description,
                features,
                demoFolder,
                livePreviewUrl,
                categoryId,
            },
        });

        revalidatePath("/admin/dashboard/template");
        revalidatePath("/demo-template");
        return template;
    } catch (error) {
        console.error("Error creating template:", error);
        throw new Error("Failed to create template");
    }
}

export async function updateTemplate(formData) {
    await verifyAdmin();
    try {
        const id = parseInt(formData.get("id"));
        const title = formData.get("title");
        let slug = formData.get("slug");
        const price = formData.get("price");
        const description = formData.get("description");
        const features = formData.get("features");
        const categoryId = parseInt(formData.get("categoryId"));
        const imageFile = formData.get("image");
        const demoZipFile = formData.get("demoZip");

        slug = slug.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        const uniqueSlug = await getUniqueSlug(slug, id);

        const updatedData = {
            title,
            slug: uniqueSlug,
            price,
            description,
            features,
            livePreviewUrl: `/demo-live/${uniqueSlug}`,
            categoryId,
        };

        if (imageFile && typeof imageFile !== "string") {
            const existing = await db.template.findUnique({ where: { id } });
            if (existing?.image) {
                const oldPath = path.join(process.cwd(), "public", existing.image);
                if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
            }
            updatedData.image = await saveImage(imageFile, "template");
        }

        if (demoZipFile && typeof demoZipFile !== "string") {
            updatedData.demoFolder = await saveAndExtractZip(demoZipFile, uniqueSlug);
        }

        const template = await db.template.update({
            where: { id },
            data: updatedData,
        });

        revalidatePath("/admin/dashboard/template");
        revalidatePath("/demo-template");
        revalidatePath(`/demo-template/${uniqueSlug}`);
        return template;
    } catch (error) {
        console.error("Error updating template:", error);
        throw new Error("Failed to update template");
    }
}

export async function deleteTemplate(id) {
    await verifyAdmin();
    try {
        const template = await db.template.findUnique({ where: { id: parseInt(id) } });
        if (template?.image) {
            const imagePath = path.join(process.cwd(), "public", template.image);
            if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
        }

        if (template?.slug) {
            const demoPath = path.join(process.cwd(), "public/demos", template.slug);
            if (fs.existsSync(demoPath)) {
                fs.rmSync(demoPath, { recursive: true, force: true });
            }
        }

        await db.template.delete({ where: { id: parseInt(id) } });

        revalidatePath("/admin/dashboard/template");
        revalidatePath("/demo-template");
        return true;
    } catch (error) {
        console.error("Error deleting template:", error);
        throw new Error("Failed to delete template");
    }
}

export async function getTemplates() {
    try {
        return await db.template.findMany({
            include: { category: true },
            orderBy: { id: "desc" },
        });
    } catch (error) {
        console.error("Error fetching templates:", error);
        throw new Error("Failed to fetch templates");
    }
}

export async function getTemplateBySlug(slug) {
    try {
        return await db.template.findUnique({
            where: { slug },
            include: { category: true },
        });
    } catch (error) {
        console.error("Error fetching template by slug:", error);
        throw new Error("Failed to fetch template by slug");
    }
}

export async function getTemplatesByCategory(categoryId) {
    try {
        return await db.template.findMany({
            where: { categoryId: Number(categoryId) },
            include: { category: true },
            orderBy: { id: "desc" },
        });
    } catch (error) {
        console.error("Error fetching templates by category:", error);
        throw new Error("Failed to fetch templates by category");
    }
}
