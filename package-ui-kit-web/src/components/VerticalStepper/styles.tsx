import React from 'react';
import styled, { css } from 'styled-components';
import {
  Colors,
  Spacing,
  Transitions,
} from '@bitwala-cryptobank-squad/package-theme';
import { Typography } from '../Typography';
import { VerticalStepperStepProps, VerticalStepperSubstepProps } from './types';

const indicatorSize = 26;

interface VerticalStepperStepIndicatorProps {
  status: VerticalStepperStepProps['status'];
}

const statusColor = {
  active: `${Colors.get('primaryLilac')} !important`,
  inactive: `${Colors.get('unvisitedLightGrey')} !important`,
  done: `${Colors.get('primaryLilac')} !important`,
};

const labelColor = {
  active: `${Colors.get('textLilac')} !important`,
  inactive: `${Colors.get('unvisitedGrey')} !important`,
  done: `${Colors.get('primaryBlack')} !important`,
};

export const VerticalStepperStepIndicatorStyled: React.FC<VerticalStepperStepIndicatorProps> = styled(
  'span'
)<VerticalStepperStepIndicatorProps>`
  position: absolute;
  width: ${indicatorSize}px;
  height: ${indicatorSize}px;
  right: -13px;
  display: inline-block;
  background-color: ${(props) => props.theme.palette.get('white')};
  box-sizing: border-box;
  border-radius: 50%;
  border-color: ${({ status }) => statusColor[status]};
  border-style: solid;
  border-width: ${({ status }) => (status === 'done' ? '2' : '1')}px;
  transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};

  &::before {
    content: '';
    z-index: ${({ status }) => (status === 'done' ? -1 : 0)};
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${({ status }) => statusColor[status]};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
  }
`;

export const VerticalStepperStepLabelStyled = styled(
  ({ label, status, ...props }) => (
    <Typography.Subtitle
      {...props}
      {...(status === 'done' && { foreground: 'subtitleText' })}
    >
      {label}
    </Typography.Subtitle>
  )
)<VerticalStepperStepProps>`
  cursor: default;
  float: right;
  padding-right: ${Spacing.base}px;
  padding-bottom: 16px;
  color: ${({ status }) => labelColor[status]};
`;

export const stepStyle = css`
  display: block;
  clear: both;
  overflow: hidden;
  position: relative;
  overflow: visible;

  & > div {
    transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
  }

  &&& > * {
    white-space: nowrap;
  }
`;

export const VerticalStepperSubstepLabel = styled(
  ({ label, status, ...props }) => (
    <Typography.SmallBody
      {...props}
      {...(status === 'done' && { foreground: 'subtitleText' })}
    >
      {label}
    </Typography.SmallBody>
  )
)<Omit<VerticalStepperSubstepProps, 'propTypes'>>`
  & {
    padding-bottom: 12px;
    color: ${({ status }) => labelColor[status]};
  }
`;
