import * as React from 'react';

import { Root, RootProps } from './Menu.styled';

import {
  Root as MenuItem,
  RootProps as MenuItemProps,
} from './MenuItem.styled';

import {
  Root as MenuList,
  RootProps as MenuListProps,
} from './MenuList.styled';

export { RootProps as MenuProps, MenuItemProps, MenuListProps };

export class Menu extends React.Component<RootProps> {
  public static Item = MenuItem;
  public static List = MenuList;

  public render(): JSX.Element {
    return <Root {...this.props} />;
  }
}
