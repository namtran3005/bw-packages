import React from 'react';
import styled from 'styled-components';

import { Checkbox as MuiCheckbox } from '@material-ui/core';
import { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox';

import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';

interface CheckboxProps extends MuiCheckboxProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const defaultForeground: ColorsType = 'primaryLilac';
const defaultDisabledForeground: ColorsType = 'primaryGrey';

const CheckboxStyled = styled(
  MuiCheckbox as React.ComponentType<CheckboxProps>
)`
  &&& {
    color: ${(props) =>
      Colors.get(
        props.disabled ? defaultDisabledForeground : defaultForeground
      )};
    &:hover {
      background-color: transparent;
      &:not(.checked) {
        .MuiSvgIcon-root {
          box-shadow: 0 0 0 6px transparent,
            inset 0 0 0 4px ${Colors.getWithAlpha(defaultForeground, 0.25)};
        }
      }
    }
    span {
      width: 16px;
      height: 16px;
      background-color: ${(props) => {
        return props.checked ? Colors.get('primaryBlack') : 'transparent';
      }};
      .MuiSvgIcon-root {
        border-radius: 4px;
        transition: all 0.4s;
      }
    }
  }
`;

const Checkbox: React.FunctionComponent<CheckboxProps> = (props) => {
  return (
    <CheckboxStyled
      {...props}
      classes={{
        checked: 'checked',
      }}
      disableRipple
      disableFocusRipple
      disableTouchRipple
    />
  );
};

export { Checkbox, CheckboxProps };
