import * as React from 'react';
import styled from 'styled-components';
import { ColorsType, Colors } from '@bitwala-cryptobank-squad/package-theme';

interface RootProps {
  foreground?: ColorsType;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  size?: 24 | 48 | 56 | 96 | 192;
  alpha?: number;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  foreground,
  size,
  alpha,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <span {...cleanProps} />;

const Root = styled(RootComponent)`
  &&& {
    display: inline-block;
    font-size: 0;
    line-height: 0;
    color: ${({ foreground }) =>
      foreground ? Colors.get(foreground) : 'inherit'};
    opacity: ${({ alpha }) => (alpha !== undefined ? alpha : 'initial')};

    > svg {
      width: ${({ size }) => (size !== undefined ? `${size}px` : 'initial')};
      height: ${({ size }) => (size !== undefined ? `${size}px` : 'initial')};
    }
  }
`;

Root.displayName = 'Icon';

export { Root, RootProps };
