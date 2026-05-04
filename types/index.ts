// ── Single Responsibility: pure data shapes, no logic ──

export interface NavLink {
  href: string
  label: string
}

export interface Service {
  title: string
  description: string
  icon: string          // SVG path string
  viewBox?: string
}

export interface Stat {
  number: string
  label: string
  iconPath: string
}

export interface Project {
  name: string
  type: string
  image: string
  year: string
  description: string
  result: string
  isLight?: boolean
}

export interface ProcessStep {
  num: string
  title: string
  description: string
  duration: string
  iconPath: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

export interface TeamMember {
  initials: string
  name: string
  role: string
}
