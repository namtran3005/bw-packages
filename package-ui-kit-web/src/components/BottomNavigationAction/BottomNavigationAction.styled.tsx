import * as React from 'react';
import styled from 'styled-components';
import { BottomNavigationAction as MuiBottomNavigationAction } from '@material-ui/core';
import { BottomNavigationActionProps as MuiBottomNavigationActionProps } from '@material-ui/core/BottomNavigationAction';
import { Colors } from '@bitwala-cryptobank-squad/package-theme';

interface RootProps extends MuiBottomNavigationActionProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RootComponent: React.FunctionComponent<RootProps> = (props) => (
  <MuiBottomNavigationAction
    classes={{
      root: 'root',
      selected: 'selected',
      wrapper: 'wrapper',
      label: 'label',
    }}
    {...props}
  />
);

const Root = styled(RootComponent)`
  &&& {
    min-width: 0;
    padding-left: 8px;
    padding-right: 8px;
    color: ${Colors.getWithAlpha('text', 0.4)};

    &.selected {
      color: ${Colors.get('primaryGrey')};
    }
  }
`;

Root.displayName = 'BottomNavigationAction';

export { Root, RootProps };
