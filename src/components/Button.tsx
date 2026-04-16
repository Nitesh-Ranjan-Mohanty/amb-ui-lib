import React, { forwardRef, useState } from 'react';
import { colors, spacing, SpacingKey } from '../tokens/layout';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: colors.primary,
    color: colors.primaryText,
    border: '1px solid transparent'
  },
  secondary: {
    backgroundColor: colors.surface,
    color: colors.text,
    border: `1px solid ${colors.border}`
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.text,
    border: '1px solid transparent'
  },
  danger: {
    backgroundColor: colors.danger,
    color: colors.primaryText,
    border: '1px solid transparent'
  }
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    fontSize: 14,
    padding: `${spacing.xs}px ${spacing.sm}px`,
    minHeight: 32
  },
  md: {
    fontSize: 16,
    padding: `${spacing.sm}px ${spacing.md}px`,
    minHeight: 40
  },
  lg: {
    fontSize: 18,
    padding: `${spacing.md}px ${spacing.lg}px`,
    minHeight: 48
  }
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    disabled,
    style,
    className,
    children,
    type = 'button',
    ...rest
  },
  ref
) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focused, setFocused] = useState(false);

  const isDisabled = disabled || loading;

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    width: fullWidth ? '100%' : undefined,
    borderRadius: 12,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.65 : 1,
    transition: 'transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease',
    boxShadow:
      hovered && !isDisabled && variant === 'primary'
        ? '0 12px 32px rgba(37, 99, 235, 0.18)'
        : 'none',
    transform: pressed ? 'translateY(1px)' : 'none',
    outline: focused ? '3px solid rgba(59, 130, 246, 0.35)' : 'none',
    outlineOffset: focused ? 2 : undefined,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style
  };

  const renderIcon = (icon: React.ReactNode) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {icon}
    </span>
  );

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-busy={loading ? true : undefined}
      style={baseStyle}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...rest}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: leftIcon || loading ? 20 : undefined }}>
        {loading ? <span aria-hidden="true">⏳</span> : leftIcon}
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{children}</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: rightIcon ? 20 : undefined }}>
        {rightIcon}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
