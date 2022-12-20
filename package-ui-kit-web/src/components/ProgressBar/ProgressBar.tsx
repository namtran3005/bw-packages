import * as React from 'react';
import styled from 'styled-components';
import { LinearProgress as MuiLinearProgress } from '@material-ui/core';
import { LinearProgressProps as MuiLinearProgressProps } from '@material-ui/core/LinearProgress';
import { ColorsType, Colors, Spacing } from '@bitwala-cryptobank-squad/package-theme';

interface RootProps extends MuiLinearProgressProps {
  foreground?: ColorsType;
  weight?: 'thin' | 'normal';
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RootComponent: React.FunctionComponent<RootProps> = (props) => (
  <MuiLinearProgress
    classes={{
      root: 'root',
      colorPrimary: 'colorPrimary',
      colorSecondary: 'colorSecondary',
      buffer: 'buffer',
      query: 'query',
      dashed: 'dashed',
      dashedColorPrimary: 'dashedColorPrimary',
      dashedColorSecondary: 'dashedColorSecondary',
      bar: 'bar',
      barColorPrimary: 'barColorPrimary',
      barColorSecondary: 'barColorSecondary',
      bar1Indeterminate: 'bar1Indeterminate',
      bar2Indeterminate: 'bar2Indeterminate',
      bar1Determinate: 'bar1Determinate',
      bar1Buffer: 'bar1Buffer',
      bar2Buffer: 'bar2Buffer',
    }}
    {...props}
  />
);

const Root = styled(RootComponent)`
  &&& {
    border: none;
    height: ${Spacing.unit / 2}px;
    background-color: ${(props) =>
      props.foreground !== undefined
        ? Colors.getWithAlpha(props.foreground, 0.2)
        : Colors.getWithAlpha('primaryGreen', 0.2)};

    .bar {
      background-color: ${(props) =>
        Colors.get(
          props.foreground !== undefined ? props.foreground : 'primaryGreen'
        )};
    }
  }
`;

Root.displayName = 'LinearProgress';
RootComponent.displayName = 'LinearProgress';

export const ProgressBar: React.FC<RootProps> = (props) => <Root {...props} />;

export type ProgressBarProps = RootProps;
