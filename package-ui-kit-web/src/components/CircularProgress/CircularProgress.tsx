import * as React from 'react';
import styled from 'styled-components';
import { CircularProgress as MuiCircularProgress } from '@material-ui/core';
import { CircularProgressProps as MuiCircularProgressProps } from '@material-ui/core/CircularProgress';
import { ColorsType, Colors, Spacing } from '@bitwala-cryptobank-squad/package-theme';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface CircularProgressProps
  extends Omit<MuiCircularProgressProps, 'color'> {
  foreground?: ColorsType;
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  thickness?: number;
}

const CircularProgressRootComponent: React.FunctionComponent<CircularProgressProps> = ({
  thickness = 4,
  ...props
}) => <MuiCircularProgress {...props} thickness={thickness} />;
const CircularProgressComponent = styled(CircularProgressRootComponent)`
  &&& {
    border: none;
    height: ${Spacing.unit * 2}px;
    color: ${({ foreground }) =>
      Colors.get(foreground !== undefined ? foreground : 'primaryBlack')};
  }
`;

const CircularProgress: React.FunctionComponent<CircularProgressProps> = (
  props
) => {
  return <CircularProgressComponent {...props} />;
};

export { CircularProgress, CircularProgressProps };
