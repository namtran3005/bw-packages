import * as React from 'react';

import { GridLayoutItem, GridLayoutItemProps } from '../GridLayoutItem';
import { Root, RootProps } from './GridLayout.styled';

class GridLayout extends React.Component<RootProps> {
  public static Item = GridLayoutItem;
  public render(): JSX.Element {
    return <Root {...this.props} />;
  }
}

export {
  GridLayout,
  GridLayoutItem,
  GridLayoutItemProps,
  RootProps as GridLayoutProps,
};
