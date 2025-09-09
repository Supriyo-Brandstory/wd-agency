
"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "@/app/(frontend)/assets/style/home/trusted.module.css";
import { motion } from "framer-motion";
export default function Trusted() {
    const svgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {




            // Animate the inner dashed circles
            gsap.to("#innerDashed", {
                rotate: -360,
                transformOrigin: "50% 50%",
                duration: 15,
                repeat: -1,
                ease: "linear",
            });

            gsap.to("#anticlockwise", {
                rotate: -360,               // anticlockwise
                transformOrigin: "50% 50%", // rotate around center
                duration: 13,
                repeat: -1,
                ease: "linear"
            });
            gsap.to("#clockwise", {
                rotate: 360,                // clockwise
                transformOrigin: "50% 50%",
                duration: 13,
                repeat: -1,
                ease: "linear"
            });

            gsap.to("#pinkRings-1", {
                rotate: 360,
                transformOrigin: "50% 50%",
                duration: 8,
                repeat: -1,
                ease: "linear",
            });

            // pinkRings-2 anticlockwise
            gsap.to("#pinkRings-2", {
                rotate: -360,
                transformOrigin: "50% 50%",
                duration: 10,
                repeat: -1,
                ease: "linear",
            });

            // pinkRings-3 clockwise faster
            gsap.to("#pinkRings-3", {
                rotate: 360,
                transformOrigin: "50% 50%",
                duration: 12,
                repeat: -1,
                ease: "linear",
            });

            // Call on page load or on click


            const boxes = svgRef.current.querySelectorAll(".boxPath");


            const movements = [
                { up: -50, down: 60, left: 0, right: 0 },
                { up: -20, down: -50, left: 0, right: 10 },
                { up: -50, down: 30, left: 50, right: 0 },
                { up: 0, down: -10, left: 50, right: 50 },
                { up: 90, down: 0, left: 90, right: 0 },

                { up: 10, down: 50, left: 0, right: 20 },

                { up: 50, down: -20, left: -10, right: 0 },    // 216° (Bottom side)
                { up: -20, down: 40, left: 90, right: -90 },   // 252° (Bottom-left)
                { up: -10, down: 40, left: -60, right: -20 },   // 288° (Left side)
                { up: -40, down: -50, left: -90, right: -90 },
            ];

            boxes.forEach((box, i) => {
                const move = movements[i % movements.length];

                gsap.to(box, {
                    x: i % 2 === 0 ? move.left : move.right,  // Left/Right Control
                    y: i % 2 === 0 ? move.up : move.down,     // Up/Down Control
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: i * 0.5,
                    transformOrigin: "720px 405px",
                });
            });

            // Mouse move effect
            const handleMouseMove = (e) => {
                const { innerWidth, innerHeight } = window;
                const x = (e.clientX / innerWidth - 0.5) * 10; // tilt range
                const y = (e.clientY / innerHeight - 0.5) * 10;

                gsap.to(svgRef.current, {
                    rotationY: x,
                    rotationX: -y,
                    transformPerspective: 800,
                    transformOrigin: "center",
                    ease: "power1.out",
                    duration: 0.6,
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);

        }, svgRef);


        return () => ctx.revert();
    }, []);
     const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <div className='frame-1200 py-100 sm-py-50 sm-px-20'>
            <motion.h2
                className="text-center mb-20 sm-mb-20 sm-text-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }} // when leaving viewport
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }} // animate every time
            >
                Trusted by Businesses Across UAE
            </motion.h2>

            <motion.p
                className="text-center mb-50 sm-mb-20 frame-700 sm-text-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                With a proven track record in website design and development, we have helped hundreds of businesses thrive and grow their online presence.

            </motion.p>
            <div className={`${styles.trustedWrapper}`}>
                <div className={`${styles.leftstatBox}`}>
                    <motion.div
                        className={`${styles.statBox}`}
                        initial={{ opacity: 0, x: -100 }}   // start hidden, left side
                        whileInView={{ opacity: 1, x: 0 }}  // animate into place
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }} // run once on scroll
                    >
                        <h3 className="fs-64 fw-700">12+</h3>
                        <p className="fs-24 fw-600">Years of Experience</p>
                    </motion.div>

                    <motion.div
                        className={`${styles.statBox}`}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // slight delay
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-64 fw-700">50+</h3>
                        <p className="fs-24 fw-600">Expert Developers</p>
                    </motion.div>
                </div>

                <div className={`${styles.svgContainer}`} ref={svgRef}>
                    <svg width={isMobile ? "900" : "1200"} height={isMobile ? "400" : "700"} viewBox={isMobile ? "0 0  1200 700" : "0 0 1280 780"} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M555 228L467.107 140.5H144" stroke="white" />
                        <path opacity="0.2" d="M546 228L464.5 146.5H424" stroke="white" />
                        <path opacity="0.1" d="M149 166L144 161H157L162 166H149Z" fill="white" />
                        <rect opacity="0.1" x={346} y={155} width={2} height={2} fill="#D9D9D9" />
                        <rect opacity="0.1" x={352} y={155} width={2} height={2} fill="#D9D9D9" />
                        <rect opacity="0.1" x={358} y={155} width={2} height={2} fill="#D9D9D9" />
                        <path opacity="0.2" d="M885 228L972.893 140.5H1296" stroke="white" />
                        <path opacity="0.2" d="M894 228L975.5 146.5H1016" stroke="white" />
                        <path opacity="0.1" d="M1291 166L1296 161H1283L1278 166H1291Z" fill="white" />
                        <rect
                            opacity="0.1"
                            width={2}
                            height={2}
                            transform="matrix(-1 0 0 1 1094 155)"
                            fill="#D9D9D9"
                        />
                        <rect
                            opacity="0.1"
                            width={2}
                            height={2}
                            transform="matrix(-1 0 0 1 1088 155)"
                            fill="#D9D9D9"
                        />
                        <rect
                            opacity="0.1"
                            width={2}
                            height={2}
                            transform="matrix(-1 0 0 1 1082 155)"
                            fill="#D9D9D9"
                        />
                        <path opacity="0.2" d="M555 582L467.107 669.5H144" stroke="white" />
                        <path opacity="0.2" d="M546 582L464.5 663.5H424" stroke="white" />
                        <path opacity="0.1" d="M149 644L144 649H157L162 644H149Z" fill="white" />
                        <rect
                            opacity="0.1"
                            width={2}
                            height={2}
                            transform="matrix(1 0 0 -1 346 655)"
                            fill="#D9D9D9"
                        />
                        <rect
                            opacity="0.1"
                            width={2}
                            height={2}
                            transform="matrix(1 0 0 -1 352 655)"
                            fill="#D9D9D9"
                        />
                        <rect
                            opacity="0.1"
                            width={2}
                            height={2}
                            transform="matrix(1 0 0 -1 358 655)"
                            fill="#D9D9D9"
                        />
                        <path opacity="0.2" d="M885 582L972.893 669.5H1296" stroke="white" />
                        <path opacity="0.2" d="M894 582L975.5 663.5H1016" stroke="white" />
                        <path opacity="0.1" d="M1291 644L1296 649H1283L1278 644H1291Z" fill="white" />
                        <rect
                            opacity="0.1"
                            x={1094}
                            y={655}
                            width={2}
                            height={2}
                            transform="rotate(180 1094 655)"
                            fill="#D9D9D9"
                        />
                        <rect
                            opacity="0.1"
                            x={1088}
                            y={655}
                            width={2}
                            height={2}
                            transform="rotate(180 1088 655)"
                            fill="#D9D9D9"
                        />
                        <rect
                            opacity="0.1"
                            x={1082}
                            y={655}
                            width={2}
                            height={2}
                            transform="rotate(180 1082 655)"
                            fill="#D9D9D9"
                        />
                        <g filter="url(#filter0_d_96_997)">
                            <g opacity="0.5">
                                <mask
                                    id="mask0_96_997"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x={530}
                                    y={215}
                                    width={381}
                                    height={381}
                                >
                                    <path
                                        d="M910 405C910 509.935 824.935 595 720 595C615.066 595 530 509.935 530 405C530 300.066 615.066 215 720 215C824.935 215 910 300.066 910 405ZM600.298 405C600.298 471.11 653.891 524.703 720 524.703C786.11 524.703 839.703 471.11 839.703 405C839.703 338.891 786.11 285.298 720 285.298C653.891 285.298 600.298 338.891 600.298 405Z"
                                        fill="#D9D9D9"
                                    />
                                </mask>
                                <g mask="url(#mask0_96_997)">
                                    <mask id="path-26-inside-1_96_997" fill="white">
                                        <path d="M810.497 447.548C802.743 464.042 790.628 478.102 775.463 488.211L720 405L810.497 447.548Z" />
                                    </mask>
                                    <path
                                        d="M810.497 447.548C802.743 464.042 790.628 478.102 775.463 488.211L720 405L810.497 447.548Z"
                                        stroke="white"
                                        strokeWidth={4}
                                        mask="url(#path-26-inside-1_96_997)"
                                    />
                                </g>
                            </g>
                            <g opacity="0.5">
                                <mask
                                    id="mask1_96_997"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x={529}
                                    y={214}
                                    width={382}
                                    height={382}
                                >
                                    <path
                                        d="M569.356 289.216C633.302 206.017 752.586 190.409 835.785 254.356C918.984 318.302 934.592 437.586 870.646 520.785C806.699 603.984 687.415 619.592 604.216 555.646C521.017 491.699 505.409 372.415 569.356 289.216ZM814.909 477.946C855.195 425.53 845.363 350.379 792.946 310.092C740.53 269.806 665.379 279.639 625.092 332.055C584.806 384.471 594.639 459.622 647.055 499.909C699.471 540.195 774.622 530.363 814.909 477.946Z"
                                        fill="#D9D9D9"
                                    />
                                </mask>
                                <g mask="url(#mask1_96_997)">
                                    <mask id="path-28-inside-2_96_997" fill="white">
                                        <path d="M673.521 316.459C683.44 311.252 694.164 307.749 705.244 306.095L720.001 405.001L673.521 316.459Z" />
                                    </mask>
                                    <path
                                        d="M673.521 316.459C683.44 311.252 694.164 307.749 705.244 306.095L720.001 405.001L673.521 316.459Z"
                                        stroke="white"
                                        strokeWidth={4}
                                        mask="url(#path-28-inside-2_96_997)"
                                    />
                                </g>
                            </g>



                            <mask
                                id="mask2_96_997"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={529}
                                y={214}
                                width={382}
                                height={382}
                            >
                                <path
                                    d="M864.854 527.954C796.949 607.954 677.048 617.759 597.047 549.854C517.047 481.949 507.242 362.048 575.147 282.047C643.052 202.047 762.953 192.242 842.954 260.147C922.954 328.052 932.759 447.953 864.854 527.954ZM628.741 327.539C585.96 377.94 592.137 453.479 642.539 496.26C692.94 539.041 768.479 532.864 811.26 482.462C854.041 432.061 847.864 356.522 797.462 313.741C747.061 270.96 671.522 277.137 628.741 327.539Z"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask2_96_997)" opacity="0.9" stroke="white" strokeWidth="2" fill="none">
                                <defs>

                                    <path
                                        id="boxPath"
                                        d="M786.337 550.601C772.634 556.844 758.118 561.122 743.219 563.307L720.001 405L786.337 550.601Z"
                                    />

                                    <path
                                        id="boxPath-2"
                                        d="M776.337 550.601C762.634 556.844 748.118 561.122 743.219 563.307L720.001 401L776.337 550.601Z"
                                    />

                                    <path
                                        id="boxPath-3"
                                        d="M796.337 550.601C782.634 556.844 768.118 561.122 723.219 563.307L720.001 405L796.337 550.601Z"
                                    />

                                </defs>

                                <use href="#boxPath" className="boxPath" transform="rotate(0 720 405)" />
                                <use href="#boxPath-2" className="boxPath" transform="rotate(36 720 405)" />
                                <use href="#boxPath-3" className="boxPath" transform="rotate(72 720 405)" />
                                <use href="#boxPath" className="boxPath" transform="rotate(108 720 405)" />
                                <use href="#boxPath-2" className="boxPath" transform="rotate(144 720 405)" />
                                <use href="#boxPath-3" className="boxPath" transform="rotate(180 720 405)" />
                                <use href="#boxPath" className="boxPath" transform="rotate(216 720 405)" />
                                <use href="#boxPath-2" className="boxPath" transform="rotate(252 720 405)" />
                                <use href="#boxPath-3" className="boxPath" transform="rotate(288 720 405)" />
                                <use href="#boxPath" className="boxPath" transform="rotate(324 720 405)" />
                            </g>

                            <g opacity="0.5" >
                                <mask
                                    id="mask6_96_997"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x={529}
                                    y={214}
                                    width={382}
                                    height={382}
                                >
                                    <path
                                        d="M799.905 232.619C895.108 276.749 936.512 389.701 892.382 484.905C848.252 580.108 735.3 621.512 640.096 577.382C544.893 533.252 503.489 420.3 547.619 325.096C591.749 229.893 704.701 188.489 799.905 232.619ZM669.66 513.603C729.639 541.405 800.8 515.32 828.603 455.341C856.405 395.362 830.32 324.201 770.341 296.398C710.362 268.596 639.2 294.681 611.398 354.66C583.596 414.639 609.68 485.8 669.66 513.603Z"
                                        fill="#D9D9D9"
                                    />
                                </mask>
                                <g mask="url(#mask6_96_997)">
                                    <mask id="path-38-inside-7_96_997" fill="white">
                                        <path d="M796.661 340.789C804.027 349.582 809.824 359.577 813.8 370.336L720.001 405L796.661 340.789Z" />
                                    </mask>
                                    <path
                                        d="M796.661 340.789C804.027 349.582 809.824 359.577 813.8 370.336L720.001 405L796.661 340.789Z"
                                        stroke="white"
                                        strokeWidth={4}
                                        mask="url(#path-38-inside-7_96_997)"
                                    />
                                </g>
                            </g>


                            <circle cx={720} cy={405} r="119.5" stroke="white" />
                            <circle opacity="0.15" cx={720} cy={405} r="131.5" stroke="white" />
                            <circle opacity="0.1" cx={720} cy={405} r="144.5" stroke="white" />
                            <circle opacity="0.08" cx={720} cy={405} r="159.5" stroke="white" />
                            <circle
                                id="clockwise"
                                opacity="0.4"
                                cx={720}
                                cy={405}
                                r={144}
                                stroke="white"
                                strokeWidth={2}
                                strokeDasharray="1 300"
                            />
                            <circle
                                id="anticlockwise"
                                opacity="0.4"
                                cx={720}
                                cy={405}
                                r={131}
                                stroke="white"
                                strokeWidth={2}
                                strokeDasharray="1 300"
                            />
                            <circle
                                id="anticlockwise"
                                cx={720}
                                cy={405}
                                r={159}
                                stroke="#E83E8C"
                                strokeWidth={2}
                                strokeDasharray="1 300"
                            />
                        </g>
                        <g filter="url(#filter1_d_96_997)" id="anticlockwise">
                            <circle opacity="0.3" cx={720} cy={405} r="117.5" stroke="white" />
                            <circle
                                cx={720}
                                cy={405}
                                r={110}
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeDasharray="0.01 10"
                            />
                        </g>
                        <defs>
                            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="glow" />
                                <feComposite in="SourceGraphic" in2="glow" operator="atop" />
                            </filter>

                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E83E8C" />
                                <stop offset="70%" stopColor="#E83E8C" />
                                <stop offset="100%" stopColor="#E83E8C" stopOpacity="0" />
                            </linearGradient>

                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E83E8C" />
                                <stop offset="50%" stopColor="#E83E8C" />
                                <stop offset="100%" stopColor="#E83E8C" stopOpacity="0" />
                            </linearGradient>

                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E83E8C" />
                                <stop offset="30%" stopColor="#E83E8C" />
                                <stop offset="100%" stopColor="#E83E8C" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        <g filter="url(#glowFilter)" id="pinkRingsGroup">
                            <circle id="pinkRings-1" cx="721" cy="405" r="80" fill="none" stroke="url(#gradient1)" strokeWidth="4.5" />
                            <circle id="pinkRings-2" cx="721" cy="405" r="90" fill="none" stroke="url(#gradient2)" strokeWidth="4.5" />
                            <circle id="pinkRings-3" cx="721" cy="405" r="100" fill="none" stroke="url(#gradient3)" strokeWidth="4.5" />
                        </g>

                        <g filter="url(#filter3_d_96_997)" >
                            <circle id="anticlockwise"
                                cx={720}
                                cy={405}
                                r="64.1127"
                                stroke="white"
                                strokeWidth={2}
                                strokeDasharray="50 42"
                            />
                            <circle id="clockwise"
                                cx="720.001"
                                cy={405}
                                r="60.338"
                                stroke="white"
                                strokeWidth={2}
                                strokeDasharray="27 27"
                            />
                            <ellipse
                                cx={720}
                                cy="405.001"
                                rx="54.5634"
                                ry="54.5634"
                                stroke="white"
                                strokeWidth={2}
                                strokeDasharray="40 14"
                                id="anticlockwise"
                            />
                        </g>
                        <path
                            opacity="0.5"
                            d="M701 405H739"
                            stroke="white"
                            strokeWidth={3}
                            strokeDasharray="2 4"
                        />
                        <circle cx={720} cy={405} r="1.83673" fill="#E83E8C" />
                        <path
                            d="M680 378H691.832L695.328 384.911H705.547L712 393"
                            stroke="url(#paint0_linear_96_997)"
                        />
                        <path
                            d="M680 432H691.832L695.328 425.09H705.547L712 417"
                            stroke="url(#paint1_linear_96_997)"
                        />
                        <path
                            d="M760 378H748.169L744.673 384.911H734.454L728 393"
                            stroke="url(#paint2_linear_96_997)"
                        />
                        <path
                            d="M760 432H748.169L744.673 425.09H734.454L728 417"
                            stroke="url(#paint3_linear_96_997)"
                        />
                        <circle cx={712} cy={393} r={1} fill="#D9D9D9" />
                        <circle cx={712} cy={417} r={1} fill="#D9D9D9" />
                        <circle cx={728} cy={393} r={1} fill="#D9D9D9" />
                        <circle cx={728} cy={417} r={1} fill="#D9D9D9" />
                        <defs>
                            <filter
                                id="filter0_d_96_997"
                                x="376.194"
                                y="61.1938"
                                width="687.613"
                                height="687.613"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation={38} />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_96_997"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_96_997"
                                    result="shape"
                                />
                            </filter>
                            <filter
                                id="filter1_d_96_997"
                                x={502}
                                y={187}
                                width={436}
                                height={436}
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation={46} />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_96_997"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_96_997"
                                    result="shape"
                                />
                            </filter>
                            <filter
                                id="filter2_d_96_997"
                                x="582.48"
                                y="267.48"
                                width="275.04"
                                height="275.04"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation={10} />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.364706 0 0 0 0 0.0941176 0 0 0 1 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_96_997"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_96_997"
                                    result="shape"
                                />
                            </filter>
                            <filter
                                id="filter3_d_96_997"
                                x={597}
                                y={282}
                                width={246}
                                height={246}
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation={26} />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_96_997"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_96_997"
                                    result="shape"
                                />
                            </filter>
                            <linearGradient
                                id="paint0_linear_96_997"
                                x1="712.942"
                                y1="393.675"
                                x2="677.275"
                                y2="376.898"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" stopOpacity="0.5" />
                                <stop offset={1} stopColor="white" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_96_997"
                                x1="712.942"
                                y1="416.326"
                                x2="677.275"
                                y2="433.103"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" stopOpacity="0.5" />
                                <stop offset={1} stopColor="white" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_96_997"
                                x1="727.059"
                                y1="393.675"
                                x2="762.726"
                                y2="376.898"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" stopOpacity="0.5" />
                                <stop offset={1} stopColor="white" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_96_997"
                                x1="727.059"
                                y1="416.326"
                                x2="762.726"
                                y2="433.103"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" stopOpacity="0.5" />
                                <stop offset={1} stopColor="white" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
                <div className={`${styles.leftstatBox}`}>
                    <motion.div
                        className={`${styles.statBox}`}
                        initial={{ opacity: 0, x: 100 }}   // start off-screen to the right
                        whileInView={{ opacity: 1, x: 0 }} // slide to original position
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-64 fw-700">750+</h3>
                        <p className="fs-24 fw-600">Successful Projects</p>
                    </motion.div>

                    <motion.div
                        className={`${styles.statBox}`}
                        initial={{ opacity: 0, x: 100 }}   // also from right side
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // delayed for stagger effect
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-64 fw-700">500+</h3>
                        <p className="fs-24 fw-600">Happy Clients</p>
                    </motion.div>
                </div>
            </div>
           <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 100 }}       // start below
      whileInView={{ opacity: 1, y: 0 }}     // slide up to position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <p className="my-20">Need an incredible website built for impact?</p>
      <button className="white-btn">Let’s Discuss Today</button>
    </motion.div>

        </div>
    );
}
