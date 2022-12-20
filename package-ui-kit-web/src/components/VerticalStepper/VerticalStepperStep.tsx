import React from 'react';
import styled from 'styled-components';
import { Transitions } from '@bitwala-cryptobank-squad/package-theme';
import { TickIconFilled } from '../../icons/components';
import {
  stepStyle,
  VerticalStepperStepIndicatorStyled,
  VerticalStepperStepLabelStyled,
} from './styles';
import { VerticalStepperStepProps } from './types';

const TickIconStyled = styled(() => <TickIconFilled />)`
  content: '';
  position: absolute;
  width: 26px;
  height: 26px;
  left: -2px;
  top: -2px;
  transition: ${Transitions.duration.normal}ms ${Transitions.easing.swiftOut};
  > path {
    stroke: ${({ theme }) => theme.palette.get('primaryLilac')};
    stroke-width: 2;
  }
`;

const VerticalStepperStepStyled = styled('div')<{
  status: VerticalStepperStepProps['status'];
}>`
  ${stepStyle}
  & > div {
    max-height: ${({ status }) => (status === 'active' ? 22 : 0)}px;
    margin: ${({ status }) => (status === 'active' ? '10px 0' : 0)}px;
    overflow: hidden;
  }
`;

const VerticalStepperStep: React.FC<VerticalStepperStepProps> = ({
  label,
  status,
}) => (
  <VerticalStepperStepStyled status={status}>
    <VerticalStepperStepLabelStyled label={label} status={status} />
    <VerticalStepperStepIndicatorStyled status={status}>
      {status === 'done' && <TickIconStyled />}
    </VerticalStepperStepIndicatorStyled>
  </VerticalStepperStepStyled>
);

export { VerticalStepperStep };
