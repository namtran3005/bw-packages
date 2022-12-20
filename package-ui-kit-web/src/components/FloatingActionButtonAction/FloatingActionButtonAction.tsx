import * as React from 'react';
import {
  Root,
  RootProps as FloatingActionButtonActionProps,
} from './FloatingActionButtonAction.styled';

const FloatingActionButtonAction: React.FunctionComponent<FloatingActionButtonActionProps> = (
  props
) => <Root {...props} />;

export { FloatingActionButtonAction, FloatingActionButtonActionProps };
