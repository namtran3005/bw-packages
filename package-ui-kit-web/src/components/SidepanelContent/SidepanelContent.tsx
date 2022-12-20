import * as React from 'react';
import styled from 'styled-components';

import { Content, ContentProps } from '../..';
import { RootContent as ContentContent } from '../Content/Content.styled';

interface SidepanelContentProps extends ContentProps {
  docked?: 'left' | 'right';
  justify?: React.CSSProperties['justifyContent'];
  compensateLogoHeight?: boolean;
}

const SidepanelComponentWrapper: React.FunctionComponent<SidepanelContentProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  docked,
  justify,
  compensateLogoHeight,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <Content {...cleanProps} />;

const SidepanelComponent = styled(SidepanelComponentWrapper)`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  ${({ docked }) => (docked ? `${docked}: -50%;` : '')};

  ${ContentContent} {
    width: 100%;
    height: 100%;
    margin-top: initial;
    margin-bottom: initial;
    display: flex;
    flex-direction: column;
    justify-content: ${({ justify }) => justify || 'start'};
  }
`;

const SidepanelContent: React.FunctionComponent<SidepanelContentProps> = (
  props
) => <SidepanelComponent {...props} />;

export { SidepanelContent, SidepanelContentProps };
