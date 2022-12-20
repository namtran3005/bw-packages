import React from 'react';
import styled from 'styled-components';
import { VerticalStepperProps } from './types';

const VerticalStepperStyled: React.FC<{}> = styled('div')`
  position: relative;
  display: block;
  height: 100%;
`;

const VerticalStepper: React.FC<VerticalStepperProps> = ({ children }) => (
  <VerticalStepperStyled>{children}</VerticalStepperStyled>
);

export { VerticalStepper };
