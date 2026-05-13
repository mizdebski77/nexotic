import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

/**
 * Locale-aware versions of Next.js's `Link`, `useRouter`, `usePathname`, etc.
 *
 * Import these throughout the app instead of `next/link` / `next/navigation`.
 * They automatically prefix URLs with the current locale.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
