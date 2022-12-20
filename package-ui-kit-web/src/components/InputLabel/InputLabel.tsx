import * as React from 'react';
import { Typography, TypographyProps } from '../Typography';

interface InputLabelProps extends TypographyProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const InputLabel: React.FunctionComponent<InputLabelProps> = ({
  foreground = 'text',
  ...props
}) => <Typography.Small foreground={foreground} {...props} />;

export { InputLabel, InputLabelProps };
