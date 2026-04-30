import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from "@/components/ui/AnimatedSection";

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
    return (
        <Link href="/portfolio" className="group block cursor-pointer">
            {/* Thumbnail */}
            <div
                className={`${project.bgClass} rounded-xl overflow-hidden mb-3 aspect-[4/3] relative border border-black/[0.06]`}
            >
                <div
                    className={`absolute inset-2 rounded-lg overflow-hidden flex flex-col border ${
                        project.isLight
                            ? "border-black/[0.08] bg-white"
                            : "border-white/[0.08] bg-white/[0.03]"
                    }`}
                >
                    <div
                        className={`px-2.5 py-1.5 flex gap-1 border-b ${
                            project.isLight
                                ? "border-black/[0.07] bg-neutral-100"
                                : "border-white/[0.06] bg-white/[0.04]"
                        }`}
                    >
                        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                            <div
                                key={c}
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: c }}
                            />
                        ))}
                    </div>
                    <div className="flex-1 p-2.5 flex flex-col gap-1.5">
                        <div
                            className="h-1 rounded"
                            style={{
                                background: project.accentColor,
                                opacity: 0.6,
                                width: "55%",
                            }}
                        />
                        <div
                            className={`h-1 rounded w-4/5 ${
                                project.isLight
                                    ? "bg-black/[0.07]"
                                    : "bg-white/[0.06]"
                            }`}
                        />
                        <div
                            className={`h-1 rounded w-2/3 ${
                                project.isLight
                                    ? "bg-black/[0.05]"
                                    : "bg-white/[0.04]"
                            }`}
                        />
                        <div className="flex-1 grid grid-cols-2 gap-1.5 mt-1">
                            <div
                                className="rounded-md"
                                style={{
                                    background: project.accentColor,
                                    opacity: 0.1,
                                    border: `1px solid ${project.accentColor}22`,
                                }}
                            />
                            <div
                                className={`rounded-md ${
                                    project.isLight
                                        ? "bg-black/[0.04] border border-black/[0.06]"
                                        : "bg-white/[0.04] border border-white/[0.05]"
                                }`}
                            />
                        </div>
                    </div>
                </div>
                {/* hover overlay */}
                <div className="absolute inset-0 bg-lime/0 group-hover:bg-lime/[0.04] transition-colors duration-300" />
            </div>
            {/* Info */}
            <h3 className="text-[15px] font-bold text-neutral-900 mb-0.5 group-hover:text-lime transition-colors duration-200">
                {project.name}
            </h3>
            <p className="text-[12.5px] text-neutral-400 mb-2.5">
                {project.type}
            </p>
            <div className="flex gap-1.5 flex-wrap">
                {project.tags.map((t) => (
                    <span
                        key={t}
                        className="text-[11px] bg-neutral-100 text-neutral-500 px-2.5 py-0.5 rounded-md font-medium group-hover:bg-lime/10 group-hover:text-lime transition-colors duration-200"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </Link>
    );
}

export function PortfolioSection() {
    return (
        <section className="bg-white border-t border-neutral-200 py-20 xl:py-24">
            <div className="max-w-site mx-auto px-6 md:px-10">
                <AnimatedSection className="flex items-end justify-between mb-9 gap-5">
                    <div>
                        <SectionLabel dark>Nasze realizacje</SectionLabel>
                        <h2 className="text-3xl md:text-4xl xl:text-[44px] font-extrabold tracking-[-1.5px] text-neutral-900 leading-[1.08]">
                            Projekty, z których jesteśmy dumni
                        </h2>
                        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.18]">
                            <svg
                                viewBox="0 0 600 600"
                                className="w-full h-full"
                                preserveAspectRatio="xMaxYMid slice"
                            >
                                {[80, 160, 240, 320, 400, 480].map((y, i) => (
                                    <path
                                        key={y}
                                        d={`M0,${y} Q${180 + i * 20},${
                                            y - 60
                                        } ${380 + i * 10},${y + 40} T700,${
                                            y - 20
                                        }`}
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
                    </div>
                    <Link
                        href="/portfolio"
                        className="group shrink-0 flex items-center gap-1.5 text-[13.5px] font-semibold text-neutral-700 border border-neutral-200 px-4 py-2.5 rounded-lg hover:border-neutral-400 hover:text-neutral-900 transition-all duration-200 whitespace-nowrap"
                    >
                        Zobacz wszystkie realizacje
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                            →
                        </span>
                    </Link>
                </AnimatedSection>

                <StaggerContainer className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5">
                    {PROJECTS.map((project, i) => (
                        <StaggerItem key={i}>
                            <ProjectCard project={project} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
