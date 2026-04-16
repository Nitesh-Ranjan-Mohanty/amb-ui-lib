import React, { forwardRef, useId, useState } from 'react';
import Row from './Row';
import { colors, radii, spacing } from '../tokens/layout';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    id,
    checked,
    defaultChecked,
    onChange,
    disabled = false,
    fullWidth = false,
    children,
    style,
    className,
    ...rest
  },
  ref
) {
  const generatedId = useId();
  const inputId = id || `${generatedId}-switch`;
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const isChecked = checked ?? defaultChecked ?? false;
  const trackColor = disabled
    ? colors.surfaceMuted
    : isChecked
    ? colors.primary
    : colors.surface;
  const thumbColor = disabled ? colors.border : colors.surface;
  const labelColor = disabled ? colors.muted : colors.text;

  return (
    <label
      htmlFor={inputId}
      className={className}
      style={{
        display: 'block',
        width: fullWidth ? '100%' : undefined,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Row gap="sm" align="center" style={{ width: '100%' }}>
        <span
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: isChecked ? 'flex-end' : 'flex-start',
            width: 44,
            height: 24,
            padding: 2,
            borderRadius: 999,
            backgroundColor: trackColor,
            transition: 'background-color 0.15s ease, transform 0.15s ease',
            boxShadow: focused ? `0 0 0 4px rgba(37, 99, 235, 0.12)` : undefined,
          }}
        >
          <input
            id={inputId}
            ref={ref}
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            style={{
              position: 'absolute',
              opacity: 0,
              width: 0,
              height: 0,
              margin: 0,
              padding: 0
            }}
            onChange={onChange}
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
          <span
            aria-hidden="true"
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: thumbColor,
              transition: 'transform 0.15s ease, background-color 0.15s ease',
              transform: isChecked ? 'translateX(0)' : 'translateX(0)'
            }}
          />
        </span>
        {children ? (
          <span style={{ color: labelColor, userSelect: 'none' }}>{children}</span>
        ) : null}
      </Row>
    </label>
  );
});

Switch.displayName = 'Switch';

export default Switch;
