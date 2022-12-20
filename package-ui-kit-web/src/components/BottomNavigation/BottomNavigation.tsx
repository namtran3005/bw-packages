import * as React from 'react';
import {
  BottomNavigationAction,
  BottomNavigationActionProps,
} from '../BottomNavigationAction';
import {
  Root,
  RootProps as BottomNavigationProps,
} from './BottomNavigation.styled';

class BottomNavigation extends React.Component<BottomNavigationProps> {
  public static Action = BottomNavigationAction;

  public render(): JSX.Element {
    return <Root {...this.props} />;
  }
}

export { BottomNavigation, BottomNavigationProps, BottomNavigationActionProps };
