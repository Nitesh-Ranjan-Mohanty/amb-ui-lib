import React, { forwardRef, useState } from 'react';
import { colors, spacing, radii, SpacingKey, RadiusKey } from '../tokens/layout';
import Stack from './Stack';

export type CardVariant = 'elevated' | 'outlined' | 'ghost';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  padding?: SpacingKey;
  radius?: RadiusKey;
  clickable?: boolean;
  as?: React.ElementType;
}

export interface CardSectionProps extends React.HTMLAttributes<HTMLElement> {}

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  elevated: {
    backgroundColor: colors.surface,
    border: '1px solid transparent',
    boxShadow: '0 18px 60px rgba(15, 23, 42, 0.08)'
  },
  outlined: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border}`,
    boxShadow: 'none'
  },
  ghost: {
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    boxShadow: 'none'
  }
};

const Card = forwardRef<HTMLElement, CardProps>(function Card(
  {
    as: Component = 'article',
    variant = 'elevated',
    padding = 'md',
    radius = 'md',
    clickable = false,
    style,
    className,
    children,
    ...rest
  },
  ref
) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const baseStyle: React.CSSProperties = {
    ...variantStyles[variant],
    borderRadius: radii[radius],
    padding: spacing[padding],
    transition: 'box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
    cursor: clickable ? 'pointer' : undefined,
    outline: focused ? '2px solid rgba(59, 130, 246, 0.35)' : undefined,
    transform: hovered ? 'translateY(-1px)' : undefined,
    boxShadow:
      clickable && hovered && variant === 'elevated'
        ? '0 24px 80px rgba(15, 23, 42, 0.12)'
        : variantStyles[variant].boxShadow,
    ...style
  };

  return (
    <Component
      ref={ref as any}
      className={className}
      style={baseStyle}
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...rest}
    >
      <Stack gap="md">{children}</Stack>
    </Component>
  );
});

const CardHeader = forwardRef<HTMLElement, CardSectionProps>(function CardHeader(
  { style, className, children, ...rest },
  ref
) {
  return (
    <header ref={ref as any} className={className} style={style} {...rest}>
      {children}
    </header>
  );
});

const CardContent = forwardRef<HTMLElement, CardSectionProps>(function CardContent(
  { style, className, children, ...rest },
  ref
) {
  return (
    <div ref={ref as any} className={className} style={style} {...rest}>
      {children}
    </div>
  );
});

const CardFooter = forwardRef<HTMLElement, CardSectionProps>(function CardFooter(
  { style, className, children, ...rest },
  ref
) {
  return (
    <footer ref={ref as any} className={className} style={style} {...rest}>
      {children}
    </footer>
  );
});

const CardComponent = Card as typeof Card & {
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
};

CardComponent.Header = CardHeader;
CardComponent.Content = CardContent;
CardComponent.Footer = CardFooter;

Card.displayName = 'Card';
CardHeader.displayName = 'Card.Header';
CardContent.displayName = 'Card.Content';
CardFooter.displayName = 'Card.Footer';

export default CardComponent;
