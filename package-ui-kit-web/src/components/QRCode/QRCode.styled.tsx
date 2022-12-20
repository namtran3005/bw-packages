import * as React from 'react';
import styled from 'styled-components';
import { QRCode as QRCodeSVG, QRCodeProps } from 'react-qr-svg';

type RootProps = QRCodeProps & {
  style?: object;
};

const RootComponent: React.FunctionComponent<RootProps> = ({
  ...cleanProps
}) => <QRCodeSVG {...cleanProps} />;

const Root = styled(RootComponent)`
  &&& {
    width: 100%;
  }
`;

Root.displayName = 'QRCode';

export { Root, RootProps, RootComponent };
