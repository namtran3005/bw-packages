import * as React from 'react';
import styled from 'styled-components';
import { ColorsType, Colors, Alphas } from '@bitwala-cryptobank-squad/package-theme';

interface RootProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  backgroundColor?: ColorsType;
  backgroundImage: string;
  backgroundColorAlpha?: number;
  backgroundSize?: React.CSSProperties['backgroundSize'];
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
  opacity?: React.CSSProperties['opacity'];
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  backgroundColor,
  backgroundImage,
  backgroundColorAlpha,
  backgroundSize,
  backgroundPosition,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  children,
  ...cleanProps
}) => <div {...cleanProps}>{children}</div>;

const Root = styled(RootComponent)`
  background-image: url('${(props) => props.backgroundImage}');
  background-size: ${(props) =>
    props.backgroundSize ? props.backgroundSize : 'cover'};
  background-position: ${(props) =>
    props.backgroundPosition ? props.backgroundPosition : 'center'};
  height: 100%;
  position: relative;
  opacity: ${(props) => (props.opacity !== undefined ? props.opacity : 1)};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props) =>
      props.backgroundColorAlpha !== undefined
        ? props.backgroundColorAlpha
        : Alphas.backgroundImage};
    background-color: ${(props) =>
      props.backgroundColor || Colors.get('primaryLilac')};
  }
`;

Root.displayName = 'BackgroundImage';

export { Root, RootProps, RootComponent };
