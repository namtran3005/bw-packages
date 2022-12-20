import * as React from 'react';
import { TablePagination as MuiTablePagination } from '@material-ui/core';
import { TablePaginationProps as MuiTablePaginationProps } from '@material-ui/core/TablePagination';

const TablePagination: React.FunctionComponent<MuiTablePaginationProps> = (
  props
) => <MuiTablePagination {...props} />;

export { TablePagination, MuiTablePaginationProps as TablePaginationProps };
