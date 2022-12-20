import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import {
  VerticalStepper,
  VerticalStepperStep,
  VerticalStepperSubstep,
} from '../..';

describe('VerticalStepper', () => {
  it('should render Vertical Stepper - 1', () => {
    const { baseElement } = renderWithTestHarness(
      <VerticalStepper>
        <VerticalStepper.Step status="inactive">
          Account
          <VerticalStepper.Substep status="done">
            Password
          </VerticalStepper.Substep>
          <VerticalStepper.Substep status="active">2FA</VerticalStepper.Substep>
        </VerticalStepper.Step>
      </VerticalStepper>
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render Vertical Step', () => {
    const { baseElement } = renderWithTestHarness(
      <VerticalStepperStep status="inactive">
        Account
        <VerticalStepper.Substep status="done">
          Password
        </VerticalStepper.Substep>
        <VerticalStepper.Substep status="active">2FA</VerticalStepper.Substep>
      </VerticalStepperStep>
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render Vertical Stepper - 2', () => {
    const { baseElement } = renderWithTestHarness(
      <VerticalStepperSubstep status="done"></VerticalStepperSubstep>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
