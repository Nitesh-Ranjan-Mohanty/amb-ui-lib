import React, { forwardRef, useState } from 'react';
import { colors, radii, spacing, SpacingKey } from '../tokens/layout';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  fullWidth?: boolean;
}

const sizeStyles: Record<InputSize, React.CSSProperties> = {
  sm: {
    fontSize: 14,
    padding: `${spacing.xs}px ${spacing.sm}px`,
    minHeight: 36
  },
  md: {
    fontSize: 16,
    padding: `${spacing.sm}px ${spacing.md}px`,
    minHeight: 44
  },
  lg: {
    fontSize: 18,
    padding: `${spacing.md}px ${spacing.lg}px`,
    minHeight: 52
  }
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = 'md',
    fullWidth = false,
    disabled = false,
    style,
    className,
    ...rest
  },
  ref
) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const computedStyle: React.CSSProperties = {
    display: 'block',
    width: fullWidth ? '100%' : undefined,
    backgroundColor: disabled ? colors.surfaceMuted : colors.surface,
    color: colors.text,
    border: `1px solid ${focused ? colors.primary : hovered ? colors.border : colors.border}`,
    borderRadius: radii.sm,
    outline: 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease',
    boxShadow: focused ? `0 0 0 4px rgba(37, 99, 235, 0.12)` : undefined,
    cursor: disabled ? 'not-allowed' : 'text',
    ...sizeStyles[size],
    ...style
  };

  return (
    <input
      ref={ref}
      disabled={disabled}
      style={computedStyle}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(event) => {
        setFocused(true);
        if (rest.onFocus) {
          rest.onFocus(event);
        }
      }}
      onBlur={(event) => {
        setFocused(false);
        if (rest.onBlur) {
          rest.onBlur(event);
        }
      }}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
