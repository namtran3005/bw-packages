import * as React from 'react';
import styled from 'styled-components';
import { Radio as MuiRadio } from '@material-ui/core';
import { RadioProps as MuiRadioProps } from '@material-ui/core/Radio';
import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';

interface RadioProps extends MuiRadioProps {
  foreground?: ColorsType;
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RootComponent: React.FunctionComponent<RadioProps> = (props) => (
  <MuiRadio {...props} />
);

const defaultForeground: ColorsType = 'primaryLilac';
const defaultDisabledForeground: ColorsType = 'primaryGrey';

const Root = styled(RootComponent)`
  &&& {
    color: ${(props) =>
      Colors.get(
        !props.disabled
          ? props.foreground || defaultForeground
          : defaultDisabledForeground
      )};
    &:hover {
      background-color: transparent;
      &:not(.checked) {
        .MuiSvgIcon-root {
          box-shadow: 0 0 0 6px transparent,
            inset 0 0 0 4px
              ${(props) =>
                Colors.getWithAlpha(
                  props.foreground || defaultForeground,
                  0.25
                )};
        }
      }
    }

    .MuiSvgIcon-root {
      border-radius: 50%;
      transition: all 0.4s;
    }
  }
`;

Root.displayName = 'Radio';
RootComponent.displayName = 'RadioComponent';

const Radio: React.FunctionComponent<RadioProps> = (props) => (
  <Root
    disableFocusRipple
    disableRipple
    disableTouchRipple
    classes={{
      checked: 'checked',
    }}
    {...props}
  />
);

export { Radio, RadioProps };
