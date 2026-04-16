import React, { forwardRef } from 'react';
import { spacing, SpacingKey } from '../tokens/layout';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  padding?: SpacingKey;
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { as: Component = 'section', padding = 'lg', style, className, children, ...rest },
  ref
) {
  const computedStyle: React.CSSProperties = {
    padding: spacing[padding],
    boxSizing: 'border-box',
    ...style
  };

  return (
    <Component ref={ref as any} className={className} style={computedStyle} {...rest}>
      {children}
    </Component>
  );
});

Section.displayName = 'Section';

export default Section;
