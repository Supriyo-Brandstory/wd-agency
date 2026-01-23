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
"[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b64496b8725bd4146044d08faccaa41bdeac50aa":"getTemplateCategories","40b0c9e68d54148a1bde16ccbff33683acfb10e4d9":"deleteTemplateCategory","608ab7fb3cd6cb7c34f64879de585872d5a46f3e7c":"createTemplateCategory","7081d6c374ed44560bf157ef5af00828afff5a4fc9":"updateTemplateCategory"},"",""] */ __turbopack_context__.s([
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTemplateCategory, "608ab7fb3cd6cb7c34f64879de585872d5a46f3e7c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTemplateCategory, "7081d6c374ed44560bf157ef5af00828afff5a4fc9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTemplateCategory, "40b0c9e68d54148a1bde16ccbff33683acfb10e4d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTemplateCategories, "00b64496b8725bd4146044d08faccaa41bdeac50aa", null);
}),
"[project]/.next-internal/server/app/admin/dashboard/template-category/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/dashboard/template-category/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00b64496b8725bd4146044d08faccaa41bdeac50aa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTemplateCategories"],
    "40b0c9e68d54148a1bde16ccbff33683acfb10e4d9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTemplateCategory"],
    "608ab7fb3cd6cb7c34f64879de585872d5a46f3e7c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTemplateCategory"],
    "7081d6c374ed44560bf157ef5af00828afff5a4fc9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTemplateCategory"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/dashboard/template-category/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/template-category/actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_c0f38f12._.js.map