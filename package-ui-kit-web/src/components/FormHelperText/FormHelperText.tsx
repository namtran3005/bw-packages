import * as React from 'react';

import { FormHelperTextProps as MuiFormHelperTextProps } from '@material-ui/core/FormHelperText';

import { Typography } from '../Typography';

const FormHelperText: React.FunctionComponent<MuiFormHelperTextProps> = (
  props
) => (
  <Typography.Small
    foregroundAlpha={props.disabled ? 0.5 : 1}
    foreground={props.error ? 'error' : 'subtitleText'}
  >
    {props.children}
  </Typography.Small>
);

export { FormHelperText, MuiFormHelperTextProps as FormHelperTextProps };
