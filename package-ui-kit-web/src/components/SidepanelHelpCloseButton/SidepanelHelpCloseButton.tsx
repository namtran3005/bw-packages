import * as React from 'react';
import styled from 'styled-components';
import { Spacing, Colors } from '@bitwala-cryptobank-squad/package-theme';
import { ButtonBase as MuiButtonBase } from '@material-ui/core';
import { ButtonBaseProps as MuiButtonBaseProps } from '@material-ui/core/ButtonBase';
import { ColorsType } from '@bitwala-cryptobank-squad/package-theme';

interface SidepanelHelpCloseButtonProps extends MuiButtonBaseProps {
  color?: ColorsType;
}

const SidepanelHelpCloseButton = styled(
  (props: SidepanelHelpCloseButtonProps) => (
    <MuiButtonBase {...props}>
      <div />
    </MuiButtonBase>
  )
).withConfig({ shouldForwardProp: (prop) => !['color'].includes(prop) })`
  &&& {
    width: ${Spacing.unit * 4}px;
    height: ${Spacing.unit * 4}px;
    color: ${Colors.get('white')};
    white-space: nowrap;
    border-radius: 0;
  }

  > div {
    width: ${Spacing.unit * 4}px;
    height: ${Spacing.unit * 4}px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 3px;
      height: ${Spacing.unit * 2 + 2}px;
      background: ${({ color }) =>
        color ? Colors.get(color) : Colors.get('white')};
      transform-origin: center;
      pointer-events: none;
      top: 25%;
      left: 47%;
    }

    &:before {
      transform: rotateZ(45deg);
    }

    &:after {
      transform: rotateZ(-45deg);
    }
  }
`;

export { SidepanelHelpCloseButton, SidepanelHelpCloseButtonProps };
