import { TEAM_MEMBERS } from "@/lib/data";
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const metrics = [
    { n: "50+", l: "Projektow" },
    { n: "30+", l: "Klientow" },
    { n: "5", l: "Lat doswiadczenia" },
    { n: "5", l: "Krajow" },
    { n: "100%", l: "Zadowolonych klientow" },
    { n: "6h", l: "Czas odpowiedzi" },
];

export default function ONasPage() {
    return (
        <div className="bg-white pt-[68px]">
            {/* ── Hero ── */}
            <div className="bg-ink py-20 px-6 md:px-10 relative">
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
                <div className="max-w-site mx-auto">
                    <div className="text-[11px] font-bold tracking-[2px] uppercase text-lime mb-4">
                        O nas
                    </div>
                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-[-2.5px] text-white mb-5 leading-[1.04]">
                        Tworzymy rzeczy, które działają -<br />
                        <span className="text-lime">nie tylko wyglądają</span>
                    </h1>
                    <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">
                        Łączymy design, inżynierię i AI, żeby Twój biznes
                        naprawdę rósł.
                    </p>
                </div>
            </div>

            {/* ── Nasza historia ── */}
            <div className="max-w-site mx-auto px-6 md:px-10 py-20">
                <div className="grid xl:grid-cols-2 gap-16 xl:gap-24 items-start mb-20">
                    <AnimatedSection>
                        <div className="text-[11px] font-bold tracking-[2px] uppercase text-lime mb-4">
                            Nasza historia
                        </div>
                        <h2 className="text-3xl xl:text-4xl font-extrabold tracking-[-1px] text-neutral-900 mb-6 leading-[1.1]">
                            Od 2021 roku robimy jedno — projekty, które
                            przynoszą efekty.
                        </h2>
                        <p className="text-[15px] text-neutral-500 leading-relaxed mb-5">
                            Nauczyliśmy się jednej ważnej rzeczy: nie liczy się
                            liczba linii kodu. Liczy się to, czy Twoi klienci
                            kupują, wracają i polecają Cię dalej.
                        </p>
                        <p className="text-[15px] text-neutral-500 leading-relaxed mb-8">
                            Dlatego każdy projekt zaczynamy od pytania:{" "}
                            <span className="text-neutral-800 font-medium">
                                "co chcesz osiągnąć?"
                            </span>{" "}
                            — i dopiero potem siadamy do pracy.
                        </p>
                        <Button href="/kontakt" variant="lime" size="md">
                            Zacznijmy rozmawiać →
                        </Button>
                    </AnimatedSection>

                    {/* Metrics grid */}
                    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {metrics.map((m) => (
                            <StaggerItem key={m.l}>
                                <div className="p-6 border border-neutral-200 rounded-2xl hover:border-lime/40 hover:shadow-[0_0_32px_rgba(200,241,53,0.06)] transition-all duration-300">
                                    <div className="text-3xl font-extrabold text-lime tracking-tight mb-1 leading-none">
                                        {m.n}
                                    </div>
                                    <div className="text-[13px] text-neutral-400 mt-1">
                                        {m.l}
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* ── Team ── */}
                <div className="border-t border-neutral-100 pt-20">
                    <AnimatedSection className="text-center mb-12">
                        <div className="text-[11px] font-bold tracking-[2px] uppercase text-lime mb-4">
                            Zespół
                        </div>
                        <h2 className="text-3xl xl:text-4xl font-extrabold tracking-[-1px] text-neutral-900 leading-[1.1]">
                            Ludzie, którzy będą pracować
                            <br className="hidden md:block" /> nad Twoim
                            projektem
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-8">
                        {TEAM_MEMBERS.map((m) => (
                            <StaggerItem key={m.name}>
                                <div className="group text-center">
                                    {/* Avatar */}
                                    <div className="w-20 h-20 rounded-2xl bg-ink flex items-center justify-center text-xl font-extrabold text-lime mx-auto mb-4 group-hover:bg-lime group-hover:text-ink transition-all duration-300">
                                        {m.initials}
                                    </div>
                                    <div className="text-[15px] font-bold text-neutral-900 mb-1">
                                        {m.name}
                                    </div>
                                    <div className="text-[13px] text-neutral-400">
                                        {m.role}
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* ── Bottom CTA ── */}
                <AnimatedSection className="mt-20 pt-16 border-t border-neutral-100 text-center">
                    <p className="text-neutral-400 text-[15px] mb-6">
                        Chcesz wiedzieć jak pracujemy?
                    </p>
                    <Button href="/proces" variant="outline-dark" size="lg">
                        Zobacz nasz proces →
                    </Button>
                </AnimatedSection>
            </div>
        </div>
    );
}
