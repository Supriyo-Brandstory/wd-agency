(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(frontend)/assets/style/home/trusted.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "loadingsvg": "trusted-module__wUqzMq__loadingsvg",
  "spin": "trusted-module__wUqzMq__spin",
  "statBox": "trusted-module__wUqzMq__statBox",
  "svgContainer": "trusted-module__wUqzMq__svgContainer",
  "trustedWrapper": "trusted-module__wUqzMq__trustedWrapper",
});
}),
"[project]/src/app/(frontend)/component/pages/home/Trusted.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Trusted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/trusted.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Trusted() {
    _s();
    const [showsvg, setShowsvg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Trusted.useEffect": ()=>{
            const handleResize = {
                "Trusted.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["Trusted.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            setShowsvg(true);
            return ({
                "Trusted.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Trusted.useEffect"];
        }
    }["Trusted.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Trusted.useEffect": ()=>{
            if (!showsvg || !svgRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "Trusted.useEffect.ctx": ()=>{
                    // Ring animations
                    const rings = [
                        {
                            selector: ".innerDashed",
                            rotate: -360,
                            duration: 15
                        },
                        {
                            selector: ".anticlockwise",
                            rotate: -360,
                            duration: 13
                        },
                        {
                            selector: ".clockwise",
                            rotate: 360,
                            duration: 13
                        },
                        {
                            selector: ".pinkRings-1",
                            rotate: 360,
                            duration: 8
                        },
                        {
                            selector: ".pinkRings-2",
                            rotate: -360,
                            duration: 10
                        },
                        {
                            selector: ".pinkRings-3",
                            rotate: 360,
                            duration: 12
                        }
                    ];
                    rings.forEach({
                        "Trusted.useEffect.ctx": ({ selector, rotate, duration })=>{
                            const elements = svgRef.current.querySelectorAll(selector);
                            if (elements.length > 0) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(elements, {
                                    rotate,
                                    transformOrigin: "50% 50%",
                                    duration,
                                    repeat: -1,
                                    ease: "linear"
                                });
                            }
                        }
                    }["Trusted.useEffect.ctx"]);
                    // Box movements
                    const movements = [
                        {
                            up: -50,
                            down: 60,
                            left: 0,
                            right: 0
                        },
                        {
                            up: -20,
                            down: -50,
                            left: 0,
                            right: 10
                        },
                        {
                            up: -50,
                            down: 30,
                            left: 50,
                            right: 0
                        },
                        {
                            up: 0,
                            down: -10,
                            left: 50,
                            right: 50
                        },
                        {
                            up: 90,
                            down: 0,
                            left: 90,
                            right: 0
                        },
                        {
                            up: 10,
                            down: 50,
                            left: 0,
                            right: 20
                        },
                        {
                            up: 50,
                            down: -20,
                            left: -10,
                            right: 0
                        },
                        {
                            up: -20,
                            down: 40,
                            left: 90,
                            right: -90
                        },
                        {
                            up: -10,
                            down: 40,
                            left: -60,
                            right: -20
                        },
                        {
                            up: -40,
                            down: -50,
                            left: -90,
                            right: -90
                        }
                    ];
                    const boxes = svgRef.current.querySelectorAll(".boxPath");
                    boxes.forEach({
                        "Trusted.useEffect.ctx": (box, i)=>{
                            const move = movements[i % movements.length];
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(box, {
                                x: i % 2 === 0 ? move.left : move.right,
                                y: i % 2 === 0 ? move.up : move.down,
                                duration: 2,
                                repeat: -1,
                                yoyo: true,
                                ease: "power1.inOut",
                                delay: i * 0.5,
                                transformOrigin: "720px 405px"
                            });
                        }
                    }["Trusted.useEffect.ctx"]);
                    // Mouse move effect
                    let ticking = false;
                    const handleMouseMove = {
                        "Trusted.useEffect.ctx.handleMouseMove": (e)=>{
                            if (!ticking) {
                                requestAnimationFrame({
                                    "Trusted.useEffect.ctx.handleMouseMove": ()=>{
                                        const { innerWidth, innerHeight } = window;
                                        const x = (e.clientX / innerWidth - 0.5) * 10;
                                        const y = (e.clientY / innerHeight - 0.5) * 10;
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(svgRef.current, {
                                            rotationY: x,
                                            rotationX: -y,
                                            transformPerspective: 800,
                                            transformOrigin: "center",
                                            ease: "power1.out",
                                            duration: 0.6
                                        });
                                        ticking = false;
                                    }
                                }["Trusted.useEffect.ctx.handleMouseMove"]);
                                ticking = true;
                            }
                        }
                    }["Trusted.useEffect.ctx.handleMouseMove"];
                    window.addEventListener("mousemove", handleMouseMove);
                    return ({
                        "Trusted.useEffect.ctx": ()=>{
                            window.removeEventListener("mousemove", handleMouseMove);
                        }
                    })["Trusted.useEffect.ctx"];
                }
            }["Trusted.useEffect.ctx"], svgRef);
            return ({
                "Trusted.useEffect": ()=>ctx.revert()
            })["Trusted.useEffect"];
        }
    }["Trusted.useEffect"], [
        showsvg
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-py-50 sm-px-20 over-flow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-center mb-20 sm-mb-20 sm-text-start",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 50
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.3
                },
                children: "Trusted by Businesses Across UAE"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                lineNumber: 117,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-center mb-50 sm-mb-20 frame-700 sm-text-start",
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 50
                },
                transition: {
                    duration: 1,
                    delay: 0.2,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.3
                },
                children: "With a proven track record in website design and development, we have helped hundreds of businesses thrive and grow their online presence."
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustedWrapper}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftstatBox}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox}`,
                                initial: {
                                    opacity: 0,
                                    x: -100
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut"
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "fs-64 fw-700",
                                        children: "12+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "fs-24 fw-600",
                                        children: "Years of Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                        lineNumber: 149,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox}`,
                                initial: {
                                    opacity: 0,
                                    x: -100
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: 0.3
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "fs-64 fw-700",
                                        children: "50+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "fs-24 fw-600",
                                        children: "Expert Developers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].svgContainer}`,
                        ref: svgRef,
                        children: showsvg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: isMobile ? "900" : "1200",
                            height: isMobile ? "400" : "700",
                            viewBox: isMobile ? "0 0  1200 700" : "0 0 1280 780",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.2",
                                    d: "M555 228L467.107 140.5H144",
                                    stroke: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 167,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.2",
                                    d: "M546 228L464.5 146.5H424",
                                    stroke: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 168,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.1",
                                    d: "M149 166L144 161H157L162 166H149Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 169,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    x: 346,
                                    y: 155,
                                    width: 2,
                                    height: 2,
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 170,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    x: 352,
                                    y: 155,
                                    width: 2,
                                    height: 2,
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 171,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    x: 358,
                                    y: 155,
                                    width: 2,
                                    height: 2,
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 172,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.2",
                                    d: "M885 228L972.893 140.5H1296",
                                    stroke: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.2",
                                    d: "M894 228L975.5 146.5H1016",
                                    stroke: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 174,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.1",
                                    d: "M1291 166L1296 161H1283L1278 166H1291Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 175,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    width: 2,
                                    height: 2,
                                    transform: "matrix(-1 0 0 1 1094 155)",
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    width: 2,
                                    height: 2,
                                    transform: "matrix(-1 0 0 1 1088 155)",
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 183,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    width: 2,
                                    height: 2,
                                    transform: "matrix(-1 0 0 1 1082 155)",
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.2",
                                    d: "M555 582L467.107 669.5H144",
                                    stroke: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.2",
                                    d: "M546 582L464.5 663.5H424",
                                    stroke: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 198,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.1",
                                    d: "M149 644L144 649H157L162 644H149Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 199,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    width: 2,
                                    height: 2,
                                    transform: "matrix(1 0 0 -1 346 655)",
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 200,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    width: 2,
                                    height: 2,
                                    transform: "matrix(1 0 0 -1 352 655)",
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 207,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    width: 2,
                                    height: 2,
                                    transform: "matrix(1 0 0 -1 358 655)",
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 214,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.2",
                                    d: "M885 582L972.893 669.5H1296",
                                    stroke: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 221,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.2",
                                    d: "M894 582L975.5 663.5H1016",
                                    stroke: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 222,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.1",
                                    d: "M1291 644L1296 649H1283L1278 644H1291Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 223,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    x: 1094,
                                    y: 655,
                                    width: 2,
                                    height: 2,
                                    transform: "rotate(180 1094 655)",
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 224,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    x: 1088,
                                    y: 655,
                                    width: 2,
                                    height: 2,
                                    transform: "rotate(180 1088 655)",
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 233,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    opacity: "0.1",
                                    x: 1082,
                                    y: 655,
                                    width: 2,
                                    height: 2,
                                    transform: "rotate(180 1082 655)",
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 242,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#filter0_d_96_997)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            opacity: "0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                    id: "mask0_96_997",
                                                    style: {
                                                        maskType: "alpha"
                                                    },
                                                    maskUnits: "userSpaceOnUse",
                                                    x: 530,
                                                    y: 215,
                                                    width: 381,
                                                    height: 381,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M910 405C910 509.935 824.935 595 720 595C615.066 595 530 509.935 530 405C530 300.066 615.066 215 720 215C824.935 215 910 300.066 910 405ZM600.298 405C600.298 471.11 653.891 524.703 720 524.703C786.11 524.703 839.703 471.11 839.703 405C839.703 338.891 786.11 285.298 720 285.298C653.891 285.298 600.298 338.891 600.298 405Z",
                                                        fill: "#D9D9D9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 253,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    mask: "url(#mask0_96_997)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                            id: "path-26-inside-1_96_997",
                                                            fill: "white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M810.497 447.548C802.743 464.042 790.628 478.102 775.463 488.211L720 405L810.497 447.548Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                                lineNumber: 269,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                            lineNumber: 268,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M810.497 447.548C802.743 464.042 790.628 478.102 775.463 488.211L720 405L810.497 447.548Z",
                                                            stroke: "white",
                                                            strokeWidth: 4,
                                                            mask: "url(#path-26-inside-1_96_997)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                            lineNumber: 271,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 267,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 252,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            opacity: "0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                    id: "mask1_96_997",
                                                    style: {
                                                        maskType: "alpha"
                                                    },
                                                    maskUnits: "userSpaceOnUse",
                                                    x: 529,
                                                    y: 214,
                                                    width: 382,
                                                    height: 382,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M569.356 289.216C633.302 206.017 752.586 190.409 835.785 254.356C918.984 318.302 934.592 437.586 870.646 520.785C806.699 603.984 687.415 619.592 604.216 555.646C521.017 491.699 505.409 372.415 569.356 289.216ZM814.909 477.946C855.195 425.53 845.363 350.379 792.946 310.092C740.53 269.806 665.379 279.639 625.092 332.055C584.806 384.471 594.639 459.622 647.055 499.909C699.471 540.195 774.622 530.363 814.909 477.946Z",
                                                        fill: "#D9D9D9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                        lineNumber: 289,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 280,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    mask: "url(#mask1_96_997)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                            id: "path-28-inside-2_96_997",
                                                            fill: "white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M673.521 316.459C683.44 311.252 694.164 307.749 705.244 306.095L720.001 405.001L673.521 316.459Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                                lineNumber: 296,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                            lineNumber: 295,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M673.521 316.459C683.44 311.252 694.164 307.749 705.244 306.095L720.001 405.001L673.521 316.459Z",
                                                            stroke: "white",
                                                            strokeWidth: 4,
                                                            mask: "url(#path-28-inside-2_96_997)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                            lineNumber: 298,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 294,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 279,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                            id: "mask2_96_997",
                                            style: {
                                                maskType: "alpha"
                                            },
                                            maskUnits: "userSpaceOnUse",
                                            x: 529,
                                            y: 214,
                                            width: 382,
                                            height: 382,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M864.854 527.954C796.949 607.954 677.048 617.759 597.047 549.854C517.047 481.949 507.242 362.048 575.147 282.047C643.052 202.047 762.953 192.242 842.954 260.147C922.954 328.052 932.759 447.953 864.854 527.954ZM628.741 327.539C585.96 377.94 592.137 453.479 642.539 496.26C692.94 539.041 768.479 532.864 811.26 482.462C854.041 432.061 847.864 356.522 797.462 313.741C747.061 270.96 671.522 277.137 628.741 327.539Z",
                                                fill: "#D9D9D9"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                lineNumber: 318,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 309,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            mask: "url(#mask2_96_997)",
                                            opacity: "0.9",
                                            stroke: "white",
                                            strokeWidth: "2",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            id: "boxPath",
                                                            d: "M786.337 550.601C772.634 556.844 758.118 561.122 743.219 563.307L720.001 405L786.337 550.601Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                            lineNumber: 326,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            id: "boxPath-2",
                                                            d: "M776.337 550.601C762.634 556.844 748.118 561.122 743.219 563.307L720.001 401L776.337 550.601Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                            lineNumber: 331,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            id: "boxPath-3",
                                                            d: "M796.337 550.601C782.634 556.844 768.118 561.122 723.219 563.307L720.001 405L796.337 550.601Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                            lineNumber: 336,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath",
                                                    className: "boxPath",
                                                    transform: "rotate(0 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 343,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath-2",
                                                    className: "boxPath",
                                                    transform: "rotate(36 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 344,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath-3",
                                                    className: "boxPath",
                                                    transform: "rotate(72 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 345,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath",
                                                    className: "boxPath",
                                                    transform: "rotate(108 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 346,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath-2",
                                                    className: "boxPath",
                                                    transform: "rotate(144 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 347,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath-3",
                                                    className: "boxPath",
                                                    transform: "rotate(180 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 348,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath",
                                                    className: "boxPath",
                                                    transform: "rotate(216 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 349,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath-2",
                                                    className: "boxPath",
                                                    transform: "rotate(252 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 350,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath-3",
                                                    className: "boxPath",
                                                    transform: "rotate(288 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 351,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                                    href: "#boxPath",
                                                    className: "boxPath",
                                                    transform: "rotate(324 720 405)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 352,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 323,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            opacity: "0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                    id: "mask6_96_997",
                                                    style: {
                                                        maskType: "alpha"
                                                    },
                                                    maskUnits: "userSpaceOnUse",
                                                    x: 529,
                                                    y: 214,
                                                    width: 382,
                                                    height: 382,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M799.905 232.619C895.108 276.749 936.512 389.701 892.382 484.905C848.252 580.108 735.3 621.512 640.096 577.382C544.893 533.252 503.489 420.3 547.619 325.096C591.749 229.893 704.701 188.489 799.905 232.619ZM669.66 513.603C729.639 541.405 800.8 515.32 828.603 455.341C856.405 395.362 830.32 324.201 770.341 296.398C710.362 268.596 639.2 294.681 611.398 354.66C583.596 414.639 609.68 485.8 669.66 513.603Z",
                                                        fill: "#D9D9D9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                        lineNumber: 365,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 356,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    mask: "url(#mask6_96_997)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                                            id: "path-38-inside-7_96_997",
                                                            fill: "white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M796.661 340.789C804.027 349.582 809.824 359.577 813.8 370.336L720.001 405L796.661 340.789Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                                lineNumber: 372,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                            lineNumber: 371,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M796.661 340.789C804.027 349.582 809.824 359.577 813.8 370.336L720.001 405L796.661 340.789Z",
                                                            stroke: "white",
                                                            strokeWidth: 4,
                                                            mask: "url(#path-38-inside-7_96_997)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                            lineNumber: 374,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 370,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 355,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: 720,
                                            cy: 405,
                                            r: "119.5",
                                            stroke: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 384,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            opacity: "0.15",
                                            cx: 720,
                                            cy: 405,
                                            r: "131.5",
                                            stroke: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 385,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            opacity: "0.1",
                                            cx: 720,
                                            cy: 405,
                                            r: "144.5",
                                            stroke: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 386,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            opacity: "0.08",
                                            cx: 720,
                                            cy: 405,
                                            r: "159.5",
                                            stroke: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 387,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "clockwise",
                                            opacity: "0.4",
                                            cx: 720,
                                            cy: 405,
                                            r: 144,
                                            stroke: "white",
                                            strokeWidth: 2,
                                            strokeDasharray: "1 300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 388,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "anticlockwise",
                                            opacity: "0.4",
                                            cx: 720,
                                            cy: 405,
                                            r: 131,
                                            stroke: "white",
                                            strokeWidth: 2,
                                            strokeDasharray: "1 300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 398,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "anticlockwise",
                                            cx: 720,
                                            cy: 405,
                                            r: 159,
                                            stroke: "#E83E8C",
                                            strokeWidth: 2,
                                            strokeDasharray: "1 300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 408,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 251,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#filter1_d_96_997)",
                                    className: "anticlockwise",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            opacity: "0.3",
                                            cx: 720,
                                            cy: 405,
                                            r: "117.5",
                                            stroke: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 419,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "innerDashed",
                                            cx: 720,
                                            cy: 405,
                                            r: 110,
                                            stroke: "white",
                                            strokeWidth: 2,
                                            strokeLinecap: "round",
                                            strokeDasharray: "0.01 10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 420,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 418,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                            id: "glowFilter",
                                            x: "-20%",
                                            y: "-20%",
                                            width: "140%",
                                            height: "140%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                    in: "SourceGraphic",
                                                    stdDeviation: "3",
                                                    result: "blur"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 433,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    in: "blur",
                                                    mode: "matrix",
                                                    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
                                                    result: "glow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 434,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                    in: "SourceGraphic",
                                                    in2: "glow",
                                                    operator: "atop"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 435,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 432,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "gradient1",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "0%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#E83E8C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 439,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "70%",
                                                    stopColor: "#E83E8C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 440,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#E83E8C",
                                                    stopOpacity: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 441,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 438,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "gradient2",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "0%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#E83E8C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 445,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "50%",
                                                    stopColor: "#E83E8C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 446,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#E83E8C",
                                                    stopOpacity: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 447,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 444,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "gradient3",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "0%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#E83E8C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 451,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "30%",
                                                    stopColor: "#E83E8C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 452,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#E83E8C",
                                                    stopOpacity: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 453,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 450,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 431,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#glowFilter)",
                                    className: "pinkRingsGroup",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "pinkRings-1",
                                            cx: "721",
                                            cy: "405",
                                            r: "80",
                                            fill: "none",
                                            stroke: "url(#gradient1)",
                                            strokeWidth: "4.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 458,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "pinkRings-2",
                                            cx: "721",
                                            cy: "405",
                                            r: "90",
                                            fill: "none",
                                            stroke: "url(#gradient2)",
                                            strokeWidth: "4.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 459,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "pinkRings-3",
                                            cx: "721",
                                            cy: "405",
                                            r: "100",
                                            fill: "none",
                                            stroke: "url(#gradient3)",
                                            strokeWidth: "4.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 460,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 457,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#filter3_d_96_997)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "anticlockwise",
                                            cx: 720,
                                            cy: 405,
                                            r: "64.1127",
                                            stroke: "white",
                                            strokeWidth: 2,
                                            strokeDasharray: "50 42"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 464,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "clockwise",
                                            cx: "720.001",
                                            cy: 405,
                                            r: "60.338",
                                            stroke: "white",
                                            strokeWidth: 2,
                                            strokeDasharray: "27 27"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 472,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                            cx: 720,
                                            cy: "405.001",
                                            rx: "54.5634",
                                            ry: "54.5634",
                                            stroke: "white",
                                            strokeWidth: 2,
                                            strokeDasharray: "40 14",
                                            className: "anticlockwise"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 480,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 463,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.5",
                                    d: "M701 405H739",
                                    stroke: "white",
                                    strokeWidth: 3,
                                    strokeDasharray: "2 4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 491,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: 720,
                                    cy: 405,
                                    r: "1.83673",
                                    fill: "#E83E8C"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 498,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M680 378H691.832L695.328 384.911H705.547L712 393",
                                    stroke: "url(#paint0_linear_96_997)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 499,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M680 432H691.832L695.328 425.09H705.547L712 417",
                                    stroke: "url(#paint1_linear_96_997)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 503,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M760 378H748.169L744.673 384.911H734.454L728 393",
                                    stroke: "url(#paint2_linear_96_997)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 507,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M760 432H748.169L744.673 425.09H734.454L728 417",
                                    stroke: "url(#paint3_linear_96_997)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 511,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: 712,
                                    cy: 393,
                                    r: 1,
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 515,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: 712,
                                    cy: 417,
                                    r: 1,
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 516,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: 728,
                                    cy: 393,
                                    r: 1,
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 517,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: 728,
                                    cy: 417,
                                    r: 1,
                                    fill: "#D9D9D9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 518,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                            id: "filter0_d_96_997",
                                            x: "376.194",
                                            y: "61.1938",
                                            width: "687.613",
                                            height: "687.613",
                                            filterUnits: "userSpaceOnUse",
                                            colorInterpolationFilters: "sRGB",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                                    floodOpacity: 0,
                                                    result: "BackgroundImageFix"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 529,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    in: "SourceAlpha",
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                    result: "hardAlpha"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 530,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {}, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 536,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                    stdDeviation: 38
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 537,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    type: "matrix",
                                                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 538,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in2: "BackgroundImageFix",
                                                    result: "effect1_dropShadow_96_997"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 542,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow_96_997",
                                                    result: "shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 547,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 520,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                            id: "filter1_d_96_997",
                                            x: 502,
                                            y: 187,
                                            width: 436,
                                            height: 436,
                                            filterUnits: "userSpaceOnUse",
                                            colorInterpolationFilters: "sRGB",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                                    floodOpacity: 0,
                                                    result: "BackgroundImageFix"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 563,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    in: "SourceAlpha",
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                    result: "hardAlpha"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 564,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {}, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 570,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                    stdDeviation: 46
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 571,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    type: "matrix",
                                                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 572,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in2: "BackgroundImageFix",
                                                    result: "effect1_dropShadow_96_997"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 576,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow_96_997",
                                                    result: "shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 581,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 554,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                            id: "filter2_d_96_997",
                                            x: "582.48",
                                            y: "267.48",
                                            width: "275.04",
                                            height: "275.04",
                                            filterUnits: "userSpaceOnUse",
                                            colorInterpolationFilters: "sRGB",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                                    floodOpacity: 0,
                                                    result: "BackgroundImageFix"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 597,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    in: "SourceAlpha",
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                    result: "hardAlpha"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 598,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {}, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 604,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                    stdDeviation: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 605,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                    in2: "hardAlpha",
                                                    operator: "out"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 606,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    type: "matrix",
                                                    values: "0 0 0 0 1 0 0 0 0 0.364706 0 0 0 0 0.0941176 0 0 0 1 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 607,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in2: "BackgroundImageFix",
                                                    result: "effect1_dropShadow_96_997"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 611,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow_96_997",
                                                    result: "shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 616,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 588,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                            id: "filter3_d_96_997",
                                            x: 597,
                                            y: 282,
                                            width: 246,
                                            height: 246,
                                            filterUnits: "userSpaceOnUse",
                                            colorInterpolationFilters: "sRGB",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                                    floodOpacity: 0,
                                                    result: "BackgroundImageFix"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 632,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    in: "SourceAlpha",
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                    result: "hardAlpha"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 633,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {}, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 639,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                    stdDeviation: 26
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 640,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    type: "matrix",
                                                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 641,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in2: "BackgroundImageFix",
                                                    result: "effect1_dropShadow_96_997"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 645,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow_96_997",
                                                    result: "shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 650,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 623,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "paint0_linear_96_997",
                                            x1: "712.942",
                                            y1: "393.675",
                                            x2: "677.275",
                                            y2: "376.898",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    stopColor: "white",
                                                    stopOpacity: "0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 665,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: 1,
                                                    stopColor: "white",
                                                    stopOpacity: 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 666,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 657,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "paint1_linear_96_997",
                                            x1: "712.942",
                                            y1: "416.326",
                                            x2: "677.275",
                                            y2: "433.103",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    stopColor: "white",
                                                    stopOpacity: "0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 676,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: 1,
                                                    stopColor: "white",
                                                    stopOpacity: 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 677,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 668,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "paint2_linear_96_997",
                                            x1: "727.059",
                                            y1: "393.675",
                                            x2: "762.726",
                                            y2: "376.898",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    stopColor: "white",
                                                    stopOpacity: "0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 687,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: 1,
                                                    stopColor: "white",
                                                    stopOpacity: 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 688,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 679,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "paint3_linear_96_997",
                                            x1: "727.059",
                                            y1: "416.326",
                                            x2: "762.726",
                                            y2: "433.103",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    stopColor: "white",
                                                    stopOpacity: "0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 698,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: 1,
                                                    stopColor: "white",
                                                    stopOpacity: 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                                    lineNumber: 699,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                            lineNumber: 690,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                    lineNumber: 519,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                            lineNumber: 166,
                            columnNumber: 21
                        }, this) : // Optional fallback
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingsvg
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                            lineNumber: 705,
                            columnNumber: 22
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftstatBox}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox}`,
                                initial: {
                                    opacity: 0,
                                    x: 100
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut"
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "fs-64 fw-700",
                                        children: "750+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                        lineNumber: 716,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "fs-24 fw-600",
                                        children: "Successful Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                        lineNumber: 717,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                lineNumber: 709,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$trusted$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox}`,
                                initial: {
                                    opacity: 0,
                                    x: 100
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: 0.3
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "fs-64 fw-700",
                                        children: "500+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                        lineNumber: 727,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "fs-24 fw-600",
                                        children: "Happy Clients"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                        lineNumber: 728,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                                lineNumber: 720,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                        lineNumber: 708,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                lineNumber: 139,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "text-center",
                initial: {
                    opacity: 0,
                    y: 100
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "my-20",
                        children: "Want to know more about Website Development Agency?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                        lineNumber: 739,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/about-us",
                        className: "white-btn",
                        children: "Know About Us"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                        lineNumber: 740,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
                lineNumber: 732,
                columnNumber: 12
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/Trusted.jsx",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}
_s(Trusted, "0ZUWown5va8PCWvgm7l7aa/+X8I=");
_c = Trusted;
var _c;
__turbopack_context__.k.register(_c, "Trusted");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/bestAgency.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bestAgencyContainerBox": "bestAgency-module__BasCea__bestAgencyContainerBox",
  "bestAgencynextContainer": "bestAgency-module__BasCea__bestAgencynextContainer",
  "innerBestAgencyBox": "bestAgency-module__BasCea__innerBestAgencyBox",
});
}),
"[project]/src/app/(frontend)/assets/images/icons/high-end-ability.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/high-end-ability.1a433619.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/high-end-ability.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/high-end-ability.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$high$2d$end$2d$ability$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/high-end-ability.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$high$2d$end$2d$ability$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 85,
    height: 85,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/icons/best-practices.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/best-practices.41a53096.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/best-practices.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/best-practices.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$best$2d$practices$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/best-practices.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$best$2d$practices$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 65,
    height: 81,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/icons/spectacular.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/spectacular.9b068bd8.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/spectacular.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/spectacular.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$spectacular$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/spectacular.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$spectacular$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 85,
    height: 85,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/icons/brand-identity.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/brand-identity.0498ab72.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/brand-identity.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/brand-identity.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$brand$2d$identity$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/brand-identity.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$brand$2d$identity$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 85,
    height: 85,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/icons/deliver-the-best-results.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/deliver-the-best-results.27943009.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/deliver-the-best-results.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/deliver-the-best-results.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$deliver$2d$the$2d$best$2d$results$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/deliver-the-best-results.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$deliver$2d$the$2d$best$2d$results$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 85,
    height: 85,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/web-solution-banner.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/web-solution-banner.d40e8267.webp");}),
