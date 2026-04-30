import { ContactForm } from "@/components/sections/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const contactDetails = [
    {
        label: "E-mail",
        value: "Nexotic.contact@gmail.com",
        icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
    },
    {
        label: "Telefon",
        value: "+48 501375604",
        icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.9 19.79 19.79 0 0 1 1.08 3.28 2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.5a16 16 0 0 0 5.92 5.92l1-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 15.56v1.36z",
    },
    {
        label: "Lokalizacja",
        value: "Katowice · Polska · Praca zdalna",
        icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    },
];

export default function KontaktPage() {
    return (
        <div className="bg-white pt-[68px]">
            <div className="bg-ink py-20 px-6 md:px-10">
                <div className="max-w-site mx-auto">
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
                    <div className="text-[11px] font-bold tracking-[2px] uppercase text-lime mb-3">
                        Kontakt
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-2.5px] text-white mb-4 leading-[1.04]">
                        Zacznijmy razem
                        <br />
                        <span className="text-lime">projekt</span>
                    </h1>
                    <p className="text-base text-white/50 max-w-md leading-relaxed">
                        Bezpłatna konsultacja. Odpiszemy w ciągu 24 godzin z
                        konkretną propozycją.
                    </p>
                </div>
            </div>
            <div className="max-w-site mx-auto px-6 md:px-10 py-20 grid xl:grid-cols-[1fr_1.3fr] gap-20 items-start">
                <AnimatedSection direction="left">
                    <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-8">
                        Dane kontaktowe
                    </h2>
                    {contactDetails.map((item) => (
                        <div
                            key={item.label}
                            className="mb-6 pb-6 border-b border-neutral-100 last:border-0 flex items-start gap-4"
                        >
                            <div className="w-10 h-10 min-w-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#c8f135"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d={item.icon} />
                                </svg>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold text-neutral-400 tracking-[1px] uppercase mb-1">
                                    {item.label}
                                </div>
                                <div className="text-[15px] font-semibold text-neutral-900">
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </AnimatedSection>
                <AnimatedSection delay={0.15}>
                    <ContactForm />
                </AnimatedSection>
            </div>
        </div>
    );
}
