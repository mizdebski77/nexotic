import type { ReactNode } from 'react'
import './globals.css'

/**
 * Root layout — intentionally minimal because next-intl needs each locale to
 * own its <html> tag (inside app/[locale]/layout.tsx). This file just passes
 * children through and imports global styles.
 *
 * Real layout, fonts, nav, footer and chat widget live in
 * app/[locale]/layout.tsx.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
