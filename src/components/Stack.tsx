import React, { forwardRef } from 'react';
import { spacing, SpacingKey } from '../tokens/layout';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: SpacingKey;
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  direction?: 'column' | 'row';
  wrap?: boolean;
}

const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  {
    gap = 'md',
    direction = 'column',
    align = 'stretch',
    justify = 'flex-start',
    wrap = false,
    style,
    className,
    children,
    ...rest
  },
  ref
) {
  const computedStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    gap: spacing[gap],
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...style
  };

  return (
    <div ref={ref} className={className} style={computedStyle} {...rest}>
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';

export default Stack;
