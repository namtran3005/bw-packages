import * as React from 'react';
import styled from 'styled-components';
import { Table as MuiTable } from '@material-ui/core';
import { TableProps as MuiTableProps } from '@material-ui/core/Table';
import { Spacing } from '@bitwala-cryptobank-squad/package-theme';

import { Root as TableRow } from '../TableRow';
import { Root as TableCell } from '../TableCell';

interface RootProps extends MuiTableProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  transparent?: boolean;
  variant?: 'normal' | 'dense';
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  transparent,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  variant,
  ...cleanProps
}) => <MuiTable {...cleanProps} />;

const Root = styled(MuiTable as React.ComponentType<RootProps>)`
  &&& {
    ${TableRow} {
      height: ${({ variant }) =>
        variant === 'dense' ? 'auto' : `${Spacing.unit * 5}px`};
    }
    ${TableCell} {
      padding: ${Spacing.unit}px
        ${({ variant }) => (variant === 'dense' ? 0 : Spacing.unit * 2)}px;
    }
  }
`;

Root.displayName = 'Table';
RootComponent.displayName = 'TableComponent';

export { Root, RootProps, RootComponent };
