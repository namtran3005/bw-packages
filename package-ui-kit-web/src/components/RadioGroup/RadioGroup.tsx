import * as React from 'react';
import { RadioGroup as MuiRadioGroup } from '@material-ui/core';
import { RadioGroupProps as MuiRadioGroupProps } from '@material-ui/core/RadioGroup';

const RadioGroup: React.FunctionComponent<MuiRadioGroupProps> = (props) => (
  <MuiRadioGroup {...props} />
);

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup, MuiRadioGroupProps as RadioGroupProps };
