import React, { forwardRef, useMemo } from 'react';
import { spacing, SpacingKey, breakpoints, BreakpointKey } from '../tokens/layout';

const breakpointOrder: BreakpointKey[] = ['sm', 'md', 'lg', 'xl'];

type ResponsiveSpan = number | Partial<Record<BreakpointKey | 'base', number>>;

type AlignItems = 'start' | 'center' | 'end' | 'stretch';
type JustifyItems = 'start' | 'center' | 'end' | 'stretch';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: SpacingKey;
  align?: AlignItems;
  justify?: JustifyItems;
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: ResponsiveSpan;
}

const styleRegistry = new Set<string>();

function ensureStyleInjected(key: string, css: string) {
  if (typeof document === 'undefined' || styleRegistry.has(key)) {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('data-amb-grid', key);
  style.textContent = css;
  document.head.appendChild(style);
  styleRegistry.add(key);
}

function buildGridItemStyles(className: string, span: ResponsiveSpan) {
  if (typeof span === 'number') {
    return `.${className} { grid-column: span ${span}; }`;
  }

  const baseSpan = span.base ?? 12;
  let rules = `.${className} { grid-column: span ${baseSpan}; }\n`;

  for (const bp of breakpointOrder) {
    const value = span[bp];
    if (typeof value === 'number') {
      rules += `@media (min-width: ${breakpoints[bp]}px) { .${className} { grid-column: span ${value}; } }\n`;
    }
  }

  return rules;
}

const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  {
    columns = 12,
    gap = 'md',
    align = 'stretch',
    justify = 'stretch',
    style,
    className,
    children,
    ...rest
  },
  ref
) {
  const computedStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: spacing[gap],
    alignItems: align,
    justifyItems: justify,
    ...style,
  };

  return (
    <div ref={ref} className={className} style={computedStyle} {...rest}>
      {children}
    </div>
  );
});

const GridItem = forwardRef<HTMLDivElement, GridItemProps>(function GridItem(
  { span = 12, style, className, children, ...rest },
  ref
) {
  const itemClassName = useMemo(() => {
    if (typeof span === 'number') {
      return undefined;
    }

    const unique = `amb-grid-item-${Math.random().toString(36).slice(2, 8)}`;
    const styles = buildGridItemStyles(unique, span);
    ensureStyleInjected(unique, styles);
    return unique;
  }, [span]);

  const computedStyle: React.CSSProperties = {
    ...(typeof span === 'number' ? { gridColumn: `span ${span}` } : {}),
    ...(style || {})
  };

  return (
    <div ref={ref} className={[className, itemClassName].filter(Boolean).join(' ')} style={computedStyle} {...rest}>
      {children}
    </div>
  );
});

const GridComponent = Grid as React.ForwardRefExoticComponent<
  GridProps & React.RefAttributes<HTMLDivElement>
> & { Item: typeof GridItem };

GridComponent.Item = GridItem;

Grid.displayName = 'Grid';
GridItem.displayName = 'Grid.Item';

export default GridComponent;
