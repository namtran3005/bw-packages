import * as React from 'react';
import styled from 'styled-components';

import { Input as MuiInput } from '@material-ui/core';
import { InputProps as MuiInputProps } from '@material-ui/core/Input';

import { Colors, Transitions } from '@bitwala-cryptobank-squad/package-theme';

interface InputProps extends MuiInputProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const InputComponent: React.FunctionComponent<InputProps> = ({
  disableUnderline = true,
  ...props
}) => <MuiInput disableUnderline={disableUnderline} {...props} />;

const Input = styled(InputComponent).withConfig({
  shouldForwardProp: (prop) => !['textAlign'].includes(prop),
})`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: ${({ multiline }) => (multiline ? 'flex-start' : 'center')};
    padding: ${({ multiline }) => (multiline ? '12px 0px' : '')};
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 4px;
    min-height: ${({ multiline }) => (multiline ? '128px' : '48px')};
    transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
    background: ${Colors.getWithAlpha('subtitleText', 0.1)};
    color: ${Colors.get('text')};
    border: 1px solid ${({ error }) => (error ? Colors.get('error') : 'white')};
    font-family: Inter;
    font-size: 0.875rem;
    font-weight: 500;
  }
  &:focus-within {
    background: ${Colors.get('white')};
    border: 1px solid
      ${({ error }) => Colors.get(error ? 'error' : 'primaryLilac')};
  }
`;

export { Input, InputProps };