"[project]/src/app/(frontend)/assets/images/web-solution-banner.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/web-solution-banner.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$web$2d$solution$2d$banner$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/web-solution-banner.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$web$2d$solution$2d$banner$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1004,
    height: 968,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRlABAABXRUJQVlA4TEMBAAAvB8ABEM1VICICHgiADQIAAIAulxPCgQMAAQgAICAACCEAAgAAAAkAIQAAIAlOAKAUEU/ShBJCoFcPAADAAwHBQQAAADj/+34tmy0wCQMgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFRMVXsPBCAHAQAA4PzvP30jBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDSs9fnf2t4DkQAAAAAAOP8GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOc2zHW4z0BJAJjohP2JZRiBfoJGUAaSaWc6nHuJFqDowBFcViMEZ4V9c8uQQGJdpKHLoilh13nqD1F9P5QaMxmaMqIfyTA/ZGqkfYm3XoL8CK9D1BKf4HRmj8zQ8JRi2LJ8v9W1aopaoyPeuUGBl4VsxNx19XUuFZ0K5gzc+wA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$bestAgency$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/bestAgency.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$high$2d$end$2d$ability$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$high$2d$end$2d$ability$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/high-end-ability.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/high-end-ability.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$best$2d$practices$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$best$2d$practices$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/best-practices.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/best-practices.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$spectacular$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$spectacular$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/spectacular.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/spectacular.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$brand$2d$identity$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$brand$2d$identity$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/brand-identity.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/brand-identity.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$deliver$2d$the$2d$best$2d$results$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$deliver$2d$the$2d$best$2d$results$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/deliver-the-best-results.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/deliver-the-best-results.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$web$2d$solution$2d$banner$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$web$2d$solution$2d$banner$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/web-solution-banner.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/web-solution-banner.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const BestAgency = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "1": false,
        "2": false
    });
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 40
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    // Detect screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BestAgency.useEffect": ()=>{
            const handleResize = {
                "BestAgency.useEffect.handleResize": ()=>{
                    const mobile = window.innerWidth <= 768;
                    setIsMobile(mobile);
                    if (!mobile) {
                        setIsOpen({
                            "1": true,
                            "2": true
                        }); // Both sections open on desktop
                    } else {
                        setIsOpen({
                            "1": false,
                            "2": false
                        }); // Closed by default on mobile
                    }
                }
            }["BestAgency.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "BestAgency.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["BestAgency.useEffect"];
        }
    }["BestAgency.useEffect"], []);
    const handleClickOpen = (section)=>{
        if (!isMobile) return; // Disable toggle on desktop
        setIsOpen((prev)=>({
                ...prev,
                [section]: !prev[section]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pb-50 sm-px-20 sm-pt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-center mb-20 sm-mb-20 frame-900 sm-text-start",
                initial: "hidden",
                whileInView: "show",
                variants: fadeUp,
                viewport: {
                    once: true
                },
                children: [
                    "Expert Crafted, Fast & High-Converting ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx",
                        lineNumber: 54,
                        columnNumber: 48
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Web Design Innovation"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-center mb-50 sm-mb-20 sm-text-start",
                initial: "hidden",
                whileInView: "show",
                variants: fadeUp,
                transition: {
                    delay: 0.2
                },
                viewport: {
                    once: true
                },
                children: "Creating Digital Experiences That Stand Out- Web Design Company Dubai"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$bestAgency$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bestAgencyContainerBox,
                children: [
                    [
                        {
                            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$high$2d$end$2d$ability$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$high$2d$end$2d$ability$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "High End Ability in Website Design and Development",
                            text: "As one of Dubai's leading website design companies, WD Agency specializes in crafting visually striking, high-performance websites that deliver exceptional user experiences. Our team combines creative excellence with technical expertise to build digital solutions."
                        },
                        {
                            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$best$2d$practices$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$best$2d$practices$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "We Follow Website Design and Development Best Practices",
                            text: "We leverage cutting-edge web design frameworks, industry best practices, and emerging technologies to create websites that exceed client expectations. Our forward-thinking approach ensures your digital presence stays ahead of market trends while maintaining optimal performance, security, and scalability."
                        },
                        {
                            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$spectacular$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$spectacular$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "High End Ability in Website Design and Development",
                            text: "Recognized as a top-rated web design company in Dubai, our work has been featured and endorsed by leading industry platforms. Our award-winning portfolio showcases diverse projects across multiple sectors, demonstrating our consistent ability to deliver exceptional results that elevate brands."
                        },
                        {
                            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$brand$2d$identity$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$brand$2d$identity$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "Top-level expertise in Website Design and Development",
                            text: "Our dedicated team of senior web designers invests significant effort into understanding your business objectives and brand identity. We don't just build websites- we create digital experiences that authentically represent your values, resonate with your target audience, and position your brand for long-term growth."
                        },
                        {
                            img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$deliver$2d$the$2d$best$2d$results$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$deliver$2d$the$2d$best$2d$results$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "We Deliver The Best Website Design and Development Services",
                            text: "As expert website development specialists, we thrive on solving complex technical challenges and delivering innovative solutions that drive success. Our proven methodology, attention to detail, and commitment to excellence ensure we transform your vision into a powerful digital asset."
                        }
                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$bestAgency$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].innerBestAgencyBox,
                            initial: "hidden",
                            whileInView: "show",
                            variants: fadeUp,
                            transition: {
                                delay: index * 0.15
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.img,
                                    alt: item.alt
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "fw-500",
                                    children: item.text
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/BestAgency.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BestAgency, "QM2r8VKE823aYft2e08IwQ8Ic0E=");
_c = BestAgency;
const __TURBOPACK__default__export__ = BestAgency;
var _c;
__turbopack_context__.k.register(_c, "BestAgency");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/WhatSetsUs.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "innerContainer": "WhatSetsUs-module__TIy1Aq__innerContainer",
  "whatSetsUsContainer": "WhatSetsUs-module__TIy1Aq__whatSetsUsContainer",
});
}),
"[project]/src/app/(frontend)/component/pages/home/WhatSetsUs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$WhatSetsUs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/WhatSetsUs.module.css [app-client] (css module)");
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
const WhatSetsUs = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$WhatSetsUs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].whatSetsUsContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "frame-1200 py-100 sm-p-20 ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$WhatSetsUs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].innerContainer,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-20",
                        children: "Redefining Web Design & Development Services in the UAE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/WhatSetsUs.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "True digital success is built on the pillars of innovation, performance, and design. With a decade of expertise, we craft user-centric websites that seamlessly blend creativity with functionality. Our cutting-edge design capabilities and true creative vision ensure every website we deliver provides a personalized browsing experience that resonates with your audience. In the vibrant and competitive landscape of Dubai, we don’t just build websites- we create digital experiences that inspire, engage, and set new benchmarks for excellence."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/WhatSetsUs.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/WhatSetsUs.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(frontend)/component/pages/home/WhatSetsUs.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/WhatSetsUs.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WhatSetsUs;
const __TURBOPACK__default__export__ = WhatSetsUs;
var _c;
__turbopack_context__.k.register(_c, "WhatSetsUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/ourCoreStrengths.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomBox": "ourCoreStrengths-module__F3LpGW__bottomBox",
  "card": "ourCoreStrengths-module__F3LpGW__card",
  "grid": "ourCoreStrengths-module__F3LpGW__grid",
  "lottie": "ourCoreStrengths-module__F3LpGW__lottie",
});
}),
"[project]/src/app/(frontend)/assets/images/Forward-Thinking.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Forward-Thinking.a98d0256.png");}),
"[project]/src/app/(frontend)/assets/images/Forward-Thinking.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/Forward-Thinking.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Forward$2d$Thinking$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/Forward-Thinking.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Forward$2d$Thinking$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 200,
    height: 200,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8klEQVR42jWOQUuEQBiGR3QykmhGqDbX7CAlBs2hrJBYYdlYKhvQdXKHxmKUYaG6BP2R/oG3OnXt97Uu+d4+nu99eAH4D4YbuBpcCrpNaOXGjxXjs7ZtP1fQ0k2r3Dt/CKzBUXeXk/vs9+vn+4nxAjiOs8tzlr8/L14ppVOE0FYURYRf01mzP2qAUkp4njc0TXMtDMPDKi8Z2XRPxjgYq+FIgSzL7vodEELjQ768LY6nTe1cSXcdu6Cua96B/ilN08k8uc2LndPC0HSjM9z4vn/QQdu2kZRybmOMNKBpq0aSJBeEkGBpgUIIFsfxmb5Mb/wDetYuMyXvuCkAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/Seamless-Navigability.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Seamless-Navigability.c2b06df7.png");}),
"[project]/src/app/(frontend)/assets/images/Seamless-Navigability.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/Seamless-Navigability.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Seamless$2d$Navigability$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/Seamless-Navigability.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Seamless$2d$Navigability$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 200,
    height: 200,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+0lEQVR42jWP0UuDUBjFL/kezNFDtWmICyNmbQmSTnNhrdSl2YuohNdBchXpRUHoqUAffPJP7t7BPjgvH+ccfgf0ff+bZRk8qG3bn2EYOpZlp4AcfiayLN8qirJUVfXOMAw5SZKA53mOoqgjoOu6StP0KIoiPwxDl6goCljXNaqqChHDiuO4C4RQ5nne1n1zHd99d3cJ/Oy67g/guhBCGODkRxzHvjifX6nj2b1zIlrbx40FcHLXNM13mqYxMZZlmS7OZuLL+Npy1s8WwCCUJEkL27ZfTdPUpueT0+Uxe/MwulxZ66fNfgnDMBNcH2iaRngYQRB4wpbn+dc/6gVH25W9gZIAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/Strategic-Problem.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Strategic-Problem.961bf91d.png");}),
"[project]/src/app/(frontend)/assets/images/Strategic-Problem.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/Strategic-Problem.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Strategic$2d$Problem$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/Strategic-Problem.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Strategic$2d$Problem$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 200,
    height: 200,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/UlEQVR42h2Oy06DQABF2Rqt0RBjE4joQk2tr0QLSHBmbCVTHlbKaHguRqUgopEiG93RL3fC2ZzFPYvL8Ty/xdiUJEmglJKqql4Mw9B7vd46Y41zXRc7jjNJ0zRg41uSJPOmaXJmL4oilwMAKAgh1TRNRMDUXo79Auq3ShAEM0KI1QWyLF8OdvePZjsX9t+B9Xu2IQx1VRt5nmd2gaaoV18nZhH1Zf97b/JZiDALkT3vAowxRBDelAOcBf0ReRfhgvnJv7MfwjB85Nq2/amXdVYN7TIXAP0QUY62j8H14el5Xdc5x56/rtpVU3k0K62QLqbPCUb3aIyQFsex+w9OhEkO5U01dQAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/Holistic-Expertise.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Holistic-Expertise.2d66f9d8.png");}),
