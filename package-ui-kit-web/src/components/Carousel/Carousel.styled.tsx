import * as React from 'react';
import styled from 'styled-components';
import { Spacing, Colors, Transitions } from '@bitwala-cryptobank-squad/package-theme';

interface RootProps {
  index: number;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  index,
  ...cleanProps
}) => <div {...cleanProps} />;

const indicatorHeight = Spacing.unit * 5;
const indicatorItemPadding = Spacing.unit;
const indicatorItemDotSize = Spacing.unit;

const RootIndicatorItemDot = styled(RootComponent)`
  display: block;
  width: ${indicatorItemDotSize}px;
  height: ${indicatorItemDotSize}px;
  border-radius: 50%;
  background: ${Colors.get('primaryGrey')};
  transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
`;

const RootIndicatorItem = styled(RootComponent)`
  display: inline-block;
  padding: ${indicatorItemPadding}px ${indicatorItemPadding / 2}px;
  margin: ${indicatorHeight / 2 -
    indicatorItemDotSize / 2 -
    indicatorItemPadding}px
    0;
  vertical-align: middle;
  cursor: pointer;
`;

const RootIndicator = styled(RootComponent)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${indicatorHeight}px;
  text-align: center;
`;

const Root = styled(RootComponent)`
  position: relative;
  padding-bottom: ${indicatorHeight}px;

  ${RootIndicatorItem} {
    &:nth-of-type(${(props) => props.index + 1}) {
      ${RootIndicatorItemDot} {
        background: ${Colors.get('primaryBlack')};
      }
    }
  }
`;

Root.displayName = 'Carousel';
RootIndicator.displayName = 'CarouselIndicator';
RootIndicatorItem.displayName = 'CarouselIndicatorItem';
RootIndicatorItemDot.displayName = 'CarouselIndicatorItemDot';

export {
  Root,
  RootProps,
  RootIndicator,
  RootIndicatorItem,
  RootIndicatorItemDot,
  RootComponent,
};
