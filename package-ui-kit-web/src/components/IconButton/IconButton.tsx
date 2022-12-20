import * as React from 'react';
import { IconButton as MuiIconButton } from '@material-ui/core';
import { IconButtonProps as MuiIconButtonProps } from '@material-ui/core/IconButton';
import { Colors, Transitions } from '@bitwala-cryptobank-squad/package-theme';
import { styled } from '../../';

type IconButtonSize = 'XS' | 'S' | 'M';
const DEFAULT_SIZE: IconButtonSize = 'M';

interface IconButtonProps extends Omit<MuiIconButtonProps, 'size'> {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  size?: IconButtonSize;
}

const IconButtonComponent: React.FunctionComponent<IconButtonProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  size,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <MuiIconButton focusRipple={false} disableRipple {...cleanProps} />;

const iconSizes: Record<IconButtonSize, number> = { XS: 18, S: 18, M: 22 };
const getIconSize = ({ size = DEFAULT_SIZE }: IconButtonProps) =>
  iconSizes[size];

const iconPaddings: Record<IconButtonSize, number> = { XS: 3, S: 7, M: 13 };
const getIconPadding = ({ size = DEFAULT_SIZE }: IconButtonProps) =>
  iconPaddings[size];

const IconButton = styled(IconButtonComponent)`
  &&& {
    color: ${Colors.get('primaryBlack')};
    box-sizing: content-box;
    padding: ${getIconPadding}px;
    width: ${getIconSize}px;
    height: ${getIconSize}px;
    transition: background-color ${Transitions.duration.normal}ms
      ${Transitions.easing.swiftOut};
    background: transparent;

    &:hover,
    &:focus {
      background-color: ${Colors.get('backgroundLight')};
    }
    &:active {
      background-color: ${Colors.getWithAlpha('primaryBlack', 0.25)};
    }
  }
`;

export { IconButton, IconButtonProps, IconButtonComponent, IconButtonSize };
