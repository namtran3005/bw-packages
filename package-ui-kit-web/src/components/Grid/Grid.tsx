import * as React from 'react';

import { GridItem, GridItemProps } from '../GridItem';
import { Root, RootProps } from './Grid.styled';

class Grid extends React.Component<RootProps> {
  public static Item = GridItem;
  public render(): JSX.Element {
    return <Root container {...this.props} />;
  }
}

export { Grid, GridItem, GridItemProps, RootProps as GridProps };
