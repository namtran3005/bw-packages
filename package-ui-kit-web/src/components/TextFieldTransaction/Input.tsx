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
  shouldForwardProp: (prop) =>
    ![
      'textAlign',
      'startAdornmentLabel',
      'adornmentBlock',
      'maxButtonDisabled',
      'maxButtonOnClick',
      'maxButtonLabel',
      'maxButton',
    ].includes(prop),
})`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: ${({ multiline }) => (multiline ? 'flex-start' : 'center')};
    padding: ${({ multiline }) => (multiline ? '6px 0px' : '')};
    padding-left: 6px;
    margin: 6px 0px;
    border-radius: 50px;
    min-height: ${({ multiline }) => (multiline ? '128px' : '49px')};
    transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
    color: ${Colors.get('text')};
    border: 2px solid
      ${({ error }) =>
        error ? Colors.get('error') : Colors.get('backgroundLight')};
    font-family: Inter;
    font-size: 0.875rem;
    font-weight: 500;
    background-color: transparent;
  }
  &:focus-within {
    background: ${Colors.get('white')};
    border: 2px solid
      ${({ error }) =>
        error ? Colors.get('error') : Colors.get('primaryLilac')};
  }
`;

export { Input, InputProps };
