import * as React from 'react';
import styled from 'styled-components';
import 'rheostat/initialize';
// eslint-disable-next-line import/named
import Rheostat, { Props as RheostatProps } from 'rheostat';
import {
  ColorsType,
  Colors,
  Spacing,
  Transitions,
} from '@bitwala-cryptobank-squad/package-theme';

import { shadows } from '../Paper';
import { Typography } from '../Typography';
import { TransitionCollapse } from '../TransitionCollapse';

interface SliderProps extends RootInputProps {
  hideLabels?: boolean;
}

interface RootProps {
  foreground?: ColorsType;
  minLabel?: string;
  maxLabel?: string;
}

type RootInputProps = RootProps & RheostatProps;

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  foreground,
  minLabel,
  maxLabel,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <label {...cleanProps} />;

const RootHandleSize = Spacing.unit * 4;
const RootHandleBorderSize = Math.floor(Spacing.unit / 1.33);
const RootHandleShadowSite = Spacing.unit;
const RootHandle = styled.button``;

const RootProgressBarHeight = Spacing.unit + Spacing.unit / 2;
const RootProgressBarVerticalMargin =
  (RootHandleSize - RootProgressBarHeight) / 2;
const RootProgressBarHorizontailMargin = RootProgressBarVerticalMargin;
const RootProgressBar = styled.div``;

const RootInputComponent: React.FunctionComponent<RootInputProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  foreground,
  minLabel,
  maxLabel,
  className,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <Rheostat {...cleanProps} />;

const RootInputWrapper = styled.div``;
const RootInput = styled(RootInputComponent)``;
const RootLabel = styled.div``;
const RootLabelMin = styled.span``;
const RootLabelMax = styled.span``;

const Root = styled(RootComponent)`
  ${RootInputWrapper} {
    position: relative;
    display: block;
    background: ${Colors.getWithAlpha('primaryBlack', 0.25)};
    height: 9px;
    border-radius: 10px;
    margin: ${RootProgressBarVerticalMargin}px
      ${RootProgressBarHorizontailMargin}px;
    &:hover,
    &:focus {
      ${RootHandle} {
        outline: none;
        box-shadow: 0 0 0 ${RootHandleShadowSite}px
          ${({ foreground }) =>
            Colors.getWithAlpha(
              foreground ? foreground : 'primaryLilac',
              0.25
            )};
      }
    }
  }

  ${RootHandle} {
    position: relative;
    width: 26px;
    height: 26px;
    background: ${Colors.get('primaryLilac')};
    border-radius: 50%;
    border: ${RootHandleBorderSize}px solid ${Colors.get('white')};
    margin-left: -${RootHandleSize / 2}px;
    margin-top: -9px;
    /* transition: box-shadow ${Transitions.duration.quick}ms
      ${Transitions.easing.swiftOut};
    box-shadow: ${shadows[8]}; */
    z-index: 1;
    padding: 0;
    &:focus {
      outline: none;
    }
  }

  ${RootProgressBar} {
    position: relative;
    height: 9px;
    width: 100%;
    background: ${({ foreground }) =>
      Colors.get(foreground ? foreground : 'primaryLilac')};
    border-radius: 10px;
  }

  ${RootLabel} {
    display: flex;
    justify-content: space-between;
    padding-left: ${RootProgressBarHorizontailMargin}px;
    padding-right: ${RootProgressBarHorizontailMargin}px;
  }
`;

const Slider: React.FunctionComponent<SliderProps> = ({
  hideLabels,
  ...props
}) => (
  <Root {...props}>
    <TransitionCollapse in={!hideLabels}>
      <RootLabel>
        <RootLabelMin>
          <Typography.SmallBody>
            {props.minLabel || props.min}
          </Typography.SmallBody>
        </RootLabelMin>
        <RootLabelMax>
          <Typography.SmallBody foreground="primaryBlack">
            {props.maxLabel || props.max}
          </Typography.SmallBody>
        </RootLabelMax>
      </RootLabel>
    </TransitionCollapse>
    <RootInputWrapper>
      <RootInput
        handle={RootHandle}
        progressBar={RootProgressBar}
        snap
        {...props}
      />
    </RootInputWrapper>
  </Root>
);

export { Slider, SliderProps };
