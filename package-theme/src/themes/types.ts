import { themeColors } from './default/themeColors';
import { themeStyles } from './default/themeStyles';

export interface Theme {
  colors: typeof themeColors;
  styles: typeof themeStyles;
}
