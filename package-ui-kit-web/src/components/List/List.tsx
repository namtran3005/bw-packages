import React from 'react';
import styled from 'styled-components';
import { Spacing, Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';
import { List as MuiList } from '@material-ui/core';
import { ListProps as MuiListProps } from '@material-ui/core/List';
import { SpacingType, getPxValue } from '../Content/Content.styled';
import {
  MediaStyledProperty,
  mediaStyledProperties,
} from '../../utils/mediaStyledProperty';

import {
  Root as ListItem,
  highlightWidth,
  doubleHighlightWidth,
} from './ListItem';
interface RootProps extends MuiListProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  variant?:
    | 'sidepanel'
    | 'normal'
    | 'highlighted'
    | 'doubleHighlighted'
    | 'info'
    | 'recipient'
    | 'wealth'
    | 'transaction'
    | 'default';

  foreground?: ColorsType;
  hoverForeground?: ColorsType;
  selectedForeground?: ColorsType;
  highlightForeground?: ColorsType;
  topSpacing?: MediaStyledProperty<SpacingType>;
  bottomSpacing?: MediaStyledProperty<SpacingType>;
  spacing?: MediaStyledProperty<SpacingType>;
  component?: React.ElementType;
}

const defaultForeground: ColorsType = 'primaryBlack';
const defaultHoverForeground: ColorsType = 'primaryBlack';
const defaultSelectedForeground: ColorsType = 'primaryBlack';

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  variant,
  foreground,
  hoverForeground,
  selectedForeground,
  highlightForeground,
  topSpacing,
  bottomSpacing,
  spacing,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <MuiList {...cleanProps} />;

const Root = styled(RootComponent)`
  &&& {
    position: relative;
    color: ${({ foreground }) => Colors.get(foreground || defaultForeground)};
    padding-top: ${Spacing.small}px;

    ${({ topSpacing, bottomSpacing, spacing = 8 }) =>
      mediaStyledProperties({
        'padding-top': {
          value: typeof topSpacing !== 'undefined' ? topSpacing : spacing,
          transform: getPxValue,
        },
        'padding-bottom': {
          value: typeof bottomSpacing !== 'undefined' ? bottomSpacing : spacing,
          transform: getPxValue,
        },
      })};

    a {
      text-decoration: none;
    }

    ${ListItem} {
      color: ${({ variant, foreground }) =>
        ['highlighted', 'doubleHighlighted', 'sidepanel'].indexOf(
          variant || 'normal'
        ) === -1
          ? 'inherit'
          : Colors.get(foreground || defaultForeground)};
      flex-direction: ${({ variant }) => variant === 'info' && 'column'};
      align-items: ${({ variant }) => variant === 'info' && 'flex-start'};

      &:after,
      &:before {
        background: ${({ highlightForeground }) =>
          highlightForeground
            ? Colors.get(highlightForeground)
            : 'currentColor'};
      }

      &:after {
        opacity: ${({ variant }) =>
          ['highlighted', 'doubleHighlighted'].indexOf(variant as string) !== -1
            ? 1
            : 0};
      }

      &:before {
        opacity: ${({ variant }) =>
          variant === 'doubleHighlighted' ? 0.2 : 0};
      }

      &:hover {
        box-shadow: 0 0 ${Spacing.unit * 4}px
          ${Colors.getWithAlpha('primaryBlack', 0.1)};

        color: ${({ hoverForeground }) =>
          Colors.get(hoverForeground || defaultHoverForeground)};

        &:after {
          width: ${highlightWidth}px;
        }

        &:before {
          width: ${doubleHighlightWidth}px;
        }
      }

      &.selected {
        color: ${({ selectedForeground }) =>
          Colors.get(selectedForeground || defaultSelectedForeground)};
      }
    }
  }
`;

Root.displayName = 'List';
RootComponent.displayName = 'ListComponent';

const List: React.FC<RootProps> = ({ children, ...props }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    return child
      ? React.cloneElement(child as React.ReactElement<any>, {
          variant: props.variant,
        })
      : null;
  });

  return <Root {...props}>{childrenWithProps}</Root>;
};

export { List, RootProps as ListProps };
