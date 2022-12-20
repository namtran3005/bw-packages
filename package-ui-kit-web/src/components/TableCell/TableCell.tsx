import * as React from 'react';

import { Root, RootProps as TableCellProps } from './TableCell.styled';

const TableCell: React.FunctionComponent<TableCellProps> = (props) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <Root {...(props as any)} />
);

export { TableCell, TableCellProps };
