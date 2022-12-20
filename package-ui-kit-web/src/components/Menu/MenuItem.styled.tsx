import * as React from 'react';
import styled from 'styled-components';
import { MenuItem as MuiMenuItem } from '@material-ui/core';
import { MenuItemProps as MuiMenuItemProps } from '@material-ui/core/MenuItem';

interface RootProps extends MuiMenuItemProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  button,
  ...props
}) => (
  <MuiMenuItem
    button={button || undefined}
    classes={{
      root: 'root',
      selected: 'selected',
    }}
    {...props}
  />
);

const Root = styled(RootComponent)`
  &&& {
    border-radius: 0;
  }
`;

Root.displayName = 'MenuItem';
RootComponent.displayName = 'MenuItem';

export { Root, RootProps, RootComponent };
