import React, { forwardRef } from 'react';
import { spacing, SpacingKey } from '../tokens/layout';

export type RowAlign = 'start' | 'center' | 'end' | 'stretch';
export type RowJustify = 'start' | 'center' | 'end' | 'between';

const alignMap: Record<RowAlign, React.CSSProperties['alignItems']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch'
};

const justifyMap: Record<RowJustify, React.CSSProperties['justifyContent']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between'
};

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: SpacingKey;
  align?: RowAlign;
  justify?: RowJustify;
}

const Row = forwardRef<HTMLDivElement, RowProps>(function Row(
  { gap = 'md', align = 'start', justify = 'start', style, className, children, ...rest },
  ref
) {
  const computedStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing[gap],
    alignItems: alignMap[align],
    justifyContent: justifyMap[justify],
    ...style
  };

  return (
    <div ref={ref} className={className} style={computedStyle} {...rest}>
      {children}
    </div>
  );
});

Row.displayName = 'Row';

export default Row;
