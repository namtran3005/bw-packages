import * as React from 'react';
import { Root, RootProps as QRCodeProps } from './QRCode.styled';

const QRCode: React.FunctionComponent<QRCodeProps> = (props) => (
  <Root {...props} />
);

export { QRCode, QRCodeProps };
