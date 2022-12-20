import * as React from 'react';
import styled from 'styled-components';

import { Transitions } from '@bitwala-cryptobank-squad/package-theme';
import { defaultWidth as drawerDefaultWidth } from '../Drawer/Drawer.styled';
import {
  MediaStyledProperty,
  mediaStyledProperties,
} from '../../utils/mediaStyledProperty';

const RootContent = styled.div``;

type SpacingType = 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 64 | 80 | 128;
type MaxWidthType =
  | 200
  | 240
  | 320
  | 400
  | 480
  | 560
  | 640
  | 720
  | 800
  | 960
  | 1200;
type MinWidthType = MaxWidthType;

interface RootSpacingProps {
  spacing?: MediaStyledProperty<SpacingType>;
  topSpacing?: MediaStyledProperty<SpacingType>;
  bottomSpacing?: MediaStyledProperty<SpacingType>;
  leftSpacing?: MediaStyledProperty<SpacingType>;
  rightSpacing?: MediaStyledProperty<SpacingType>;
  verticalSpacing?: SpacingType;
  horizontalSpacing?: SpacingType;
  maxWidth?: MaxWidthType;
  fullHeight?: boolean;
  minHeight?: React.CSSProperties['minHeight'];
  overflow?: MediaStyledProperty<React.CSSProperties['overflow']>;
}

interface RootProps extends RootSpacingProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: React.ForwardedRef<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  narrow?: boolean;
  drawerOpen?: boolean;
  maxWidth?: MaxWidthType;
  minWidth?: MinWidthType;
  fullHeight?: boolean;
  textAlign?: React.CSSProperties['textAlign'];
  zIndex?: React.CSSProperties['zIndex'];
}

const getPadding = (props: RootSpacingProps, defaultSpacing?: number) => {
  const padding =
    props.spacing === undefined ? defaultSpacing || 24 : props.spacing;

  const paddingTop =
    props.topSpacing === undefined ? padding : props.topSpacing;
  const paddingBottom =
    props.bottomSpacing === undefined ? padding : props.bottomSpacing;
  const paddingLeft =
    props.leftSpacing === undefined ? padding : props.leftSpacing;
  const paddingRight =
    props.rightSpacing === undefined ? padding : props.rightSpacing;

  return `
    padding-top: ${paddingTop}px;
    padding-bottom: ${paddingBottom}px;
    padding-left: ${paddingLeft}px;
    padding-right: ${paddingRight}px;
  `;
};

const getPxValue = (value: number) => `${value}px`;

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  narrow,
  drawerOpen,
  spacing,
  topSpacing,
  bottomSpacing,
  leftSpacing,
  rightSpacing,
  verticalSpacing,
  horizontalSpacing,
  textAlign,
  maxWidth,
  minWidth,
  fullHeight,
  minHeight,
  zIndex,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  children,
  ...cleanProps
}) => <div {...cleanProps}>{children}</div>;

const Root = styled(RootComponent)`
  position: relative;
  margin-left: ${({ drawerOpen }) => (drawerOpen ? drawerDefaultWidth : 0)}px;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : 'none')};
  box-sizing: border-box;
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  min-height: ${({ fullHeight, minHeight }) =>
    fullHeight ? minHeight || '100%' : 'auto'};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 'initial')};
  transition: ${Transitions.duration.normal}ms ${Transitions.easing.swiftOut};

  > ${RootContent} {
    box-sizing: border-box;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: ${({ narrow }) => (narrow ? 'auto' : 'inherit')};
    margin-right: ${({ narrow }) => (narrow ? 'auto' : 'inherit')};
    max-width: ${({ narrow }) => (narrow ? '1024px' : 'auto')};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'inherit')};
    height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
    transition: ${Transitions.duration.normal}ms ${Transitions.easing.swiftOut};

    ${({
      topSpacing,
      bottomSpacing,
      leftSpacing,
      rightSpacing,
      spacing = 24,
      overflow,
    }) =>
      mediaStyledProperties({
        'padding-top': {
          value: typeof topSpacing !== 'undefined' ? topSpacing : spacing,
          transform: getPxValue,
        },
        'padding-bottom': {
          value: typeof bottomSpacing !== 'undefined' ? bottomSpacing : spacing,
          transform: getPxValue,
        },
        'padding-left': {
          value: typeof leftSpacing !== 'undefined' ? leftSpacing : spacing,
          transform: getPxValue,
        },
        'padding-right': {
          value: typeof rightSpacing !== 'undefined' ? rightSpacing : spacing,
          transform: getPxValue,
        },
        overflow: {
          value: overflow,
        },
      })};
  }
`;

Root.displayName = 'Content';
RootContent.displayName = 'ContentContent';
RootComponent.displayName = 'ContentComponent';

export {
  Root,
  RootProps,
  RootComponent,
  RootContent,
  RootSpacingProps,
  getPadding,
  SpacingType,
  MaxWidthType,
  MinWidthType,
  getPxValue,
};
