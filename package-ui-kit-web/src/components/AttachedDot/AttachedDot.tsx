import * as React from 'react';
import { Root, RootProps as AttachedDotProps } from './AttachedDot.styled';

const AttachedDot: React.FunctionComponent<AttachedDotProps> = (props) => (
  <Root {...props} />
);

export { AttachedDot, AttachedDotProps };
