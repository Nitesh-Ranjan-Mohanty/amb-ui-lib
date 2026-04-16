export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36
} as const;

export const lineHeights = {
  display: 1.1,
  heading: 1.25,
  title: 1.3,
  body: 1.6,
  label: 1.4,
  caption: 1.4
} as const;

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
} as const;

export const letterSpacings = {
  tight: '-0.02em',
  normal: '0em',
  wide: '0.02em'
} as const;

export const fonts = {
  primary:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  accent: 'Poppins, ui-sans-serif, system-ui, sans-serif'
} as const;

export type FontSizeKey = keyof typeof fontSizes;
export type FontWeightKey = keyof typeof fontWeights;
export type LetterSpacingKey = keyof typeof letterSpacings;

export type TypographyVariant = 'display' | 'heading' | 'title' | 'body' | 'label' | 'caption';

export const variantStyles: Record<
  TypographyVariant,
  {
    size: FontSizeKey;
    lineHeight: number;
    weight: keyof typeof fontWeights;
    letterSpacing: LetterSpacingKey;
    fontFamily: string;
  }
> = {
  display: {
    size: '4xl',
    lineHeight: lineHeights.display,
    weight: 'bold',
    letterSpacing: 'tight',
    fontFamily: fonts.primary
  },
  heading: {
    size: '2xl',
    lineHeight: lineHeights.heading,
    weight: 'semibold',
    letterSpacing: 'tight',
    fontFamily: fonts.primary
  },
  title: {
    size: 'xl',
    lineHeight: lineHeights.title,
    weight: 'semibold',
    letterSpacing: 'normal',
    fontFamily: fonts.primary
  },
  body: {
    size: 'base',
    lineHeight: lineHeights.body,
    weight: 'normal',
    letterSpacing: 'normal',
    fontFamily: fonts.primary
  },
  label: {
    size: 'sm',
    lineHeight: lineHeights.label,
    weight: 'medium',
    letterSpacing: 'wide',
    fontFamily: fonts.primary
  },
  caption: {
    size: 'xs',
    lineHeight: lineHeights.caption,
    weight: 'normal',
    letterSpacing: 'normal',
    fontFamily: fonts.primary
  }
};
