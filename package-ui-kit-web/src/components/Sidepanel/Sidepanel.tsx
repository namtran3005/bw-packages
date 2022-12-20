import * as React from 'react';

import styled from 'styled-components';
import { Colors, Spacing, ColorsType } from '@bitwala-cryptobank-squad/package-theme';

import { GridLayoutProps } from '../..';
import { Logo, LogoProps } from '../Logo';

interface SidepanelProps extends GridLayoutProps {
  backgroundImage?: string;
  background?: ColorsType;
  borderless?: boolean;
  fixed?: boolean;
  zIndex?: number;
  logoProps?: LogoProps;
  logo?: boolean;
  children?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  inLoggedOutLayout?: boolean;
}

const defaultBackgroundColor = 'backgroundLight';

const SidepanelContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['backgroundImage', 'background', 'fixed', 'zIndex'].includes(prop),
})`
  background: red;
`;

const SidepanelComponent = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'backgroundImage',
      'background',
      'fixed',
      'zIndex',
      'columnsTemplate',
      'inLoggedOutLayout',
      'logoPosition',
    ].includes(prop),
})<SidepanelProps>`
  height: 100vh;
  max-height: 100vh;
  position: sticky;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  display: block;

  ${SidepanelContentWrapper} {
    height: 100vh;
    max-height: 100vh;
    ${({ borderless }) =>
      !borderless &&
      `border-right: solid 1px ${Colors.getWithAlpha('text', 0.15)};`}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${({ background }) =>
      Colors.get(background ? background : defaultBackgroundColor)};

    &:before {
      content: '';
      background-image: ${(props) =>
        props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
      background-size: cover;
      background-position: center;
      opacity: 1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: 0;
    }
  }
`;

const LogoWrapperComponent: React.FunctionComponent<LogoProps> = (props) => (
  <Logo {...props} />
);

const LogoComponent = styled(LogoWrapperComponent)`
  position: relative;
  margin: ${Spacing.unit * 4}px ${Spacing.unit * 3}px;
  z-index: 10;
`;

function Sidepanel({
  children,
  logo,
  logoProps = { variant: 'logomark' },
  ...cleanProps
}: SidepanelProps): React.ReactElement {
  return (
    <SidepanelComponent {...cleanProps}>
      <SidepanelContentWrapper>
        {logo && (
          <div
            {...(cleanProps.inLoggedOutLayout && {
              style: { position: 'absolute', top: '100px' },
            })}
          >
            <LogoComponent {...logoProps} />
          </div>
        )}
        {children}
      </SidepanelContentWrapper>
    </SidepanelComponent>
  );
}

export { Sidepanel, SidepanelProps };
