import React, { forwardRef, useId, useState } from 'react';
import Row from './Row';
import { colors, radii } from '../tokens/layout';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  name: string;
  children: React.ReactNode;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { id, name, checked, defaultChecked, disabled = false, style, className, children, ...rest },
  ref
) {
  const generatedId = useId();
  const inputId = id || `${generatedId}-radio`;
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const isChecked = checked ?? defaultChecked ?? false;

  const borderColor = disabled
    ? colors.border
    : focused
    ? colors.primary
    : hovered
    ? colors.border
    : colors.border;

  const backgroundColor = disabled
    ? colors.surfaceMuted
    : colors.surface;

  const labelColor = disabled ? colors.muted : colors.text;

  return (
    <label
      htmlFor={inputId}
      className={className}
      style={{
        display: 'block',
        width: '100%',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Row gap="sm" align="center" style={{ width: '100%' }}>
        <input
          id={inputId}
          ref={ref}
          type="radio"
          name={name}
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
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 20,
            height: 20,
            minWidth: 20,
            borderRadius: '50%',
            border: `1px solid ${borderColor}`,
            backgroundColor,
            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
            boxShadow: focused ? `0 0 0 4px rgba(37, 99, 235, 0.12)` : undefined,
          }}
        >
          {isChecked ? (
            <span
              style={{
                display: 'block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: colors.primary,
              }}
            />
          ) : null}
        </span>
        <span style={{ color: labelColor, userSelect: 'none' }}>{children}</span>
      </Row>
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
