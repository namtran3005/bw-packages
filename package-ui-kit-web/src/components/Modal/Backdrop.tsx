import React from 'react';
import styled from 'styled-components';
import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';
import { Backdrop as MuiBackdrop } from '@material-ui/core';

import { BackdropProps } from './types';

interface StyledBackdropProps {
  background?: ColorsType;
  onClick?: () => void;
}

export const StyledMuiBackdrop = styled(MuiBackdrop).withConfig({
  shouldForwardProp: (prop) =>
    prop === 'ref' || !['paperForeground', 'theme'].includes(prop),
})<Omit<StyledBackdropProps, 'theme' | 'onClick'>>`
  &&& {
    background: ${() => Colors.getWithAlpha('backgroundLight', 0.8)};
    inset: 0px;
    pointer-events: initial;
    position: fixed;
    transition: opacity 220ms ease 0s;
    padding: 32px;
  }
`;

export const Backdrop = (props: BackdropProps): React.ReactElement => {
  return (
    <StyledMuiBackdrop
      open={props.open || false}
      background={(props.background as ColorsType) || undefined}
    />
  );
};
