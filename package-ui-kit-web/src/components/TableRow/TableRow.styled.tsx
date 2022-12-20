import * as React from 'react';
import styled from 'styled-components';
import { TableRow as MuiTableRow } from '@material-ui/core';
import { TableRowProps as MuiTableRowProps } from '@material-ui/core/TableRow';
import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';

import { Root as TableCell } from '../TableCell';

interface RootProps extends MuiTableRowProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  background?: ColorsType;
  backgroundAlpha?: number;
  foreground?: ColorsType;
  highlighted?: boolean;
  highlight?: ColorsType;
  dimmed?: boolean;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  highlight,
  highlighted,
  background,
  backgroundAlpha,
  foreground,
  dimmed,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <MuiTableRow {...cleanProps} />;

const defaultBackground = 'white';
const defaultAlpha = 0;

const getTableRowBackground = (props: RootProps) => {
  if (props.background) {
    if (props.backgroundAlpha !== undefined) {
      return Colors.getWithAlpha(props.background, props.backgroundAlpha);
    } else {
      return Colors.get(props.background);
    }
  }
  return Colors.getWithAlpha(defaultBackground, defaultAlpha);
};

const Root = styled(RootComponent)`
  &&& {
    background: ${getTableRowBackground};
    height: auto;
    color: ${({ foreground }) => Colors.get(foreground || 'primaryGrey')};

    ${TableCell} {
      border-bottom-width: 2px;
      border-bottom-color: ${({ highlighted, highlight }) =>
        highlighted
          ? Colors.get(highlight || 'primaryLilac')
          : Colors.get('primaryGrey')};
    }
  }
`;

Root.displayName = 'TableRow';
RootComponent.displayName = 'TableRowCompoment';

export { Root, RootProps, RootComponent };
