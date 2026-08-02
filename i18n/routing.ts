import { defineRouting } from 'next-intl/routing'

/**
 * Locale routing configuration for next-intl.
 *
 * - `pl` is the default — Polish content lives at the root path (e.g. /uslugi).
 * - Other locales get a prefix (e.g. /en/uslugi, /de/uslugi, /no/uslugi).
 *   This is `localePrefix: 'as-needed'`.
 * - To add a new language: append it to `locales`, then create
 *   `messages/<code>.json` mirroring the structure of `messages/en.json`.
 */
export const routing = defineRouting({
  locales: ['pl', 'en', 'de', 'no'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]
