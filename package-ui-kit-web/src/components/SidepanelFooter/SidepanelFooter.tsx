import React from 'react';
import styled from 'styled-components';

import { Content, ContentProps as SidepanelFooterProps } from '../..';

const SidepanelFooterWrapperComponent: React.FunctionComponent<SidepanelFooterProps> = ({
  children,
  ...props
}) => (
  <Content spacing={24} {...props}>
    {children}
  </Content>
);

const SidepanelFooter = styled(
  SidepanelFooterWrapperComponent
)<SidepanelFooterProps>`
  & {
    position: absolute;
    bottom: 0;
  }
`;

export { SidepanelFooter, SidepanelFooterProps };
