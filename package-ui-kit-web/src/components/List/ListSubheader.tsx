import * as React from 'react';
import styled from 'styled-components';

import { Spacing } from '@bitwala-cryptobank-squad/package-theme';
import { Typography, TypographyProps } from '../Typography';
import { mediaStyledProperties } from '../../utils/mediaStyledProperty';
import { RootSpacingProps, getPxValue } from '../Content/Content.styled';

interface RootProps extends TypographyProps, RootSpacingProps {
  foreground?: TypographyProps['foreground'];
  fontWeight?: TypographyProps['fontWeight'];
  typographyProps?: TypographyProps;
}

const RootComponent: React.FC<RootProps> = ({
  foreground,
  fontWeight,
  typographyProps,
  children,
  className,
}) => (
  <div className={className}>
    <Typography.Small
      foreground={foreground || 'subtitleText'}
      fontWeight={fontWeight || 'bold'}
      {...typographyProps}
    >
      {children}
    </Typography.Small>
  </div>
);

const Root = styled(RootComponent)`
  &&& {
    text-transform: uppercase;
    ${({ topSpacing, bottomSpacing, leftSpacing, rightSpacing, spacing }) =>
      mediaStyledProperties({
        'padding-top': {
          value:
            typeof topSpacing !== 'undefined'
              ? topSpacing
              : typeof spacing !== 'undefined'
              ? spacing
              : Spacing.unit,
          transform: getPxValue,
        },
        'padding-bottom': {
          value:
            typeof bottomSpacing !== 'undefined'
              ? bottomSpacing
              : typeof spacing !== 'undefined'
              ? spacing
              : Spacing.unit,
          transform: getPxValue,
        },
        'padding-left': {
          value:
            typeof leftSpacing !== 'undefined'
              ? leftSpacing
              : typeof spacing !== 'undefined'
              ? spacing
              : Spacing.unit * 3,
          transform: getPxValue,
        },
        'padding-right': {
          value:
            typeof rightSpacing !== 'undefined'
              ? rightSpacing
              : typeof spacing !== 'undefined'
              ? spacing
              : Spacing.unit * 3,
          transform: getPxValue,
        },
      })};
  }
`;

Root.displayName = 'ListSubheader';

const ListSubheader: React.FC<RootProps> = Root;

export { ListSubheader, RootProps as ListSubheaderProps };