"[project]/src/app/(frontend)/assets/images/Holistic-Expertise.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/Holistic-Expertise.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Holistic$2d$Expertise$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/Holistic-Expertise.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Holistic$2d$Expertise$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 200,
    height: 200,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA80lEQVR42hWN3U6DQBCFl2q5asW2FKrVGKPYQkBAMI2yaKzy0wSW7S4VLyBRok8A7x93J/mSk+9MZgBgIwBBEAdHw2fpZhOc3j6Jg2ORO96BuTiWo6m+tUZL42vxSD9Vnzrjy/toZrzNhqMp2EjXfql4GM/dfK+4OVUe0EH19qXqYe/kygXnkrz4hnlVagHSJxd368lSqzSIf8K8OpNkFViWtcqybLtL09c4jsMkSUKWX7izbVsHQRB4Xdf9UkqTtm0PHEJI0vf9H4TQB03TENM01wihd36BAYui+GBuVdc1AY7jGPwNkxHGeMdIWY75Au/+AQ0cNi8jpN/sAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ourCoreStrengths$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/ourCoreStrengths.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Forward$2d$Thinking$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Forward$2d$Thinking$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/Forward-Thinking.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/Forward-Thinking.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Seamless$2d$Navigability$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Seamless$2d$Navigability$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/Seamless-Navigability.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/Seamless-Navigability.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Strategic$2d$Problem$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Strategic$2d$Problem$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/Strategic-Problem.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/Strategic-Problem.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Holistic$2d$Expertise$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Holistic$2d$Expertise$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/Holistic-Expertise.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/Holistic-Expertise.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
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
const strengths = [
    {
        title: "Forward-Thinking Ideation",
        desc: "We cultivate and transform fresh perspectives into compelling digital experiences that set your brand apart.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Forward$2d$Thinking$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Forward$2d$Thinking$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "We follow forward thinking ideation in website design"
    },
    {
        title: "Seamless Navigability",
        desc: "Our websites are architected for intuitive interaction, catering to diverse user journeys with effortless flow.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Seamless$2d$Navigability$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Seamless$2d$Navigability$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "We Design Websites with Seamless Navigability"
    },
    {
        title: "Strategic Problem Solving",
        desc: "As adept digital troubleshooters, we decode complex challenges and deliver refined, results-driven solutions.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Strategic$2d$Problem$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Strategic$2d$Problem$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "We provide Strategic Problem Solving in Website Development"
    },
    {
        title: "Holistic Expertise",
        desc: "From intricate builds to scalable platforms, our multidisciplinary capabilities empower your business to thrive in the digital realm.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Holistic$2d$Expertise$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$Holistic$2d$Expertise$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "We have 12+ Years of Hands-on Expertise in Website Design"
    }
];
const OurCoreStrengths = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-py-50 sm-px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "text-center sm-text-start frame-1000 mb-50 sm-mb-20",
                initial: {
                    opacity: 0,
                    y: 30
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
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-20 sm-mb-20",
                        children: "What Sets Us Apart As The Best Web Development Agency in Dubai, UAE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "We cultivate creativity and technology in every website that drives value. Our creative masterminds harness their idea and all technological resources to create a prominent solution."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ourCoreStrengths$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: strengths.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ourCoreStrengths$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        initial: {
                            opacity: 0,
                            y: 50,
                            scale: 0.9
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        },
                        transition: {
                            duration: 0.6,
                            delay: index * 0.2
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: item.image,
                                alt: item.alt,
                                width: 80,
                                height: 80
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "py-20 sm-py-10",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: item.desc
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `sm-text-start sm-mt-30 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ourCoreStrengths$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomBox}`,
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.2
                },
                viewport: {
                    once: true
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Website Development Agency harnesses visionary thinking to give your brand a distinct edge in a fiercely competitive market. Backed by a diverse pool of talent and deep industry knowledge, we are committed to delivering the best quality solutions aligned with your business objectives."
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/OurCoreStrengths.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = OurCoreStrengths;
const __TURBOPACK__default__export__ = OurCoreStrengths;
var _c;
__turbopack_context__.k.register(_c, "OurCoreStrengths");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/technologyStack.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "technologyStack-module__-eaIpG__card",
  "grid": "technologyStack-module__-eaIpG__grid",
});
}),
"[project]/src/app/(frontend)/assets/images/reacticon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/reacticon.5c4fb13b.svg");}),
"[project]/src/app/(frontend)/assets/images/reacticon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/reacticon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reacticon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/reacticon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reacticon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 114,
    height: 102,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/nodejsicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/nodejsicon.94c96ab5.svg");}),
"[project]/src/app/(frontend)/assets/images/nodejsicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/nodejsicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$nodejsicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/nodejsicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$nodejsicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 138,
    height: 85,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/laravelicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/laravelicon.4928a099.svg");}),
"[project]/src/app/(frontend)/assets/images/laravelicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/laravelicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$laravelicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/laravelicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$laravelicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 169,
    height: 39,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/wordpressicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/wordpressicon.3ed91070.svg");}),
"[project]/src/app/(frontend)/assets/images/wordpressicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/wordpressicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$wordpressicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/wordpressicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$wordpressicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 90,
    height: 90,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/magentoicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/magentoicon.bb5b7696.svg");}),
"[project]/src/app/(frontend)/assets/images/magentoicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/magentoicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$magentoicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/magentoicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$magentoicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 90,
    height: 106,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/shopifyicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/shopifyicon.3883b5ff.svg");}),
"[project]/src/app/(frontend)/assets/images/shopifyicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/shopifyicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$shopifyicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/shopifyicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$shopifyicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 93,
    height: 106,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/fluttericon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/fluttericon.5cf9f183.svg");}),
"[project]/src/app/(frontend)/assets/images/fluttericon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/fluttericon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fluttericon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/fluttericon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fluttericon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 79,
    height: 98,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/reactnativeicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/reactnativeicon.fd324355.svg");}),
"[project]/src/app/(frontend)/assets/images/reactnativeicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/reactnativeicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reactnativeicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/reactnativeicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reactnativeicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 87,
    height: 95,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/phpicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/phpicon.0ed76bac.svg");}),
"[project]/src/app/(frontend)/assets/images/phpicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/phpicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$phpicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/phpicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$phpicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 143,
    height: 73,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/pythonicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/pythonicon.ab625193.svg");}),
"[project]/src/app/(frontend)/assets/images/pythonicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/pythonicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$pythonicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/pythonicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$pythonicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 101,
    height: 101,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/awsicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/awsicon.12ba507c.svg");}),
"[project]/src/app/(frontend)/assets/images/awsicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/awsicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$awsicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/awsicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$awsicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 141,
    height: 83,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/mongodbicon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/mongodbicon.348c6d98.svg");}),
"[project]/src/app/(frontend)/assets/images/mongodbicon.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/mongodbicon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$mongodbicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/mongodbicon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$mongodbicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 105,
    height: 105,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$technologyStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/technologyStack.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CommonTechnologyStack = ({ heding, subheding, techData })=>{
    _s();
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handlelink = (link)=>{
        route.push(link);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pb-50 sm-text-start sm-px-20 sm-pt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "frame-1000 text-center mb-50 sm-text-start sm-mb-30 sm-mt-70",
                initial: {
                    opacity: 0,
                    y: 30
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
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-20 sm-mb-20",
                        children: heding
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: subheding
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$technologyStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: techData.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$technologyStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            "--hover-gradient": tech.gradient
                        },
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
                            delay: index * 0.1
                        },
                        viewport: {
                            once: true
                        },
                        onClick: ()=>handlelink(tech.Link),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: tech.image,
                                alt: tech.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: tech.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CommonTechnologyStack, "JD5qVJBo0MNDbUb5oI+DMKChels=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CommonTechnologyStack;
const __TURBOPACK__default__export__ = CommonTechnologyStack;
var _c;
__turbopack_context__.k.register(_c, "CommonTechnologyStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/TechnologyStack.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$technologyStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/technologyStack.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reacticon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reacticon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/reacticon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/reacticon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$nodejsicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$nodejsicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/nodejsicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/nodejsicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$laravelicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$laravelicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/laravelicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/laravelicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$wordpressicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$wordpressicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/wordpressicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/wordpressicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$magentoicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$magentoicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/magentoicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/magentoicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$shopifyicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$shopifyicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/shopifyicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/shopifyicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fluttericon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fluttericon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/fluttericon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/fluttericon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reactnativeicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reactnativeicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/reactnativeicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/reactnativeicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$phpicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$phpicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/phpicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/phpicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$pythonicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$pythonicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/pythonicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/pythonicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$awsicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$awsicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/awsicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/awsicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$mongodbicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$mongodbicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/mongodbicon.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/mongodbicon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$component$2f$pages$2f$common$2f$CommonTechnologyStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/component/pages/common/CommonTechnologyStack.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
;
;
;
;
;
const TechnologyStack = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$component$2f$pages$2f$common$2f$CommonTechnologyStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        heding: "Our Website Development Technology Stack",
        subheding: "We possess deep expertise in all frontend and backend website development technologies.",
        techData: [
            {
                name: "React",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reacticon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reacticon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)",
                Link: "/platforms/react-js-website-development"
            },
            {
                name: "Node.js",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$nodejsicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$nodejsicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #6CC04A 16.44%, #539E43 60.27%)",
                Link: "/platforms/nodejs-website-development"
            },
            {
                name: "Laravel",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$laravelicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$laravelicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #FF6960 16.44%, #FF2D20 60.27%)",
                Link: "/platforms/laravel-website-development"
            },
            {
                name: "WordPress",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$wordpressicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$wordpressicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #4A87A3 16.44%, #21759B 60.27%)",
                Link: "/platforms/wordpress-website-development"
            },
            {
                name: "Magento",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$magentoicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$magentoicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #FF7949 0%, #EC6737 118.42%)",
                Link: "/platforms/magento-website-development"
            },
            {
                name: "Shopify",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$shopifyicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$shopifyicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #CEF682 16.44%, #95BF46 60.27%)",
                Link: "/platforms/shopify-website-development"
            },
            {
                name: "Flutter",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fluttericon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fluttericon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #45D1FD 16.44%, #02539A 100%)",
                Link: "/platforms/flutter-website-development"
            },
            {
                name: "React Native",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reactnativeicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$reactnativeicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)",
                Link: "/platforms/react-native-website-development"
            },
            {
                name: "PHP",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$phpicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$phpicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #697EBA 17.27%, #6E81B6 73.33%)",
                Link: "/platforms/php-website-development"
            },
            {
                name: "Python",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$pythonicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$pythonicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #387EB8 -73.67%, #FFC331 27.62%)",
                Link: "/platforms/python-website-development"
            },
            {
                name: "AWS",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$awsicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$awsicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #F7DCB4 17.91%, #FF9900 65.66%)",
                Link: "/platforms/aws-website-development"
            },
            {
                name: "MongoDB",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$mongodbicon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$mongodbicon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                gradient: "linear-gradient(180deg, #6CAC48 17.91%, #599636 65.66%)",
                Link: "/platforms/mongodb-website-development"
            }
        ]
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/TechnologyStack.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TechnologyStack;
const __TURBOPACK__default__export__ = TechnologyStack;
var _c;
__turbopack_context__.k.register(_c, "TechnologyStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/developmentServices.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "developmentServices-module__oAF7Eq__card",
  "content": "developmentServices-module__oAF7Eq__content",
  "grid": "developmentServices-module__oAF7Eq__grid",
  "image": "developmentServices-module__oAF7Eq__image",
  "imageOverlay": "developmentServices-module__oAF7Eq__imageOverlay",
  "imageWrapper": "developmentServices-module__oAF7Eq__imageWrapper",
  "infoIcon": "developmentServices-module__oAF7Eq__infoIcon",
  "learnMore": "developmentServices-module__oAF7Eq__learnMore",
  "viewDesignBtn": "developmentServices-module__oAF7Eq__viewDesignBtn",
});
}),
"[project]/src/app/(frontend)/assets/images/uiux.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/uiux.291e74c8.webp");}),
"[project]/src/app/(frontend)/assets/images/uiux.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/uiux.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$uiux$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/uiux.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$uiux$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRgQBAABXRUJQVlA4TPcAAAAvB8AAEM1VICICHgjACQQAAIApJzUBUAAAPAAAAAAEACAAAAAAAACAAACAAAAEIAEAICRA3kQAAADwQIBNAAAAAM7/65KqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA5eto9EIATCAAAgPPf1swgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAELE/+nOA5EAAAAAADj/DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBlGvdsqyikNoiXphsV+ZKPN9sAULwFkg+SdE0GGTNYmgf3qzkNwmxOE2eb1KX/6jn6etYvEsN1hxsDAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/webdev.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/webdev.7328deea.webp");}),
"[project]/src/app/(frontend)/assets/images/webdev.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/webdev.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webdev$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/webdev.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webdev$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRgYBAABXRUJQVlA4TPoAAAAvB8AAEM1VICICHggACQAAAIAFA8MAhgEDMAADDGAAGADAAAAAAAAAAAAAgGEQAwwAhvGz/QMAAMADATYBAAAAOP8sUQHyBAEIUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEYgqlMsDATiBAAAAOP+Gm3gCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECg9JCoaHN5IBIAAAAAAOefAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAMNQ8PDSYp3PJTTL8nyY84CGuz6VekBaQlrn/4gbI1FTpmj6Ova+jThnB1qvyFcGMdG1MKmytKC6pg4mng"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/frontend.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/frontend.4016ed76.webp");}),
"[project]/src/app/(frontend)/assets/images/frontend.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/frontend.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$frontend$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/frontend.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$frontend$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRgQBAABXRUJQVlA4TPcAAAAvB8AAEM1VICICHgjACQQAAAAkJVQcAAMAAAEACAAIAAAAAAAAAAAAAAAAAAEAAChCGQQIzzcCAADwQABIAAAAAM4fGqCfY4wNABgAAAAAAAAAAAAAAAAAAAAAAADAgAEAAQzBNcsDATYBAAAAOP/uTQAgBwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwI/c+/JAJAAAAAAAzj8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYJmXbX+FR5+LNV2jBheE8aEsBErNRSQDymW4sfkU7XKJwNyHmNKqfpn4LpW3B2Mez+il1wSlwo3OpwwDAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/fullstack.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/fullstack.ac10a11b.webp");}),
"[project]/src/app/(frontend)/assets/images/fullstack.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/fullstack.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fullstack$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/fullstack.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fullstack$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1256,
    height: 600,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRgIBAABXRUJQVlA4TPYAAAAvB8AAEM1VICICHggACQAAAIA9wTBgDAAAAAAwAAAAAAAAAAAAAAAAAADDYAAwAD+AMW7OcAEAAHggwCYAAAAA59/+VNxTHAAOIAIAAAAAAAAAAAAAAAAAAAAAAACAAAAAACAAdHkgwCYAAAAA578nKQAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIRPr7/3sgEgAAAAAA558BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsIx3DAn5F0IQWVuXyx22om/R0jlQS1RAYfrmhqoqUlbF7LCW0lNiYJC2jzu+R/UkMB9kGvAHsWwzx2U="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/industries/1.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/1.7ba25e2b.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/1.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/1.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/industries/2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/2.3e0dd795.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/2.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/2.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/industries/3.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/3.1d615e52.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/3.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/3.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/industries/4.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/4.3ca4d2b9.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/4.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/4.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/industries/5.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/5.331be3ff.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/5.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/5.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/industries/6.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/6.43a01776.webp");}),
"[project]/src/app/(frontend)/assets/images/industries/6.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/industries/6.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/developmentServices.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/1.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/1.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/2.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/2.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/3.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/3.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/4.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/4.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/5.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/5.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/industries/6.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/industries/6.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
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
const CommonIndustries = ({ heding = "Proven Experience Across Industries", subheding = "We build custom web solutions across multiple industries to boost engagement and drive growth.", services = [
    {
        title: "Real Estate & Property",
        desc: "Searchable listings, virtual tours, lead routing and CRM integrations for property management.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Real Estate & Property Web Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/real-estate-web-development",
        viewlink: "/website-templates/real-estate"
    },
    {
        title: "Hospitality & Travel",
        desc: "Booking integrations, rate management, multi-language content and conversion optimised funnels.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Hospitality & Travel Web Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/travel-web-development",
        viewlink: "/website-templates"
    },
    {
        title: "Healthcare Websites",
        desc: "Patient portals, appointment booking, stern security and data privacy workflows.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Healthcare Website Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/healthcare-web-development",
        viewlink: "/website-templates/healthcare"
    },
    {
        title: "Portfolio Websites",
        desc: "Project galleries, case studies, client testimonials, skill highlights, easy navigation.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Portfolio Website Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/portfolio-web-development",
        viewlink: "/website-templates"
    },
    {
        title: "Retail & eCommerce",
        desc: "Product merchandising, omni-channel sync, and promotional mechanisms.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Retail & eCommerce Website Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/e-commerce-web-development",
        viewlink: "/website-templates/ecommerce"
    },
    {
        title: "Corporate Websites",
        desc: "Company overview, services, team profiles, client testimonials, contact forms, brand messaging.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$industries$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Corporate Website Design Services in Dubai, UAE- Website Development Agency",
        btnname: "Know More",
        link: "/corporate-web-development",
        viewlink: "/website-templates"
    }
], btnname = null, btnlink = null })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 pt-100 sm-pb-50 sm-pt-0 sm-px-20 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        variants: cardVariants,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true
                        },
                        custom: i,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: service.img,
                                        alt: service.title,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    service.viewlink && service.viewlink !== "#" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageOverlay,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: service.viewlink,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewDesignBtn,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoIcon,
                                                    children: "i"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " View Designs"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-20",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-10",
                                        children: service.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: service.link,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learnMore,
                                        children: [
                                            service.btnname,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "30",
                                                height: "12",
                                                viewBox: "0 0 30 12",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M29.5303 6.53033C29.8232 6.23744 29.8232 5.76256 29.5303 5.46967L24.7574 0.696699C24.4645 0.403806 23.9896 0.403806 23.6967 0.696699C23.4038 0.989593 23.4038 1.46447 23.6967 1.75736L27.9393 6L23.6967 10.2426C23.4038 10.5355 23.4038 11.0104 23.6967 11.3033C23.9896 11.5962 24.4645 11.5962 24.7574 11.3033L29.5303 6.53033ZM0 6V6.75H29V6V5.25H0V6Z",
                                                    fill: "#E83E8C"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: btnname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "white-btn",
                    href: btnlink,
                    children: btnname
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CommonIndustries;
const __TURBOPACK__default__export__ = CommonIndustries;
var _c;
__turbopack_context__.k.register(_c, "CommonIndustries");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/DevelopmentServices.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/developmentServices.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$uiux$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$uiux$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/uiux.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/uiux.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webdev$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webdev$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/webdev.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/webdev.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$frontend$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$frontend$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/frontend.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/frontend.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fullstack$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fullstack$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/fullstack.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/fullstack.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$component$2f$pages$2f$common$2f$CommonIndustries$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/component/pages/common/CommonIndustries.jsx [app-client] (ecmascript)");
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
const services = [
    {
        title: "UI/UX & Prototyping",
        desc: "User-centered design approaches that create intuitive and engaging digital experiences.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$uiux$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$uiux$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "UI/UX and Prototyping Services",
        btnname: "Learn More",
        link: "/services/wireframing-prototyping"
    },
    {
        title: "Dynamic Web Development",
        desc: "Custom web applications built with modern technologies to deliver exceptional user experiences.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webdev$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webdev$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Dynamic Web Development Services",
        btnname: "Learn More",
        link: "/services/dynamic-website-development"
    },
    {
        title: "Frontend Development",
        desc: "Modern, responsive user interfaces built with cutting-edge frontend technologies.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$frontend$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$frontend$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Frontend Development Services",
        btnname: "Learn More",
        link: "/services/frontend-development"
    },
    {
        title: "Full Stack Development",
        desc: "End-to-end web solutions covering both frontend and backend development needs.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fullstack$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$fullstack$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Full Stack Development Services",
        btnname: "Learn More",
        link: "/services/full-stack-development"
    }
];
const DevelopmentServices = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$component$2f$pages$2f$common$2f$CommonIndustries$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        btnname: "Contact for Quote",
        btnlink: "/contact-us",
        heding: "Full-Scale Web Design & Development Services",
        subheding: " We deliver a complete web design and development tailored to your business goals.",
        services: services
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/DevelopmentServices.jsx",
        lineNumber: 51,
        columnNumber: 4
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DevelopmentServices;
const __TURBOPACK__default__export__ = DevelopmentServices;
var _c;
__turbopack_context__.k.register(_c, "DevelopmentServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/developmentProcess.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "developmentProcess-module__R4iO3a__card",
  "container": "developmentProcess-module__R4iO3a__container",
  "leftInnerContainer": "developmentProcess-module__R4iO3a__leftInnerContainer",
  "rightInnerContainer": "developmentProcess-module__R4iO3a__rightInnerContainer",
  "scrollWrapper": "developmentProcess-module__R4iO3a__scrollWrapper",
});
}),
"[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/developmentProcess.module.css [app-client] (css module)");
"use client";
;
;
;
;
const CommonDevelopmentProcess = ({ heding, subheding, processData })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftInnerContainer,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: heding
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        subheding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightInnerContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollWrapper,
                        children: processData.map((process, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$developmentProcess$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        dangerouslySetInnerHTML: {
                                            __html: process.description
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    process.pointsheding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "fs-22 fw-700 mt-20",
                                        children: process.pointsheding
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx",
                                        lineNumber: 39,
                                        columnNumber: 42
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    process.points && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "ml-40 mt-20",
                                        children: process.points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
_c = CommonDevelopmentProcess;
const __TURBOPACK__default__export__ = CommonDevelopmentProcess;
var _c;
__turbopack_context__.k.register(_c, "CommonDevelopmentProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/ DevelopmentProcess.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$component$2f$pages$2f$common$2f$CommonDevelopmentProcess$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/component/pages/common/CommonDevelopmentProcess.jsx [app-client] (ecmascript)");
"use client";
;
;
;
const DevelopmentProcess = ()=>{
    const processData = [
        {
            id: "01",
            title: "Discovery",
            description: `As a top-level web development company in Dubai, we strongly consider the fact that each business idea has its unique principles and visions and hence requires the creation of out-of-the-box concepts. We offer web development services with a deep understanding of client’s needs and vision in detail. This is the most crucial stage that includes innovative strategies to design state-of-the-art websites that outperforms in the marketing. `,
            pointsheding: "We invest our resources in:",
            points: [
                "Understanding the business strengths and weaknesses.",
                "Demands of the service/products in the market.",
                "Awareness and demands among potential clients."
            ]
        },
        {
            id: "02",
            title: "UX Design",
            description: `UX designed website makes sure that the website is ready to rise, shine, and grow as a brand. A strategic UI design increases conversions up to 400%. Thus, UI designing is an important factor to build a stronger online presence in this digital age. We ensure our UI designs encompass every element needed to transform ideas into a reality, drive customer retention, and success. We use all latest technologies and tools to build high-end UI design for websites.`,
            points: [
                "Grabbing customer attention and delivering a better user experience.",
                "Designing visually appealing interfaces that reflect brand identity.",
                "Device centric design that our true reflects professionalism."
            ],
            pointsheding: "We invest our resources in:"
        },
        {
            id: "03",
            title: "Front-End Design",
            description: `Our front-end design approach goes beyond aesthetics- we ensure that websites are responsive, functional, and technically sound. We use all modern frameworks to create intuitive interfaces that are visually appealing and deliver a flawless experience across all devices. Each element of a website is coded with precision to improve usability, loading, and overall performance. Starting from a <a href ="/blog/mobile-first-web-design-for-businesses-key-elements--benefits"> mobile responsive</a> layout to each interactive component, we build websites that truly represent your brand value.`,
            points: [
                "Designing intuitive interfaces that align with user behavior.",
                "Applying strategic use of color, typography, and spacing.",
                "Ensuring responsiveness and consistency across all devices and screen sizes."
            ],
            pointsheding: "We invest our resources in:"
        },
        {
            id: "04",
            title: "Development",
            description: `As the best website development agency in Dubai, we create innovative web solutions to help clients achieve their digital goals. Our experts combine cutting-edge technology frameworks, clean code, and stable architecture to build fast, secure, and scalable websites. We are committed to delivering the best web development services in the UAE on time and every time.`,
            points: [
                "Building scalable, secure, and high-performance websites.",
                "Implementing secure, scalable back-end systems for long-term growth.",
                "Maintaining clean, modular code for easier future updates and scalability."
            ],
            pointsheding: "We invest our resources in:"
        },
        {
            id: "05",
            title: "Launch & Support",
            description: `After successful development and thorough testing, we ensure a seamless launch of your website, making it live without any glitches. We also provide reliable hosting solutions to guarantee your website is fast, secure, and always accessible. But we don’t stop here, we provide ongoing support and maintenance to keep your digital presence running optimally.`,
            points: [
                "Complete website deployment and hosting setup.",
                "Post-launch support for 24*7 and performance optimization.",
                "Regular updates and security maintenance."
            ],
            pointsheding: "We invest our resources in:"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$component$2f$pages$2f$common$2f$CommonDevelopmentProcess$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        processData: processData,
        heding: "Our Website Development Process Flow"
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/ DevelopmentProcess.jsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DevelopmentProcess;
const __TURBOPACK__default__export__ = DevelopmentProcess;
var _c;
__turbopack_context__.k.register(_c, "DevelopmentProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/webExperiences.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomSection": "webExperiences-module__iNU_4G__bottomSection",
  "bottomTextContent": "webExperiences-module__iNU_4G__bottomTextContent",
  "bottomimageContent": "webExperiences-module__iNU_4G__bottomimageContent",
  "imageContent": "webExperiences-module__iNU_4G__imageContent",
  "middleSection": "webExperiences-module__iNU_4G__middleSection",
  "middleSectionImg": "webExperiences-module__iNU_4G__middleSectionImg",
  "middleSectionImg_2": "webExperiences-module__iNU_4G__middleSectionImg_2",
  "middleSectionText": "webExperiences-module__iNU_4G__middleSectionText",
  "textContent": "webExperiences-module__iNU_4G__textContent",
  "topSection": "webExperiences-module__iNU_4G__topSection",
});
}),
"[project]/src/app/(frontend)/assets/images/webexprience.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/webexprience.be9f9f37.webp");}),
"[project]/src/app/(frontend)/assets/images/webexprience.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/webexprience.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexprience$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/webexprience.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexprience$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1038,
    height: 960,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/webp;base64,UklGRjoBAABXRUJQVlA4TC4BAAAvB4ABEM1VICICHghADgIAAAB9rrZGFZgBAAJAAAAAAAAAAAAAAAAAAAAAAAAAQIARiCijKIt5axUAAAAeCEAOAgAAwPn//VbavjFtIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIACiQBRu+eBABwhAAAAnP9t3/c+EAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEbdtuHogEAAAAAMD5ZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs+/u5ZjTohwdFgXFTywLkfT40EC7Cj0Zo2n6VhTQh8QtoCRCsKkZ4IZqUpA8GpBRIps9PRRAdSntczLW4GTaZHA8Hh/nb9vOGZ1EvpWzuUnw3Z3GrkW3J9jDtrqzvMrksE1d61iQCISYIBw=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/women.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/women.8fdb8450.webp");}),
