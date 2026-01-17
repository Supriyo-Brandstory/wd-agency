module.exports = [
"[project]/prisma/db.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
let db;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.db) {
        /*TURBOPACK member replacement*/ __turbopack_context__.g.db = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
    }
    db = /*TURBOPACK member replacement*/ __turbopack_context__.g.db;
}
const __TURBOPACK__default__export__ = db;
}),
"[project]/src/lib/auth.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyAdmin",
    ()=>verifyAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
;
;
async function verifyAdmin() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get("admin_token")?.value;
    if (!token) {
        throw new Error("Unauthorized: No token provided");
    }
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
        const { payload } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"](token, secret);
        return payload;
    } catch (err) {
        throw new Error("Unauthorized: Invalid token");
    }
}
}),
"[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00937ca466eb3c3aa3a6a8096f2e4c1ea5bfaece90":"getSeoData","4029eafa88d82f2ebecd944389ad3336611d03f219":"getSeoDataByPageUrl","40472135b400824709346fa3b69f9e6aa366d9cada":"createSeoData","40a530a81427109a02c0ed18d0c09371e69a4f5706":"deleteSeoData","60bee710183cecdc0b1e7613e45f007c57fcbc5863":"updateSeoData"},"",""] */ __turbopack_context__.s([
    "createSeoData",
    ()=>createSeoData,
    "deleteSeoData",
    ()=>deleteSeoData,
    "getSeoData",
    ()=>getSeoData,
    "getSeoDataByPageUrl",
    ()=>getSeoDataByPageUrl,
    "updateSeoData",
    ()=>updateSeoData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prisma/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getSeoData() {
    try {
        const seoData = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].seo.findMany();
        // console.log('seoData', seoData);
        return seoData;
    } catch (error) {
        console.error('Error fetching SEO data:', error);
        throw new Error('Failed to fetch SEO data');
    }
}
async function getSeoDataByPageUrl(pageurl) {
    try {
        const seoData = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].seo.findFirst({
            where: {
                pageurl: pageurl
            }
        });
        return seoData;
    } catch (error) {
        console.error('Error fetching SEO data by page URL:', error);
        throw new Error('Failed to fetch SEO data by page URL');
    }
}
async function createSeoData(data) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        const seoData = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].seo.create({
            data
        });
        return seoData;
    } catch (error) {
        console.error('Error creating SEO data:', error);
        throw new Error('Failed to create SEO data');
    }
}
async function updateSeoData(id, data) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        const seoData = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].seo.update({
            where: {
                id: Number(id)
            },
            data
        });
        return seoData;
    } catch (error) {
        console.error('Error updating SEO data:', error);
        throw new Error('Failed to update SEO data');
    }
}
async function deleteSeoData(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        const seoData = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].seo.delete({
            where: {
                id: Number(id)
            }
        });
        return seoData;
    } catch (error) {
        console.error('Error deleting SEO data:', error);
        throw new Error('Failed to delete SEO data');
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getSeoData,
    getSeoDataByPageUrl,
    createSeoData,
    updateSeoData,
    deleteSeoData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSeoData, "00937ca466eb3c3aa3a6a8096f2e4c1ea5bfaece90", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSeoDataByPageUrl, "4029eafa88d82f2ebecd944389ad3336611d03f219", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSeoData, "40472135b400824709346fa3b69f9e6aa366d9cada", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSeoData, "60bee710183cecdc0b1e7613e45f007c57fcbc5863", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSeoData, "40a530a81427109a02c0ed18d0c09371e69a4f5706", null);
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007761dacf186380744795fb0977df385ad7e0b0d0":"getBlogs","40136db1af18d621862c48a0b2d01749a738c1ab32":"createBlog","40487e2c02feb8efcc9ab652eb4af6d910a070f192":"updateBlog","4058631c14f68749feae7062f78f83842bddd33050":"getBlogBySlug","40c59f18e02f46e436f63a2b909abcfa21b71db0cc":"deleteBlog","6049d4535727cb1ad7a17eca878538ae6b6924c4dd":"getPaginatedBlogsByCategory"},"",""] */ __turbopack_context__.s([
    "createBlog",
    ()=>createBlog,
    "deleteBlog",
    ()=>deleteBlog,
    "getBlogBySlug",
    ()=>getBlogBySlug,
    "getBlogs",
    ()=>getBlogs,
    "getPaginatedBlogsByCategory",
    ()=>getPaginatedBlogsByCategory,
    "updateBlog",
    ()=>updateBlog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prisma/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
