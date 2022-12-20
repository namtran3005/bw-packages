import * as React from 'react';
import styled from 'styled-components';
import { ColorsType, Colors, Spacing } from '@bitwala-cryptobank-squad/package-theme';

interface RootProps {
  horizontalAlign?: 'start' | 'end';
  verticalAlign?: 'start' | 'end';
  foreground?: ColorsType;
  background?: ColorsType;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  horizontalAlign,
  verticalAlign,
  foreground,
  background,
  ...cleanProps
  /* eslint-enable @typescript-eslint/no-unused-vars */
}) => <span {...cleanProps} />;

const Root = styled(RootComponent)`
  &&& {
    display: inherit;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      background: ${({ foreground }) =>
        Colors.get(foreground || 'primaryLilac')};
      width: ${Spacing.unit}px;
      height: ${Spacing.unit}px;
      border: 4px solid ${({ background }) => Colors.get(background || 'white')};
      border-radius: 50%;

      top: ${({ verticalAlign }) => verticalAlign === 'start' && 0};
      bottom: ${({ verticalAlign }) => verticalAlign === 'end' && 0};
      left: ${({ horizontalAlign }) => horizontalAlign === 'start' && 0};
      right: ${({ horizontalAlign }) => horizontalAlign === 'end' && 0};
    }
  }
`;

Root.displayName = 'AttachedDot';
RootComponent.displayName = 'AttachedDotComponent';

export { Root, RootProps, RootComponent };
