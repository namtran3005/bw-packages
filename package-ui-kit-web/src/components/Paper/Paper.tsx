import * as React from 'react';
import {
  Root,
  RootProps as PaperProps,
  RootContent,
  shadows,
} from './Paper.styled';

const Paper: React.FunctionComponent<PaperProps> = ({
  children,
  ...cleanProps
}) => (
  <Root {...cleanProps}>
    <RootContent>{children}</RootContent>
  </Root>
);

export { Paper, PaperProps, shadows };
