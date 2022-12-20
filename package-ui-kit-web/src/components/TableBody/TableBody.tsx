import * as React from 'react';
import { TableBody as MuiTableBody } from '@material-ui/core';
import { TableBodyProps as MuiTableBodyProps } from '@material-ui/core/TableBody';

const TableBody: React.FunctionComponent<MuiTableBodyProps> = (props) => (
  <MuiTableBody {...props} />
);

export { TableBody, MuiTableBodyProps as TableBodyProps };