// ✅ Helper to save uploaded image with sanitized name and avoid conflicts
async function saveImage(file, folder = "blog") {
    if (!file) return null;
    // Validate file type
    const allowedExtensions = [
        '.jpg',
        '.jpeg',
        '.png',
        '.webp',
        '.gif',
        '.svg'
    ];
    const ext = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(file.name).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
        throw new Error("Invalid file type. Only images are allowed.");
    }
    const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), `public/images/${folder}`);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(uploadDir)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(uploadDir, {
            recursive: true
        });
    }
    // Sanitize file name: replace spaces with '-' and remove special chars
    const originalName = file.name;
    let baseName = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(originalName, ext).toLowerCase().trim().replace(/\s+/g, "-") // replace spaces with '-'
    .replace(/[^a-z0-9-]/g, ""); // remove special characters
    let fileName = baseName + ext.toLowerCase();
    let filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName);
    let counter = 1;
    // Increment filename if it already exists
    while(__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)){
        fileName = `${baseName}-${counter}${ext.toLowerCase()}`;
        filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName);
        counter++;
    }
    // Save file to disk
    const arrayBuffer = await file.arrayBuffer();
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, Buffer.from(arrayBuffer));
    // Return relative path for DB
    return `/images/${folder}/${fileName}`;
}
// ✅ Ensure slug uniqueness
async function getUniqueSlug(baseSlug, excludeId = null) {
    let slug = baseSlug;
    let counter = 1;
    while(true){
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.findFirst({
            where: {
                slug,
                ...excludeId ? {
                    NOT: {
                        id: excludeId
                    }
                } : {}
            }
        });
        if (!existing) break;
        slug = `${baseSlug}-${counter++}`;
    }
    return slug;
}
async function createBlog(formData) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
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
        const blog = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.create({
            data: {
                title,
                slug: uniqueSlug,
                content,
                checklistTitle,
                checklistItems,
                categoryId,
                image: imagePath
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dashboard/blog");
        return blog;
    } catch (error) {
        console.error("Error creating blog:", error);
        throw new Error("Failed to create blog");
    }
}
async function updateBlog(formData) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
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
            categoryId
        };
        if (imageFile && typeof imageFile.name === "string") {
            // Fetch existing blog to get current image
            const existingBlog = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.findUnique({
                where: {
                    id
                }
            });
            if (existingBlog && existingBlog.image) {
                const oldImagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", existingBlog.image);
                if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(oldImagePath)) {
                    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlinkSync(oldImagePath); // Delete old image
                }
            }
            // Save new image
            const newImagePath = await saveImage(imageFile, "blog");
            updatedData.image = newImagePath;
        }
        const blog = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.update({
            where: {
                id
            },
            data: updatedData
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dashboard/blog");
        return blog;
    } catch (error) {
        console.error("Error updating blog:", error);
        throw new Error("Failed to update blog");
    }
}
async function deleteBlog(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        const blog = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (blog?.image) {
            const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", blog.image);
            if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(imagePath)) __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlinkSync(imagePath);
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.delete({
            where: {
                id: parseInt(id)
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dashboard/blog");
        return true;
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw new Error("Failed to delete blog");
    }
}
async function getBlogs() {
    try {
        const blogs = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.findMany({
            include: {
                category: true
            },
            orderBy: {
                id: "desc"
            }
        });
        return blogs;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw new Error("Failed to fetch blogs");
    }
}
async function getPaginatedBlogsByCategory(page = 1, pageSize = 12) {
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blogCategory.findMany({
            orderBy: {
                name: "asc"
            }
        });
        const categoriesWithBlogs = await Promise.all(categories.map(async (category)=>{
            const total = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.count({
                where: {
                    categoryId: category.id
                }
            });
            const blogs = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.findMany({
                where: {
                    categoryId: category.id
                },
                orderBy: {
                    createdAt: "desc"
                },
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    image: true,
                    content: true,
                    createdAt: true,
                    categoryId: true,
                    category: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    }
                },
                skip: (page - 1) * pageSize,
                take: pageSize
            });
            return {
                ...category,
                blogs,
                total
            };
        }));
        return categoriesWithBlogs;
    } catch (error) {
        console.error("❌ Error fetching paginated blogs by category:", error);
        throw new Error("Failed to fetch paginated blogs by category");
    }
}
async function getBlogBySlug(slug) {
    try {
        const blog = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.findUnique({
            where: {
                slug
            },
            select: {
                id: true,
                title: true,
                content: true,
                checklistTitle: true,
                checklistItems: true,
                image: true,
                createdAt: true,
                category: {
                    select: {
                        name: true,
                        slug: true
                    }
                }
            }
        });
        return blog;
    } catch (error) {
        console.error("❌ Error fetching blog by slug:", error);
        throw new Error(`Failed to fetch blog by slug: ${error.message}`);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogs,
    getPaginatedBlogsByCategory,
    getBlogBySlug
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBlog, "40136db1af18d621862c48a0b2d01749a738c1ab32", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBlog, "40487e2c02feb8efcc9ab652eb4af6d910a070f192", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBlog, "40c59f18e02f46e436f63a2b909abcfa21b71db0cc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBlogs, "007761dacf186380744795fb0977df385ad7e0b0d0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPaginatedBlogsByCategory, "6049d4535727cb1ad7a17eca878538ae6b6924c4dd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBlogBySlug, "4058631c14f68749feae7062f78f83842bddd33050", null);
}),
"[project]/.next-internal/server/app/(frontend)/(pages)/author/madhavan-a/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/(frontend)/(pages)/author/madhavan-a/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007761dacf186380744795fb0977df385ad7e0b0d0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogs"],
    "4029eafa88d82f2ebecd944389ad3336611d03f219",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSeoDataByPageUrl"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$frontend$292f28$pages$292f$author$2f$madhavan$2d$a$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(frontend)/(pages)/author/madhavan-a/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2faf7aa7._.js.map