import * as React from 'react';
import { SnackbarOrigin } from '@material-ui/core/Snackbar';

import { Typography } from '../Typography';
import { Root, RootProps as SnackbarProps } from './Snackbar.styled';

const Snackbar: React.FunctionComponent<SnackbarProps> = ({
  message,
  anchorOrigin = {
    vertical: 'top',
    horizontal: 'center',
  } as SnackbarOrigin,
  foreground = 'white',
  ...cleanProps
}) => (
  <Root
    message={
      <Typography.Body foreground={foreground}>{message}</Typography.Body>
    }
    {...{
      anchorOrigin,
      ...cleanProps,
    }}
  />
);

export { Snackbar, SnackbarProps };
