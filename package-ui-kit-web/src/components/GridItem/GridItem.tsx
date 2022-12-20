import * as React from 'react';
import { Grid as MuiGrid } from '@material-ui/core';
import { GridProps as MuiGridProps } from '@material-ui/core/Grid';

type GridItemProps = Omit<MuiGridProps, 'spacing'>;

const GridItem: React.FunctionComponent<GridItemProps> = ({ ...props }) => (
  <MuiGrid item {...props} />
);

GridItem.displayName = 'GridItem';

export { GridItem, GridItemProps };
