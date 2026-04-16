import React, { forwardRef } from 'react';
import Typography, { TypographyProps } from './Typography';

export interface TextProps extends Omit<TypographyProps, 'as'> {
  className?: string;
  style?: React.CSSProperties;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
  { children, className, style, ...rest },
  ref
) {
  return (
    <Typography
      as="p"
      variant="body"
      className={className}
      style={style}
      ref={ref as any}
      {...rest}
    >
      {children}
    </Typography>
  );
});

Text.displayName = 'Text';

export default Text;
