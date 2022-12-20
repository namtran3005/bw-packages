import * as React from 'react';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';

import { TextFieldProps } from '../TextField';
// eslint-disable-next-line import/no-named-as-default
import { shadows } from '../Paper';

interface RootProps {
  background?: ColorsType;
  foreground?: ColorsType;
  displayFormat?: string;
  suggestedDate?: string | number | object | Date;
  pickerVariant?: 'normal' | 'inline';
  onlyCalendar?: boolean;
}

interface DatePickerThemeProviderProps {
  children: React.ReactNode;
}

interface TextFieldDirtyProps extends TextFieldProps {
  InputProps?: {
    [arbitrary: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  fullWidth?: boolean;
}

const defaultBackground = 'primaryLilac';
const defaultForeground = 'primaryBlack';

const RootComponent: React.FunctionComponent<
  RootProps & DatePickerThemeProviderProps
> = ({ background, foreground, children }) => {
  const backgroundColor = Colors.get(background || defaultBackground);
  const color = Colors.get(foreground || defaultForeground);
  const colorAccent = backgroundColor;
  const colorSelected = Colors.get('white');

  const materialTheme = createMuiTheme({
    overrides: {
      MuiPaper: {
        rounded: {
          borderRadius: 0,
        },
        elevation8: {
          boxShadow: shadows[24],
        },
      },
      MuiButton: {
        root: {
          borderRadius: 0,
        },
        label: {
          fontWeight: 'bold',
          fontFamily: 'Lato',
          fontSize: '1rem',
        },
      },
      MuiPickersModal: {
        dialogAction: {
          color: backgroundColor,
        },
      },
      MuiIconButton: {},
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: Colors.get('primaryLilac'),
        },
      },
      MuiPickersDay: {
        day: {
          color: Colors.get('text'),
        },
        daySelected: {
          backgroundColor: Colors.get('primaryLilac'),
          '&:hover': {
            backgroundColor: Colors.get('primaryLilac'),
          },
        },
        current: {
          color: Colors.get('primaryLilac'),
        },
      },
      MuiPickersYear: {
        root: {
          color,
          '&:focus': {
            color: colorAccent,
          },
          '&$selected': {
            color: `${colorSelected} !important`,
            backgroundColor: `${backgroundColor} !important`,
          },
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: Colors.getWithAlpha('primaryBlack', 0.9),
        },
      },
    } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  });

  // eslint-disable-next-line react/no-children-prop
  return <MuiThemeProvider theme={materialTheme} children={children} />;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Root = styled<RootProps & DatePickerThemeProviderProps & any>(
  RootComponent
)``;

Root.displayName = 'DatePickerThemeProvider';
RootComponent.displayName = 'DatePickerThemeProviderComponent';

export {
  Root,
  RootProps,
  RootComponent,
  DatePickerThemeProviderProps,
  TextFieldDirtyProps,
};
