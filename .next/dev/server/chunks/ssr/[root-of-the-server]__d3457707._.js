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

/* __next_internal_action_entry_do_not_use__ [{"009b202d257035dda5e3b2f0bbe2a658b7bff2fb10":"getSeoData","40aef4682e1a50b56dce96c93697dd7caffed37608":"getSeoDataByPageUrl","40f362910292736b6e4589245ac039701c613707c8":"createSeoData","40fd19958f8923f801cf29a533f534dda70f7941dd":"deleteSeoData","60c2dadc4f9743279a48727005aafd67ff7c35c1ee":"updateSeoData"},"",""] */ __turbopack_context__.s([
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSeoData, "009b202d257035dda5e3b2f0bbe2a658b7bff2fb10", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSeoDataByPageUrl, "40aef4682e1a50b56dce96c93697dd7caffed37608", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSeoData, "40f362910292736b6e4589245ac039701c613707c8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSeoData, "60c2dadc4f9743279a48727005aafd67ff7c35c1ee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSeoData, "40fd19958f8923f801cf29a533f534dda70f7941dd", null);
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/app/admin/dashboard/template/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"004dc8a442f499ada322f5cc214f499d4fe2c9e88e":"getAllTemplatesAdmin","00ff04b754a0c70a6e73cc8be53322cf5d2ec47b08":"getTemplates","40137605a47d7195059b5de24e7ccb2844fe6065f2":"deleteTemplate","40200dd1be87716777820a23768700a88792583d1a":"updateTemplate","406c6265eb86620b7dda40d63b4cb324e8b552e54d":"createTemplate","4089060d5c48a7c2f67f1f1a56881738a6772590de":"getTemplateBySlug","409917af412d51f718006fc80d108464224e6a0df7":"getTemplatesByCategory","70833bab51803f22b6c510cc9a8a582834f8f46cf0":"getTemplatesPaginated"},"",""] */ __turbopack_context__.s([
    "createTemplate",
    ()=>createTemplate,
    "deleteTemplate",
    ()=>deleteTemplate,
    "getAllTemplatesAdmin",
    ()=>getAllTemplatesAdmin,
    "getTemplateBySlug",
    ()=>getTemplateBySlug,
    "getTemplates",
    ()=>getTemplates,
    "getTemplatesByCategory",
    ()=>getTemplatesByCategory,
    "getTemplatesPaginated",
    ()=>getTemplatesPaginated,
    "updateTemplate",
    ()=>updateTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prisma/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$adm$2d$zip$2f$adm$2d$zip$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/adm-zip/adm-zip.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
// Helper to extract uploaded ZIP for demo
async function saveAndExtractZip(file, slug) {
    if (!file || typeof file === "string") return null;
    const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public/uploads/demos", slug);
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(uploadDir)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].rmSync(uploadDir, {
            recursive: true,
            force: true
        });
    }
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(uploadDir, {
        recursive: true
    });
    const buffer = Buffer.from(await file.arrayBuffer());
    const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$adm$2d$zip$2f$adm$2d$zip$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](buffer);
    zip.extractAllTo(uploadDir, true);
    return `/uploads/demos/${slug}`;
}
// Helper to save uploaded image
async function saveImage(file, folder = "template") {
    if (!file || typeof file === "string") return file; // Already a path or empty
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
    const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), `public/uploads/${folder}`);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(uploadDir)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(uploadDir, {
            recursive: true
        });
    }
    const baseName = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(file.name, ext).toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    let fileName = baseName + ext;
    let filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName);
    let counter = 1;
    while(__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)){
        fileName = `${baseName}-${counter}${ext}`;
        filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName);
        counter++;
    }
    const arrayBuffer = await file.arrayBuffer();
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, Buffer.from(arrayBuffer));
    return `/uploads/${folder}/${fileName}`;
}
async function getUniqueSlug(baseSlug, excludeId = null) {
    let slug = baseSlug;
    let counter = 1;
    while(true){
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findFirst({
            where: {
                slug,
                ...excludeId ? {
                    NOT: {
                        id: Number(excludeId)
                    }
                } : {}
            }
        });
        if (!existing) break;
        slug = `${baseSlug}-${counter++}`;
    }
    return slug;
}
async function createTemplate(formData) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        const title = formData.get("title");
        let slug = formData.get("slug");
        const price = formData.get("price");
        const description = formData.get("description"); // This will be the main description
        const features = formData.get("features"); // String of features
        const categoryId = parseInt(formData.get("categoryId"));
        const isVisible = formData.get("isVisible") === "true";
        const showInAllTemplates = formData.get("showInAllTemplates") === "true";
        const imageFile = formData.get("image");
        const demoZipFile = formData.get("demoZip");
        slug = slug.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        const uniqueSlug = await getUniqueSlug(slug);
        const imagePath = await saveImage(imageFile, "template");
        const demoFolder = await saveAndExtractZip(demoZipFile, uniqueSlug);
        // livePreviewUrl is auto-generated as /demo-live/[slug]
        const livePreviewUrl = `/demo-live/${uniqueSlug}`;
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.create({
            data: {
                title,
                slug: uniqueSlug,
                price,
                image: imagePath,
                description,
                features,
                demoFolder,
                livePreviewUrl,
                isVisible,
                showInAllTemplates,
                categoryId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dashboard/template");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/demo-template");
        return template;
    } catch (error) {
        console.error("Error creating template:", error);
        throw new Error("Failed to create template");
    }
}
async function updateTemplate(formData) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        const id = parseInt(formData.get("id"));
        const title = formData.get("title");
        let slug = formData.get("slug");
        const price = formData.get("price");
        const description = formData.get("description");
        const features = formData.get("features");
        const categoryId = parseInt(formData.get("categoryId"));
        const isVisible = formData.get("isVisible") === "true";
        const showInAllTemplates = formData.get("showInAllTemplates") === "true";
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
            isVisible,
            showInAllTemplates,
            categoryId
        };
        if (imageFile && typeof imageFile !== "string") {
            const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findUnique({
                where: {
                    id
                }
            });
            if (existing?.image) {
                const oldPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", existing.image);
                if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(oldPath)) __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlinkSync(oldPath);
            }
            updatedData.image = await saveImage(imageFile, "template");
        }
        if (demoZipFile && typeof demoZipFile !== "string") {
            updatedData.demoFolder = await saveAndExtractZip(demoZipFile, uniqueSlug);
        }
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.update({
            where: {
                id
            },
            data: updatedData
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dashboard/template");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/demo-template");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/demo-template/${uniqueSlug}`);
        return template;
    } catch (error) {
        console.error("Error updating template:", error);
        throw new Error("Failed to update template");
    }
}
async function deleteTemplate(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (template?.image) {
            const imagePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", template.image);
            if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(imagePath)) __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlinkSync(imagePath);
        }
        if (template?.slug) {
            const demoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public/uploads/demos", template.slug);
            if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(demoPath)) {
                __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].rmSync(demoPath, {
                    recursive: true,
                    force: true
                });
            }
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.delete({
            where: {
                id: parseInt(id)
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dashboard/template");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/demo-template");
        return true;
    } catch (error) {
        console.error("Error deleting template:", error);
        throw new Error("Failed to delete template");
    }
}
async function getTemplates() {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findMany({
            where: {
                isVisible: true
            },
            include: {
                category: true
            },
            orderBy: {
                id: "desc"
            }
        });
    } catch (error) {
        console.error("Error fetching templates:", error);
        throw new Error("Failed to fetch templates");
    }
}
async function getAllTemplatesAdmin() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findMany({
            include: {
                category: true
            },
            orderBy: {
                id: "desc"
            }
        });
    } catch (error) {
        console.error("Error fetching all templates for admin:", error);
        throw new Error("Failed to fetch all templates for admin");
    }
}
async function getTemplateBySlug(slug) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findUnique({
            where: {
                slug
            },
            include: {
                category: true
            }
        });
    } catch (error) {
        console.error("Error fetching template by slug:", error);
        throw new Error("Failed to fetch template by slug");
    }
}
async function getTemplatesByCategory(categoryId) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findMany({
            where: {
                categoryId: Number(categoryId),
                isVisible: true
            },
            include: {
                category: true
            },
            orderBy: {
                id: "desc"
            }
        });
    } catch (error) {
        console.error("Error fetching templates by category:", error);
        throw new Error("Failed to fetch templates by category");
    }
}
async function getTemplatesPaginated(page = 1, limit = 12, categorySlug = null) {
    try {
        const skip = (page - 1) * limit;
        const where = {
            isVisible: true,
            ...categorySlug && categorySlug !== 'all' ? {
                category: {
                    slug: categorySlug
                }
            } : {}
        };
        const [items, total] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.findMany({
                where,
                include: {
                    category: true
                },
                orderBy: {
                    id: "desc"
                },
                skip,
                take: limit
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].template.count({
                where
            })
        ]);
        return {
            items,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page
        };
    } catch (error) {
        console.error("Error fetching paginated templates:", error);
        throw new Error("Failed to fetch paginated templates");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createTemplate,
    updateTemplate,
    deleteTemplate,
    getTemplates,
    getAllTemplatesAdmin,
    getTemplateBySlug,
    getTemplatesByCategory,
    getTemplatesPaginated
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTemplate, "406c6265eb86620b7dda40d63b4cb324e8b552e54d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTemplate, "40200dd1be87716777820a23768700a88792583d1a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTemplate, "40137605a47d7195059b5de24e7ccb2844fe6065f2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTemplates, "00ff04b754a0c70a6e73cc8be53322cf5d2ec47b08", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllTemplatesAdmin, "004dc8a442f499ada322f5cc214f499d4fe2c9e88e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTemplateBySlug, "4089060d5c48a7c2f67f1f1a56881738a6772590de", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTemplatesByCategory, "409917af412d51f718006fc80d108464224e6a0df7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTemplatesPaginated, "70833bab51803f22b6c510cc9a8a582834f8f46cf0", null);
}),
"[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"002fa537bf0c050b8d92236d033e5bbd7d0893d684":"getTemplateCategories","407a8eaddc4e0c1af1944e784c613a89164f55c0ff":"deleteTemplateCategory","605e6b87495686ab8c0aea760c46b56e05ab4a1398":"createTemplateCategory","70d4280919c568967d449ad084927b86cf027d4fe0":"updateTemplateCategory"},"",""] */ __turbopack_context__.s([
    "createTemplateCategory",
    ()=>createTemplateCategory,
    "deleteTemplateCategory",
    ()=>deleteTemplateCategory,
    "getTemplateCategories",
    ()=>getTemplateCategories,
    "updateTemplateCategory",
    ()=>updateTemplateCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prisma/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function createTemplateCategory(name, slug) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    if (!name || !slug) throw new Error("All fields are required");
    // Ensure slug uniqueness
    let finalSlug = slug;
    let count = 1;
    while(await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].templateCategory.findFirst({
        where: {
            slug: finalSlug
        }
    })){
        finalSlug = `${slug}-${count}`;
        count++;
    }
    const templateCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].templateCategory.create({
        data: {
            name,
            slug: finalSlug
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dashboard/template-category");
    return templateCategory;
}
async function updateTemplateCategory(id, name, slug) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    if (!id || !name || !slug) throw new Error("All fields are required");
    // Ensure slug uniqueness (excluding current record)
    let finalSlug = slug;
    let count = 1;
    while(await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].templateCategory.findFirst({
        where: {
            slug: finalSlug,
            NOT: {
                id: Number(id)
            }
        }
    })){
        finalSlug = `${slug}-${count}`;
        count++;
    }
    const templateCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].templateCategory.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            slug: finalSlug
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dashboard/template-category");
    return templateCategory;
}
async function deleteTemplateCategory(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    if (!id) throw new Error("ID is required");
    const templateCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].templateCategory.delete({
        where: {
            id: Number(id)
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/dashboard/template-category");
    return templateCategory;
}
async function getTemplateCategories() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].templateCategory.findMany({
        orderBy: {
            id: "desc"
        }
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createTemplateCategory,
    updateTemplateCategory,
    deleteTemplateCategory,
    getTemplateCategories
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTemplateCategory, "605e6b87495686ab8c0aea760c46b56e05ab4a1398", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTemplateCategory, "70d4280919c568967d449ad084927b86cf027d4fe0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTemplateCategory, "407a8eaddc4e0c1af1944e784c613a89164f55c0ff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTemplateCategories, "002fa537bf0c050b8d92236d033e5bbd7d0893d684", null);
}),
"[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001a60b9091b09b22fc7a7a7c4037f4364cfe46709":"getBlogs","40603af14ca1ef89f1fb2e4428c2c90b616afe7898":"deleteBlog","409d02bbff500aba3e03901d7556848cb01c0b152a":"getBlogBySlug","40bc5c29df307333a5a36f90a46572f2cab01a5ac7":"updateBlog","40ec61646ee36fe6178636c4199df1a42ac6a6662a":"createBlog","6051f8174358bb4f405d0d7c8c038e1e17fee798f6":"getLatestBlogs","60f31fe1b142279223becbb7149eed3b86db59b9d9":"getPaginatedBlogsByCategory"},"",""] */ __turbopack_context__.s([
    "createBlog",
    ()=>createBlog,
    "deleteBlog",
    ()=>deleteBlog,
    "getBlogBySlug",
    ()=>getBlogBySlug,
    "getBlogs",
    ()=>getBlogs,
    "getLatestBlogs",
    ()=>getLatestBlogs,
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
async function getLatestBlogs(category = null, limit = 10) {
    try {
        const where = {};
        if (category) {
            where.category = {
                name: {
                    equals: category
                }
            };
        }
        const blogs = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].blog.findMany({
            where,
            include: {
                category: true
            },
            orderBy: {
                id: "desc"
            },
            take: limit
        });
        return blogs;
    } catch (error) {
        console.error("Error fetching latest blogs:", error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogs,
    getPaginatedBlogsByCategory,
    getBlogBySlug,
    getLatestBlogs
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBlog, "40ec61646ee36fe6178636c4199df1a42ac6a6662a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBlog, "40bc5c29df307333a5a36f90a46572f2cab01a5ac7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBlog, "40603af14ca1ef89f1fb2e4428c2c90b616afe7898", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBlogs, "001a60b9091b09b22fc7a7a7c4037f4364cfe46709", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPaginatedBlogsByCategory, "60f31fe1b142279223becbb7149eed3b86db59b9d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBlogBySlug, "409d02bbff500aba3e03901d7556848cb01c0b152a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLatestBlogs, "6051f8174358bb4f405d0d7c8c038e1e17fee798f6", null);
}),
"[project]/.next-internal/server/app/(frontend)/(pages)/(home)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/dashboard/template/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/template/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/(frontend)/(pages)/(home)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/dashboard/template/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "002fa537bf0c050b8d92236d033e5bbd7d0893d684",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplateCategories"],
    "00ff04b754a0c70a6e73cc8be53322cf5d2ec47b08",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplates"],
    "40aef4682e1a50b56dce96c93697dd7caffed37608",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSeoDataByPageUrl"],
    "6051f8174358bb4f405d0d7c8c038e1e17fee798f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestBlogs"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$frontend$292f28$pages$292f28$home$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(frontend)/(pages)/(home)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/admin/dashboard/template/actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/template/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/blog/actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d3457707._.js.map