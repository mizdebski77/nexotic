import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import {
    StaggerContainer,
    StaggerItem,
    AnimatedSection,
} from "@/components/ui/AnimatedSection";

const extraProjects = [
    {
        name: "LogiSmart",
        type: "System B2B",
        year: "2023",
        image: "/projects/logismart.jpg",
        description:
            "Automatyzacja procesów logistycznych skróciła czas obsługi zamówień o 60% i wyeliminowała błędy ręcznego przepisywania danych.",
        result: "-60% czasu obsługi",
    },
    {
        name: "GreenSpace",
        type: "Strona + CMS",
        year: "2023",
        image: "/projects/greenspace.jpg",
        description:
            "Nowa strona z systemem blogowym zwiększyła organiczny ruch o 180% w ciągu 6 miesięcy od wdrożenia.",
        result: "+180% ruchu",
    },
];

const allProjects = [...PROJECTS, ...extraProjects];

export default function PortfolioPage() {
    return (
        <div className="bg-white pt-[68px]">
            <PageHero
                eyebrow="Nasze realizacje"
                title="Projekty, z których"
                accent="jesteśmy dumni"
                subtitle="Ponad 50 zrealizowanych projektów dla firm z różnych branż w Polsce i za granicą."
            />

            <div className="max-w-site mx-auto px-6 md:px-10 py-20">
                <StaggerContainer className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {allProjects.map((p, i) => (
                        <StaggerItem key={i}>
                            <div className="group border border-neutral-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 h-full flex flex-col">
                                {/* Photo */}
                                <div className="relative h-52 bg-neutral-100 overflow-hidden shrink-0">
                                    <Image
                                        src={p.image}
                                        alt={p.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="text-[11px] font-bold text-lime tracking-[1px] mb-2">
                                        {p.year} · {p.type}
                                    </div>
                                    <h3 className="text-[18px] font-bold text-neutral-900 tracking-tight mb-2.5 group-hover:text-lime transition-colors duration-200">
                                        {p.name}
                                    </h3>
                                    <p className="text-[13.5px] text-neutral-500 leading-relaxed">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* "i wiele więcej" section */}
                <AnimatedSection className="mt-16">
                    <div className="rounded-2xl border border-dashed border-neutral-300 p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-neutral-50">
                        <div>
                            <p className="text-[11px] font-bold text-lime tracking-[2px] uppercase mb-2">
                                I wiele więcej
                            </p>
                            <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-2">
                                To tylko część naszych projektów.
                            </h3>
                            <p className="text-[14.5px] text-neutral-500 max-w-md leading-relaxed">
                                Każdy projekt jest inny — tak jak każdy klient.
                                Opowiedz nam o swoim, a pokażemy Ci podobne
                                realizacje z Twojej branży.
                            </p>
                        </div>
                        <a
                            href="/kontakt"
                            className="shrink-0 inline-flex items-center gap-2 bg-lime text-ink font-bold px-7 py-3.5 rounded-xl text-[15px] hover:bg-lime-hover transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            Porozmawiajmy →
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
