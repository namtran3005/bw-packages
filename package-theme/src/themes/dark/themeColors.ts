import { colorTokens as tokens } from '../../colors/colorTokens';
import { themeColors as defaultColors } from '../default/themeColors';

/**
 * @experimental Dark theme is only a proof of concept, and is not intended to be used in production.
 */
export const themeColors: typeof defaultColors = {
  ...defaultColors,
  bg: {
    ...defaultColors.bg,
    default: tokens.tertiary.black.pure,
    alt: tokens.tertiary.black.pure,
    altInverse: tokens.tertiary.black.pure,
  },
  text: {
    ...defaultColors.text,
    default: tokens.tertiary.white.pure,
    light: tokens.primary.black[100],
    subline: tokens.tertiary.grey.light,
  },
};
