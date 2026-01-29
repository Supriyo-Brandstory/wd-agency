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

/* __next_internal_action_entry_do_not_use__ [{"00a67ea89a1e2599db5429764d79e99a02cabeb667":"getSeoData","4014ae62057bdf5cb37d7273d39326a8d2c8330275":"createSeoData","40744ce772208a5ca79c5f3be2c250b289d5a48968":"deleteSeoData","40b2abec439b11f7c0caad6cd2178ca8c7bcb05ea1":"getSeoDataByPageUrl","60e49be352951cc3709b92b9b19e61984fd934e8c3":"updateSeoData"},"",""] */ __turbopack_context__.s([
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSeoData, "00a67ea89a1e2599db5429764d79e99a02cabeb667", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSeoDataByPageUrl, "40b2abec439b11f7c0caad6cd2178ca8c7bcb05ea1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSeoData, "4014ae62057bdf5cb37d7273d39326a8d2c8330275", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSeoData, "60e49be352951cc3709b92b9b19e61984fd934e8c3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSeoData, "40744ce772208a5ca79c5f3be2c250b289d5a48968", null);
}),
"[project]/src/app/admin/dashboard/enquiry/action.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40080bf1e7b623cc9acad8774b5c4b750e42cd36f5":"deleteEnquiry","40879f091d7ddafdb01c5fab6651f3c40a499228ff":"createEnquiry","60cf800ec37c11d40dcb83b0b362ecd14dcf6e8087":"getEnquiries"},"",""] */ __turbopack_context__.s([
    "createEnquiry",
    ()=>createEnquiry,
    "deleteEnquiry",
    ()=>deleteEnquiry,
    "getEnquiries",
    ()=>getEnquiries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prisma/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function createEnquiry(data) {
    try {
        // Optional: Validate required fields
        if (!data.fullName || !data.emailAddress) {
            throw new Error("Full name and email address are required");
        }
        const enquiry = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].enquiry.create({
            data: {
                fullName: data.fullName,
                emailAddress: data.emailAddress,
                phoneNumber: data.phoneNumber || "",
                companyName: data.companyName || "",
                serviceInterestedIn: data.serviceInterestedIn || "",
                projectBudget: data.projectBudget || "",
                projectDetails: data.projectDetails || "",
                submitted_page_url: data.submitted_page_url || ""
            }
        });
        return {
            success: true,
            data: enquiry
        };
    } catch (error) {
        console.error("Error creating enquiry:", error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getEnquiries(page = 1, limit = 10) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        const skip = (page - 1) * limit;
        const enquiries = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].enquiry.findMany({
            skip,
            take: limit,
            orderBy: {
                id: 'desc'
            }
        });
        const total = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].enquiry.count();
        return {
            enquiries,
            total
        };
    } catch (error) {
        console.error("Error fetching enquiries:", error);
        return {
            enquiries: [],
            total: 0
        };
    }
}
async function deleteEnquiry(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyAdmin"])();
    try {
        const enquiry = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].enquiry.delete({
            where: {
                id: Number(id)
            }
        });
        return enquiry;
    } catch (error) {
        console.error("Error deleting enquiry:", error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createEnquiry,
    getEnquiries,
    deleteEnquiry
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEnquiry, "40879f091d7ddafdb01c5fab6651f3c40a499228ff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEnquiries, "60cf800ec37c11d40dcb83b0b362ecd14dcf6e8087", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEnquiry, "40080bf1e7b623cc9acad8774b5c4b750e42cd36f5", null);
}),
"[project]/.next-internal/server/app/(frontend)/(pages)/corporate-web-development/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/dashboard/enquiry/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$enquiry$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/enquiry/action.js [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/(frontend)/(pages)/corporate-web-development/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/dashboard/enquiry/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40879f091d7ddafdb01c5fab6651f3c40a499228ff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$enquiry$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnquiry"],
    "40b2abec439b11f7c0caad6cd2178ca8c7bcb05ea1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSeoDataByPageUrl"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$frontend$292f28$pages$292f$corporate$2d$web$2d$development$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$enquiry$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(frontend)/(pages)/corporate-web-development/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/admin/dashboard/enquiry/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$seo$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/seo/actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$enquiry$2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/enquiry/action.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_d61737ef._.js.map