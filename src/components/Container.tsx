import React, { forwardRef } from 'react';
import { maxWidths, spacing, MaxWidthKey, SpacingKey } from '../tokens/layout';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: MaxWidthKey;
  padding?: SpacingKey;
  center?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { maxWidth = 'page', padding = 'lg', center = true, style, className, children, ...rest },
  ref
) {
  const computedStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: maxWidths[maxWidth],
    padding: spacing[padding],
    marginLeft: center ? 'auto' : undefined,
    marginRight: center ? 'auto' : undefined,
    boxSizing: 'border-box',
    ...style
  };

  return (
    <div ref={ref} className={className} style={computedStyle} {...rest}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;
