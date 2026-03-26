"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { verifyAdmin } from "@/lib/auth";

const UPLOADS_ROOT = path.join(process.cwd(), "public", "uploads");

// Helper to ensure the path is within UPLOADS_ROOT
function getSafePath(subPath = "") {
    const safeSubPath = path.normalize(subPath).replace(/^(\.\.(\/|\\|$))+/, "");
    return path.join(UPLOADS_ROOT, safeSubPath);
}

export async function getMedia(subPath = "") {
    await verifyAdmin();
    const fullPath = getSafePath(subPath);

    try {
        const entries = await fs.readdir(fullPath, { withFileTypes: true });
        
        const media = await Promise.all(entries.map(async (entry) => {
            const entryPath = path.join(fullPath, entry.name);
            const stats = await fs.stat(entryPath);
            const isDirectory = entry.isDirectory();
            
            return {
                name: entry.name,
                isDirectory,
                size: stats.size,
                updatedAt: stats.mtime,
                url: isDirectory ? null : `/uploads/${subPath ? subPath + "/" : ""}${entry.name}`,
                path: subPath ? `${subPath}/${entry.name}` : entry.name
            };
        }));

        return media;
    } catch (error) {
        console.error("Error reading media:", error);
        return [];
    }
}

export async function createFolder(parentPath, folderName) {
    await verifyAdmin();
    const fullPath = path.join(getSafePath(parentPath), folderName);
    
    try {
        await fs.mkdir(fullPath, { recursive: true });
        revalidatePath("/admin/dashboard/media");
        return { success: true };
    } catch (error) {
        console.error("Error creating folder:", error);
        throw new Error("Could not create folder");
    }
}

export async function deleteMedia(itemPath) {
    await verifyAdmin();
    const fullPath = getSafePath(itemPath);
    
    try {
        const stats = await fs.stat(fullPath);
        if (stats.isDirectory()) {
            await fs.rm(fullPath, { recursive: true, force: true });
        } else {
            await fs.unlink(fullPath);
        }
        revalidatePath("/admin/dashboard/media");
        return { success: true };
    } catch (error) {
        console.error("Error deleting media:", error);
        throw new Error("Could not delete item");
    }
}

export async function uploadFiles(formData) {
    await verifyAdmin();
    const subPath = formData.get("path") || "";
    const files = formData.getAll("files");
    const targetDir = getSafePath(subPath);

    try {
        // Ensure directory exists
        await fs.mkdir(targetDir, { recursive: true });

        for (const file of files) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const filePath = path.join(targetDir, file.name);
            await fs.writeFile(filePath, buffer);
        }

        revalidatePath("/admin/dashboard/media");
        return { success: true };
    } catch (error) {
        console.error("Error uploading files:", error);
        throw new Error("Upload failed");
    }
}
