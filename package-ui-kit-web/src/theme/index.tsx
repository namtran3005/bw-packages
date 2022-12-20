import React from 'react';

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeName, ThemeInterfaceType } from '@bitwala-cryptobank-squad/package-theme';

import { defaultTheme } from './DefaultTheme';

export interface WebAppThemeProviderProps {
  /**
   * Override for system-selected theme
   */
  theme?: ThemeInterfaceType;
  children: React.ReactNode | React.ReactNodeArray;
}

export const WebAppThemeProvider = React.memo(
  ({ theme, children }: WebAppThemeProviderProps) => (
    <StyledComponentsThemeProvider theme={theme || defaultTheme}>
      {children}
    </StyledComponentsThemeProvider>
  )
);

export * from './helpers/useTheme';
export { ThemeName };
