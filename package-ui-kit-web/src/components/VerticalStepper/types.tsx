import React from 'react';
import { ColorsType } from '@bitwala-cryptobank-squad/package-theme';

interface VerticalStepperStepProps {
  status: 'inactive' | 'active' | 'done';
  label?: string;
  hasSubsteps?: boolean;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
  foreground?: ColorsType;
  children?: React.ReactNode | React.ReactNode[];
}
interface VerticalStepperSubstepProps {
  status: VerticalStepperStepProps['status'];
  label?: VerticalStepperStepProps['label'];
  onClick?: VerticalStepperStepProps['onClick'];
}
interface VerticalStepperProps {
  children?: React.ReactNode | React.ReactNode[];
  label?: string;
}

export {
  VerticalStepperProps,
  VerticalStepperStepProps,
  VerticalStepperSubstepProps,
};
