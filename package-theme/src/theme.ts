import { ColorGetterFunctions } from './colors.deprecated';
import { ThemeName } from './themeName';

export interface ThemeInterface {
  theme: ThemeName;
  palette: ColorGetterFunctions;
}
