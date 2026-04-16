import React, { forwardRef } from 'react';
import Typography from './Typography';

export interface CaptionProps extends React.ComponentPropsWithoutRef<'span'> {
  className?: string;
  style?: React.CSSProperties;
}

const Caption = forwardRef<HTMLSpanElement, CaptionProps>(function Caption(
  { children, className, style, ...rest },
  ref
) {
  return (
    <Typography
      as="span"
      variant="caption"
      className={className}
      style={style}
      ref={ref as any}
      {...rest}
    >
      {children}
    </Typography>
  );
});

Caption.displayName = 'Caption';

export default Caption;
