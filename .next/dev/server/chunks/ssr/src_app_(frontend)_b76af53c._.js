module.exports = [
"[project]/src/app/(frontend)/assets/style/home/WhatSetsUs.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "innerContainer": "WhatSetsUs-module__TIy1Aq__innerContainer",
  "whatSetsUsContainer": "WhatSetsUs-module__TIy1Aq__whatSetsUsContainer",
});
}),
"[project]/src/app/(frontend)/component/pages/common/CommonSetsUs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$WhatSetsUs$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/WhatSetsUs.module.css [app-ssr] (css module)");
"use client"; // 👈 needed in Next.js App Router when using Framer Motion
;
;
;
;
const slideUp = {
    hidden: {
        opacity: 0,
        y: 80
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
const CommonSetsUs = ({ text1, text2, bg })=>{
    const bgUrl = typeof bg === "string" ? bg : bg?.src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mb-20 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$WhatSetsUs$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].whatSetsUsContainer}`,
        style: {
            background: `url(${bgUrl}) no-repeat center center / cover`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "frame-1200 py-100 sm-p-20 ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$WhatSetsUs$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].innerContainer,
                variants: slideUp,
                initial: "hidden",
                whileInView: "visible",
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-20",
                        children: text1
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonSetsUs.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        dangerouslySetInnerHTML: {
                            __html: text2
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonSetsUs.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonSetsUs.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonSetsUs.jsx",
            lineNumber: 19,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonSetsUs.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CommonSetsUs;
}),
"[project]/src/app/(frontend)/assets/style/home/developmentProcess.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "developmentProcess-module__R4iO3a__card",
  "container": "developmentProcess-module__R4iO3a__container",
  "leftInnerContainer": "developmentProcess-module__R4iO3a__leftInnerContainer",
  "rightInnerContainer": "developmentProcess-module__R4iO3a__rightInnerContainer",
  "scrollWrapper": "developmentProcess-module__R4iO3a__scrollWrapper",
});
}),
"[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/developmentProcess.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
const CommonDevelopmentProcess = ({ heding, subheding, processData })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftInnerContainer,
                    initial: {
                        opacity: 0,
                        x: -40
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    viewport: {
                        once: true
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: heding
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        subheding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "my-20",
                            children: subheding
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                            lineNumber: 22,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightInnerContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollWrapper,
                        children: processData.map((process, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: index * 0.15
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: process.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                                                lineNumber: 37,
                                                columnNumber: 39
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            process.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        dangerouslySetInnerHTML: {
                                            __html: process.description
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    process.pointsheding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "fs-22 fw-700 mt-20",
                                        children: process.pointsheding
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                                        lineNumber: 39,
                                        columnNumber: 42
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    process.points && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "ml-40 mt-20",
                                        children: process.points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "mb-10",
                                                children: point
                                            }, i, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                                                lineNumber: 43,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CommonDevelopmentProcess;
}),
"[project]/src/app/(frontend)/assets/style/home/developmentServices.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "developmentServices-module__oAF7Eq__card",
  "content": "developmentServices-module__oAF7Eq__content",
  "grid": "developmentServices-module__oAF7Eq__grid",
  "image": "developmentServices-module__oAF7Eq__image",
  "learnMore": "developmentServices-module__oAF7Eq__learnMore",
});
}),
"[project]/src/app/(frontend)/assets/images/industries/1.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/1.7ba25e2b.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/1.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/1.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/industries/1.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRgYBAABXRUJQVlA4TPoAAAAvB8AAEM1VICICHgjACQQAAICJOECQAgAAQAAAAAAAAAAAAAgAAAAAAAAAACAAeJakwgoARl4AAADwQABOIAAAAM7f95QMtg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIAkkZQgXHgiwCQAAAMD5vwgGDiABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFAlUVpEIlHogEAAAAAMD5ZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsc2vX0POJOTPiZIlXgReot0L9CgDo90guPkuMHKQjhvQK4Cc4C1GYT7mEESe5f13b6VHzau1gD4ur0z0P"
};
}),
"[project]/src/app/(frontend)/assets/images/industries/2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/2.3e0dd795.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/2.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/2.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/industries/2.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRv4AAABXRUJQVlA4TPIAAAAvB8AAEM1VICICHgiwCQAAAAAVQQQAAAEEAAABAIAAAAAAAAAAAAAAAAAAAAAAAEHR+cFF6wEAAMADATYBAAAAOH+iAwAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGUDv2t7/dAgE0AAAAAzv/N9tdVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAIzAORAAAAAAA4/wwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAZR9vj9mXUPSAfK/MEQZqMFsl9jfq7YKyXuGKhGtrqLPIJjtgBuQyQZGBfX1eg8kGaKbUTJKUGA=="
};
}),
"[project]/src/app/(frontend)/assets/images/industries/3.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/3.1d615e52.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/3.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/3.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/industries/3.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRv4AAABXRUJQVlA4TPIAAAAvB8AAEM1VICICHgjACQQAAIAtKDwUBAkCAOABAAAAAAAAAAAAAAAAAABAAAAAwAABIAjKgYkFAADwQIBNAAAAAM7/jiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0PGOts0DATYBAAAAOP+9Twl4EADAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEChA0jwQCQAAAACA888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWPbpm0pMGjNZmHYWyovz76XIAjmpJDdt0HLjAsEAmPuruI60N4Wb8RxJJq924QWt4X0dfkAhBw=="
};
}),
"[project]/src/app/(frontend)/assets/images/industries/4.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/4.3ca4d2b9.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/4.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/4.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/industries/4.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRsoAAABXRUJQVlA4TL0AAAAvB8AAAM1VICICHgiwCQAAAIAxEpBcgIAAIgAAAAAAAAAAAAAAIAAAAAAEAAAAAAI8CQACIQcAAPBAMFIAAAAAzn9zSQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA90HghIDQAAAMD5/7cwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo+oiOz0M1EAe8mrOLbugo1MdqZJj59/JjwmttuwSbc73zi0UoK3fPxIRuUbIUgAA"
};
}),
"[project]/src/app/(frontend)/assets/images/industries/5.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/5.331be3ff.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/5.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/5.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/industries/5.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRgYBAABXRUJQVlA4TPkAAAAvB8AAEM1VICICHgjACQQAAIBFQiwhguBDAIAAAAAAAAAAAAAIAAAAAAAAAAAAADDCgQAI0VsAAADwQIBNAAAAAM4fzfGrgIBCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgBUjir3QABOIAAAAM5/E0WABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADACAHm+JbsrHogEAAAAAMD5ZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsR/Pjnnlezu3KugTiMpBw89lDoZS4QCiNOIWRrV6DwcSjqoJSPluLB1eRPHSx2T40w2+//YIl9yVT8xgA"
};
}),
"[project]/src/app/(frontend)/assets/images/industries/6.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/6.43a01776.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/6.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/6.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/industries/6.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRgQBAABXRUJQVlA4TPcAAAAvB8AAEM1VICICHgjACQQAAIBaiSiQCAMAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAoAa4CLwH8CAADwQIBNAAAAAM4/p4s4hgDgAK4EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP89EGAUCAAAgPO/awIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAMIsS/VpLOA5EAAAAAADj/DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBln9okCsxsmakhtzvl0HhESz7po+1dwdT04jK8TthBLawj3guKCpeuiUsXiYlJHZ8ky5Pnx/DhJ9gDAA=="
};
}),
"[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/developmentServices.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/1.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/1.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/2.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/2.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/3.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/3.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/4.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/4.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/5.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/5.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/6.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/6.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
};
const CommonIndustries = ({ heding = "Industries We Specialise in - Demonstrated Experience", subheding = "We cater to a diverse range of industries, delivering tailored web solutions that drive growth and engagement.", services = [
    {
        title: "Real Estate & Property",
        desc: "Searchable listings, virtual tours, lead routing and CRM integrations for property management.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Real Estate & Property Web Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/real-estate-web-development"
    },
    {
        title: "Hospitality & Travel",
        desc: "Booking integrations, rate management, multi-language content and conversion optimised funnels.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Hospitality & Travel Web Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/travel-web-development"
    },
    {
        title: "Healthcare Websites",
        desc: "Patient portals, appointment booking, stern security and data privacy workflows.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Healthcare Website Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/healthcare-web-development"
    },
    {
        title: "Portfolio Websites",
        desc: "Project galleries, case studies, client testimonials, skill highlights, easy navigation.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Portfolio Website Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/portfolio-web-development"
    },
    {
        title: "Retail & eCommerce",
        desc: "Product merchandising, omni-channel sync, and promotional mechanisms.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Retail & eCommerce Website Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/e-commerce-web-development"
    },
    {
        title: "Corporate Websites",
        desc: "Company overview, services, team profiles, client testimonials, contact forms, brand messaging.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Corporate Website Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/corporate-web-development"
    }
], btnname = null, btnlink = null })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 pt-100 sm-pb-50 sm-pt-0 sm-px-20 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-center mb-20 sm-mb-20 sm-text-start",
                initial: {
                    opacity: 0,
                    y: -30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    ease: "easeOut"
                },
                viewport: {
                    once: true
                },
                children: heding
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                lineNumber: 86,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-center sm-text-start mb-50 sm-mb-20",
                initial: {
                    opacity: 0,
                    y: -30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    ease: "easeOut"
                },
                viewport: {
                    once: true
                },
                children: subheding
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        variants: cardVariants,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true
                        },
                        custom: i,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: service.img,
                                alt: service.title,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-20",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-10",
                                        children: service.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: service.link,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].learnMore,
                                        children: [
                                            service.btnname,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "30",
                                                height: "12",
                                                viewBox: "0 0 30 12",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M29.5303 6.53033C29.8232 6.23744 29.8232 5.76256 29.5303 5.46967L24.7574 0.696699C24.4645 0.403806 23.9896 0.403806 23.6967 0.696699C23.4038 0.989593 23.4038 1.46447 23.6967 1.75736L27.9393 6L23.6967 10.2426C23.4038 10.5355 23.4038 11.0104 23.6967 11.3033C23.9896 11.5962 24.4645 11.5962 24.7574 11.3033L29.5303 6.53033ZM0 6V6.75H29V6V5.25H0V6Z",
                                                    fill: "#E83E8C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                                lineNumber: 121,
                                                columnNumber: 51
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                        lineNumber: 120,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                        lineNumber: 107,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "text-center mt-30 sm-mt-10",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                transition: {
                    delay: 1,
                    duration: 0.8
                },
                viewport: {
                    once: true
                },
                children: btnname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "white-btn",
                    href: btnlink,
                    children: btnname
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                    lineNumber: 137,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                lineNumber: 130,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
        lineNumber: 85,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CommonIndustries;
}),
"[project]/src/app/(frontend)/assets/style/home/faqSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "faqCard": "faqSection-module__JxFMyG__faqCard",
  "faqContainer": "faqSection-module__JxFMyG__faqContainer",
  "faqContent": "faqSection-module__JxFMyG__faqContent",
  "faqHeader": "faqSection-module__JxFMyG__faqHeader",
});
}),
"[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/faquparrow.78e7c926.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 37,
    height: 37,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/faqdownarrow.29b60f0d.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 37,
    height: 37,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/faqSection.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const CommonFaqSection = ({ faqs, title, subtitle })=>{
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-center mb-10 frame-900 sm-text-start sm-mb-10",
                initial: {
                    opacity: 0,
                    y: -30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                viewport: {
                    once: true
                },
                children: title || "Frequently Asked Questions"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-center mb-50 frame-800 sm-text-start sm-mb-20 mx-auto opacity-70",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                transition: {
                    duration: 0.6,
                    delay: 0.2
                },
                viewport: {
                    once: true
                },
                style: {
                    fontSize: "17px",
                    lineHeight: "1.6"
                },
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqContainer,
                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqCard} ${openIndex === index ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: index * 0.1
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqHeader,
                                onClick: ()=>toggleFAQ(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: faq.q
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "Up Arrow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "Down Arrow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqContent,
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: faq.a
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFaqSection.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CommonFaqSection;
}),
"[project]/src/app/(frontend)/assets/style/common/commonServiceLocations.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "city": "commonServiceLocations-module__DMwrmW__city",
  "container": "commonServiceLocations-module__DMwrmW__container",
  "embla": "commonServiceLocations-module__DMwrmW__embla",
  "emblaContainer": "commonServiceLocations-module__DMwrmW__emblaContainer",
  "emblaSlide": "commonServiceLocations-module__DMwrmW__emblaSlide",
  "image": "commonServiceLocations-module__DMwrmW__image",
  "overlay": "commonServiceLocations-module__DMwrmW__overlay",
  "title": "commonServiceLocations-module__DMwrmW__title",
});
}),
"[project]/src/app/(frontend)/assets/images/location/dubai.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dubai.c6df838d.webp");}),
"[project]/src/app/(frontend)/assets/images/location/dubai.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/location/dubai.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$dubai$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/location/dubai.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$dubai$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 604,
    height: 700,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRjYBAABXRUJQVlA4TCkBAAAvBsABEM1VICICHghADgIAAIDuYwEQQAAAAAAAAAAAAAAIAAAAAAAAAAAAAACAJCHoYRa0r/ZPvQkAAOCBABwhAAAAnP/vttvetwoPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAKj/5oEAHCEAAACcfz0AAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAQL3WWr/22115IBIAAAAAAOcfDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIYcn+1QrVZWJB8yIv0B9WdLTqoEOFCk4KXrWbpUnIc4RbrNcTpOM4/LHruNJ/Zu1W6CWERxC1mMtuEsd6eSQ0i/PTFAiwMM4dpJK+U2CZwuKgvKD/aR7VQZkKa392E8GgEH/eD0vm0A"
};
}),
"[project]/src/app/(frontend)/assets/images/location/AbuDhabi.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/AbuDhabi.746035e7.webp");}),
"[project]/src/app/(frontend)/assets/images/location/AbuDhabi.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/location/AbuDhabi.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AbuDhabi$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/location/AbuDhabi.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AbuDhabi$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 604,
    height: 700,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRjYBAABXRUJQVlA4TCoBAAAvBsABEM1VICICHghADgIAAIBSNgRCAAAAAAAAAAAAAAAAAABAAAAAAAAAAAgAAZDy8VvhtddStw8AAMADAThCAAAAOP+e3bbrKyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA2tprHggADQMAAMD5V33HAADAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfY2tWqNw9EAgAAAADg/IMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAkOP73MCzdakX+RvZINYwzHvvl04BDdBUxBXNrmMRV/4cPhq4gW+wLXJQhGzqmVN1TberCKOy8IdCH4IPUcwqpt9IgSNYyMJVtiR7HWkL9HRnNGvclmj4YSlZLuRQe4aOqbffsCcnoB00"
};
}),
"[project]/src/app/(frontend)/assets/images/location/Sharjah.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Sharjah.ea60f6c2.webp");}),
"[project]/src/app/(frontend)/assets/images/location/Sharjah.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/location/Sharjah.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Sharjah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/location/Sharjah.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Sharjah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 604,
    height: 700,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRkYBAABXRUJQVlA4TDkBAAAvBsABEM1VICICHgiADQIAAAAuTUaQgwIgAAIAAAAAAAAAAAAIAAAAAAAAAMABr8klSYoHHg99WgAAAMADAchBAAAAOP+qr9/UhkYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKBkSlrfb50HAmCDAAAAcP6rKedFVwCAAgAE4AAAAAAAAAAAAAAAAAAAAAAAQAKcAEDgb60V+ueBSAAAAAAAnH8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLKf57MPq+kCyHzq+cdihbthr/UB9pG0v8KKarxp92SpQ50hzJQhuSGlJchiLpNRR0acoRj0A5crdDdSPPHK+ERKleTk2qN7eWlxGrTkLQIOP23AB++U7LE2pc/SFCdUrFVyjIPYKj5y9gg4toU7vPVafRgGAA=="
};
}),
"[project]/src/app/(frontend)/assets/images/location/Ajman.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Ajman.7dec989d.webp");}),
"[project]/src/app/(frontend)/assets/images/location/Ajman.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/location/Ajman.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Ajman$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/location/Ajman.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Ajman$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 604,
    height: 700,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRkgBAABXRUJQVlA4TDsBAAAvBsABEM1VICICHgiADQIAAIAzOVAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAwqFeWhPb01pvcgAAAA8EIAcBAADg/KsIrGkJFdEQwIQQAkQABAAAgEABAAAAAAAAAAAAAAAAEgBW1SYvLvFAAGwQAAAAzn/6qXOe6R4EAAAOAAAAAAAAAAAAAAAAAAAAwDkSICQAAVQA6U4e9RsPRAIAAAAA4PyDAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwJDjbPe4SnJwVMnQz8oxqLYdOGXFp3SnOoxOcdMkoLD0sJdFgdab0C5CGcVmBaMzLV6aJqwO7gm3C0SQL0vwRUS9y2gzaRskfDp4GhnGvtdWFNlBqJGvSru4Ji9dunvZQ61kNyBilg2xT8vf+MH0+EGQ8cepEQMA"
};
}),
"[project]/src/app/(frontend)/assets/images/location/RasAlKhaimah.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/RasAlKhaimah.2785b92a.webp");}),
"[project]/src/app/(frontend)/assets/images/location/RasAlKhaimah.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/location/RasAlKhaimah.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$RasAlKhaimah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/location/RasAlKhaimah.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$RasAlKhaimah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 604,
    height: 700,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRjgBAABXRUJQVlA4TCwBAAAvBsABEM1VICICHghADgIAAICyAQAIAAAAAAAAAAAAAAAAAAAAAAAAAACwUKBgIoQBJsOyqm7/9WUAAAAPBOAIAQAA4Pynftzs+e4BIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACGvChJGZB4IQA4CAADA+f9ty5NKAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENjqqp9uHogEAAAAAMD5BwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAhzdj3+qenoYmiSvgTPrFrZ7Y3Zj2h3ZSTqqT9KfMi9gI+tDTMqjysli4Jgllck5nGMpuYdOi8dUllgGk1GSv1BcK5CrGI7+HaZ+9w2DZ8FPQ4uZzcbo/J8WXl/iGLZgHKIRZZLWwIJ2I="
};
}),
"[project]/src/app/(frontend)/assets/images/location/Fujairah.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Fujairah.84534d99.webp");}),
"[project]/src/app/(frontend)/assets/images/location/Fujairah.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/location/Fujairah.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Fujairah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/location/Fujairah.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Fujairah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 604,
    height: 700,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRjoBAABXRUJQVlA4TC0BAAAvBsABEM1VICICHgiADQIAAIDSVQQQAAAAAAAAAAAAAAAAAAAAAAAAAADgCCDx5sB1rv+pU37HVe4DAADwQAByEAAAAM7/bj2q2QaiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAshK6ew8ExAgBAADg/G/7fJECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/rWlNrPA5EAAAAAADj/YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDkde83SQjlI/RWrVWkjJJeqeevRIg7fiVTlRkC+tlMntCrEd1lIBMfUhL+tzDFQTWhICExV7KguOjmqv5mDuHkMM+Fstj3myMsoSPYZTDNyNEdvSP+BLzW6tj6gLPNj4Mfp1EYlLbNLO0aAA=="
};
}),
"[project]/src/app/(frontend)/assets/images/location/UmmAlQuwain.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/UmmAlQuwain.e91849cd.webp");}),
"[project]/src/app/(frontend)/assets/images/location/UmmAlQuwain.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/location/UmmAlQuwain.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$UmmAlQuwain$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/location/UmmAlQuwain.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$UmmAlQuwain$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 604,
    height: 700,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRjwBAABXRUJQVlA4TC8BAAAvBsABEM1VICICHgiADQIAAAChPaBAQAAAAAAAAAAAAAAAAIADAAAAAAAAAAAAIAQ9/bv12qvuzQsAAMADAchBAAAAOP+7v35hAkAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEBgMWs/74EA5CAAAACc/+9u32pKAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjAQoJaFvfPBAJAAAAAIDzDwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDarUBvQ7QevV8G34SfJdrczVwJLtjgaqP/s6G66iiAPu8bvLWuHJZj9N37jI6TBWTsNzsKO4+EsA4PbsCCuHbKo2k/NE+JyYq0ovo/ZwJo1N0gWAnpghmJsJsRIDgZrP/JQYxVVHBEgbKRRgA"
};
}),
"[project]/src/app/(frontend)/assets/images/location/AlAin.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/AlAin.a5f854f3.webp");}),
"[project]/src/app/(frontend)/assets/images/location/AlAin.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/location/AlAin.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AlAin$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/location/AlAin.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AlAin$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 604,
    height: 700,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRjABAABXRUJQVlA4TCMBAAAvBsABEM1VICICHghADgIAAID0KQDAAgAAAAAAAAAAAAAAAAAAAQAAAAABAAACyAfIS6v6ujX5KAsAAMADAThCAAAAOP+7s62kAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCV7d5ICA4CAAAAOe/+8wEAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJC1Rlv3HogEAAAAAMD5BwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAhm+e6lLma6pqoi38KkqfrLpzdlAt36Iku0W6kOVwxzDWM9ZL4vEe33w+ifCyybymkPiyrOo1cWyU5q4Ag8TplbzO4uv/wNDAAEpi2r/n4s4F3EIcViJIiHWAAcRAmADAmowMA"
};
}),
"[project]/src/app/(frontend)/component/pages/common/CommonServiceLocations.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommonServiceLocations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonServiceLocations$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/common/commonServiceLocations.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$auto$2d$scroll$2f$esm$2f$embla$2d$carousel$2d$auto$2d$scroll$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-auto-scroll/esm/embla-carousel-auto-scroll.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$dubai$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$dubai$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/location/dubai.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/location/dubai.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AbuDhabi$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AbuDhabi$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/location/AbuDhabi.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/location/AbuDhabi.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Sharjah$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Sharjah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/location/Sharjah.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/location/Sharjah.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Ajman$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Ajman$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/location/Ajman.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/location/Ajman.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$RasAlKhaimah$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$RasAlKhaimah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/location/RasAlKhaimah.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/location/RasAlKhaimah.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Fujairah$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Fujairah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/location/Fujairah.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/location/Fujairah.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$UmmAlQuwain$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$UmmAlQuwain$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/location/UmmAlQuwain.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/location/UmmAlQuwain.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AlAin$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AlAin$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/location/AlAin.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/location/AlAin.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const locations = [
    {
        name: "Web Design in Dubai",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$dubai$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$dubai$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        link: "/"
    },
    {
        name: "Web Design Abu Dhabi",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AbuDhabi$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AbuDhabi$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        link: "/website-development-in-abu-dhabi"
    },
    {
        name: "Web Design in Sharjah",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Sharjah$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Sharjah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        link: "/website-development-in-sharjah"
    },
    {
        name: "Web Design in Ajman",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Ajman$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Ajman$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        link: "/website-development-in-ajman"
    },
    {
        name: "Web Design Ras Al Khaimah",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$RasAlKhaimah$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$RasAlKhaimah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        link: "/website-development-in-ras-al-khaimah"
    },
    {
        name: "Web Design in Fujairah",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Fujairah$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$Fujairah$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        link: "/website-development-in-fujairah"
    },
    {
        name: "Web Design Umm Al Quwain",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$UmmAlQuwain$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$UmmAlQuwain$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        link: "/website-development-in-umm-al-quwain"
    },
    {
        name: "Web Design in Al Ain",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AlAin$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$location$2f$AlAin$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        link: "/website-development-in-al-ain"
    }
];
function CommonServiceLocations() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [emblaRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        loop: false,
        align: "start",
        dragFree: true
    }, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$auto$2d$scroll$2f$esm$2f$embla$2d$carousel$2d$auto$2d$scroll$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            speed: 1.2,
            stopOnInteraction: true,
            stopOnMouseEnter: true
        })
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `frame-1200 py-100 sm-pt-50 sm-pb-50 sm-px-20 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonServiceLocations$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center sm-text-start mb-30",
                children: "Our Service Locations Across The UAE"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonServiceLocations.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonServiceLocations$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].embla,
                ref: emblaRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonServiceLocations$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emblaContainer,
                    children: locations.map((loc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonServiceLocations$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emblaSlide,
                            onClick: ()=>router.push(loc.link),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: loc.image,
                                    alt: loc.name,
                                    width: 300,
                                    height: 400,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonServiceLocations$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonServiceLocations.jsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonServiceLocations$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonServiceLocations$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].city,
                                        children: loc.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonServiceLocations.jsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonServiceLocations.jsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonServiceLocations.jsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonServiceLocations.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonServiceLocations.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonServiceLocations.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(frontend)/assets/style/common/commonClientTestimonials.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttons": "commonClientTestimonials-module__xQjmZq__buttons",
  "card": "commonClientTestimonials-module__xQjmZq__card",
  "container": "commonClientTestimonials-module__xQjmZq__container",
  "image": "commonClientTestimonials-module__xQjmZq__image",
  "imageContainer": "commonClientTestimonials-module__xQjmZq__imageContainer",
  "left": "commonClientTestimonials-module__xQjmZq__left",
  "name": "commonClientTestimonials-module__xQjmZq__name",
  "navButton": "commonClientTestimonials-module__xQjmZq__navButton",
  "quoteIcon": "commonClientTestimonials-module__xQjmZq__quoteIcon",
  "testimonialsSection": "commonClientTestimonials-module__xQjmZq__testimonialsSection",
  "textContainer": "commonClientTestimonials-module__xQjmZq__textContainer",
  "title": "commonClientTestimonials-module__xQjmZq__title",
});
}),
"[project]/src/app/(frontend)/assets/images/icons/left-icon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/left-icon.183c2fa4.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/left-icon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/left-icon.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$left$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/left-icon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$left$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 30,
    height: 30,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/(frontend)/assets/images/icons/right-icon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/right-icon.f4db165a.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/right-icon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/right-icon.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$right$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/right-icon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$right$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 30,
    height: 30,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/(frontend)/assets/images/icons/quote-icon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/quote-icon.70516474.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/quote-icon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/quote-icon.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$quote$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/quote-icon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$quote$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 64,
    height: 64,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/(frontend)/assets/images/testimonial/testimonial-1.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/testimonial-1.705df05b.webp");}),
