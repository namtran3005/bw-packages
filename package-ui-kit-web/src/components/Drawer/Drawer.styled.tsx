import * as React from 'react';
import styled from 'styled-components';
import { Drawer as MuiDrawer } from '@material-ui/core';
import { DrawerProps as MuiDrawerProps } from '@material-ui/core/Drawer';

const defaultWidth = 240;

interface RootProps extends MuiDrawerProps {
  transparent?: boolean;
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Root = styled(MuiDrawer as React.ComponentType<RootProps>)`
  .paper {
    min-width: ${defaultWidth}px;
    background: transparent;
  }
`;

Root.displayName = 'Drawer';

export { Root, RootProps, defaultWidth };
