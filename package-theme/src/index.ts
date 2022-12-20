import {
  ColorsType as ColorsValuesType,
  RedesignColorBase as RedesignColorBaseType,
} from './colors.deprecated';
import { ThemeInterface } from './theme';

export { Colors, Alphas, colors, ColorsRedesign } from './colors.deprecated';
export { Media } from './media';
export { Spacing } from './spacing';
export * from './transactions';
export { Transitions } from './transitions';
export { ThemeName } from './themeName';
export type ColorsType = ColorsValuesType;
export type RedesignColorType = RedesignColorBaseType;
export type ThemeInterfaceType = ThemeInterface;

export { defaultTheme } from './themes/default';
export { darkTheme } from './themes/dark';
export type { Theme } from './themes/types';