"[project]/src/app/(frontend)/assets/images/testimonial/testimonial-1.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/testimonial/testimonial-1.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/testimonial/testimonial-1.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 468,
    height: 666,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRkIBAABXRUJQVlA4TDUBAAAvBcABEM1VICICHgiADQIAAID9OUj5Jwik6wcCBwCAAwAAAAAAAAAAAAAADgAAASggBDAAEP2gknMBAAA8EIAcBAAAgPO/VmqnBAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgwOCxtB42/jwQtBMIAACA83/77UqFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHm+aBgOAgAAAAnP99EYGMGCEAgQYAAADDGABgAAAAyQAABAhAAAQAiAAAAAIwGFAIIglANMP6+1/2Ouf1/zYA/M1ajTmts2RgAACIoP7e/jzN76q5aod6LorBR+xsrdNzWlt2cLZ31ZvhgbkX9OWSKCq87jjP5gp4+z0oR0ICmbPEIZ+YJ/X2BXeO7bF8njbVkSfym+ofQ9QycqrrZEwA"
};
}),
"[project]/src/app/(frontend)/assets/images/testimonial/testimonial-2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/testimonial-2.9e883495.webp");}),
"[project]/src/app/(frontend)/assets/images/testimonial/testimonial-2.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/testimonial/testimonial-2.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/testimonial/testimonial-2.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 424,
    height: 684,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRjYBAABXRUJQVlA4TCoBAAAvBMABEM1VICICHgiACQMAAIC4xJAEMngBHLgDADjrAOAAAAAIAAAAAAAAAuAAOAIAAAEAJU+ABwAAADwQgBwEAACA8//+/YGX1xqbAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8AopNQ8EwIQBAADg/AfMhTjA4QAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAgjwVRwGarbfdAwFBYQAAADj/+/UEAMCCwMIgGAAwCQAwWGAAAAAAAADAYBAAAAAAYCAQAAAIAFAyAjFiPmzyvbe9z+kqI0CpbbDqYY1Ovvy6gr339x5YFvTbUfZ6pfxI0NWGX8TUSLkW9J5TnCb2g0ysrqa0MLj6Ij8r5cGpMUO/rp9a5D4CZ3n44m7jl76nxrEXNhsyvzUA"
};
}),
"[project]/src/app/(frontend)/assets/images/testimonial/testimonial-3.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/testimonial-3.b1bc37f6.webp");}),
"[project]/src/app/(frontend)/assets/images/testimonial/testimonial-3.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/testimonial/testimonial-3.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/testimonial/testimonial-3.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 486,
    height: 702,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRkABAABXRUJQVlA4TDMBAAAvBcABEM1VICICHghADgIAAIDba7dEMECQAAwAAAgAAAAAAAAAAAAAAAAAAABAAAAgEIEws/qw2gAAAPBAAE4gAAAAzv+y339UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAqDrW/OAwFIYQAAADj/u892JdYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2EDdlwcCgoMAAABw/vfQxgC8CQAAARgChEBAIAAMgAAAAAAMAAIDAAAAAIABYBMBKChAEoAIaFaJ9JNuS8dW8AKgw5G5b51aeikUAAhhbdTxtcs/JqVrEtINXme/3rzMJ4Tdh9HG0YcWd7SVN7s9i5w3+NQ/z72C0VPzvsbk6Ia6LsPQPL5YH5/3Z7QayP60/XuTrOXnk1YjbqHJVsUFAA=="
};
}),
"[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommonClientTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/common/commonClientTestimonials.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$left$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$left$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/left-icon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/left-icon.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$right$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$right$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/right-icon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/right-icon.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$quote$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$quote$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/quote-icon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/quote-icon.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/testimonial/testimonial-1.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/testimonial/testimonial-1.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/testimonial/testimonial-2.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/testimonial/testimonial-2.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/testimonial/testimonial-3.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/testimonial/testimonial-3.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
;
;
;
;
;
function CommonClientTestimonials({ testimonials = [
    {
        id: 1,
        name: "Daniel R",
        text: "WD Agency transformed our online presence. Within 3 months, our sales doubled thanks to their Shopify development expertise.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 2,
        name: "Sophia K",
        text: "Professional, efficient, and creative—the best ecommerce development agency in UAE we’ve worked with.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 3,
        name: "James P",
        text: "From design to launch, everything was seamless. Their team handled even complex Magento integrations with ease.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$testimonial$2f$testimonial$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    }
] }) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // 1 for next, -1 for prev
    const testimonial = testimonials[index];
    const handlePrev = ()=>{
        setDirection(-1);
        setIndex((prev)=>prev === 0 ? testimonials.length - 1 : prev - 1);
    };
    const handleNext = ()=>{
        setDirection(1);
        setIndex((prev)=>prev === testimonials.length - 1 ? 0 : prev + 1);
    };
    // Motion variants for sliding
    const variants = {
        enter: (direction)=>({
                x: direction > 0 ? 10 : -10,
                opacity: 0
            }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction)=>({
                x: direction < 0 ? 10 : -10,
                opacity: 0
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialsSection}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].left,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Client Testimonials"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePrev,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navButton,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$left$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$left$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "arrowleft"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleNext,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navButton,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$right$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$right$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "arrowright"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        custom: direction,
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: direction,
                            variants: variants,
                            initial: "enter",
                            animate: "center",
                            exit: "exit",
                            transition: {
                                duration: 0.5
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageContainer,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: testimonial.image,
                                        alt: testimonial.name,
                                        width: 400,
                                        height: 400,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$quote$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$quote$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "quoteicon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-10",
                                            children: testimonial.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonClientTestimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                                            children: testimonial.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, testimonial.id, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonClientTestimonials.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_%28frontend%29_b76af53c._.js.map