import * as React from 'react';
import styled from 'styled-components';
import { TableCell as MuiTableCell } from '@material-ui/core';
import { TableCellProps as MuiTableCellProps } from '@material-ui/core/TableCell';

interface RootProps extends MuiTableCellProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Root = styled(MuiTableCell as React.ComponentType<RootProps>)`
  &&& {
    color: inherit;
    padding: 0;
  }
`;

Root.displayName = 'TableCell';

export { Root, RootProps };
