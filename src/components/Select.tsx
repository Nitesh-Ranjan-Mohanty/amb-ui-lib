import React, { forwardRef, useState } from 'react';
import { colors, radii, spacing, SpacingKey } from '../tokens/layout';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles: Record<NonNullable<SelectProps['size']>, React.CSSProperties> = {
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

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    options,
    value,
    onChange,
    disabled = false,
    fullWidth = false,
    size = 'md',
    style,
    className,
    ...rest
  },
  ref
) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const borderColor = disabled
    ? colors.border
    : focused
    ? colors.primary
    : hovered
    ? colors.border
    : colors.border;

  const backgroundColor = disabled ? colors.surfaceMuted : colors.surface;
  const textColor = disabled ? colors.muted : colors.text;

  const computedStyle: React.CSSProperties = {
    display: 'block',
    width: fullWidth ? '100%' : undefined,
    backgroundColor,
    color: textColor,
    border: `1px solid ${borderColor}`,
    borderRadius: radii.sm,
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease',
    boxShadow: focused ? `0 0 0 4px rgba(37, 99, 235, 0.12)` : undefined,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...sizeStyles[size],
    paddingRight: 40,
    ...style
  };

  return (
    <span style={{ display: 'inline-flex', position: 'relative', width: fullWidth ? '100%' : undefined }}>
      <select
        ref={ref}
        value={value}
        onChange={onChange}
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
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: spacing.sm,
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: disabled ? colors.muted : colors.text,
          fontSize: 12,
          lineHeight: 1,
          userSelect: 'none'
        }}
      >
        ▾
      </span>
    </span>
  );
});

Select.displayName = 'Select';

export default Select;
