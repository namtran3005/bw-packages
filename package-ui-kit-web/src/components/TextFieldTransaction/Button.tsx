import * as React from 'react';

import styled from 'styled-components';

import { ButtonBase as MuiButtonBase } from '@material-ui/core';
import { ButtonBaseProps as MuiButtonBaseProps } from '@material-ui/core/ButtonBase';

import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';

import {
  MediaStyledProperty,
  mediaStyledProperties,
} from '../../utils/mediaStyledProperty';

import { Typography } from '../Typography';

import { CircularProgress } from '../CircularProgress';

interface ButtonProps extends MuiButtonBaseProps {
  loading?: boolean;
  variant?: 'hollow' | 'solid';
  background?: ColorsType;
  fullWidth?: MediaStyledProperty<boolean>;
  size?: 'tiny' | 'small' | 'normal' | 'large';
  fontWeight?: number;
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  href?: string;
  fontSize?: number;
  target?: string;
}

const defaultBackground = 'primaryLilac';
const defaultTextColor = 'primaryBlack';
const disabledOpacitySolid = 0.3;
const disabledOpacityHollow = 0.25;
const hoverOpacity = 0.75;
const borderWidth = 1.4;

const getButtonBackgroundColor = (props: Partial<ButtonProps>) => {
  return props.background || defaultBackground;
};

const getButtonBackground = (props: ButtonProps) => {
  if (props.variant === 'solid') {
    return Colors.get(getButtonBackgroundColor(props));
  }
  return Colors.getWithAlpha('white', 0);
};

const getButtonBorderWidth = (props: ButtonProps) => {
  return props.variant === 'hollow' ? borderWidth : 0;
};

export const getButtonColor = () => {
  return Colors.get(defaultTextColor);
};

const getButtonBorderColor = (props: ButtonProps) => {
  return props.variant === 'hollow' ? getButtonColor : '';
};

const getButtonPadding = (props: ButtonProps) => {
  const verticalPadding = 0;
  const horizontalPadding =
    props.size === 'tiny'
      ? 12
      : props.size === 'small'
      ? 16
      : props.size === 'large'
      ? 24
      : 18;
  return `${verticalPadding}px ${horizontalPadding}px`;
};

const getButtonActiveBackground = (props: ButtonProps) => {
  if (props.variant === 'solid') {
    const backgroundColor = props.background || defaultBackground;
    return Colors.getWithAlpha(backgroundColor, 0.5);
  } else {
    return Colors.get('backgroundLight');
  }
};

const getButtonOpacity = (props: ButtonProps): number => {
  if (props.loading) {
    return 1;
  }
  if (props.disabled) {
    return props.variant === 'solid'
      ? disabledOpacitySolid
      : disabledOpacityHollow;
  }
  return 1;
};

const ButtonComponent = styled(MuiButtonBase).withConfig({
  shouldForwardProp: (prop) =>
    [
      'action',
      'buttonRef',
      'className',
      'children',
      'disabled',
      'disableRipple',
      'disableTouchRipple',
      'focusRipple',
      'focusVisibleClassName',
      'onFocusVisible',
      'type',
      'TouchRippleProps',
      'href',
      'onSubmit',
      'onClick',
    ].includes(prop),
})`
  &&& {
    white-space: nowrap;
    border-radius: 32px;
    border: ${getButtonBorderWidth}px solid ${getButtonBorderColor};
    padding: ${getButtonPadding};
    background: ${getButtonBackground};
    color: ${getButtonColor};
    opacity: ${getButtonOpacity};
    display: ${(props) =>
      props.hidden
        ? 'none'
        : typeof props.href === 'string'
        ? 'table-cell'
        : 'inline-block'};
    ${({ fullWidth }) =>
      mediaStyledProperties({
        width: {
          value: fullWidth,
          transform(value: boolean) {
            return value ? '100%' : 'inherit';
          },
        },
      })}
    .button-text-area > p {
      font-size: 12px !important;
    }
    &:hover {
      opacity: ${hoverOpacity};
    }
    &:active {
      background: ${getButtonActiveBackground};
    }
  }
`;

const Button: React.FunctionComponent<ButtonProps> = ({
  loading = false,
  disabled = false,
  focusRipple = true,
  fontWeight = 500,
  variant = 'hollow',
  children,
  disableTouchRipple = true,
  size = 'normal',
  ...cleanProps
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <ButtonComponent
      classes={{
        disabled: 'disabled',
      }}
      {...{
        focusRipple,
        variant,
        size,
        disabled: isDisabled,
        disableTouchRipple,
      }}
      {...cleanProps}
    >
      {loading ? (
        <CircularProgress size={26} />
      ) : (
        <div className="button-text-area">
          {size === 'tiny' ? (
            <Typography.Caption>{children}</Typography.Caption>
          ) : (
            <Typography.Body fontWeight={fontWeight}>
              {children}
            </Typography.Body>
          )}
        </div>
      )}
    </ButtonComponent>
  );
};

export { Button, ButtonProps };
