import * as React from 'react';
import styled from 'styled-components';

import { ButtonBase } from '@material-ui/core';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { ColorsType, Colors, Spacing } from '@bitwala-cryptobank-squad/package-theme';

import { StyledTypographyProps } from '../../components/Typography/Typography';

interface RootProps extends ButtonBaseProps {
  background?: ColorsType;
  size?: 'normal' | 'small';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  innerRef?: any;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  background,
  ...cleanProps
}) => <ButtonBase disableRipple={!cleanProps.onClick} {...cleanProps} />;

const getBadgePadding = (props: RootProps) => {
  if (!props.size || props.size === 'normal') {
    return Spacing.unit / 2;
  } else if (props.size === 'small') {
    return 0;
  }
};

const getBadgeMinDimension = (props: RootProps) => {
  if (!props.size || props.size === 'normal') {
    return Spacing.unit * 3;
  } else if (props.size === 'small') {
    return Spacing.unit * 2;
  }
};

const Root = styled(RootComponent)`
  &&& {
    display: inline-block;
    background-color: ${(props) =>
      Colors.get(props.background || 'primaryGrey')};
    min-width: ${getBadgeMinDimension}px;
    min-height: ${getBadgeMinDimension}px;
    text-align: center;
    border-radius: ${Spacing.unit * Spacing.unit}px;
    padding: 0;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'unset')};
    transform: scale(0.75);
    vertical-align: super;
  }
`;

Root.displayName = 'Badge';
RootComponent.displayName = 'BadgeComponent';

export {
  StyledTypographyProps,
  Root,
  RootProps,
  RootComponent,
  getBadgePadding,
};
