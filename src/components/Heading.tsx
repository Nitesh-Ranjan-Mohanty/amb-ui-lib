import React, { forwardRef } from 'react';
import Typography from './Typography';
import { FontSizeKey } from '../tokens/typography';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const headingSizeMap: Record<HeadingLevel, FontSizeKey> = {
  1: '4xl',
  2: '3xl',
  3: '2xl',
  4: 'xl',
  5: 'lg',
  6: 'base'
};

export interface HeadingProps
  extends Omit<React.ComponentPropsWithoutRef<'h1'>, 'as' | 'style'> {
  level?: HeadingLevel;
  className?: string;
  style?: React.CSSProperties;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { level = 1, children, className, style, ...rest },
  ref
) {
  const Element = (`h${level}` as const) as React.ElementType;
  const size = headingSizeMap[level as HeadingLevel];

  return (
    <Typography
      as={Element}
      variant="heading"
      size={size}
      className={className}
      style={style}
      ref={ref as any}
      {...rest}
    >
      {children}
    </Typography>
  );
});

Heading.displayName = 'Heading';

export default Heading;
