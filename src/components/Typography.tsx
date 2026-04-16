import React, { forwardRef } from 'react';
import {
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  fonts,
  variantStyles,
  TypographyVariant,
  FontSizeKey,
  FontWeightKey,
  LetterSpacingKey
} from '../tokens/typography';
import { colors } from '../tokens/layout';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  size?: FontSizeKey;
  weight?: FontWeightKey;
  letterSpacing?: LetterSpacingKey;
  lineHeight?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(function Typography(
  props,
  ref
) {
  const {
    variant = 'body',
    as: Component = 'span',
    size,
    weight,
    letterSpacing,
    lineHeight,
    className,
    style,
    children,
    ...rest
  } = props;

  const baseStyle = variantStyles[variant];
  const computedStyle: React.CSSProperties = {
    margin: 0,
    color: colors.text,
    fontFamily: baseStyle.fontFamily,
    fontSize: fontSizes[size ?? baseStyle.size],
    lineHeight: lineHeight ?? baseStyle.lineHeight,
    fontWeight: fontWeights[weight ?? baseStyle.weight],
    letterSpacing: letterSpacings[letterSpacing ?? baseStyle.letterSpacing],
    ...style
  };

  return (
    <Component ref={ref as any} className={className} style={computedStyle} {...rest}>
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';

export default Typography;
