import * as React from 'react';
import styled from 'styled-components';
import { Switch as MuiSwitch } from '@material-ui/core';
import { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';
interface RootProps extends MuiSwitchProps {
  foreground?: ColorsType;
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Root = styled(MuiSwitch as React.ComponentType<RootProps>)`
  &&& {
    .checked {
      color: white;
      transform: translateX(10px);
      border: none;
      & + .track {
        border-radius: 12px;
        background-color: ${(props) =>
          Colors.get(props.foreground || 'primaryLilac')};
      }
    }
    .disabled {
      color: ${Colors.get('backgroundLight')};

      & .thumb {
        box-shadow: none;
      }
    }

    .thumb {
      width: 16px;
      height: 16px;
      margin: 5px 0;
      transform: translateX(5px);
      box-shadow: 1px 2px 2px ${Colors.getWithAlpha('black', 0.12)};
      border: none;
    }
    .root {
      width: 30px;
      height: 20px;
      padding: 0;
    }

    .track {
      width: 30px;
      height: 20px;
      opacity: 1;
      border-radius: 12px;
      background-color: ${Colors.getWithAlpha('backgroundDark', 0.25)};
      transition: ${Colors.getWithAlpha('backgroundDark', 0.25)};
    }

    .colorSecondary:hover {
      background-color: transparent;
    }
  }
`;

Root.displayName = 'Switch';

const Switch: React.FunctionComponent<RootProps> = (props) => {
  return (
    <Root
      disableRipple
      disableFocusRipple
      disableTouchRipple
      classes={{
        checked: 'checked',
        track: 'track',
        root: 'root',
        thumb: 'thumb',
        disabled: 'disabled',
        colorSecondary: 'colorSecondary',
      }}
      {...props}
    />
  );
};

export { Switch, RootProps as SwitchProps };
