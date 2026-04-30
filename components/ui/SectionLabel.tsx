interface Props { children: string; dark?: boolean }
export function SectionLabel({ children, dark }: Props) {
  return (
    <p className={`text-[11px] font-bold tracking-[2px] uppercase mb-3 ${dark ? 'text-lime' : 'text-neutral-400' }`}>
      {children}
    </p>
  )
}
