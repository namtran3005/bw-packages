import * as React from 'react';
import styled from 'styled-components';
import { BottomNavigation as MuiBottomNavigation } from '@material-ui/core';
import { BottomNavigationProps as MuiBottomNavigationProps } from '@material-ui/core/BottomNavigation';
import { Colors, Spacing } from '@bitwala-cryptobank-squad/package-theme';

interface RootProps extends MuiBottomNavigationProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  fixed?: boolean;
  variant?: 'normal' | 'alternativeContent';
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  fixed,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  variant,
  ...cleanProps
}) => <MuiBottomNavigation {...cleanProps} />;

const Root = styled(RootComponent)`
  &&& {
    position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
    box-shadow: ${({ fixed }) =>
      fixed ? '0 0 64px rgba(0, 0, 0, 0.1)' : 'none'};
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${({ fixed }) =>
      fixed ? Colors.get('white') : Colors.getWithAlpha('white', 0)};
    z-index: 10;
    height: ${({ variant }) =>
      variant === 'alternativeContent' ? Spacing.unit * 9 : Spacing.unit * 7}px;

    > div {
      width: ${({ variant }) =>
        variant === 'alternativeContent' ? '100%' : ''};
    }
  }
`;

Root.displayName = 'BottomNavigation';
RootComponent.displayName = 'BottomNavigationComponent';

export { Root, RootProps, RootComponent };
