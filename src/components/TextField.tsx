import React, { forwardRef, isValidElement, useId, cloneElement } from 'react';
import Stack from './Stack';
import Label from './Label';
import Caption from './Caption';
import Input, { type InputSize } from './Input';
import Textarea from './Textarea';
import Select from './Select';
import { colors } from '../tokens/layout';

export interface TextFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  helpText?: string;
  error?: string;
  size?: InputSize;
  fullWidth?: boolean;
  id?: string;
  children: React.ReactElement;
}

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  {
    label,
    helpText,
    error,
    size = 'md',
    fullWidth = false,
    id,
    children,
    style,
    className,
    ...rest
  },
  ref
) {
  const generatedId = useId();
  const fieldId = id || `${generatedId}-field`;
  const helpId = `${fieldId}-help`;
  const errorId = `${fieldId}-error`;

  const describedBy = error ? errorId : helpText ? helpId : undefined;
  const childProps = isValidElement(children) ? (children.props as any) : {};

  const control = isValidElement(children)
    ? cloneElement(children, {
        id: childProps.id ?? fieldId,
        'aria-describedby': describedBy,
        'aria-invalid': error ? true : undefined,
        ...((children.type === Input || children.type === Textarea || children.type === Select)
          ? { size: childProps.size ?? size, fullWidth: childProps.fullWidth ?? fullWidth }
          : {}),
        style: {
          ...childProps.style,
          width: fullWidth ? '100%' : childProps.style?.width
        }
      } as any)
    : children;

  return (
    <Stack
      gap="xs"
      ref={ref}
      className={className}
      style={{ width: fullWidth ? '100%' : undefined, ...style }}
      {...rest}
    >
      {label ? <Label htmlFor={fieldId}>{label}</Label> : null}
      {control}
      {error ? (
        <Caption style={{ color: colors.danger }} id={errorId}>
          {error}
        </Caption>
      ) : helpText ? (
        <Caption style={{ color: colors.muted }} id={helpId}>
          {helpText}
        </Caption>
      ) : null}
    </Stack>
  );
});

TextField.displayName = 'TextField';

export default TextField;
