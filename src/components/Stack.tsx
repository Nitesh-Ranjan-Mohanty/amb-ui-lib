import React, { forwardRef } from 'react';
import { spacing, SpacingKey } from '../tokens/layout';

export type StackAlign = 'start' | 'center' | 'end' | 'stretch';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: SpacingKey;
  align?: StackAlign;
}

const alignMap: Record<StackAlign, React.CSSProperties['alignItems']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch'
};

const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { gap = 'md', align = 'start', style, className, children, ...rest }, ref
) {
  const computedStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[gap],
    alignItems: alignMap[align],
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
