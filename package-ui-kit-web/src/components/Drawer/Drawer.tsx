import * as React from 'react';
import { Root, RootProps as DrawerProps } from './Drawer.styled';

const Drawer: React.FunctionComponent<DrawerProps> = ({
  children,
  ...cleanProps
}: DrawerProps) => (
  <Root
    classes={{
      docked: 'docked',
      paper: 'paper',
      paperAnchorLeft: 'paperAnchorLeft',
      paperAnchorRight: 'paperAnchorRight',
      paperAnchorTop: 'paperAnchorTop',
      paperAnchorBottom: 'paperAnchorBottom',
      paperAnchorDockedLeft: 'paperAnchorDockedLeft',
      paperAnchorDockedTop: 'paperAnchorDockedTop',
      paperAnchorDockedRight: 'paperAnchorDockedRight',
      paperAnchorDockedBottom: 'paperAnchorDockedBottom',
      modal: 'modal',
    }}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {...(cleanProps as any)}
  >
    {children}
  </Root>
);

export { Drawer, DrawerProps };
