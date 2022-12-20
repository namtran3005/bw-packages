import * as React from 'react';
import { FormControl as MuiFormControl } from '@material-ui/core';
import { FormControlProps as MuiFormControlProps } from '@material-ui/core/FormControl';

const FormControl: React.FunctionComponent<MuiFormControlProps> = (props) => (
  <MuiFormControl {...props} />
);

export { FormControl, MuiFormControlProps as FormControlProps };
