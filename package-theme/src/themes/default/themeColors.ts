import { rgba } from 'polished';
import { colorTokens } from '../../colors/colorTokens';

const { primary, secondary, tertiary } = colorTokens;

/**
 * When updating this file, please always consult with:
 * https://www.figma.com/file/bs426HgznQQRTecCyrsR9W/Design-System---WIP-Color?node-id=347%3A2582
 */

export const themeColors = {
  bg: {
    /**
     * Default background color for the whole app.
     */
    default: tertiary.grey.light,
    /**
     * Second default background color for the app.
     */
    alt: tertiary.white.pure,
    /**
     * Alternative background color for dark portions of the app.
     */
    altInverse: tertiary.black.pure,
    /**
     * Color for UI elements related to errors. Accessible with white text.
     */
    error: secondary.red[100],
    /**
     * Color for UI elements that have to do with success. Accessible with white text.
     */
    success: secondary.green[100],
    /**
     * Color for UI elements related to warning. Accessible with dark text.
     */
    warning: secondary.yellow[100],

    onboardingLilac: primary.lilac[100],
    onboardingGreen: primary.green[100],
    onboardingOrange: primary.orange[100],

    /**
     * Promotional / Guidance
     */
    infoCardWhite: tertiary.white.pure,
    /**
     * Bonus / User gain
     */
    infoCardGreen: primary.green[100],
    /**
     * Alert / Warning
     */
    infoCardOrange: primary.orange[100],
  },

  text: {
    /**
     * Body text color
     */
    default: primary.black[100],
    light: tertiary.white.pure,
    subline: tertiary.grey.cold,

    link: secondary.blue[100],
    linkLilac: primary.lilac[100],
    error: secondary.red[100],
    success: secondary.green[100],

    onPrimaryLilac: primary.black[100],
  },

  icon: {
    default: primary.black[100],
    light: tertiary.white.pure,
    info: tertiary.grey.cold,
  },

  graphs: {
    /**
     * Graph color current crypto price
     */
    general: secondary.blue[100],
    /**
     * Graph color bitcoin wallet
     */
    bitcoin: primary.green[200],
    /**
     * Graph color bitcoin interest account
     */
    bia: primary.green[300],
    /**
     * Graph color
     */
    green: primary.green[400],
    /**
     * Graph color ethereum wallet
     */
    ethereum: primary.green[500],
  },

  button: {
    /**
     * Primary Button
     */
    primaryBackgroundDefault: primary.lilac[100],
    primaryTextDefault: primary.black[100],
    primaryIconDefault: primary.black[100],
    primaryBackgroundPressed: primary.lilac[50],
    primaryTextPressed: primary.black[100],
    primaryIconPressed: primary.black[100],
    primaryBackgroundHover: primary.lilac[75],
    primaryTextHover: primary.black[100],
    primaryIconHover: primary.black[100],
    primaryBackgroundDisable: rgba(primary.lilac[100], 0.3),
    primaryTextDisable: rgba(primary.black[100], 0.3),
    primaryIconDisable: rgba(primary.black[100], 0.3),

    /**
     * Secondary Button
     */
    secondaryBackgroundDefault: primary.black[100],
    secondaryTextDefault: tertiary.white.pure,
    secondaryIconDefault: tertiary.white.pure,
    secondaryBackgroundPressed: primary.black[50],
    secondaryTextPressed: tertiary.white.pure,
    secondaryIconPressed: tertiary.white.pure,
    secondaryBackgroundHover: primary.black[75],
    secondaryTextHover: tertiary.white.pure,
    secondaryIconHover: tertiary.white.pure,
    secondaryBackgroundDisable: rgba(primary.black[100], 0.3),
    secondaryTextDisable: rgba(tertiary.white.pure, 0.3),
    secondaryIconDisable: rgba(tertiary.white.pure, 0.3),

    /**
     * Outline Button
     */
    outlineBorderDefault: primary.black[100],
    outlineBackgroundDefault: rgba(primary.black[100], 0),
    outlineTextDefault: primary.black[100],
    outlineIconDefault: primary.black[100],
    outlineBorderPressed: primary.black[100],
    outlineBackgroundPressed: primary.black[25],
    outlineTextPressed: primary.black[100],
    outlineIconPressed: primary.black[100],
    outlineBorderHover: primary.black[75],
    outlineBackgroundHover: rgba(primary.black[100], 0),
    outlineTextHover: primary.black[75],
    outlineIconHover: primary.black[75],
    outlineBorderDisable: rgba(primary.black[100], 0.3),
    outlineBackgroundDisable: rgba(primary.black[100], 0),
    outlineTextDisable: rgba(primary.black[100], 0.3),
    outlineIconDisable: rgba(primary.black[100], 0.3),
  },

  chips: {
    defaultBackgroundDefault: primary.grey[75],
    defaultTextDefault: primary.black[100],
    defaultBackgroundPressed: primary.grey[25],
    defaultTextPressed: primary.black[100],
    defaultBackgroundHover: primary.grey[50],
    defaultTextHover: primary.black[100],
    defaultBackgroundDisable: rgba(primary.grey[75], 0.3),
    defaultTextDisable: rgba(primary.black[100], 0.3),

    /**
     * Selected Chip
     */
    selectedBackgroundDefault: primary.lilac[100],
    selectedTextDefault: primary.black[100],
    selectedIconDefault: primary.black[100],
    selectedBackgroundPressed: primary.lilac[50],
    selectedTextPressed: primary.black[100],
    selectedIconPressed: primary.black[100],
    selectedBackgroundHover: primary.lilac[75],
    selectedTextHover: primary.black[100],
    selectedIconHover: primary.black[100],
    selectedBackgroundDisable: rgba(primary.lilac[100], 0.3),
    selectedTextDisable: rgba(primary.black[100], 0.3),
    selectedIconDisable: rgba(primary.black[100], 0.3),
  },

  radio: {
    outlineSelected: primary.lilac[100],
    backgroundSelected: tertiary.white.pure,
    filledSelected: primary.lilac[100],
    outlineDisable: primary.grey[100],
    backgroundDisable: tertiary.white.pure,
  },

  checkbox: {
    outlineDefault: primary.lilac[100],
    backgroundDefault: tertiary.white.pure,
    outlineHover: rgba(primary.lilac[100], 0.25),
    filledSelected: primary.lilac[100],
    filledIcon: primary.black[100],
    outlineDisable: primary.grey[100],
    backgroundDisable: tertiary.white.pure,
  },

  switch: {
    default: primary.black[25],
    hover: primary.lilac[100],
    selected: primary.lilac[100],
    disable: primary.black[25],
    knobDisable: tertiary.grey.light,
  },
};
