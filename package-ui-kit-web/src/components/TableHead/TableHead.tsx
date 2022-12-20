import * as React from 'react';
import { TableHead as MuiTableHead } from '@material-ui/core';
import { TableHeadProps as MuiTableHeadProps } from '@material-ui/core/TableHead';

const TableHead: React.FunctionComponent<MuiTableHeadProps> = (props) => (
  <MuiTableHead {...props} />
);

export { TableHead, MuiTableHeadProps as TableHeadProps };
