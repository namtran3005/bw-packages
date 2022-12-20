import React from 'react';
import styled from 'styled-components';
import { VerticalStepperSubstepLabel } from './styles';
import { VerticalStepperSubstepProps } from './types';

export const subStepCursor = (status: string) => {
  return status === 'done' ? 'pointer' : 'default';
};

const VerticalStepperSubstepStyled = styled('div')<{
  onClick?: VerticalStepperSubstepProps['onClick'];
  status: VerticalStepperSubstepProps['status'];
}>`
  cursor: ${({ status }) => subStepCursor(status)};
  padding-right: 28px;
  display: block;
  float: right;
  clear: both;
  position: relative;
`;

const VerticalStepperSubstep: React.FC<VerticalStepperSubstepProps> = ({
  label,
  onClick,
  status,
}) => {
  return (
    <VerticalStepperSubstepStyled onClick={onClick} status={status}>
      <VerticalStepperSubstepLabel label={label} status={status} />
    </VerticalStepperSubstepStyled>
  );
};

export { VerticalStepperSubstep, VerticalStepperSubstepProps };
