import * as React from 'react';
import { Root, RootProps, RootLabel } from './TextFieldBlockAdornment.styled';

const TextFieldBlockAdornment: React.FunctionComponent<RootProps> = ({
  children,
  background,
  foreground,
  ...cleanProps
}) => (
  <Root
    spacing={0}
    elevation={0}
    background={background || 'primaryBlack'}
    {...cleanProps}
  >
    <RootLabel foreground={foreground || 'white'}>{children}</RootLabel>
  </Root>
);

export { TextFieldBlockAdornment, RootProps as TextFieldBlockAdornmentProps };
