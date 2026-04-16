export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32
} as const;

export const maxWidths = {
  narrow: 720,
  content: 980,
  page: 1200
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