"[project]/src/app/(frontend)/assets/images/women.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/women.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$women$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/women.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$women$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 548,
    height: 1076,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRhQBAABXRUJQVlA4TAcBAAAvA8ABEM1VICICHggACQAAAIDZEA7AZGwMwAMAZgAAAAAAAAAAAAAAAAAAABgAAgMbgGHw4wEAAPBAAFIYAAAAzv8EpRLhQQECAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACKAEjxaas8EJATAAAAgPPf9UwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCR+vdAAEgAAAAAzn88gAwA4GGGhwEYAAMAAABgbIAxAAYAAAwAwIAZAAYAwMM8wJBKFEQ3kccu57CD/SLT0yhDBQqVZE/U1vtyWku9y98q2EQFGzrNzoRvvWQukfPUUWmclVeh35WLP+YzDFqA2LyD08CqW8M9SwA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/woman-2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/woman-2.5068f93b.webp");}),
"[project]/src/app/(frontend)/assets/images/woman-2.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/woman-2.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/woman-2.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 924,
    height: 954,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRoYBAABXRUJQVlA4THkBAAAvB8ABEM1VICICHgiADQIAAIBx7qnzrooSCRmBIAAAEQAAAAAAAAAAAAAAAAAAAggAFABVT0Dk0v0BAADwQABwEAEAAM7/MpMjQW0EL5IACEAQAAAAAAAAAAAAAAAAAAQAAAgIQBiA8oPhRFtrnQcCYIMAAABw/l/1chV/5xUcAAECAAAAAAAAAAAAAAAAAAAAAAAAAAgQAKQ/hdfrtHkgwDAIAAAA579XwhMikANJ8QQAEAJEAApAAAEEAAQAgRwEAAAAkgNCAHCAAAkIhXsCMAIAACD4tYhxMgtRorSNUuuyjgAM5SWzkKswHk3fsKvIuriOHp7OdiLAHIae9mdRy8iLveotr+hgzUVcxIgD+ZWIyVKmYzN+fUnfVM2IPmmCbZODxA4F5+ghNce98z+eXyLUNqDb9+9iuFrMmqN/g+zXtDovc5N+MAr//NCm9EDHYWKiHUWi2/kJkWl34L7Tq15SorPDhLV3SvVQn+vcOhTu1DJ85s/ABgA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/webexperience-3.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/webexperience-3.ab74a1cf.webp");}),
"[project]/src/app/(frontend)/assets/images/webexperience-3.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/webexperience-3.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexperience$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/webexperience-3.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexperience$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1044,
    height: 741,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/webp;base64,UklGRjQBAABXRUJQVlA4TCgBAAAvB0ABEM1VICICHgiADQIAAICd+3NwXoZEBAhuBHAYACAgBABAAAAAAAAAAAAAAAAAAQAAiKhCzQ8AAMADAchBAAAAOP/77+EtxQMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgYACZQUH1q2+aBABwhAAAAnH+732/+EQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASoVLO380DIkRgAAADOf2A9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQXIVE5edIEocXILSpZFADoPx/1O91MxssC6Fn2cq9ulv2oB5XZdTAtjR2s5NACZ6THlB6IX+N2fVnV0uY19O0XBTK8anrUBSnJe2Si+yTuV0L2Pfj/sd2gvuuNn659LethdvkOQ=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/webExperiences.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexprience$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexprience$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/webexprience.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/webexprience.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$women$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$women$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/women.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/women.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/woman-2.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/woman-2.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexperience$2d$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexperience$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/webexperience-3.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/webexperience-3.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
// Animation variants
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};
const Webexperiences = ({ content })=>{
    const defaultContent = {
        topSection: {
            title: "Best Website Development Agency - Crafting Next-Gen Web Experiences",
            descriptions: [
                "At Website Development Agency, we don’t just create websites, we are here to shape your digital identity that defines your brand. From artistic precision to innovation, our team creates custom websites that stand out in today’s cluttered digital landscape. We take each project as a fresh canvas where we blend flair, clarity, responsiveness, and cross-platform adaptability.",
                "We have expert designers and developers who bring unmatched web design and development skills. We engineer the best websites that serve a purpose, guiding users effortlessly with quick and easy navigation.",
                "We believe a website is more than just a digital platform, it is your brand’s voice and the foundation of your business. From wireframing and design to development and launch, we handle every phase with precision and attention to detail. At Website Development Agency, our approach is future-focused, ensuring your brand stays relevant while staying aligned with customer expectations."
            ],
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexprience$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexprience$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "Best Website Development Agency - Crafting Next-Gen Web Experiences"
        },
        middleSection1: {
            title: "What Makes Us a Leading Web Design Company in Dubai?",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$women$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$women$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "We Stand as The Leading Web Design Company in Dubai",
            points: [
                {
                    title: "Uncompromised Creativity:",
                    desc: "We take bold design decisions that reflect your uniqueness, not templated trends."
                },
                {
                    title: "Business-Aligned Development:",
                    desc: "Our sites are built to adapt and evolve with your goals."
                },
                {
                    title: "Custom Solutions for All Sizes:",
                    desc: "Whether you're a startup or an enterprise, we build to match your scale."
                },
                {
                    title: "Interactive & Intuitive UI:",
                    desc: "Each element is crafted for engagement, accessibility, and seamless user experience."
                },
                {
                    title: "Recognised Excellence:",
                    desc: "With awards and industry trust, we’ve proven our ability to deliver web excellence."
                }
            ]
        },
        middleSection2: {
            title: "Our Web Design & Development Services Include",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "Website Development Agency is The Best Web Design Agency in Dubai, UAE",
            points: [
                {
                    title: "Uncompromised Creativity:",
                    desc: "Pages that reflect your brand while offering smooth navigation and responsive layouts."
                },
                {
                    title: "Prototyping & Wireframes:",
                    desc: "Visuals that preview the user journey and encourage creative iterations."
                },
                {
                    title: "Full-Stack Development:",
                    desc: "From frontend animations to robust backend systems, we handle it all in-house."
                },
                {
                    title: "Responsive & Device-Optimized Layouts:",
                    desc: "A consistent experience on mobiles, tablets, desktops, and beyond."
                },
                {
                    title: "CMS Integration:",
                    desc: "Easy-to-manage content panels that put control in your hands."
                },
                {
                    title: "Website Revamp:",
                    desc: "Modernizing old designs with cutting-edge technology and fresh aesthetics."
                }
            ]
        },
        bottomSection: {
            title: "We Build Websites of All Types- Expert Designers at Your Doorstep",
            description: "We empower businesses of all levels with scalable and customized website solutions. Whether you are a startup business in Dubai or an established enterprise, we create customized web design and development packages to match your budget and objectives. Every business deserves a powerful online presence, and we make it possible with affordable pricing and customized solutions.",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexperience$2d$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$webexperience$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "We master all types of web design and development services",
            btnText: "Start Your Project Today",
            btnLink: "/contact-us"
        }
    };
    const data = content || defaultContent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "frame-1200 pt-100 sm-pt-0 sm-pb-50 sm-px-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topSection} sm-col-reverse`,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    variants: fadeUp,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textContent,
                            variants: fadeUp,
                            transition: {
                                delay: 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: data.topSection.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                data.topSection.descriptions.map((desc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: index === 0 ? "mt-20 mb-15 sm-my-10" : index === data.topSection.descriptions.length - 1 ? "" : "mb-15 sm-my-10",
                                        children: desc
                                    }, index, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                        lineNumber: 87,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContent,
                            variants: fadeUp,
                            transition: {
                                delay: 0.3
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: data.topSection.image,
                                alt: data.topSection.alt
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            data.middleSection1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].middleSection} p-30 mb-50 sm-p-20 sm-col-reverse`,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        variants: fadeUp,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].middleSectionImg,
                                variants: fadeUp,
                                transition: {
                                    delay: 0.2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: data.middleSection1.image,
                                    alt: data.middleSection1.alt
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].middleSectionText,
                                variants: fadeUp,
                                transition: {
                                    delay: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: data.middleSection1.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    data.middleSection1.points.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: index === data.middleSection1.points.length - 1 ? "mb-20" : "my-20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: point.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                point.desc
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    data.middleSection2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].middleSection} pb-0 px-30 pt-30 sm-px-20 sm-pt-20`,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        variants: fadeUp,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].middleSectionText} mb-30 `,
                                variants: fadeUp,
                                transition: {
                                    delay: 0.2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: data.middleSection2.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    data.middleSection2.points.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: index === data.middleSection2.points.length - 1 ? "mb-20" : "my-20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: point.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                point.desc
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].middleSectionImg_2,
                                variants: fadeUp,
                                transition: {
                                    delay: 0.3
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: data.middleSection2.image,
                                    alt: data.middleSection2.alt
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            data.bottomSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomSection}`,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    variants: fadeUp,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomimageContent,
                            variants: fadeUp,
                            transition: {
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: data.bottomSection.image,
                                alt: data.bottomSection.alt
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$webExperiences$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomTextContent,
                            variants: fadeUp,
                            transition: {
                                delay: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: data.bottomSection.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "my-20 sm-my-10",
                                    children: data.bottomSection.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm-text-center sm-mt-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: data.bottomSection.btnLink,
                                        className: "blue-btn",
                                        children: data.bottomSection.btnText
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/WebExperiences.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = Webexperiences;
const __TURBOPACK__default__export__ = Webexperiences;
var _c;
__turbopack_context__.k.register(_c, "Webexperiences");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/WebDesignApproach.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "box": "WebDesignApproach-module__ScWfaa__box",
  "boxcontainer": "WebDesignApproach-module__ScWfaa__boxcontainer",
});
}),
"[project]/src/app/(frontend)/assets/images/icons/building.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/building.38d3a871.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/building.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/building.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$building$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/building.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$building$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 110,
    height: 110,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/icons/simplifying.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/simplifying.8626ed8c.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/simplifying.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/simplifying.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$simplifying$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/simplifying.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$simplifying$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 110,
    height: 110,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/icons/tv.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/tv.806ecfc9.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/tv.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/tv.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$tv$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/tv.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$tv$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 110,
    height: 110,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/icons/dynamicvisuals.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dynamicvisuals.648f9688.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/dynamicvisuals.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/dynamicvisuals.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$dynamicvisuals$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/dynamicvisuals.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$dynamicvisuals$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 110,
    height: 110,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/icons/customersupport.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/customersupport.d27552ab.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/customersupport.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/customersupport.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$customersupport$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/icons/customersupport.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$customersupport$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 110,
    height: 110,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/WebDesignApproach.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$WebDesignApproach$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/WebDesignApproach.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$building$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$building$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/building.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/building.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$simplifying$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$simplifying$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/simplifying.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/simplifying.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$tv$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$tv$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/tv.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/tv.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$dynamicvisuals$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$dynamicvisuals$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/dynamicvisuals.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/dynamicvisuals.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$customersupport$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$customersupport$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/customersupport.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/customersupport.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
