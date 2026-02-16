(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(frontend)/assets/style/partials/header.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dropdown": "header-module__PVG-wa__dropdown",
  "dropdownCategory": "header-module__PVG-wa__dropdownCategory",
  "dropdownMenu": "header-module__PVG-wa__dropdownMenu",
  "dropdownMenu2": "header-module__PVG-wa__dropdownMenu2",
  "header": "header-module__PVG-wa__header",
  "iconhiden": "header-module__PVG-wa__iconhiden",
  "logo": "header-module__PVG-wa__logo",
  "mobileToggle": "header-module__PVG-wa__mobileToggle",
  "mobiledropdownActive": "header-module__PVG-wa__mobiledropdownActive",
  "nav": "header-module__PVG-wa__nav",
  "open": "header-module__PVG-wa__open",
  "quoteBtn": "header-module__PVG-wa__quoteBtn",
});
}),
"[project]/src/app/(frontend)/assets/images/logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo.5cdc995e.png");}),
"[project]/src/app/(frontend)/assets/images/logo.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 419,
    height: 73,
    blurWidth: 8,
    blurHeight: 1,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAALElEQVR42gEhAN7/AFwaPWNOGDteLQ8oPTYVPlo2GUxsIRI8VBUQOUwRET5RdMYGvxxO+egAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/partials/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/partials/header.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/logo.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const servicesData = [
    {
        category: "Web Design",
        items: [
            {
                title: "UI/UX Design",
                href: "/services/ui-ux-design"
            },
            {
                title: "Wireframing & Pro.",
                href: "/services/wireframing-prototyping"
            },
            {
                title: "Branding",
                href: "/services/branding"
            }
        ]
    },
    {
        category: "Web Development",
        items: [
            {
                title: "Frontend Development",
                href: "/services/frontend-development"
            },
            {
                title: "Full-Stack Development",
                href: "/services/full-stack-development"
            },
            {
                title: "Static Website",
                href: "/services/static-website-development"
            },
            {
                title: "Dynamic Websites",
                href: "/services/dynamic-website-development"
            },
            {
                title: "Website Migration",
                href: "/services/website-migration-service"
            }
        ]
    },
    {
        category: "Software",
        items: [
            {
                title: "CRM Software",
                href: "/services/crm-software"
            },
            {
                title: "Enterprise Software",
                href: "/services/enterprise-software"
            },
            {
                title: "Cloud Applications",
                href: "/services/cloud-applications"
            },
            {
                title: "Legacy Modernization",
                href: "/services/legacy-modernization"
            },
            {
                title: "Software Maintenance",
                href: "/services/software-maintenance"
            }
        ]
    }
];
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleMobileDropdown = (menu)=>{
        setActiveDropdown((prev)=>prev === menu ? null : menu);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `frame-1200 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "Logo",
                        width: 211,
                        height: 50,
                        priority: true,
                        style: {
                            width: "auto",
                            height: "auto"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/about-us",
                        children: "About Us"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services",
                                onClick: (e)=>{
                                    if (window.innerWidth <= 768) {
                                        e.preventDefault();
                                        toggleMobileDropdown("services");
                                    }
                                },
                                children: "Services ▾"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownMenu2} ${activeDropdown === "services" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobiledropdownActive : ""}`,
                                children: servicesData.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownCategory,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: service.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            service.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                            children: "➤"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        item.title
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/technologies",
                                onClick: (e)=>{
                                    if (window.innerWidth <= 768) {
                                        e.preventDefault();
                                        toggleMobileDropdown("tech");
                                    }
                                },
                                children: "Technology ▾"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownMenu} ${activeDropdown === "tech" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobiledropdownActive : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/platforms/php-website-development",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                children: "➤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this),
                                            " PHP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/platforms/woo-commerce-website-development",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                children: "➤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            " W-commerce"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/platforms/wordpress-website-development",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                children: "➤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            " WordPress"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/platforms/react-js-website-development",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                children: "➤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            " ReactJS"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/platforms/shopify-website-development",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                children: "➤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            " Shopify"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/platforms/nodejs-website-development",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                children: "➤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            " NodeJS"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/platforms/laravel-website-development",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                children: "➤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            " Laravel"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/platforms/angular-website-development",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                children: "➤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            " Angular"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/platforms/drupal-website-development",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconhiden,
                                                children: "➤"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this),
                                            " Drupal"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/website-templates",
                        children: "Shop"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/case-studies",
                        children: "Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cost-calculator",
                        children: "Cost Calculator"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact-us",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quoteBtn,
                        children: "Get Quote"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$partials$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileToggle,
                onClick: ()=>setIsOpen((s)=>!s),
                "aria-label": "Toggle menu",
                children: "☰"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/partials/Header.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(Header, "Y37xHnTCMp7rLXhh4tvs5U9eA5M=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28frontend%29_f894c6b5._.js.map