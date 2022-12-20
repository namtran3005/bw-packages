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
  size?: 'S' | 'M' | 'L' | 'XL';
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  href?: string;
  fontSize?: number;
  selected?: boolean;
  zIndex?: React.CSSProperties['zIndex'];
  target?: string;
  textForeground?: ColorsType;
}

const defaultBackground = 'primaryLilac';
const defaultTextColor = 'text';
const disabledOpacitySolid = 0.3;
const disabledOpacityHollow = 0.25;
const hoverOpacity = 0.75;
const borderWidth = 1.4;

const getButtonBackgroundColor = (props: Partial<ButtonProps>) => {
  return props.selected ? 'text' : props.background || defaultBackground;
};

const getButtonBackground = (props: ButtonProps) => {
  if (props.variant === 'solid') {
    return Colors.get(
      props.selected ? 'text' : getButtonBackgroundColor(props)
    );
  }
  return Colors.getWithAlpha(
    props.selected ? 'text' : 'white',
    props.selected ? 1 : 0
  );
};

const getButtonBorderWidth = (props: ButtonProps) => {
  return props.variant === 'hollow' ? borderWidth : 0;
};

export const getButtonColor = ({ selected }: ButtonProps) => {
  return Colors.get(selected ? 'white' : defaultTextColor);
};

const getButtonBorderColor = (props: ButtonProps) => {
  return props.variant === 'hollow' ? getButtonColor(props) : '';
};

const getButtonPadding = (props: ButtonProps) => {
  const verticalPadding = 0;
  const horizontalPadding =
    props.size === 'S'
      ? 12
      : props.size === 'M'
      ? 16
      : props.size === 'L'
      ? 18
      : 24;
  return `${verticalPadding}px ${horizontalPadding}px`;
};

const getButtonActiveBackground = (props: ButtonProps) => {
  if (props.variant === 'solid') {
    const backgroundColor = props.selected
      ? 'text'
      : props.background || defaultBackground;
    return Colors.getWithAlpha(backgroundColor, props.selected ? 1 : 0.5);
  } else {
    return Colors.get(props.selected ? 'text' : 'backgroundLight');
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

const getButtonHeight = (props: ButtonProps): number => {
  return props.size === 'S'
    ? 32
    : props.size === 'M'
    ? 40
    : props.size === 'L'
    ? 48
    : 56;
};

const ButtonComponent = styled(MuiButtonBase).withConfig({
  shouldForwardProp: (prop) =>
    [
      'action',
      'buttonRef',
      'className',
      'children',
      'data-test',
      'disabled',
      'disableRipple',
      'disableTouchRipple',
      'focusRipple',
      'focusVisibleClassName',
      'href',
      'id',
      'name',
      'onFocusVisible',
      'onSubmit',
      'onClick',
      'type',
      'TouchRippleProps',
      'value',
      'target',
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
    display: ${(props) => (props.hidden ? 'none' : 'inline-block')};
    z-index: ${(props) =>
      props.zIndex !== undefined ? props.zIndex : 'initial'};

    ${({ fullWidth }) =>
      mediaStyledProperties({
        width: {
          value: fullWidth,
          transform(value: boolean) {
            return value ? '100%' : 'inherit';
          },
        },
      })}
    .button-text-area {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
      font-size: ${({ fontSize, size }) =>
        fontSize
          ? `${fontSize}px`
          : size === 'XL'
          ? '1.25rem'
          : size === 'S' || size === 'M'
          ? '0.875rem'
          : '1rem'};
    }

    ${(props) =>
      typeof props.href === 'string'
        ? `height: ${getButtonHeight(props)}px;`
        : `min-height: ${getButtonHeight(props)}px;`}
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
  variant = 'hollow',
  children,
  disableTouchRipple = true,
  selected,
  size = 'L',
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
        selected,
      }}
      {...cleanProps}
    >
      {loading ? (
        <CircularProgress size={26} />
      ) : (
        <div className="button-text-area">
          {size === 'S' ? (
            <Typography.Caption
              textAlign="center"
              {...(selected && { foreground: 'white' })}
            >
              {children}
            </Typography.Caption>
          ) : (
            <Typography.Body
              textAlign="center"
              foreground={cleanProps.textForeground}
            >
              {children}
            </Typography.Body>
          )}
        </div>
      )}
    </ButtonComponent>
  );
};

export { Button, ButtonProps };
