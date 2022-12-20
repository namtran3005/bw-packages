import * as React from 'react';

import { Root, RootProps as TableRowProps } from './TableRow.styled';

const TableRow: React.FunctionComponent<TableRowProps> = (props) => {
  return <Root {...props} />;
};

export { TableRow, TableRowProps };
