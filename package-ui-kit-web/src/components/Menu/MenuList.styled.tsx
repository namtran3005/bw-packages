import * as React from 'react';
import styled from 'styled-components';
import { MenuList as MuiMenuList } from '@material-ui/core';
import { MenuListProps as MuiMenuListProps } from '@material-ui/core/MenuList';

interface RootProps extends MuiMenuListProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RootComponent: React.FunctionComponent<RootProps> = (props) => (
  <MuiMenuList {...props} />
);

const Root = styled(RootComponent)`
  &&& {
  }
`;

Root.displayName = 'MenuList';
RootComponent.displayName = 'MenuList';

export { Root, RootProps, RootComponent };
