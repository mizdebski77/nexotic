'use client'
import { type ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'lime' | 'outline-white' | 'outline-dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
  type?: 'button' | 'submit'
}

const variantClasses: Record<string, string> = {
  'lime':          'bg-lime text-ink font-bold hover:bg-lime-hover hover:shadow-[0_8px_32px_rgba(200,241,53,0.3)] active:scale-[0.97]',
  'outline-white': 'bg-transparent text-white border border-white/20 font-semibold hover:border-white/50 hover:bg-white/5 active:scale-[0.97]',
  'outline-dark':  'bg-transparent text-neutral-900 border border-black/15 font-semibold hover:border-black/40 hover:bg-black/5 active:scale-[0.97]',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3.5 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

export function Button({
  href, onClick, variant = 'lime', size = 'md', className, children, type = 'button',
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center rounded-lg',
    'transition-all duration-200 cursor-pointer select-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )
  if (href) return <Link href={href} className={classes}>{children}</Link>
  return <button type={type} onClick={onClick} className={classes}>{children}</button>
}
