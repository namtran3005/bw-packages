import * as React from 'react';

import { Typography } from '../Typography';
import {
  Root,
  RootProps as BottomNavigationActionProps,
} from './BottomNavigationAction.styled';

const BottomNavigationAction: React.FunctionComponent<BottomNavigationActionProps> = (
  props
) => (
  <Root
    label={<Typography.Caption>{props.label}</Typography.Caption>}
    {...props}
  />
);

export { BottomNavigationAction, BottomNavigationActionProps };
