"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

interface Props {
    eyebrow: string;
    title: string;
    accent: string;
    subtitle: string;
}

export function PageHero({ eyebrow, title, accent, subtitle }: Props) {
    return (
        <section className="bg-ink py-20 px-6 md:px-10 relative">
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.18]">
                <svg
                    viewBox="0 0 600 600"
                    className="w-full h-full"
                    preserveAspectRatio="xMaxYMid slice"
                >
                    {[80, 160, 240, 320, 400, 480].map((y, i) => (
                        <path
                            key={y}
                            d={`M0,${y} Q${180 + i * 20},${y - 60} ${
                                380 + i * 10
                            },${y + 40} T700,${y - 20}`}
                            stroke="#c8f135"
                            strokeWidth={0.9 - i * 0.1}
                            fill="none"
                        />
                    ))}
                    {[
                        [100, 60],
                        [320, 150],
                        [500, 95],
                        [180, 270],
                        [440, 330],
                        [80, 420],
                    ].map(([cx, cy], i) => (
                        <circle
                            key={i}
                            cx={cx}
                            cy={cy}
                            r={i % 2 === 0 ? 2.5 : 1.5}
                            fill="#c8f135"
                            opacity={0.5 - i * 0.05}
                        />
                    ))}
                </svg>
            </div>
            <div className="max-w-site mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <SectionLabel>{eyebrow}</SectionLabel>
                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-[-2.5px] leading-[1.04] text-white mb-5">
                        {title}
                        <br />
                        <span className="text-lime">{accent}</span>
                    </h1>
                    <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
