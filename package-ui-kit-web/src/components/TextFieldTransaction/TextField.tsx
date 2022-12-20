import * as React from 'react';
import styled from 'styled-components';
import {
  Colors,
  ColorsType,
  Spacing,
  Transitions,
  Media,
} from '@bitwala-cryptobank-squad/package-theme';

import { FormControl as FormControlComponent } from '../FormControl';
import {
  InputLabel as InputLabelComponent,
  InputLabelProps,
} from '../InputLabel';
import { Select as SelectComponent } from '../Select';
import { InputAdornment as InputAdornmentComponent } from '../InputAdornment';
import { FormHelperText as FormHelperTextComponent } from '../FormHelperText';
import { TransitionCollapse } from '../TransitionCollapse';
import { Input as InputComponent, InputProps as InputProps } from './Input';

export interface InputComponentProps {
  onBlur(event: React.FocusEvent<HTMLInputElement>): void;
  [arbitrary: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface TextFieldAdditionalProps {
  foreground?: ColorsType;
  labelForeground?: ColorsType;
  inputForeground?: ColorsType;
  multiline?: boolean;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  error?: boolean;
  success?: boolean;
  variant?: 'underline' | 'hollow';
  size?: 'small' | 'normal' | 'large';
  compact?: boolean;
  textAlign?: React.CSSProperties['textAlign'];
  select?: boolean;
  native?: boolean;
  inputLabelProps?: InputLabelProps;
  inputComponent?: React.ElementType<InputComponentProps>;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  adornmentBlock?: boolean;
  startAdornmentBlock?: boolean;
  endAdornmentBlock?: boolean;
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

type TextFieldProps = Omit<InputProps, 'variant' | 'inputProps' | 'ref'> &
  TextFieldAdditionalProps;

const inputLabelForegroundDefault: ColorsType = 'text';

const TextFieldComponent: React.FunctionComponent<TextFieldProps> = ({
  className,
  children,
}) => <div className={className}>{children}</div>;

const FormControl = styled(FormControlComponent)`
  width: 100%;
`;

const getInputLabelForeground = ({ disabled }: TextFieldProps): string => {
  if (disabled) {
    return Colors.getWithAlpha(inputLabelForegroundDefault, 0.5);
  }
  return Colors.get(inputLabelForegroundDefault);
};

const getInputFontSizePhoneDown = ({
  size,
  compact,
}: TextFieldProps): number => {
  if (size === 'large') {
    return 1.25;
  } else if (size === 'small' || compact) {
    return 0.85;
  } else {
    return 1;
  }
};

const InputLabel = styled(InputLabelComponent)``;
const Input = styled(InputComponent)``;
const Select = styled(SelectComponent)``;
const InputAdornment = styled(InputAdornmentComponent)``;
const StartInputAdornment = styled(InputAdornment)``;
const EndInputAdornment = styled(InputAdornment)``;
const FormHelperText = styled(FormHelperTextComponent)``;

const TextFieldStyled = styled(TextFieldComponent)`
  &&& {
    display: block;
    ${InputLabel} {
      background-color: transparent;
      margin-top: -${Spacing.unit}px;
      color: ${getInputLabelForeground};
      font-weight: bold;
    }
    ${FormHelperText} {
      margin-top: ${Spacing.unit / 2}px;
    }
    ${Input}, ${Select} {
      ${Media.down(Media.tablet)} {
        font-size: ${getInputFontSizePhoneDown}rem;
      }
    }
    ${InputAdornment} {
      transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
      > p {
        font-size: 0.875rem;
        font-weight: 600;
        font-family: Inter;
        color: ${Colors.get('subtitleText')};
      }
    }
    ${StartInputAdornment} {
      margin-right: ${Spacing.unit}px;
    }
    ${EndInputAdornment} {
      margin-left: ${Spacing.unit}px;
    }
  }
`;

const TextField: React.FunctionComponent<TextFieldProps> = ({
  label,
  placeholder,
  helperText,
  multiline,
  error,
  inputLabelProps,
  startAdornment,
  endAdornment,
  select,
  native,
  children,
  onChange,
  onBlur,
  onFocus,
  ...cleanProps
}) => {
  const inputStartAdornment = startAdornment && (
    <StartInputAdornment position="start">{startAdornment}</StartInputAdornment>
  );
  const inputEndAdornment = endAdornment && (
    <EndInputAdornment position="start">{endAdornment}</EndInputAdornment>
  );

  return (
    <TextFieldStyled {...cleanProps}>
      <FormControl error={error}>
        {label && (
          <InputLabel {...(inputLabelProps as InputLabelProps)}>
            {label}
          </InputLabel>
        )}
        {!select ? (
          <Input
            startAdornment={inputStartAdornment}
            endAdornment={inputEndAdornment}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            error={error}
            placeholder={placeholder}
            multiline={multiline}
            {...cleanProps}
          />
        ) : (
          <Select
            native={native}
            error={error}
            startAdornment={inputStartAdornment}
            endAdornment={inputEndAdornment}
            value={cleanProps.value}
            onChange={onChange as any} // eslint-disable-line @typescript-eslint/no-explicit-any
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            {...cleanProps}
          >
            {children}
          </Select>
        )}
        <TransitionCollapse in={!!helperText}>
          <FormHelperText error={error} disabled={cleanProps.disabled}>
            {helperText}
          </FormHelperText>
        </TransitionCollapse>
      </FormControl>
    </TextFieldStyled>
  );
};

export { TextField, TextFieldProps };
