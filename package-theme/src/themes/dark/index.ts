import { defaultTheme } from '../default';
import { Theme } from '../types';
import { themeColors } from './themeColors';
import { themeStyles } from './themeStyles';

/**
 * @experimental Dark theme is only a proof of concept, and is not intended to be used in production.
 */
export const darkTheme: Theme = {
  ...defaultTheme,
  colors: themeColors,
  styles: themeStyles,
};
