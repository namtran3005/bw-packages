import * as React from 'react';

import { Root, RootProps as ButtonGroupProps } from './ButtonGroup.styled';

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = (props) => (
  <Root {...props} />
);

export { ButtonGroup, ButtonGroupProps };
