import * as React from 'react';
import { TableSortLabel as MuiTableSortLabel } from '@material-ui/core';
import { TableSortLabelProps as MuiTableSortLabelProps } from '@material-ui/core/TableSortLabel';

const TableSortLabel: React.FunctionComponent<MuiTableSortLabelProps> = (
  props
) => <MuiTableSortLabel {...props} />;

export { TableSortLabel, MuiTableSortLabelProps as TableSortLabelProps };
