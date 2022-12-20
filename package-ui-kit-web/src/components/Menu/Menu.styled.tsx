import * as React from 'react';
import styled from 'styled-components';
import { Menu as MuiMenu } from '@material-ui/core';
import { MenuProps as MuiMenuProps } from '@material-ui/core/Menu';

// eslint-disable-next-line import/no-named-as-default
import { shadows } from '../Paper';

interface RootProps extends MuiMenuProps {
  elevation?: number;
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RootComponent: React.FunctionComponent<RootProps> = (props) => (
  <MuiMenu
    classes={{
      paper: 'paper',
    }}
    {...props}
  />
);

const Root = styled(RootComponent)`
  &&& {
    .paper {
      border-radius: 0;
      box-shadow: ${shadows[24]};
    }
  }
`;

Root.displayName = 'Menu';
RootComponent.displayName = 'Menu';

export { Root, RootProps, RootComponent };
