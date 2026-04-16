import React, { forwardRef } from 'react';
import Typography from './Typography';

export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  className?: string;
  style?: React.CSSProperties;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { children, className, style, ...rest },
  ref
) {
  return (
    <Typography
      as="label"
      variant="label"
      className={className}
      style={style}
      ref={ref as any}
      {...rest}
    >
      {children}
    </Typography>
  );
});

Label.displayName = 'Label';

export default Label;
