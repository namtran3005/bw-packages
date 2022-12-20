import * as React from 'react';
import {
  Root,
  RootProps as GridLayoutItemProps,
} from './GridLayoutItem.styled';

const GridLayoutItem: React.FunctionComponent<GridLayoutItemProps> = (
  props
) => <Root {...props} />;

export { GridLayoutItem, GridLayoutItemProps };
