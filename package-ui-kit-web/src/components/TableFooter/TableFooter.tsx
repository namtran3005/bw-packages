import * as React from 'react';
import { TableFooter as MuiTableFooter } from '@material-ui/core';
import { TableFooterProps as MuiTableFooterProps } from '@material-ui/core/TableFooter';

const TableFooter: React.FunctionComponent<MuiTableFooterProps> = (props) => (
  <MuiTableFooter {...props} />
);

export { TableFooter, MuiTableFooterProps as TableFooterProps };
