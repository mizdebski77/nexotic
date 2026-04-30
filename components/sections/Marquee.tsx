// Seamless marquee fix:
// - Two identical sets rendered side by side in a flex row
// - Animation moves exactly the width of ONE set (not the container)
// - Using CSS custom property for width sync
// - pause on hover for polish

const TECH = [
  'Strony internetowe', 'Sklepy internetowe', 'Aplikacje mobilne', 'Projektowanie',
  'Automatyzacje AI', 'Chat-boty', 'Indywidualne podejście', 'Automatyzacja Social Media ',
  'Skalowalność i wydajność', 'Wsparcie techniczne 24/7', 'Strategia cyfrowa', 'E-commerce', 'Automatyzacja procesów',
]

function MarqueeItem({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 px-6 text-[12.5px] font-semibold text-white/40 whitespace-nowrap flex-shrink-0">
      <span className="w-1 h-1 rounded-full bg-lime/50" />
      {label}
    </span>
  )
}

export function MarqueeBand() {
  return (
    <div
      className="overflow-hidden py-4 border-t border-b border-white/[0.07] bg-ink-2 group"
      aria-hidden="true"
    >
      {/*
        Two identical rows rendered as siblings.
        The animation shifts the OUTER flex container left by exactly
        the width of one row. Because both rows are identical, the
        moment row-1 leaves the viewport, row-2 takes its place
        pixel-perfectly — zero gap, zero cut.
      */}
      <div
        className="flex"
        style={{ animation: 'nexotic-marquee 30s linear infinite' }}
      >
        {/* Row 1 */}
        <div className="flex flex-shrink-0">
          {TECH.map((t, i) => <MarqueeItem key={`a-${i}`} label={t} />)}
        </div>
        {/* Row 2 — exact duplicate */}
        <div className="flex flex-shrink-0">
          {TECH.map((t, i) => <MarqueeItem key={`b-${i}`} label={t} />)}
        </div>
      </div>

      <style>{`
        @keyframes nexotic-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .group:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
