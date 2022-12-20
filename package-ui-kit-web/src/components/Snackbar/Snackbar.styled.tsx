import * as React from 'react';
import styled from 'styled-components';
import { Snackbar as MuiSnackbar } from '@material-ui/core';
import { SnackbarProps as MuiSnackbarProps } from '@material-ui/core/Snackbar';
import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';

interface RootProps extends MuiSnackbarProps {
  background?: ColorsType;
  foreground?: ColorsType;
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  background,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  foreground,
  ...cleanProps
}) => <MuiSnackbar {...cleanProps} />;

const defaultBackground = 'primaryBlack';

const Root = styled(RootComponent)`
  &&& {
    & > * {
      border-radius: 0;
      background: ${(props) =>
        Colors.get(props.background || defaultBackground)};
      padding: 0 12px !important;
    }
  }
`;

Root.displayName = 'Snackbar';
RootComponent.displayName = 'SnackbarComponent';

export { Root, RootProps, RootComponent };
