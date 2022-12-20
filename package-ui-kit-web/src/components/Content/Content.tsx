import * as React from 'react';
import {
  Root,
  RootProps as ContentProps,
  RootContent,
  SpacingType,
} from './Content.styled';

const Content: React.FunctionComponent<ContentProps> = ({
  children,
  ...cleanProps
}) => (
  <Root {...cleanProps}>
    <RootContent>{children}</RootContent>
  </Root>
);

export { Content, ContentProps, SpacingType };
