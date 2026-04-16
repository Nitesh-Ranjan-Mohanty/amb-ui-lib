export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
} as const;

export const colors = {
  text: '#0f172a',
  muted: '#475569',
  background: '#f8fafc',
  surface: '#ffffff',
  surfaceMuted: '#f1f5f9',
  border: '#cbd5e1',
  primary: '#2563eb',
  primaryText: '#ffffff',
  danger: '#dc2626',
  accent: '#7c3aed'
} as const;

export const maxWidths = {
  narrow: 720,
  content: 980,
  page: 1200,
  xs: 640,
  sm: 840,
  md: 980,
  lg: 1200,
  xl: 1440
} as const;

export const radii = {
  sm: 8,
  md: 16,
  lg: 24
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
} as const;

export type SpacingKey = keyof typeof spacing;
export type MaxWidthKey = keyof typeof maxWidths;
export type RadiusKey = keyof typeof radii;
export type BreakpointKey = keyof typeof breakpoints;
