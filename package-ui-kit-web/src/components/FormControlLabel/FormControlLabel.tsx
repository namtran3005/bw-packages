import * as React from 'react';
import {
  Root,
  RootProps as FormControlLabelProps,
} from './FormControlLabel.styled';

const FormControlLabel: React.FunctionComponent<FormControlLabelProps> = (
  props
) => <Root {...props} />;

export { FormControlLabel, FormControlLabelProps };
