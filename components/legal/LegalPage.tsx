import { type ReactNode } from 'react'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div className="bg-white pt-[68px]">
      <div className="bg-ink py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-[-1.5px] text-white mb-3">{title}</h1>
          <p className="text-sm text-white/40">Ostatnia aktualizacja: {updated}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 text-[15px] text-neutral-600 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-neutral-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:tracking-tight [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1.5 [&_a]:text-lime-hover [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </div>
  )
}

export function LegalPlaceholder({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-amber-100 text-amber-900 font-semibold px-1.5 py-0.5 rounded">
      {children}
    </span>
  )
}
