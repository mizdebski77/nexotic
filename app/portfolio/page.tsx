import { PROJECTS } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const allProjects = [
    ...PROJECTS,
    {
        name: "LogiSmart",
        type: "System B2B",
        tags: ["React", "PostgreSQL"],
        year: "2023",
        description: "Platforma do automatyzacji procesow logistycznych.",
        bgClass: "bg-[#100a00]",
        accentColor: "#c4922d",
    },
    {
        name: "GreenSpace",
        type: "Strona + CMS",
        tags: ["Next.js", "Sanity"],
        year: "2023",
        description: "Strona korporacyjna z rozbudowanym blogiem.",
        bgClass: "bg-[#0a1a0a]",
        accentColor: "#7bc67e",
    },
];

export default function PortfolioPage() {
    return (
        <div className="bg-white pt-[68px]">
            <PageHero
                eyebrow="Nasze realizacje"
                title="Projekty, z ktorych"
                accent="jestesmy dumni"
                subtitle="80+ zrealizowanych projektow dla firm z roznych branzy."
            />
            <div className="max-w-site mx-auto px-6 md:px-10 py-20">
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
                <StaggerContainer className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {allProjects.map((p, i) => (
                        <StaggerItem key={i}>
                            <div className="group border border-neutral-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                <div
                                    className={`${p.bgClass} h-48 flex items-center justify-center`}
                                >
                                    <span
                                        className="text-4xl font-extrabold opacity-10"
                                        style={{ color: p.accentColor }}
                                    >
                                        {p.name[0]}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="text-[11px] font-bold text-lime tracking-[1px] mb-1.5">
                                        {p.year} - {p.type}
                                    </div>
                                    <h3 className="text-[18px] font-bold text-neutral-900 tracking-tight mb-2 group-hover:text-lime transition-colors">
                                        {p.name}
                                    </h3>
                                    <p className="text-[13.5px] text-neutral-500 leading-relaxed mb-4">
                                        {p.description}
                                    </p>
                                    <div className="flex gap-1.5 flex-wrap">
                                        {p.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="text-[11px] bg-neutral-100 text-neutral-500 px-2.5 py-0.5 rounded-md font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
}
