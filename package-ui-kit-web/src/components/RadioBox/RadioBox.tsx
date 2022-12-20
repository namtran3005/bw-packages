import * as React from 'react';
import styled from 'styled-components';
import { Radio as MuiRadio } from '@material-ui/core';
import { RadioProps as MuiRadioProps } from '@material-ui/core/Radio';
import {
  Colors,
  ColorsType,
  Spacing,
  Transitions,
} from '@bitwala-cryptobank-squad/package-theme';
import { Typography } from '../..';

interface RootComponentProps {
  foreground?: ColorsType;
  checked?: boolean | string;
  variant?: 'hollow' | 'solid';
}

interface Props {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

type RadioBoxProps = RootComponentProps & MuiRadioProps & Props;

const RootRadioComponent: React.FunctionComponent<RadioBoxProps> = (props) => (
  <MuiRadio {...props} />
);

const defaultForeground = 'primaryLilac';
const borderWidth = 1.4;

const RootRadio = styled(RootRadioComponent)`
  &&& {
    /* hide radio button while preserving focus availability */
    height: 0;
    overflow: hidden;
    position: absolute;
    opacity: 0;
  }
`;

const checkedBorderWidth = Spacing.unit / 4;

const Root: React.FC = styled.label.withConfig({
  shouldForwardProp: (prop) =>
    !['foreground', 'variant', 'checked'].includes(prop),
})<RootComponentProps>`
  display: inline-flex;
  cursor: pointer;
  background: ${({ variant }) =>
    variant === 'hollow' ? Colors.get('white') : Colors.get('primaryLilac')};
  border: ${({ variant }) =>
    variant === 'hollow'
      ? `${borderWidth}px solid ${Colors.get('text')}`
      : Colors.get('primaryLilac')};
  padding: ${Spacing.unit * 4}px ${Spacing.unit * 5}px;
  margin-right: ${Spacing.unit}px;
  transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
  box-shadow: 0 0 0 0 ${Colors.getWithAlpha(defaultForeground, 0.2)},
    inset 0 0 0 ${(props) => (props.checked ? checkedBorderWidth : 0)}px
      ${Colors.get(defaultForeground)};
  height: 48px;
  padding: 0px 18px;
  border-radius: 32px;
  align-items: center;
  vertical-align: middle;
  &:last-of-type {
    margin-right: 0;
  }

  &:focus-within {
    box-shadow: 0 0 0 ${checkedBorderWidth * 2}px
        ${Colors.getWithAlpha(defaultForeground, 0.2)},
      inset 0 0 0 ${(props) => (props.checked ? checkedBorderWidth : 0)}px
        ${Colors.get(defaultForeground)};
  }
`;

const RadioBox: React.FunctionComponent<RadioBoxProps> = ({
  children,
  ...cleanProps
}) => (
  <Root {...cleanProps}>
    <RootRadio {...cleanProps} />
    <Typography.ButtonL>{children}</Typography.ButtonL>
  </Root>
);

export { RadioBox, RadioBoxProps };
