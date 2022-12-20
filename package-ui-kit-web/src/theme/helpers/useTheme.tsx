import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ThemeInterfaceType } from '@bitwala-cryptobank-squad/package-theme';

import { defaultTheme } from '../DefaultTheme';

export const useTheme = () => {
  const context = useContext<ThemeInterfaceType>(ThemeContext);

  if (context) {
    return context;
  }

  return defaultTheme;
};
