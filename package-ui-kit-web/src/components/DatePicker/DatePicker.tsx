import React from 'react';

import {
  DatePicker as DatePickerMUI,
  DatePickerProps as DatePickerPropsMUI,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core';

import { TextField, TextFieldProps } from '../TextField';
import { Root, RootProps } from './DatePicker.styled';

type DatePickerProps = RootProps & DatePickerPropsMUI;

type DatePickerDate = MaterialUiPickersDate;

const renderTextField = (props: MuiTextFieldProps): JSX.Element => (
  <TextField {...(props as TextFieldProps)} />
);

const DatePicker: React.FunctionComponent<DatePickerProps> = (props) => {
  const { pickerVariant, background, onChange, ...restProps } = props;

  return (
    <Root background={background}>
      <DatePickerMUI
        {...restProps}
        TextFieldComponent={renderTextField}
        onChange={(date) => {
          onChange(date);
        }}
        {...(pickerVariant === 'inline' && { variant: pickerVariant })}
      />
    </Root>
  );
};

export { DatePicker, DatePickerProps, DatePickerDate };
