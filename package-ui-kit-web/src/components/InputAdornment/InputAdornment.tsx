import * as React from 'react';
import { InputAdornment as MuiInputAdornment } from '@material-ui/core';
import { InputAdornmentProps as MuiInputAdornmentProps } from '@material-ui/core/InputAdornment';
interface InputAdornmentProps extends MuiInputAdornmentProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const InputAdornment: React.FunctionComponent<InputAdornmentProps> = (
  props
) => <MuiInputAdornment {...props} />;

export { InputAdornment, InputAdornmentProps };