const boxData = [
    {
        id: 1,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$building$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$building$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        text: "Building web solutions that are immersive, intuitive, and intelligent"
    },
    {
        id: 2,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$simplifying$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$simplifying$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        text: "Simplifying navigation with clear calls-to-action and visual hierarchy"
    },
    {
        id: 3,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$tv$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$tv$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        text: "Ensuring high-end brand presentation and retention"
    },
    {
        id: 4,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$dynamicvisuals$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$dynamicvisuals$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        text: "Using dynamic visuals, videos, and animations where necessary"
    },
    {
        id: 5,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$customersupport$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$customersupport$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        text: "Giving you a voice in every decision, every iteration"
    }
];
// Animation variants
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.2
            }
        })
};
const WebDesignApproach = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "frame-700 text-center sm-text-start",
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
                children: "Transforming Ideas into Immersive Digital Experiences"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/WebDesignApproach.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$WebDesignApproach$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].boxcontainer} mt-60`,
                children: boxData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$WebDesignApproach$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].box,
                        custom: index,
                        initial: "hidden",
                        whileInView: "visible",
                        variants: fadeUp,
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: item.icon,
                                alt: "Icon"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/WebDesignApproach.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: item.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/WebDesignApproach.jsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/WebDesignApproach.jsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/WebDesignApproach.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/WebDesignApproach.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WebDesignApproach;
const __TURBOPACK__default__export__ = WebDesignApproach;
var _c;
__turbopack_context__.k.register(_c, "WebDesignApproach");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/ourJourney.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ourJourneyCard": "ourJourney-module__8dtHJG__ourJourneyCard",
  "ourJourneyContainer": "ourJourney-module__8dtHJG__ourJourneyContainer",
});
}),
"[project]/src/app/(frontend)/assets/images/designrush.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/designrush.d649d107.png");}),
"[project]/src/app/(frontend)/assets/images/designrush.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/designrush.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$designrush$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/designrush.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$designrush$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 662,
    height: 150,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AA9QWFABCAkgAAAAIwAAACAAAQEhBRweJQUgIR4GIyUiAA1KUksCCQo/AAAATQAAAEkAAgJMCjs+UA1KTUcOT1NN1CUHwbmN714AAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/goodfirms.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/goodfirms.0357888d.png");}),
"[project]/src/app/(frontend)/assets/images/goodfirms.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/goodfirms.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$goodfirms$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/goodfirms.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$goodfirms$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 660,
    height: 98,
    blurWidth: 8,
    blurHeight: 1,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAALElEQVR42gEhAN7/ADRnvsAcN2VjFSpPSxUpS0gYMFhUFSpOSxUpTEcXLVNOmfoIYdHgq2wAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/clutch.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/clutch.627517d5.png");}),
"[project]/src/app/(frontend)/assets/images/clutch.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/clutch.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$clutch$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/clutch.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$clutch$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 386,
    height: 110,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AAcTGGcFDxJOBhIWYgMICisIFhtyCw8STAsSFV4HEhdlAAcTGGgFDhJLCBcdfwgXHX0JGiGLJB0hkhsYG3gIFx1/G7QJ6HEBeUoAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/OurJourney.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ourJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/ourJourney.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$designrush$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$designrush$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/designrush.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/designrush.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$goodfirms$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$goodfirms$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/goodfirms.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/goodfirms.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$clutch$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$clutch$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/clutch.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/clutch.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const ourJourneyData = [
    {
        id: 1,
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$designrush$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$designrush$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: 'DesignRush',
        desc: 'DesignRush is a leading platform for designers and developers to showcase their work and connect with potential clients. We have been recognized by DesignRush for our exceptional work in web design and development, and we are proud to be a part of their community.',
        height: '75px'
    },
    {
        id: 2,
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$goodfirms$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$goodfirms$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: 'GoodFirms',
        desc: 'GoodFirms is a leading platform for designers and developers to showcase their work and connect with potential clients. We have been recognized by GoodFirms for our exceptional work in web design and development, and we are proud to be a part of their community.',
        height: '49px'
    },
    {
        id: 3,
        img: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$clutch$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$clutch$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: 'Clutch',
        desc: 'Clutch is a leading platform for designers and developers to showcase their work and connect with potential clients. We have been recognized by Clutch for our exceptional work in web design and development, and we are proud to be a part of their community.',
        height: '55px'
    }
];
// Animation variants
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.2
            }
        })
};
const OurJourney = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-center mb-20 sm-text-start sm-mb-20",
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
                children: "Recognitions That Reflect Our Journey"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/OurJourney.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-center mb-40 frame-1100 sm-text-start sm-mb-20",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.2
                },
                viewport: {
                    once: true
                },
                children: "We’re proud to have been recognised by platforms like DesignRush, GoodFirms, and Clutch for our outstanding work in web design and development. Our success in Dubai’s digital space has made us a top choice for businesses looking to make an impact online."
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/OurJourney.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ourJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ourJourneyContainer,
                children: ourJourneyData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ourJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ourJourneyCard,
                        custom: index,
                        initial: "hidden",
                        whileInView: "visible",
                        variants: fadeUp,
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: item.img,
                            alt: item.title,
                            style: {
                                '--img-height': item.height
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/OurJourney.jsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/OurJourney.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/OurJourney.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/OurJourney.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = OurJourney;
const __TURBOPACK__default__export__ = OurJourney;
var _c;
__turbopack_context__.k.register(_c, "OurJourney");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/faqSection.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "faqCard": "faqSection-module__JxFMyG__faqCard",
  "faqContainer": "faqSection-module__JxFMyG__faqContainer",
  "faqContent": "faqSection-module__JxFMyG__faqContent",
  "faqHeader": "faqSection-module__JxFMyG__faqHeader",
});
}),
"[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/faquparrow.022e49f0.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/faqdownarrow.b3690020.svg");}),
"[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/faqSection.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/faquparrow.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/icons/faqdownarrow.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const FaqSection = ()=>{
    _s();
    const faqs = [
        {
            q: "Which is the best web development company in Dubai, UAE?",
            a: "Choosing the best web development company in Dubai, UAE depends on finding a partner that is reliable and tech-savvy. At Website Development Agency, we are recognizes as one of the leading web development companies because of our commitment to delivering innovative, user-focused, and performance-driven websites. We believe that any agency that works with transparency, dedication, and a future-focused approach can earn the trust of businesses and that’s exactly what we strive for in every project."
        },
        {
            q: "Why does Website Development Agency prioritize on custom website design?",
            a: "Because no two businesses are the same, their websites shouldn’t be either. At Website Development Agency, we focus on creating custom designs that reflect your brand personality, meet your functional needs, and connect with your audience. A tailored website not only enhances credibility but also gives you the freedom to scale and evolve as your business grows, something a ready-made template can never truly achieve."
        },
        {
            q: "Which content management system (CMS) is right for my website?",
            a: "At Website Development Agency, we understand that the right CMS can make managing your website simple and effective. The choice depends on your business goals, scalability needs, and technical flexibility. Whether it’s a user-friendly option like WordPress, a robust platform like Drupal, or a fully custom-built CMS, our team guides you in selecting and implementing the solution that ensures long-term efficiency, security, and ease of use.  "
        },
        {
            q: "Why is Website Development Agency the right web design partner for my business in the UAE?",
            a: "At Website Development Agency, we combine creativity, technology, and strategy to deliver websites that truly drive business growth. With expertise in custom development, responsive design, and scalable solutions, we focus on aligning every project with your brand goals and customer expectations. Our collaborative approach, transparent process, and strong client relationships make us a trusted choice for businesses across the UAE."
        },
        {
            q: "What types of businesses benefit from Website Development Agency’s web design expertise?",
            a: "From startups looking for a strong digital launch to established enterprises aiming to modernize their online presence, we have worked with a diverse range of industries in the UAE. Our experience spans corporates, travel and hospitality, healthcare, retail, real estate, education, e-commerce, and lifestyle brands. No matter the sector, we tailor each website to reflect the brand’s identity while ensuring performance, customer engagement, and scalability."
        },
        {
            q: "How much time does Website Development Agency take to design and deliver a website?",
            a: "The timeframe for website development depends on its complexity, features, and scale. A simple business website can be completed in a few weeks, while a fully customized platform with advanced functionalities may take longer. At Website Development Agency, we set clear timelines at the start of every project and ensure they are met without compromising on quality. Our goal is to deliver your website on schedule, fully tested, and ready to perform."
        },
        {
            q: "Do You Develop Mobile-Responsive Websites?",
            a: "Yes, every website we develop is fully responsive and optimized for all screen sizes, ensuring a seamless user experience."
        },
        {
            q: "How does Website Development Agency ensure the best quality of web design services?",
            a: "At Website Development Agency, quality is built into every stage of our design and development process. We follow international best practices and conduct rigorous checks on functionality, performance, security, and user experience before launch. Every website is thoroughly tested across devices and browsers to ensure it runs seamlessly."
        },
        {
            q: "Does Website Development Agency provide annual website maintenance and support in Dubai?",
            a: "Yes. We offer comprehensive annual maintenance packages designed to keep your website secure, updated, and performing at its best. Our services cover regular updates, security monitoring, bug fixes, performance optimization, and content changes as needed. Each plan is tailored to match your website’s features and scale, ensuring transparent pricing. "
        },
        {
            q: "Is it better to upgrade my current website or build a new one from scratch?",
            a: "The answer depends on how well your existing website supports your business goals. Sometimes, a refreshed design and added functionality are enough to boost performance. In other cases, outdated platforms, slow speed, or limited scalability make a brand-new website the smarter choice. Consult with our experts to have a detailed audit of your website."
        },
        {
            q: "Why should I choose Website Development Agency for web development services in Dubai?",
            a: "Businesses trust Website Development Agency because we combine technical expertise, creative design, and industry best practices to deliver scalable and high-performance websites. Our team focuses on building solutions tailored to your goals, from sleek corporate sites to robust eCommerce platforms. With a future-ready approach and a strong track record in the UAE, we ensure every website not only looks great but also drives business growth."
        },
        {
            q: "How can a responsive website contribute to business growth?",
            a: "A responsive website adapts seamlessly to any device inlcuding mobile, tablet, or desktop, ensuring every visitor enjoys a smooth experience. In a market like the UAE, where mobile usage is extremely high, this directly translates into higher engagement, stronger customer trust, and improved conversion rates."
        },
        {
            q: "How many web development projects has Website Development Agency successfully delivered in Dubai?",
            a: "Website Development Agency has successfully completed 500+ web development projects across Dubai and the wider UAE. Our reputation as a trusted agency comes from consistently meeting deadlines, maintaining reliability, and delivering solutions that align with client goals. Each project reflects our commitment to digital excellence, innovation, and long-term value for businesses of every size."
        },
        {
            q: "Can Website Development Agency set up secure payment options for my online store?",
            a: "Absolutely. We integrate trusted and fully secure payment gateways into your eCommerce platform, allowing your customers to shop confidently. Our focus is on smooth, safe, and reliable transactions, helping your store increase sales while protecting sensitive information."
        },
        {
            q: "Can Website Development Agency help migrate my existing website to a new platform?",
            a: "We specialize in seamless website migrations that move your site to a more robust platform with minimal downtime. Whether your goal is improved performance, enhanced scalability, or a modernized user experience, we ensure the transition is smooth, secure, and optimized for long-term growth."
        }
    ];
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-center mb-50 frame-900 sm-text-start sm-mb-20",
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
                children: "Frequently Asked Questions"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faqContainer,
                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faqCard} ${openIndex === index ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faqHeader,
                                onClick: ()=>toggleFAQ(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: faq.q
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faquparrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "Up Arrow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$icons$2f$faqdownarrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "Down Arrow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$faqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faqContent,
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/FaqSection.jsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FaqSection, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FaqSection;
const __TURBOPACK__default__export__ = FaqSection;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/ctaSection.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ctaBox": "ctaSection-module__awSuwa__ctaBox",
  "ctaButtons": "ctaSection-module__awSuwa__ctaButtons",
  "ctaContent": "ctaSection-module__awSuwa__ctaContent",
  "ctaImage": "ctaSection-module__awSuwa__ctaImage",
});
}),
"[project]/src/app/(frontend)/assets/images/woman-laptop.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/woman-laptop.7bcf1286.webp");}),
"[project]/src/app/(frontend)/assets/images/woman-laptop.webp.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/woman-laptop.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$laptop$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/woman-laptop.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$laptop$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 964,
    height: 1062,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRk4BAABXRUJQVlA4TEIBAAAvBsABEM1VICICHgiADQIAAIC98BckCRD8AA4CwAEcCAAAAAAAAAAAAAAIAAIACABBBHDhjuM5eksdAADwQNCOEAAAAM7/2d1A6UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAo0dF2fx4IuhICAADA+b/dEsIJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIFq+x4IQA4CAADA+d8PwgAaD0ACEBIgFBQBAgAgCAIAgAQhgCAYAAEAEBgCCEgQkKAINEgAAsBft2G+0YVgPScjAHLXcafzyYfxV7SLCxAECAA+9DrNyez1WGuk5EbraBvElbk07xUc1y2pOWmRL8u18Il7W9l+byfmaVOu23iWdHzPuNMLb4pLeKsmZKZNnedIsTzW67e+i+ImOxbXU/rtr80qQ0THh1DikCAF"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ctaSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/ctaSection.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$laptop$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$laptop$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/woman-laptop.webp.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/woman-laptop.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const CtaSection = ()=>{
    const MotionLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ctaSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaBox,
            initial: {
                opacity: 0,
                y: 50
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.8,
                ease: "easeOut"
            },
            viewport: {
                once: true
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ctaSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaContent,
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    whileInView: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 0.7,
                        ease: "easeOut"
                    },
                    viewport: {
                        once: true
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Ready to Transform Your Digital Presence?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "my-20",
                            children: "Let's discuss your project and create something amazing together. Our team of experts is ready to bring your vision to life."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ctaSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaButtons,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionLink, {
                                    href: "/contact-us",
                                    className: "blue-btn",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: "Start Project"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionLink, {
                                    href: "/about-us",
                                    className: "white-btn",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$ctaSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaImage,
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    whileInView: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 0.7,
                        delay: 0.2,
                        ease: "easeOut"
                    },
                    viewport: {
                        once: true
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$laptop$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$woman$2d$laptop$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "CTA"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/CtaSection.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CtaSection;
const __TURBOPACK__default__export__ = CtaSection;
var _c;
__turbopack_context__.k.register(_c, "CtaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/home/DemoTemplate.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeFilter": "DemoTemplate-module__vAEnda__activeFilter",
  "budgetSection": "DemoTemplate-module__vAEnda__budgetSection",
  "card": "DemoTemplate-module__vAEnda__card",
  "cardCategory": "DemoTemplate-module__vAEnda__cardCategory",
  "cardContent": "DemoTemplate-module__vAEnda__cardContent",
  "cardTitle": "DemoTemplate-module__vAEnda__cardTitle",
  "detailsBtn": "DemoTemplate-module__vAEnda__detailsBtn",
  "filterBtn": "DemoTemplate-module__vAEnda__filterBtn",
  "filterContainer": "DemoTemplate-module__vAEnda__filterContainer",
  "filterWrapper": "DemoTemplate-module__vAEnda__filterWrapper",
  "fromText": "DemoTemplate-module__vAEnda__fromText",
  "grid": "DemoTemplate-module__vAEnda__grid",
  "heading": "DemoTemplate-module__vAEnda__heading",
  "image": "DemoTemplate-module__vAEnda__image",
  "imageContainer": "DemoTemplate-module__vAEnda__imageContainer",
  "infoIcon": "DemoTemplate-module__vAEnda__infoIcon",
  "loadMoreBtn": "DemoTemplate-module__vAEnda__loadMoreBtn",
  "loadMoreContainer": "DemoTemplate-module__vAEnda__loadMoreContainer",
  "overlay": "DemoTemplate-module__vAEnda__overlay",
  "priceInfo": "DemoTemplate-module__vAEnda__priceInfo",
  "pulseIndicator": "DemoTemplate-module__vAEnda__pulseIndicator",
  "scrollIndicator": "DemoTemplate-module__vAEnda__scrollIndicator",
  "subHeading": "DemoTemplate-module__vAEnda__subHeading",
});
}),
"[project]/src/app/admin/dashboard/template/data:ede3df [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTemplates",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00ff04b754a0c70a6e73cc8be53322cf5d2ec47b08":"getTemplates"},"src/app/admin/dashboard/template/actions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00ff04b754a0c70a6e73cc8be53322cf5d2ec47b08", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getTemplates");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3ByaXNtYS9kYlwiO1xyXG5pbXBvcnQgQWRtWmlwIGZyb20gXCJhZG0temlwXCI7XHJcbmltcG9ydCB7IHZlcmlmeUFkbWluIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcclxuXHJcbi8vIEhlbHBlciB0byBleHRyYWN0IHVwbG9hZGVkIFpJUCBmb3IgZGVtb1xyXG5hc3luYyBmdW5jdGlvbiBzYXZlQW5kRXh0cmFjdFppcChmaWxlLCBzbHVnKSB7XHJcbiAgICBpZiAoIWZpbGUgfHwgdHlwZW9mIGZpbGUgPT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHVwbG9hZERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpYy91cGxvYWRzL2RlbW9zXCIsIHNsdWcpO1xyXG4gICAgaWYgKGZzLmV4aXN0c1N5bmModXBsb2FkRGlyKSkge1xyXG4gICAgICAgIGZzLnJtU3luYyh1cGxvYWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlLCBmb3JjZTogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGZzLm1rZGlyU3luYyh1cGxvYWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSk7XHJcbiAgICBjb25zdCB6aXAgPSBuZXcgQWRtWmlwKGJ1ZmZlcik7XHJcbiAgICB6aXAuZXh0cmFjdEFsbFRvKHVwbG9hZERpciwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIGAvdXBsb2Fkcy9kZW1vcy8ke3NsdWd9YDtcclxufVxyXG5cclxuLy8gSGVscGVyIHRvIHNhdmUgdXBsb2FkZWQgaW1hZ2VcclxuYXN5bmMgZnVuY3Rpb24gc2F2ZUltYWdlKGZpbGUsIGZvbGRlciA9IFwidGVtcGxhdGVcIikge1xyXG4gICAgaWYgKCFmaWxlIHx8IHR5cGVvZiBmaWxlID09PSBcInN0cmluZ1wiKSByZXR1cm4gZmlsZTsgLy8gQWxyZWFkeSBhIHBhdGggb3IgZW1wdHlcclxuXHJcbiAgICBjb25zdCBhbGxvd2VkRXh0ZW5zaW9ucyA9IFsnLmpwZycsICcuanBlZycsICcucG5nJywgJy53ZWJwJywgJy5naWYnLCAnLnN2ZyddO1xyXG4gICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGUubmFtZSkudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmICghYWxsb3dlZEV4dGVuc2lvbnMuaW5jbHVkZXMoZXh0KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZmlsZSB0eXBlLiBPbmx5IGltYWdlcyBhcmUgYWxsb3dlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBsb2FkRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIGBwdWJsaWMvdXBsb2Fkcy8ke2ZvbGRlcn1gKTtcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyh1cGxvYWREaXIpKSB7XHJcbiAgICAgICAgZnMubWtkaXJTeW5jKHVwbG9hZERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmFzZU5hbWUgPSBwYXRoLmJhc2VuYW1lKGZpbGUubmFtZSwgZXh0KVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtejAtOS1dL2csIFwiXCIpO1xyXG5cclxuICAgIGxldCBmaWxlTmFtZSA9IGJhc2VOYW1lICsgZXh0O1xyXG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKHVwbG9hZERpciwgZmlsZU5hbWUpO1xyXG4gICAgbGV0IGNvdW50ZXIgPSAxO1xyXG5cclxuICAgIHdoaWxlIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICAgIGZpbGVOYW1lID0gYCR7YmFzZU5hbWV9LSR7Y291bnRlcn0ke2V4dH1gO1xyXG4gICAgICAgIGZpbGVQYXRoID0gcGF0aC5qb2luKHVwbG9hZERpciwgZmlsZU5hbWUpO1xyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcclxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKSk7XHJcblxyXG4gICAgcmV0dXJuIGAvdXBsb2Fkcy8ke2ZvbGRlcn0vJHtmaWxlTmFtZX1gO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVbmlxdWVTbHVnKGJhc2VTbHVnLCBleGNsdWRlSWQgPSBudWxsKSB7XHJcbiAgICBsZXQgc2x1ZyA9IGJhc2VTbHVnO1xyXG4gICAgbGV0IGNvdW50ZXIgPSAxO1xyXG5cclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBkYi50ZW1wbGF0ZS5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgc2x1ZyxcclxuICAgICAgICAgICAgICAgIC4uLihleGNsdWRlSWQgPyB7IE5PVDogeyBpZDogTnVtYmVyKGV4Y2x1ZGVJZCkgfSB9IDoge30pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghZXhpc3RpbmcpIGJyZWFrO1xyXG4gICAgICAgIHNsdWcgPSBgJHtiYXNlU2x1Z30tJHtjb3VudGVyKyt9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBzbHVnO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoZm9ybURhdGEpIHtcclxuICAgIGF3YWl0IHZlcmlmeUFkbWluKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XHJcbiAgICAgICAgbGV0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gZm9ybURhdGEuZ2V0KFwicHJpY2VcIik7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTsgLy8gVGhpcyB3aWxsIGJlIHRoZSBtYWluIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBmb3JtRGF0YS5nZXQoXCJmZWF0dXJlc1wiKTsgLy8gU3RyaW5nIG9mIGZlYXR1cmVzXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikpO1xyXG4gICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGZvcm1EYXRhLmdldChcImlzVmlzaWJsZVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgY29uc3Qgc2hvd0luQWxsVGVtcGxhdGVzID0gZm9ybURhdGEuZ2V0KFwic2hvd0luQWxsVGVtcGxhdGVzXCIpID09PSBcInRydWVcIjtcclxuICAgICAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKTtcclxuICAgICAgICBjb25zdCBkZW1vWmlwRmlsZSA9IGZvcm1EYXRhLmdldChcImRlbW9aaXBcIik7XHJcblxyXG4gICAgICAgIHNsdWcgPSBzbHVnLnRvTG93ZXJDYXNlKCkudHJpbSgpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoL1teYS16MC05LV0vZywgXCJcIik7XHJcbiAgICAgICAgY29uc3QgdW5pcXVlU2x1ZyA9IGF3YWl0IGdldFVuaXF1ZVNsdWcoc2x1Zyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlUGF0aCA9IGF3YWl0IHNhdmVJbWFnZShpbWFnZUZpbGUsIFwidGVtcGxhdGVcIik7XHJcbiAgICAgICAgY29uc3QgZGVtb0ZvbGRlciA9IGF3YWl0IHNhdmVBbmRFeHRyYWN0WmlwKGRlbW9aaXBGaWxlLCB1bmlxdWVTbHVnKTtcclxuXHJcbiAgICAgICAgLy8gbGl2ZVByZXZpZXdVcmwgaXMgYXV0by1nZW5lcmF0ZWQgYXMgL2RlbW8tbGl2ZS9bc2x1Z11cclxuICAgICAgICBjb25zdCBsaXZlUHJldmlld1VybCA9IGAvZGVtby1saXZlLyR7dW5pcXVlU2x1Z31gO1xyXG5cclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGRiLnRlbXBsYXRlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc2x1ZzogdW5pcXVlU2x1ZyxcclxuICAgICAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlUGF0aCxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZXMsXHJcbiAgICAgICAgICAgICAgICBkZW1vRm9sZGVyLFxyXG4gICAgICAgICAgICAgICAgbGl2ZVByZXZpZXdVcmwsXHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGUsXHJcbiAgICAgICAgICAgICAgICBzaG93SW5BbGxUZW1wbGF0ZXMsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9kYXNoYm9hcmQvdGVtcGxhdGVcIik7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGVtby10ZW1wbGF0ZVwiKTtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgdGVtcGxhdGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUZW1wbGF0ZShmb3JtRGF0YSkge1xyXG4gICAgYXdhaXQgdmVyaWZ5QWRtaW4oKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJpZFwiKSk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcclxuICAgICAgICBsZXQgc2x1ZyA9IGZvcm1EYXRhLmdldChcInNsdWdcIik7XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBmb3JtRGF0YS5nZXQoXCJwcmljZVwiKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID0gZm9ybURhdGEuZ2V0KFwiZmVhdHVyZXNcIik7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikpO1xyXG4gICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGZvcm1EYXRhLmdldChcImlzVmlzaWJsZVwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgY29uc3Qgc2hvd0luQWxsVGVtcGxhdGVzID0gZm9ybURhdGEuZ2V0KFwic2hvd0luQWxsVGVtcGxhdGVzXCIpID09PSBcInRydWVcIjtcclxuICAgICAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKTtcclxuICAgICAgICBjb25zdCBkZW1vWmlwRmlsZSA9IGZvcm1EYXRhLmdldChcImRlbW9aaXBcIik7XHJcblxyXG4gICAgICAgIHNsdWcgPSBzbHVnLnRvTG93ZXJDYXNlKCkudHJpbSgpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoL1teYS16MC05LV0vZywgXCJcIik7XHJcbiAgICAgICAgY29uc3QgdW5pcXVlU2x1ZyA9IGF3YWl0IGdldFVuaXF1ZVNsdWcoc2x1ZywgaWQpO1xyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIHNsdWc6IHVuaXF1ZVNsdWcsXHJcbiAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZmVhdHVyZXMsXHJcbiAgICAgICAgICAgIGxpdmVQcmV2aWV3VXJsOiBgL2RlbW8tbGl2ZS8ke3VuaXF1ZVNsdWd9YCxcclxuICAgICAgICAgICAgaXNWaXNpYmxlLFxyXG4gICAgICAgICAgICBzaG93SW5BbGxUZW1wbGF0ZXMsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGltYWdlRmlsZSAmJiB0eXBlb2YgaW1hZ2VGaWxlICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgZGIudGVtcGxhdGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XHJcbiAgICAgICAgICAgIGlmIChleGlzdGluZz8uaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWNcIiwgZXhpc3RpbmcuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMob2xkUGF0aCkpIGZzLnVubGlua1N5bmMob2xkUGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXBkYXRlZERhdGEuaW1hZ2UgPSBhd2FpdCBzYXZlSW1hZ2UoaW1hZ2VGaWxlLCBcInRlbXBsYXRlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRlbW9aaXBGaWxlICYmIHR5cGVvZiBkZW1vWmlwRmlsZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB1cGRhdGVkRGF0YS5kZW1vRm9sZGVyID0gYXdhaXQgc2F2ZUFuZEV4dHJhY3RaaXAoZGVtb1ppcEZpbGUsIHVuaXF1ZVNsdWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBkYi50ZW1wbGF0ZS51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICBkYXRhOiB1cGRhdGVkRGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZGFzaGJvYXJkL3RlbXBsYXRlXCIpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2RlbW8tdGVtcGxhdGVcIik7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9kZW1vLXRlbXBsYXRlLyR7dW5pcXVlU2x1Z31gKTtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdGVtcGxhdGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUZW1wbGF0ZShpZCkge1xyXG4gICAgYXdhaXQgdmVyaWZ5QWRtaW4oKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBkYi50ZW1wbGF0ZS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KGlkKSB9IH0pO1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZT8uaW1hZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljXCIsIHRlbXBsYXRlLmltYWdlKTtcclxuICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoaW1hZ2VQYXRoKSkgZnMudW5saW5rU3luYyhpbWFnZVBhdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRlbXBsYXRlPy5zbHVnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbW9QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljL3VwbG9hZHMvZGVtb3NcIiwgdGVtcGxhdGUuc2x1Zyk7XHJcbiAgICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGRlbW9QYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgZnMucm1TeW5jKGRlbW9QYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSwgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IGRiLnRlbXBsYXRlLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBwYXJzZUludChpZCkgfSB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZGFzaGJvYXJkL3RlbXBsYXRlXCIpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKFwiL2RlbW8tdGVtcGxhdGVcIik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0ZW1wbGF0ZTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGVtcGxhdGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW1wbGF0ZXMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBkYi50ZW1wbGF0ZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlzVmlzaWJsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBpbmNsdWRlOiB7IGNhdGVnb3J5OiB0cnVlIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgaWQ6IFwiZGVzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0ZW1wbGF0ZXM6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdGVtcGxhdGVzXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVGVtcGxhdGVzQWRtaW4oKSB7XHJcbiAgICBhd2FpdCB2ZXJpZnlBZG1pbigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZGIudGVtcGxhdGUuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICBpbmNsdWRlOiB7IGNhdGVnb3J5OiB0cnVlIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgaWQ6IFwiZGVzY1wiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhbGwgdGVtcGxhdGVzIGZvciBhZG1pbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhbGwgdGVtcGxhdGVzIGZvciBhZG1pblwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRlbXBsYXRlQnlTbHVnKHNsdWcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGRiLnRlbXBsYXRlLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBzbHVnIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgY2F0ZWdvcnk6IHRydWUgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbXBsYXRlIGJ5IHNsdWc6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdGVtcGxhdGUgYnkgc2x1Z1wiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRlbXBsYXRlc0J5Q2F0ZWdvcnkoY2F0ZWdvcnlJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZGIudGVtcGxhdGUuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlJZDogTnVtYmVyKGNhdGVnb3J5SWQpLFxyXG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgY2F0ZWdvcnk6IHRydWUgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBpZDogXCJkZXNjXCIgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbXBsYXRlcyBieSBjYXRlZ29yeTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB0ZW1wbGF0ZXMgYnkgY2F0ZWdvcnlcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRlbXBsYXRlc1BhZ2luYXRlZChwYWdlID0gMSwgbGltaXQgPSAxMiwgY2F0ZWdvcnlTbHVnID0gbnVsbCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBza2lwID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xyXG4gICAgICAgIGNvbnN0IHdoZXJlID0ge1xyXG4gICAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIC4uLihjYXRlZ29yeVNsdWcgJiYgY2F0ZWdvcnlTbHVnICE9PSAnYWxsJyA/IHsgY2F0ZWdvcnk6IHsgc2x1ZzogY2F0ZWdvcnlTbHVnIH0gfSA6IHt9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IFtpdGVtcywgdG90YWxdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBkYi50ZW1wbGF0ZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgY2F0ZWdvcnk6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIG9yZGVyQnk6IHsgaWQ6IFwiZGVzY1wiIH0sXHJcbiAgICAgICAgICAgICAgICBza2lwLFxyXG4gICAgICAgICAgICAgICAgdGFrZTogbGltaXQsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYi50ZW1wbGF0ZS5jb3VudCh7IHdoZXJlIH0pLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgdG90YWwsXHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KSxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHBhZ2luYXRlZCB0ZW1wbGF0ZXM6XCIsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggcGFnaW5hdGVkIHRlbXBsYXRlc1wiKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRTQXFOc0IseUxBQUEifQ==
}),
"[project]/src/app/admin/dashboard/template-category/data:d44505 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTemplateCategories",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"002fa537bf0c050b8d92236d033e5bbd7d0893d684":"getTemplateCategories"},"src/app/admin/dashboard/template-category/actions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("002fa537bf0c050b8d92236d033e5bbd7d0893d684", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getTemplateCategories");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3ByaXNtYS9kYlwiO1xyXG5pbXBvcnQgeyB2ZXJpZnlBZG1pbiB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVDYXRlZ29yeShuYW1lLCBzbHVnKSB7XHJcbiAgICBhd2FpdCB2ZXJpZnlBZG1pbigpO1xyXG4gICAgaWYgKCFuYW1lIHx8ICFzbHVnKSB0aHJvdyBuZXcgRXJyb3IoXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiKTtcclxuXHJcbiAgICAvLyBFbnN1cmUgc2x1ZyB1bmlxdWVuZXNzXHJcbiAgICBsZXQgZmluYWxTbHVnID0gc2x1ZztcclxuICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICB3aGlsZSAoYXdhaXQgZGIudGVtcGxhdGVDYXRlZ29yeS5maW5kRmlyc3QoeyB3aGVyZTogeyBzbHVnOiBmaW5hbFNsdWcgfSB9KSkge1xyXG4gICAgICAgIGZpbmFsU2x1ZyA9IGAke3NsdWd9LSR7Y291bnR9YDtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlQ2F0ZWdvcnkgPSBhd2FpdCBkYi50ZW1wbGF0ZUNhdGVnb3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogeyBuYW1lLCBzbHVnOiBmaW5hbFNsdWcgfSxcclxuICAgIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vZGFzaGJvYXJkL3RlbXBsYXRlLWNhdGVnb3J5XCIpO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlQ2F0ZWdvcnk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUZW1wbGF0ZUNhdGVnb3J5KGlkLCBuYW1lLCBzbHVnKSB7XHJcbiAgICBhd2FpdCB2ZXJpZnlBZG1pbigpO1xyXG4gICAgaWYgKCFpZCB8fCAhbmFtZSB8fCAhc2x1ZykgdGhyb3cgbmV3IEVycm9yKFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIik7XHJcblxyXG4gICAgLy8gRW5zdXJlIHNsdWcgdW5pcXVlbmVzcyAoZXhjbHVkaW5nIGN1cnJlbnQgcmVjb3JkKVxyXG4gICAgbGV0IGZpbmFsU2x1ZyA9IHNsdWc7XHJcbiAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgd2hpbGUgKGF3YWl0IGRiLnRlbXBsYXRlQ2F0ZWdvcnkuZmluZEZpcnN0KHsgd2hlcmU6IHsgc2x1ZzogZmluYWxTbHVnLCBOT1Q6IHsgaWQ6IE51bWJlcihpZCkgfSB9IH0pKSB7XHJcbiAgICAgICAgZmluYWxTbHVnID0gYCR7c2x1Z30tJHtjb3VudH1gO1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGVDYXRlZ29yeSA9IGF3YWl0IGRiLnRlbXBsYXRlQ2F0ZWdvcnkudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkKSB9LFxyXG4gICAgICAgIGRhdGE6IHsgbmFtZSwgc2x1ZzogZmluYWxTbHVnIH0sXHJcbiAgICB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Rhc2hib2FyZC90ZW1wbGF0ZS1jYXRlZ29yeVwiKTtcclxuICAgIHJldHVybiB0ZW1wbGF0ZUNhdGVnb3J5O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGVtcGxhdGVDYXRlZ29yeShpZCkge1xyXG4gICAgYXdhaXQgdmVyaWZ5QWRtaW4oKTtcclxuICAgIGlmICghaWQpIHRocm93IG5ldyBFcnJvcihcIklEIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgY29uc3QgdGVtcGxhdGVDYXRlZ29yeSA9IGF3YWl0IGRiLnRlbXBsYXRlQ2F0ZWdvcnkuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IE51bWJlcihpZCkgfSB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Rhc2hib2FyZC90ZW1wbGF0ZS1jYXRlZ29yeVwiKTtcclxuICAgIHJldHVybiB0ZW1wbGF0ZUNhdGVnb3J5O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVtcGxhdGVDYXRlZ29yaWVzKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGRiLnRlbXBsYXRlQ2F0ZWdvcnkuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGlkOiBcImRlc2NcIiB9IH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFRBb0RzQixrTUFBQSJ9
}),
"[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/home/DemoTemplate.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2f$data$3a$ede3df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/template/data:ede3df [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$data$3a$d44505__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/template-category/data:d44505 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const DemoTemplate = ({ title, description, activetaburl })=>{
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "All Templates",
        slug: "all"
    });
    const [showScrollHint, setShowScrollHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: "All Templates",
            slug: "all"
        }
    ]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoTemplate.useEffect": ()=>{
            const fetchData = {
                "DemoTemplate.useEffect.fetchData": async ()=>{
                    try {
                        const [tData, cData] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2f$data$3a$ede3df__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getTemplates"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$template$2d$category$2f$data$3a$d44505__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getTemplateCategories"])()
                        ]);
                        setProducts(tData);
                        const allCategories = [
                            {
                                name: "All Templates",
                                slug: "all"
                            },
                            ...cData.map({
                                "DemoTemplate.useEffect.fetchData": (c)=>({
                                        name: c.name,
                                        slug: c.slug
                                    })
                            }["DemoTemplate.useEffect.fetchData"])
                        ];
                        setCategories(allCategories);
                        // Set active category based on activetaburl prop
                        if (activetaburl) {
                            const normalizedActivetab = activetaburl.toLowerCase().trim().replace(/\s+/g, "-");
                            console.log("Looking for tab:", normalizedActivetab);
                            console.log("Available categories:", allCategories.map({
                                "DemoTemplate.useEffect.fetchData": (c)=>c.slug
                            }["DemoTemplate.useEffect.fetchData"]));
                            const matchedCategory = allCategories.find({
                                "DemoTemplate.useEffect.fetchData.matchedCategory": (cat)=>cat.slug.toLowerCase() === normalizedActivetab
                            }["DemoTemplate.useEffect.fetchData.matchedCategory"]);
                            console.log("Matched category:", matchedCategory);
                            if (matchedCategory) {
                                setActiveCategory(matchedCategory);
                            }
                        }
                    } catch (error) {
                        console.error("Error fetching demo templates:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["DemoTemplate.useEffect.fetchData"];
            fetchData();
        }
    }["DemoTemplate.useEffect"], [
        activetaburl
    ]);
    const handleScroll = (e)=>{
        if (e.target.scrollLeft > 10) {
            setShowScrollHint(false);
        }
    };
    const filteredProducts = activeCategory.slug === "all" ? products.filter((p)=>p.showInAllTemplates === true) : products.filter((p)=>p.category?.slug === activeCategory.slug);
    if (loading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].budgetSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "frame-1200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-center sm-text-start",
                        dangerouslySetInnerHTML: {
                            __html: title ? title : "Affordable Website Design <br/> in Dubai Explore Templates"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center sm-text-start mb-30",
                    dangerouslySetInnerHTML: {
                        __html: description ? description : "We offer low-cost website design solutions in Dubai that help <br>start-ups go online quickly with modern, responsive, and conversion-focused websites."
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: showScrollHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollIndicator,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1 12H15M15 12L11 8M15 12L11 16",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M23 12L19 8M23 12L19 16",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            opacity: "0.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterContainer,
                            onScroll: handleScroll,
                            children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterBtn} ${activeCategory.slug === cat.slug ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeFilter : ""}`,
                                    onClick: ()=>setActiveCategory(cat),
                                    children: cat.name
                                }, cat.slug, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "popLayout",
                        children: filteredProducts.slice(0, 8).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                initial: {
                                    opacity: 0.5,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                transition: {
                                    duration: 0.4
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.image,
                                                alt: product.title,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/demo-template/${product.slug}`,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsBtn,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoIcon,
                                                                children: "i"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                                lineNumber: 177,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Details"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    product.demoFolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/demo-live/${product.slug}`,
                                                        target: "_blank",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsBtn,
                                                        style: {
                                                            background: "var(--primary-color)",
                                                            color: "white"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                                lineNumber: 190,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Live Preview"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                        lineNumber: 181,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: product.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardCategory,
                                                children: product.category?.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceInfo,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromText,
                                                    children: [
                                                        "From: ",
                                                        product.price,
                                                        " AED"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, product.id, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMoreContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: activeCategory.slug === "all" ? "/website-templates" : `/website-templates/${activeCategory.slug}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$home$2f$DemoTemplate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMoreBtn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C15.895 17 15 17.895 15 19C15 20.105 15.895 21 17 21C18.105 21 19 20.105 19 19C19 17.895 18.105 17 17 17ZM9 17C7.895 17 7 17.895 7 19C7 20.105 7.895 21 9 21C10.105 21 11 20.105 11 19C11 17.895 10.105 17 9 17Z",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "More Products"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/home/DemoTemplate.jsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DemoTemplate, "/+spYwWL7xBw2PinhfPrr80WLo4=");
_c = DemoTemplate;
const __TURBOPACK__default__export__ = DemoTemplate;
var _c;
__turbopack_context__.k.register(_c, "DemoTemplate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/common/locationService.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "locationService-module__8jLa-W__active",
  "footerbox": "locationService-module__8jLa-W__footerbox",
  "grid": "locationService-module__8jLa-W__grid",
  "locationService": "locationService-module__8jLa-W__locationService",
  "locationimg": "locationService-module__8jLa-W__locationimg",
});
}),
"[project]/src/app/(frontend)/assets/images/locationservice/dubai.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dubai.30353db7.png");}),
"[project]/src/app/(frontend)/assets/images/locationservice/dubai.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/locationservice/dubai.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$dubai$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/locationservice/dubai.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$dubai$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1038,
    height: 874,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAkklEQVR42mWOXQoCMQyEU6v9SdMfRSmKK/RdxEUEcWG9gXgFr+Szh7XZxzoQSDLD8AE0klLOWESEpZR96wMimt1qs32dx+dwH/q/gNZajYfj43N7f6/95QQppcBPa6323mPOeR2QQrfMXfCBgB9scsg5Z+dV3BRjJKXUAowxmqcBlcwyHUKICazWOyavsrxzI/s/at0K+dFjB0cAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/locationservice/abudhabi.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/abudhabi.584b2a09.png");}),
"[project]/src/app/(frontend)/assets/images/locationservice/abudhabi.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/locationservice/abudhabi.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$abudhabi$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/locationservice/abudhabi.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$abudhabi$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1038,
    height: 874,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAzklEQVR42nWNPwsBYQDGX1euOAn5T/TenVju3PlXXhxGGYyymWxsEmVSnFIG+QJ230CxSDZdibqFMtxmuxWnmHjqqaffb3gA+BOCIIwQQv9PieO4nqbpAEIo+ga6VzAM02nbYjBZ6uFiA0EGJfk4C0i7jyKtHopzUzzjhNEWU27LhdF9ne0eWAfkwDBRm24zvdMxN1Ck/OB2zY9VRZg85rH6wm4wOwBrC/KbdEfS4KcXQVRLXq7y/c+6IgWRqc6WqeZqn+vLO6F/Js2ukOafx/A2KOnYeR8AAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/locationservice/sharjah.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sharjah.1171befc.png");}),
"[project]/src/app/(frontend)/assets/images/locationservice/sharjah.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/locationservice/sharjah.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$sharjah$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/locationservice/sharjah.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$sharjah$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1038,
    height: 874,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAkElEQVR42mVOuwoCQQzMneduks0+YIVtRDhLGzu1U+xFRAsb//83TEBBzgmBSTJMBmCCvu8759wQY5T1OC6nd+gUTIz37fHxOl2efwLvvau1lv1qc7jtzlcopSRbEpFXW26tLZRjTilqCXwW3kQhBBoU5pRzFs0yB0T01r9vZgpmxm8osEHtg4goZTJujnZ/A7qbCaYPGBItAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/locationservice/ajman.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ajman.0b8744cb.png");}),
"[project]/src/app/(frontend)/assets/images/locationservice/ajman.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/locationservice/ajman.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ajman$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/locationservice/ajman.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ajman$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1038,
    height: 874,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAgklEQVR42m1OywoCMQxM0W36SNNCF0rBSw+i4qXn/v+HmYCILDsQmMwMkwAcYIwBRNwycxpj3OAMErDvx+u+1pqnZq219N73OecTSimsovceU0qhtbYLd8xMskf4CqihGKO/CrQp50zW2g2cc6jzf+YiCCG439e6aB0RCQ1euTaq/wHAZwgGqk27UwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/locationservice/rasalkhaimah.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/rasalkhaimah.ae31ec29.png");}),
"[project]/src/app/(frontend)/assets/images/locationservice/rasalkhaimah.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/locationservice/rasalkhaimah.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$rasalkhaimah$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/locationservice/rasalkhaimah.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$rasalkhaimah$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1038,
    height: 874,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAjUlEQVR42m1OvQqCMQxM0a9p0/QH+mGx7qKDi5MPoLiKk6vgJr7/agIioh4ELrnkLgBfMMYAIg6LsfXr9niDf7DWDpvlevU4XO4/olzbWmvp8z477/YnKKUkHXrvMcZIrbVRuEspsfQBXgPUpRCCnwrUKefMGgXOOdT6jJkIiMi9v9ZG7ZhZKHnl6qj6ExBMCe4SNBblAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/locationservice/fujairah.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/fujairah.4fd665ad.png");}),
"[project]/src/app/(frontend)/assets/images/locationservice/fujairah.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/locationservice/fujairah.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$fujairah$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/locationservice/fujairah.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$fujairah$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1151,
    height: 874,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAg0lEQVR42m2NzQrCMAzHs6xdW9N0XV0pDCYeBA+igg/g1Yvv/zwmgiDoD3II/y+APzjnhsv+eKo0zj9iL7TWts/b/XFdDmcwxvSdgIidtdbUWqecM+/WdZnGzCDuOca4YWYqpSTv/SDYlFLUIKioye+ZEIKXJXw/Uo1EFPRUEJyGPuYX+yMHEN3cMvoAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/locationservice/alain.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/alain.99f1ec62.png");}),
"[project]/src/app/(frontend)/assets/images/locationservice/alain.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/locationservice/alain.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$alain$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/locationservice/alain.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$alain$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1038,
    height: 874,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAfklEQVR42nVNzQqCIRBcqVxddVH8QIQIBA/d8uz7P1i70SGoBhbmZ5kB+IMQAo0xrj9Da+1lznnbez++QkS0tdbcez/WWnfIObOa3ntMKVFr7RDumDnqwdtAfZJdfxZoUylFcg7gnEO9z5mTgIjcSxhjQIXUhxijUPLKtVHzJ5gYB+tFW1icAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/images/locationservice/ummalquwain.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/ummalquwain.5c980e2c.png");}),
"[project]/src/app/(frontend)/assets/images/locationservice/ummalquwain.png.mjs { IMAGE => \"[project]/src/app/(frontend)/assets/images/locationservice/ummalquwain.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ummalquwain$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/images/locationservice/ummalquwain.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ummalquwain$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1038,
    height: 874,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAiUlEQVR42m1OywoCMQxMrTbpu1C19qaIggfXg6AHvfn//2QinnZ3IDCTCZMBGEFrvQghUK/b3elw3MMcjDGrx+V2/zzfr4mJiKbWWnrvm+E6nKGUkmRprcUYo2utrZlTSimw9vBfoBx57+2SIUk55yCvgIhQZlRUO+foJ5RSIELiuD1TZ4VLovhfFE4IdKQ+7dIAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/component/pages/common/LocationService.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$locationService$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/common/locationService.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$dubai$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$dubai$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/locationservice/dubai.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/locationservice/dubai.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$abudhabi$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$abudhabi$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/locationservice/abudhabi.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/locationservice/abudhabi.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$sharjah$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$sharjah$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/locationservice/sharjah.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/locationservice/sharjah.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ajman$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ajman$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/locationservice/ajman.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/locationservice/ajman.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$rasalkhaimah$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$rasalkhaimah$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/locationservice/rasalkhaimah.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/locationservice/rasalkhaimah.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$fujairah$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$fujairah$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/locationservice/fujairah.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/locationservice/fujairah.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$alain$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$alain$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/locationservice/alain.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/locationservice/alain.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ummalquwain$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ummalquwain$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(frontend)/assets/images/locationservice/ummalquwain.png.mjs { IMAGE => "[project]/src/app/(frontend)/assets/images/locationservice/ummalquwain.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
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
const defaultLocationsList = [
    {
        label: "Dubai",
        officeTitle: "Website Development in Dubai",
        address: "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
        phone: "+971 52 283 1655",
        email: "info@websitedevelopmentagency.ae",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$dubai$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$dubai$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        label: "Abu Dhabi",
        officeTitle: "Website Development in Abu Dhabi",
        address: "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
        phone: "+971 52 283 1655",
        email: "info@websitedevelopmentagency.ae",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$abudhabi$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$abudhabi$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        label: "Sharjah",
        officeTitle: "Website Development in Sharjah",
        address: "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
        phone: "+971 52 283 1655",
        email: "info@websitedevelopmentagency.ae",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$sharjah$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$sharjah$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        label: "Ajman",
        officeTitle: "Website Development in Ajman",
        address: "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
        phone: "+971 52 283 1655",
        email: "info@websitedevelopmentagency.ae",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ajman$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ajman$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        label: "Ras Al Khaimah",
        officeTitle: "Web Development in Ras Al Khaimah",
        address: "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
        phone: "+971 52 283 1655",
        email: "info@websitedevelopmentagency.ae",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$rasalkhaimah$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$rasalkhaimah$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        label: "Fujairah",
        officeTitle: "Website Development in Fujairah",
        address: "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
        phone: "+971 52 283 1655",
        email: "info@websitedevelopmentagency.ae",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$fujairah$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$fujairah$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        label: "Al Ain",
        officeTitle: "Website Development in Al Ain",
        address: "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
        phone: "+971 52 283 1655",
        email: "info@websitedevelopmentagency.ae",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$alain$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$alain$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        label: "Umm Al Quwain",
        officeTitle: "Website Development in Umm Al Quwain",
        address: "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
        phone: "+971 52 283 1655",
        email: "info@websitedevelopmentagency.ae",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ummalquwain$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$images$2f$locationservice$2f$ummalquwain$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    }
];
const LocationService = ({ title = "Our Service Locations Across UAE", description = "Looking for the best web development company in UAE? Website Development Agency offers expert web design and development services across all locations. We create websites that drive results.", locations = defaultLocationsList, activeLocation = "Dubai" })=>{
    _s();
    const initialIndex = locations.findIndex((loc)=>loc.label.toLowerCase() === activeLocation?.toLowerCase());
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialIndex !== -1 ? initialIndex : 0);
    const activeData = locations[activeIndex];
    const handleLocationClick = (e, index)=>{
        e.preventDefault();
        setActiveIndex(index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `frame-1200 py-50 sm-pt-30 sm-pb-30 sm-px-20 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$locationService$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].locationService}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pt-20 pb-40",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$locationService$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "pb-10",
                                children: activeData.officeTitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pb-20",
                                dangerouslySetInnerHTML: {
                                    __html: activeData.address
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${activeData.phone}`,
                                className: "flex items-center gap-10 pb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "30",
                                        height: "30",
                                        viewBox: "0 0 30 30",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M24.4443 20.0053L21.4075 17.8836C21.0104 17.6066 20.5462 17.4606 20.0649 17.4606C19.2995 17.4606 18.5811 17.836 18.1434 18.464L17.4385 19.4743C16.257 18.6819 14.9386 17.5755 13.6818 16.3189C12.4253 15.0624 11.3191 13.744 10.5269 12.5625L11.5368 11.8576C12.0515 11.4991 12.3953 10.9622 12.5045 10.346C12.6134 9.73035 12.4761 9.10825 12.1172 8.59326L9.99593 5.55646C9.55236 4.922 8.83664 4.54297 8.0811 4.54297C7.81926 4.54297 7.56246 4.5892 7.31801 4.67938C7.04038 4.78192 6.78174 4.90781 6.52814 5.06711L6.10883 5.36237C6.004 5.44385 5.9065 5.53311 5.81311 5.6265C5.30156 6.13782 4.93856 6.7851 4.73371 7.55048C3.85961 10.8271 6.02506 15.782 10.122 19.879C13.5626 23.3195 17.696 25.4568 20.9088 25.4573C21.459 25.4573 21.9779 25.3932 22.4508 25.2668C23.2161 25.0622 23.8634 24.6992 24.3752 24.1874C24.4681 24.0945 24.5569 23.997 24.6521 23.8739L24.9476 23.4523C25.0921 23.2216 25.2177 22.9629 25.3216 22.6832C25.6789 21.7173 25.3182 20.616 24.4443 20.0053Z",
                                            fill: "#787878"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeData.phone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${activeData.email}`,
                                className: "flex items-center gap-10 pb-30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "30",
                                        height: "30",
                                        viewBox: "0 0 30 30",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17.5072 18.3803C16.7608 18.8779 15.8938 19.1409 15 19.1409C14.1062 19.1409 13.2393 18.8779 12.4929 18.3803L0.199746 10.1846C0.131543 10.1392 0.0650977 10.0918 0 10.043V23.4725C0 25.0123 1.24951 26.2342 2.7617 26.2342H27.2382C28.778 26.2342 29.9999 24.9847 29.9999 23.4725V10.043C29.9347 10.0918 29.8682 10.1394 29.7998 10.1849L17.5072 18.3803Z",
                                                fill: "#787878"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1.1748 8.72219L13.4679 16.9179C13.9333 17.2282 14.4666 17.3833 14.9999 17.3833C15.5333 17.3833 16.0667 17.2281 16.5321 16.9179L28.8252 8.72219C29.5608 8.23205 30 7.41174 30 6.52639C30 5.00406 28.7615 3.76562 27.2392 3.76562H2.76076C1.2385 3.76568 0 5.00412 0 6.52785C0 7.41174 0.439219 8.23205 1.1748 8.72219Z",
                                                fill: "#787878"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeData.email
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$locationService$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerbox}`,
                                children: locations.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.url || "#",
                                        className: activeIndex === index ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$locationService$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                                        onClick: (e)=>handleLocationClick(e, index),
                                        children: item.label
                                    }, index, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$locationService$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].locationimg,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: activeData.image || activeData.locationImage,
                                alt: activeData.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/LocationService.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LocationService, "xl/XFfa/ajSPXEUSyI6U6JJi/7w=");
_c = LocationService;
const __TURBOPACK__default__export__ = LocationService;
var _c;
__turbopack_context__.k.register(_c, "LocationService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/dashboard/blog/data:21e515 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLatestBlogs",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6051f8174358bb4f405d0d7c8c038e1e17fee798f6":"getLatestBlogs"},"src/app/admin/dashboard/blog/actions.js",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6051f8174358bb4f405d0d7c8c038e1e17fee798f6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getLatestBlogs");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3ByaXNtYS9kYlwiO1xyXG5pbXBvcnQgeyB2ZXJpZnlBZG1pbiB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XHJcblxyXG4vLyDinIUgSGVscGVyIHRvIHNhdmUgdXBsb2FkZWQgaW1hZ2Ugd2l0aCBzYW5pdGl6ZWQgbmFtZSBhbmQgYXZvaWQgY29uZmxpY3RzXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVJbWFnZShmaWxlLCBmb2xkZXIgPSBcImJsb2dcIikge1xyXG4gIGlmICghZmlsZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxyXG4gIGNvbnN0IGFsbG93ZWRFeHRlbnNpb25zID0gWycuanBnJywgJy5qcGVnJywgJy5wbmcnLCAnLndlYnAnLCAnLmdpZicsICcuc3ZnJ107XHJcbiAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGUubmFtZSkudG9Mb3dlckNhc2UoKTtcclxuICBpZiAoIWFsbG93ZWRFeHRlbnNpb25zLmluY2x1ZGVzKGV4dCkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZmlsZSB0eXBlLiBPbmx5IGltYWdlcyBhcmUgYWxsb3dlZC5cIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGxvYWREaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgYHB1YmxpYy9pbWFnZXMvJHtmb2xkZXJ9YCk7XHJcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHVwbG9hZERpcikpIHtcclxuICAgIGZzLm1rZGlyU3luYyh1cGxvYWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gU2FuaXRpemUgZmlsZSBuYW1lOiByZXBsYWNlIHNwYWNlcyB3aXRoICctJyBhbmQgcmVtb3ZlIHNwZWNpYWwgY2hhcnNcclxuICBjb25zdCBvcmlnaW5hbE5hbWUgPSBmaWxlLm5hbWU7XHJcbiAgbGV0IGJhc2VOYW1lID0gcGF0aC5iYXNlbmFtZShvcmlnaW5hbE5hbWUsIGV4dClcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAudHJpbSgpXHJcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIikgICAgICAgICAvLyByZXBsYWNlIHNwYWNlcyB3aXRoICctJ1xyXG4gICAgLnJlcGxhY2UoL1teYS16MC05LV0vZywgXCJcIik7ICAvLyByZW1vdmUgc3BlY2lhbCBjaGFyYWN0ZXJzXHJcblxyXG4gIGxldCBmaWxlTmFtZSA9IGJhc2VOYW1lICsgZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKHVwbG9hZERpciwgZmlsZU5hbWUpO1xyXG4gIGxldCBjb3VudGVyID0gMTtcclxuXHJcbiAgLy8gSW5jcmVtZW50IGZpbGVuYW1lIGlmIGl0IGFscmVhZHkgZXhpc3RzXHJcbiAgd2hpbGUgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XHJcbiAgICBmaWxlTmFtZSA9IGAke2Jhc2VOYW1lfS0ke2NvdW50ZXJ9JHtleHQudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgZmlsZVBhdGggPSBwYXRoLmpvaW4odXBsb2FkRGlyLCBmaWxlTmFtZSk7XHJcbiAgICBjb3VudGVyKys7XHJcbiAgfVxyXG5cclxuICAvLyBTYXZlIGZpbGUgdG8gZGlza1xyXG4gIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xyXG4gIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKSk7XHJcblxyXG4gIC8vIFJldHVybiByZWxhdGl2ZSBwYXRoIGZvciBEQlxyXG4gIHJldHVybiBgL2ltYWdlcy8ke2ZvbGRlcn0vJHtmaWxlTmFtZX1gO1xyXG59XHJcblxyXG5cclxuLy8g4pyFIEVuc3VyZSBzbHVnIHVuaXF1ZW5lc3NcclxuYXN5bmMgZnVuY3Rpb24gZ2V0VW5pcXVlU2x1ZyhiYXNlU2x1ZywgZXhjbHVkZUlkID0gbnVsbCkge1xyXG4gIGxldCBzbHVnID0gYmFzZVNsdWc7XHJcbiAgbGV0IGNvdW50ZXIgPSAxO1xyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBkYi5ibG9nLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICAuLi4oZXhjbHVkZUlkID8geyBOT1Q6IHsgaWQ6IGV4Y2x1ZGVJZCB9IH0gOiB7fSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmICghZXhpc3RpbmcpIGJyZWFrO1xyXG4gICAgc2x1ZyA9IGAke2Jhc2VTbHVnfS0ke2NvdW50ZXIrK31gO1xyXG4gIH1cclxuICByZXR1cm4gc2x1ZztcclxufVxyXG5cclxuXHJcblxyXG4vLyDinIUgQ3JlYXRlIGJsb2dcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJsb2coZm9ybURhdGEpIHtcclxuICBhd2FpdCB2ZXJpZnlBZG1pbigpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xyXG4gICAgbGV0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGZvcm1EYXRhLmdldChcImNvbnRlbnRcIik7XHJcbiAgICBjb25zdCBjaGVja2xpc3RUaXRsZSA9IGZvcm1EYXRhLmdldChcImNoZWNrbGlzdFRpdGxlXCIpO1xyXG4gICAgY29uc3QgY2hlY2tsaXN0SXRlbXMgPSBmb3JtRGF0YS5nZXQoXCJjaGVja2xpc3RJdGVtc1wiKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpKTtcclxuICAgIGNvbnN0IGltYWdlRmlsZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpO1xyXG5cclxuICAgIC8vIHNhbml0aXplIHNsdWdcclxuICAgIHNsdWcgPSBzbHVnLnRvTG93ZXJDYXNlKCkudHJpbSgpLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnJlcGxhY2UoL1teYS16MC05LV0vZywgXCJcIik7XHJcbiAgICBjb25zdCB1bmlxdWVTbHVnID0gYXdhaXQgZ2V0VW5pcXVlU2x1ZyhzbHVnKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZVBhdGggPSBhd2FpdCBzYXZlSW1hZ2UoaW1hZ2VGaWxlLCBcImJsb2dcIik7XHJcblxyXG4gICAgY29uc3QgYmxvZyA9IGF3YWl0IGRiLmJsb2cuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIHNsdWc6IHVuaXF1ZVNsdWcsXHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgICBjaGVja2xpc3RUaXRsZSxcclxuICAgICAgICBjaGVja2xpc3RJdGVtcyxcclxuICAgICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZVBhdGgsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9kYXNoYm9hcmQvYmxvZ1wiKTtcclxuICAgIHJldHVybiBibG9nO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYmxvZzpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBibG9nXCIpO1xyXG4gIH1cclxufVxyXG5cclxuLy8g4pyFIFVwZGF0ZSBibG9nIHdpdGggcHJldmlvdXMgaW1hZ2UgZGVsZXRpb25cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJsb2coZm9ybURhdGEpIHtcclxuICBhd2FpdCB2ZXJpZnlBZG1pbigpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImlkXCIpKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XHJcbiAgICBsZXQgc2x1ZyA9IGZvcm1EYXRhLmdldChcInNsdWdcIik7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZm9ybURhdGEuZ2V0KFwiY29udGVudFwiKTtcclxuICAgIGNvbnN0IGNoZWNrbGlzdFRpdGxlID0gZm9ybURhdGEuZ2V0KFwiY2hlY2tsaXN0VGl0bGVcIik7XHJcbiAgICBjb25zdCBjaGVja2xpc3RJdGVtcyA9IGZvcm1EYXRhLmdldChcImNoZWNrbGlzdEl0ZW1zXCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikpO1xyXG4gICAgY29uc3QgaW1hZ2VGaWxlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIik7XHJcblxyXG4gICAgLy8gc2FuaXRpemUgc2x1Z1xyXG4gICAgc2x1ZyA9IHNsdWcudG9Mb3dlckNhc2UoKS50cmltKCkucmVwbGFjZSgvXFxzKy9nLCBcIi1cIikucmVwbGFjZSgvW15hLXowLTktXS9nLCBcIlwiKTtcclxuICAgIGNvbnN0IHVuaXF1ZVNsdWcgPSBhd2FpdCBnZXRVbmlxdWVTbHVnKHNsdWcsIGlkKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHNsdWc6IHVuaXF1ZVNsdWcsXHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICAgIGNoZWNrbGlzdFRpdGxlLFxyXG4gICAgICBjaGVja2xpc3RJdGVtcyxcclxuICAgICAgY2F0ZWdvcnlJZCxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGltYWdlRmlsZSAmJiB0eXBlb2YgaW1hZ2VGaWxlLm5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgLy8gRmV0Y2ggZXhpc3RpbmcgYmxvZyB0byBnZXQgY3VycmVudCBpbWFnZVxyXG4gICAgICBjb25zdCBleGlzdGluZ0Jsb2cgPSBhd2FpdCBkYi5ibG9nLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgICBpZiAoZXhpc3RpbmdCbG9nICYmIGV4aXN0aW5nQmxvZy5pbWFnZSkge1xyXG4gICAgICAgIGNvbnN0IG9sZEltYWdlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpY1wiLCBleGlzdGluZ0Jsb2cuaW1hZ2UpO1xyXG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKG9sZEltYWdlUGF0aCkpIHtcclxuICAgICAgICAgIGZzLnVubGlua1N5bmMob2xkSW1hZ2VQYXRoKTsgLy8gRGVsZXRlIG9sZCBpbWFnZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2F2ZSBuZXcgaW1hZ2VcclxuICAgICAgY29uc3QgbmV3SW1hZ2VQYXRoID0gYXdhaXQgc2F2ZUltYWdlKGltYWdlRmlsZSwgXCJibG9nXCIpO1xyXG4gICAgICB1cGRhdGVkRGF0YS5pbWFnZSA9IG5ld0ltYWdlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9nID0gYXdhaXQgZGIuYmxvZy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB1cGRhdGVkRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Rhc2hib2FyZC9ibG9nXCIpO1xyXG4gICAgcmV0dXJuIGJsb2c7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBibG9nOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIGJsb2dcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDinIUgRGVsZXRlIGJsb2dcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJsb2coaWQpIHtcclxuICBhd2FpdCB2ZXJpZnlBZG1pbigpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBibG9nID0gYXdhaXQgZGIuYmxvZy5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KGlkKSB9IH0pO1xyXG4gICAgaWYgKGJsb2c/LmltYWdlKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpY1wiLCBibG9nLmltYWdlKTtcclxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoaW1hZ2VQYXRoKSkgZnMudW5saW5rU3luYyhpbWFnZVBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRiLmJsb2cuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KGlkKSB9IH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2Rhc2hib2FyZC9ibG9nXCIpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBibG9nOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIGJsb2dcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDinIUgR2V0IGFsbCBibG9ncyB3aXRoIGNhdGVnb3J5IGRhdGFcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJsb2dzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBibG9ncyA9IGF3YWl0IGRiLmJsb2cuZmluZE1hbnkoe1xyXG4gICAgICBpbmNsdWRlOiB7IGNhdGVnb3J5OiB0cnVlIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgaWQ6IFwiZGVzY1wiIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBibG9ncztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGJsb2dzOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYmxvZ3NcIik7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyDinIUgRmV0Y2ggcGFnaW5hdGVkIGJsb2dzIGZvciBlYWNoIGNhdGVnb3J5XHJcbi8vIOKchSBGZXRjaCBwYWdpbmF0ZWQgYmxvZ3MgZm9yIGVhY2ggY2F0ZWdvcnlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luYXRlZEJsb2dzQnlDYXRlZ29yeShwYWdlID0gMSwgcGFnZVNpemUgPSAxMikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuYmxvZ0NhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yaWVzV2l0aEJsb2dzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIGNhdGVnb3JpZXMubWFwKGFzeW5jIChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gYXdhaXQgZGIuYmxvZy5jb3VudCh7IHdoZXJlOiB7IGNhdGVnb3J5SWQ6IGNhdGVnb3J5LmlkIH0gfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2dzID0gYXdhaXQgZGIuYmxvZy5maW5kTWFueSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBjYXRlZ29yeUlkOiBjYXRlZ29yeS5pZCB9LFxyXG4gICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbHVnOiB0cnVlLFxyXG4gICAgICAgICAgICBpbWFnZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGVudDogdHJ1ZSxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiB0cnVlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgc2x1ZzogdHJ1ZSB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNraXA6IChwYWdlIC0gMSkgKiBwYWdlU2l6ZSxcclxuICAgICAgICAgIHRha2U6IHBhZ2VTaXplLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyAuLi5jYXRlZ29yeSwgYmxvZ3MsIHRvdGFsIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBjYXRlZ29yaWVzV2l0aEJsb2dzO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIEVycm9yIGZldGNoaW5nIHBhZ2luYXRlZCBibG9ncyBieSBjYXRlZ29yeTpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHBhZ2luYXRlZCBibG9ncyBieSBjYXRlZ29yeVwiKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ0J5U2x1ZyhzbHVnKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGJsb2cgPSBhd2FpdCBkYi5ibG9nLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBzbHVnIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRydWUsIC8vIEhUTUwgb3IgbWFya2Rvd24gY29udGVudFxyXG4gICAgICAgIGNoZWNrbGlzdFRpdGxlOiB0cnVlLFxyXG4gICAgICAgIGNoZWNrbGlzdEl0ZW1zOiB0cnVlLFxyXG4gICAgICAgIGltYWdlOiB0cnVlLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgc2x1ZzogdHJ1ZSB9IH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBibG9nO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIEVycm9yIGZldGNoaW5nIGJsb2cgYnkgc2x1ZzpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggYmxvZyBieSBzbHVnOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDinIUgR2V0IGxhdGVzdCBibG9ncyBmb3Igc2xpZGVyIChvcHRpb25hbCBjYXRlZ29yeSBmaWx0ZXIpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXRlc3RCbG9ncyhjYXRlZ29yeSA9IG51bGwsIGxpbWl0ID0gMTApIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgd2hlcmUgPSB7fTtcclxuICAgIGlmIChjYXRlZ29yeSkge1xyXG4gICAgICB3aGVyZS5jYXRlZ29yeSA9IHtcclxuICAgICAgICBuYW1lOiB7IGVxdWFsczogY2F0ZWdvcnkgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJsb2dzID0gYXdhaXQgZGIuYmxvZy5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlLFxyXG4gICAgICBpbmNsdWRlOiB7IGNhdGVnb3J5OiB0cnVlIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgaWQ6IFwiZGVzY1wiIH0sXHJcbiAgICAgIHRha2U6IGxpbWl0LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYmxvZ3M7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsYXRlc3QgYmxvZ3M6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwU0EyUXNCLDJMQUFBIn0=
}),
"[project]/src/app/(frontend)/assets/style/common/commonBlogSlider.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "blogCard": "commonBlogSlider-module__-UZgZa__blogCard",
  "blogImage": "commonBlogSlider-module__-UZgZa__blogImage",
  "blogTitle": "commonBlogSlider-module__-UZgZa__blogTitle",
  "category": "commonBlogSlider-module__-UZgZa__category",
  "container": "commonBlogSlider-module__-UZgZa__container",
  "content": "commonBlogSlider-module__-UZgZa__content",
  "controlBtn": "commonBlogSlider-module__-UZgZa__controlBtn",
  "controls": "commonBlogSlider-module__-UZgZa__controls",
  "excerpt": "commonBlogSlider-module__-UZgZa__excerpt",
  "header": "commonBlogSlider-module__-UZgZa__header",
  "imageWrapper": "commonBlogSlider-module__-UZgZa__imageWrapper",
  "readMore": "commonBlogSlider-module__-UZgZa__readMore",
  "section": "commonBlogSlider-module__-UZgZa__section",
  "slide": "commonBlogSlider-module__-UZgZa__slide",
  "sliderContainer": "commonBlogSlider-module__-UZgZa__sliderContainer",
  "title": "commonBlogSlider-module__-UZgZa__title",
  "viewport": "commonBlogSlider-module__-UZgZa__viewport",
});
}),
"[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$data$3a$21e515__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/dashboard/blog/data:21e515 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/common/commonBlogSlider.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const CommonBlogSlider = ({ category = null })=>{
    _s();
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        align: "start",
        loop: false,
        skipSnaps: false
    });
    const [prevBtnDisabled, setPrevBtnDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [nextBtnDisabled, setNextBtnDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommonBlogSlider.useEffect": ()=>{
            const fetchBlogs = {
                "CommonBlogSlider.useEffect.fetchBlogs": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$dashboard$2f$blog$2f$data$3a$21e515__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLatestBlogs"])(category);
                        setBlogs(data);
                    } catch (error) {
                        console.error("Error fetching blogs for slider:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["CommonBlogSlider.useEffect.fetchBlogs"];
            fetchBlogs();
        }
    }["CommonBlogSlider.useEffect"], [
        category
    ]);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommonBlogSlider.useCallback[scrollPrev]": ()=>emblaApi && emblaApi.scrollPrev()
    }["CommonBlogSlider.useCallback[scrollPrev]"], [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommonBlogSlider.useCallback[scrollNext]": ()=>emblaApi && emblaApi.scrollNext()
    }["CommonBlogSlider.useCallback[scrollNext]"], [
        emblaApi
    ]);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommonBlogSlider.useCallback[onSelect]": (emblaApi)=>{
            setPrevBtnDisabled(!emblaApi.canScrollPrev());
            setNextBtnDisabled(!emblaApi.canScrollNext());
        }
    }["CommonBlogSlider.useCallback[onSelect]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommonBlogSlider.useEffect": ()=>{
            if (!emblaApi) return;
            onSelect(emblaApi);
            emblaApi.on("reInit", onSelect);
            emblaApi.on("select", onSelect);
        }
    }["CommonBlogSlider.useEffect"], [
        emblaApi,
        onSelect
    ]);
    const getPreview = (content)=>{
        if (!content) return "";
        let text = content.replace(/<[^>]*>/g, "");
        if (text.length > 100) {
            text = text.slice(0, 100) + "...";
        }
        return text;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: "Latest Insights"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading blogs..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                lineNumber: 70,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (blogs.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Our Latest Blogs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlBtn,
                                    onClick: scrollPrev,
                                    disabled: prevBtnDisabled,
                                    "aria-label": "Previous slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M15 18l-6-6 6-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlBtn,
                                    onClick: scrollNext,
                                    disabled: nextBtnDisabled,
                                    "aria-label": "Next slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9 18l6-6-6-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewport,
                    ref: emblaRef,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderContainer,
                        children: blogs.map((blog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slide,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blogCard,
                                    onClick: ()=>router.push(`/blog/${blog.slug}`),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: blog.image || "/images/default-blog.jpg",
                                                alt: blog.title,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blogImage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
                                                    children: blog.category?.name || "General"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blogTitle,
                                                    children: blog.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].excerpt,
                                                    children: getPreview(blog.content)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonBlogSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readMore,
                                                    children: [
                                                        "Read More",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5 12h14M12 5l7 7-7 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                                                lineNumber: 161,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                                            lineNumber: 153,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, blog.id, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
            lineNumber: 87,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonBlogSlider.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CommonBlogSlider, "4Epa8lqcphLBmX7yzvPBYWW0Onw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CommonBlogSlider;
const __TURBOPACK__default__export__ = CommonBlogSlider;
var _c;
__turbopack_context__.k.register(_c, "CommonBlogSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/common/commonAboutPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomFade": "commonAboutPage-module__x7c_xq__bottomFade",
  "flex": "commonAboutPage-module__x7c_xq__flex",
  "left": "commonAboutPage-module__x7c_xq__left",
  "mainImg": "commonAboutPage-module__x7c_xq__mainImg",
  "mouse": "commonAboutPage-module__x7c_xq__mouse",
  "right": "commonAboutPage-module__x7c_xq__right",
  "rightWrapper": "commonAboutPage-module__x7c_xq__rightWrapper",
  "scrollHint": "commonAboutPage-module__x7c_xq__scrollHint",
  "scrollWheel": "commonAboutPage-module__x7c_xq__scrollWheel",
  "textContent": "commonAboutPage-module__x7c_xq__textContent",
  "wheel": "commonAboutPage-module__x7c_xq__wheel",
});
}),
"[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/common/commonAboutPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CommonAboutPage2 = ({ text1, text2, img })=>{
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isScrollable, setIsScrollable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolledToEnd, setScrolledToEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommonAboutPage2.useEffect": ()=>{
            const checkScroll = {
                "CommonAboutPage2.useEffect.checkScroll": ()=>{
                    if (scrollRef.current) {
                        const hasScroll = scrollRef.current.scrollHeight > scrollRef.current.clientHeight;
                        setIsScrollable(hasScroll);
                        // Initial check for scrolled to end
                        const isAtEnd = Math.abs(scrollRef.current.scrollHeight - scrollRef.current.clientHeight - scrollRef.current.scrollTop) < 5;
                        setScrolledToEnd(isAtEnd);
                    }
                }
            }["CommonAboutPage2.useEffect.checkScroll"];
            checkScroll();
            window.addEventListener("resize", checkScroll);
            // Check when content might change
            const observer = new MutationObserver(checkScroll);
            if (scrollRef.current) {
                observer.observe(scrollRef.current, {
                    childList: true,
                    subtree: true,
                    characterData: true
                });
            }
            return ({
                "CommonAboutPage2.useEffect": ()=>{
                    window.removeEventListener("resize", checkScroll);
                    observer.disconnect();
                }
            })["CommonAboutPage2.useEffect"];
        }
    }["CommonAboutPage2.useEffect"], [
        text2
    ]);
    const handleScroll = ()=>{
        if (scrollRef.current) {
            const isAtEnd = Math.abs(scrollRef.current.scrollHeight - scrollRef.current.clientHeight - scrollRef.current.scrollTop) < 5;
            setScrolledToEnd(isAtEnd);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center mb-40 sm-text-start",
                dangerouslySetInnerHTML: {
                    __html: text1
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flex,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
                        style: {
                            "--width": "45%"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: img,
                            alt: "about image",
                            width: 628,
                            height: 556,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainImg
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightWrapper,
                        style: {
                            "--width": "55%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right} ${isScrollable && !scrolledToEnd ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canScroll : ""}`,
                                ref: scrollRef,
                                onScroll: handleScroll,
                                style: {
                                    "--width": "100%"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: text2
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textContent
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isScrollable && !scrolledToEnd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomFade
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollHint,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mouse,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonAboutPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wheel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Scroll to read more"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonAboutPage2.jsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CommonAboutPage2, "zRzdD2ZeOc2UjssB5HQr9kBpXmE=");
_c = CommonAboutPage2;
const __TURBOPACK__default__export__ = CommonAboutPage2;
var _c;
__turbopack_context__.k.register(_c, "CommonAboutPage2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/about/stats.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "statBox": "stats-module__W1d0nG__statBox",
  "subtitle": "stats-module__W1d0nG__subtitle",
  "title": "stats-module__W1d0nG__title",
});
}),
"[project]/src/app/(frontend)/component/pages/about/Stats.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$about$2f$stats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/about/stats.module.css [app-client] (css module)");
'use client';
;
;
;
const Stats = ()=>{
    const data = [
        {
            id: 1,
            title: "12+",
            subtitle: "Years in Business"
        },
        {
            id: 2,
            title: "750+",
            subtitle: "Projects Delivered"
        },
        {
            id: 3,
            title: "500+",
            subtitle: "Satisfied Clients"
        },
        {
            id: 4,
            title: "50+",
            subtitle: "Team Members"
        }
    ];
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame-1200 pb-100 sm-pb-50 sm-px-20 sm-pt-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-30",
            children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$about$2f$stats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox,
                    variants: itemVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        amount: 0.5
                    },
                    transition: {
                        delay: index * 0.2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "fs-64",
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/about/Stats.jsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$about$2f$stats$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                            children: item.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/about/Stats.jsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/about/Stats.jsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/app/(frontend)/component/pages/about/Stats.jsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/about/Stats.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Stats;
const __TURBOPACK__default__export__ = Stats;
var _c;
__turbopack_context__.k.register(_c, "Stats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/common/industryGrid.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "industryGrid-module__oiHqDG__container",
  "description": "industryGrid-module__oiHqDG__description",
  "grid": "industryGrid-module__oiHqDG__grid",
  "header": "industryGrid-module__oiHqDG__header",
  "icon": "industryGrid-module__oiHqDG__icon",
  "iconWrapper": "industryGrid-module__oiHqDG__iconWrapper",
  "industryName": "industryGrid-module__oiHqDG__industryName",
  "item": "industryGrid-module__oiHqDG__item",
  "linkWrapper": "industryGrid-module__oiHqDG__linkWrapper",
  "section": "industryGrid-module__oiHqDG__section",
  "title": "industryGrid-module__oiHqDG__title",
});
}),
"[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/common/industryGrid.module.css [app-client] (css module)");
"use client";
;
;
;
;
;
const industries = [
    {
        name: "Healthcare Websites",
        link: "/healthcare-web-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 12h-4l-3 9L9 3l-3 9H2"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Travel Websites",
        link: "/travel-web-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.8 19.2L16 11l3.5-3.5C21 6 21 3 21 3s-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Real Estate Websites",
        link: "/real-estate-web-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "9 22 9 12 15 12 15 22"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "E-commerce Websites",
        link: "/e-commerce-web-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 6h18"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 10a4 4 0 0 1-8 0"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 55,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Corporate Websites",
        link: "/corporate-web-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "7",
                    width: "20",
                    height: "14",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 71,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Portfolio Websites",
        link: "/portfolio-web-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "3",
                    width: "18",
                    height: "18",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "8.5",
                    cy: "8.5",
                    r: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "21 15 16 10 5 21"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 86,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Tech Startup Websites",
        link: "/technology-web-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 12H4s.5-1 1-4c2 1 2 1 2 1"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15 6v5s.5-1 4-1c-1-2-1-2-1-2"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "15",
                    cy: "9",
                    r: "1"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 102,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Accountant Websites",
        link: "/accountant-website-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "4",
                    y: "2",
                    width: "16",
                    height: "20",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "6",
                    x2: "16",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "10",
                    x2: "16",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "14",
                    x2: "16",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "18",
                    x2: "16",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 120,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Automotive Websites",
        link: "/automotive-website-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "7",
                    cy: "17",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 17h6"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "17",
                    cy: "17",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 138,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Construction Websites",
        link: "/construction-website-design",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "6",
                    width: "20",
                    height: "8",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 14v7"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 14v7"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 3v3"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 3v3"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 14 2.3 6.3"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m14 14 7.7-7.7"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m8 6 8 8"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m16 6-8 8"
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 155,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Dental Websites",
        link: "/expert-dentist-website-development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 4C5 4 3 6 3 9.5c0 3 2 4.5 4 5.5 1 .5 1.5 1.5 1.5 2.5 0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-1 .5-2 1.5-2.5 2-1 4-2.5 4-5.5C21 6 19 4 17 4c-1.5 0-3 1-4.5 2C11 5 9.5 4 7 4z"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                lineNumber: 183,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 177,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};
const IndustryGrid = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            children: "Industries We Work With"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: "We extend our Website Development expertise across a diverse range of industries, tailoring strategies to meet the unique demands and opportunities each sector presents."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    variants: containerVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true
                    },
                    children: industries.map((industry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                            variants: itemVariants,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: industry.link,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconWrapper,
                                        children: industry.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$industryGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].industryName,
                                        children: industry.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
            lineNumber: 213,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/IndustryGrid.jsx",
        lineNumber: 212,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IndustryGrid;
const __TURBOPACK__default__export__ = IndustryGrid;
var _c;
__turbopack_context__.k.register(_c, "IndustryGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(frontend)/assets/style/common/commonFinancialImpact.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardDesc": "commonFinancialImpact-module__f-MrGa__cardDesc",
  "cardHeader": "commonFinancialImpact-module__f-MrGa__cardHeader",
  "costCard": "commonFinancialImpact-module__f-MrGa__costCard",
  "factorList": "commonFinancialImpact-module__f-MrGa__factorList",
  "gridCard": "commonFinancialImpact-module__f-MrGa__gridCard",
  "header": "commonFinancialImpact-module__f-MrGa__header",
  "iconBox": "commonFinancialImpact-module__f-MrGa__iconBox",
  "mainGrid": "commonFinancialImpact-module__f-MrGa__mainGrid",
  "pricingCard": "commonFinancialImpact-module__f-MrGa__pricingCard",
  "pricingContainer": "commonFinancialImpact-module__f-MrGa__pricingContainer",
  "pricingGrid": "commonFinancialImpact-module__f-MrGa__pricingGrid",
  "pricingTitle": "commonFinancialImpact-module__f-MrGa__pricingTitle",
  "roiCard": "commonFinancialImpact-module__f-MrGa__roiCard",
  "roiMetric": "commonFinancialImpact-module__f-MrGa__roiMetric",
  "roiMetricGrid": "commonFinancialImpact-module__f-MrGa__roiMetricGrid",
  "roiSection": "commonFinancialImpact-module__f-MrGa__roiSection",
});
}),
"[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/assets/style/common/commonFinancialImpact.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const CommonFinancialImpact = ({ heading, subheading, costFactors, roiData, pricingModels })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roiSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "frame-1200 py-100 sm-py-50 sm-px-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            children: heading
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: subheading
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainGrid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].costCard}`,
                            initial: {
                                opacity: 0,
                                y: 40
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBox,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2V22M17 5H9.5C8.50544 5 7.55161 5.39509 6.84835 6.09835C6.14509 6.80161 5.75 7.75544 5.75 8.75C5.75 9.74456 6.14509 10.6984 6.84835 11.4017C7.55161 12.1049 8.50544 12.5 9.5 12.5H14.5C15.4946 12.5 16.4484 12.8951 17.1517 13.5983C17.8549 14.3016 18.25 15.2554 18.25 16.25C18.25 17.2446 17.8549 18.1984 17.1517 18.9017C16.4484 19.6049 15.4946 20 14.5 20H6",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: costFactors.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                                    children: costFactors.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].factorList,
                                    children: costFactors.factors.map((factor, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: factor
                                        }, i, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roiCard}`,
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
                                delay: 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBox,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 7V12L15 15",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: roiData.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                                    children: roiData.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roiMetricGrid,
                                    children: roiData.metrics.map((metric, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$assets$2f$style$2f$common$2f$commonFinancialImpact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roiMetric,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: metric.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: metric.value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(frontend)/component/pages/common/CommonFinancialImpact.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CommonFinancialImpact;
const __TURBOPACK__default__export__ = CommonFinancialImpact;
var _c;
__turbopack_context__.k.register(_c, "CommonFinancialImpact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_b81c934b._.js.map