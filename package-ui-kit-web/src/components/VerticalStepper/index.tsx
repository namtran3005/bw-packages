import React from 'react';
import { VerticalStepper as VerticalStepperComponent } from './VerticalStepper';
import { VerticalStepperStep as VerticalStepperStepComponent } from './VerticalStepperStep';
import { VerticalStepperSubstep as VerticalStepperSubstebComponent } from './VerticalStepperSubstep';
import {
  VerticalStepperProps,
  VerticalStepperStepProps,
  VerticalStepperSubstepProps,
} from './types';

function VerticalStepper({
  children,
}: VerticalStepperProps): React.ReactElement {
  return <VerticalStepperComponent>{children}</VerticalStepperComponent>;
}

function VerticalStepperStep(
  props: VerticalStepperStepProps
): React.ReactElement {
  return <VerticalStepperStepComponent {...props} />;
}

function VerticalStepperSubstep(
  props: VerticalStepperSubstepProps
): React.ReactElement {
  return <VerticalStepperSubstebComponent {...props} />;
}

VerticalStepper.prototype.Step = VerticalStepperStep;
VerticalStepper.Step = VerticalStepper.prototype.Step;
VerticalStepper.prototype.Substep = VerticalStepperSubstep;
VerticalStepper.Substep = VerticalStepper.prototype.Substep;

export {
  VerticalStepper,
  VerticalStepperProps,
  VerticalStepperStep,
  VerticalStepperStepProps,
  VerticalStepperSubstep,
  VerticalStepperSubstepProps,
};
