export interface Color {
  hex: string;
  rgb: [number, number, number];
}

export interface ColorsBase extends RedesignColorBase {
  // Old colors
  extraDarkBlue: Color;
  darkBlue: Color;
  primaryBlue: Color;
  primaryAccent: Color;
  secondaryAccent: Color;
  successGreen: Color;
  alertOrange: Color;
  warningRed: Color;
  whitestWhite: Color;
  lightGrey: Color;
  background: Color;
  middleGrey: Color;
  darkGrey: Color;
  darkerText: Color;
  horizonBlue: Color;
  negativeYellow: Color;
  airForceBlue: Color;
  rockBlue: Color;
  middleToDarkGrey: Color;
  iconBlueColor: Color;
  middleToDarkBlue: Color;
  softBlue: Color;
  lightYellow: Color;
}

export interface RedesignColorBase {
  primaryBlack: Color;
  primaryDark: Color;
  primaryGreen: Color;
  primarySuccess: Color;
  secondaryGreen: Color;
  primaryLilac: Color;
  textLilac: Color;
  primaryOrange: Color;
  primaryGrey: Color;
  secondaryWildRose: Color;
  secondaryBlue50: Color;
  signalRed: Color;
  backgroundLight: Color;
  backgroundDark: Color;
  info: Color;
  success: Color;
  warning: Color;
  error: Color;
  text: Color;
  subtitleText: Color;
  textLink: Color;
  black: Color;
  white: Color;
  unvisitedGrey: Color;
  unvisitedLightGrey: Color;
}

export const Alphas = {
  backgroundImage: 0.75,
};

export const colorsBaseRedesign: RedesignColorBase = {
  primaryBlack: { hex: '#2C232E', rgb: [44, 35, 46] },
  primaryDark: { hex: '#646464', rgb: [100, 100, 100] },
  primaryGreen: { hex: '#6E9E96', rgb: [110, 158, 150] },
  secondaryGreen: { hex: '#B6CECA', rgb: [182, 206, 202] },
  primarySuccess: { hex: '#1CC18C', rgb: [28, 193, 140] },
  primaryLilac: { hex: '#BEAAFF', rgb: [190, 170, 255] },
  textLilac: { hex: '#7753C6', rgb: [119, 83, 198] },
  primaryOrange: { hex: '#FF8C5A', rgb: [255, 140, 90] },
  primaryGrey: { hex: '#D4D2D2', rgb: [212, 210, 210] },
  secondaryWildRose: { hex: '#F7B2CC', rgb: [247, 178, 204] },
  secondaryBlue50: { hex: '#809BFF', rgb: [128, 155, 255] },
  signalRed: { hex: '#FF7159', rgb: [255, 113, 89] },
  backgroundLight: { hex: '#F0F0F0', rgb: [240, 240, 240] },
  backgroundDark: { hex: '#2C232E', rgb: [44, 35, 46] },
  info: { hex: '#0038FF', rgb: [0, 56, 255] },
  success: { hex: '#1CC18C', rgb: [28, 193, 140] },
  warning: { hex: '#FFB464', rgb: [255, 180, 100] },
  error: { hex: '#FF2500', rgb: [255, 37, 0] },
  text: { hex: '#2C232E', rgb: [44, 35, 46] },
  subtitleText: { hex: '#6D6D86', rgb: [109, 109, 134] },
  textLink: { hex: '#0038FF', rgb: [0, 56, 255] },
  black: { hex: '#000000', rgb: [0, 0, 0] },
  white: { hex: '#FFFFFF', rgb: [255, 255, 255] },
  unvisitedGrey: { hex: '#959196', rgb: [149, 145, 150] },
  unvisitedLightGrey: { hex: '#CAC8CB', rgb: [202, 200, 203] },
};

export const colorsBase: ColorsBase = {
  // Old colors
  extraDarkBlue: { hex: '#07162F', rgb: [7, 22, 47] },
  darkBlue: { hex: '#112952', rgb: [17, 41, 82] },
  primaryBlue: { hex: '#1D4477', rgb: [29, 68, 119] },
  primaryAccent: { hex: '#00ADEE', rgb: [0, 173, 238] },
  secondaryAccent: { hex: '#5985d7', rgb: [89, 133, 215] },
  successGreen: { hex: '#1ABC9C', rgb: [26, 188, 156] },
  alertOrange: { hex: '#FF8039', rgb: [255, 128, 57] },
  warningRed: { hex: '#EE4555', rgb: [238, 69, 85] },
  whitestWhite: { hex: '#FFFFFF', rgb: [255, 255, 255] },
  lightGrey: { hex: '#EFF1F4', rgb: [239, 241, 244] },
  background: { hex: '#FCFCFC', rgb: [255, 255, 255] },
  middleGrey: { hex: '#ABADB7', rgb: [171, 173, 183] },
  darkGrey: { hex: '#65666C', rgb: [101, 102, 108] },
  darkerText: { hex: '#2D2E32', rgb: [45, 46, 50] },
  horizonBlue: { hex: '#577da2', rgb: [87, 125, 162] },
  negativeYellow: { hex: '#fdce96', rgb: [253, 206, 150] },
  airForceBlue: { hex: '#607C9F', rgb: [96, 124, 159] },
  rockBlue: { hex: '#8EA1BB', rgb: [142, 161, 187] },
  middleToDarkGrey: { hex: '#AFAFAF', rgb: [175, 175, 175] },
  iconBlueColor: { hex: '#365792', rgb: [54, 87, 146] },
  middleToDarkBlue: { hex: '#5A85D7', rgb: [90, 133, 215] },
  softBlue: { hex: '#617C9F', rgb: [97, 124, 159] },
  lightYellow: { hex: '#FFF9CC', rgb: [255, 249, 204] },

  // New colors
  ...colorsBaseRedesign,
};

export interface ColorsCurrencies {
  btc: Color;
  eur: Color;
  eth: Color;
  currenciesDefault: Color;
}

export const colorsCurrencies: ColorsCurrencies = {
  btc: { hex: '#FE8136', rgb: [254, 129, 54] },
  eur: { hex: '#5782D3', rgb: [87, 130, 211] },
  eth: { hex: '#ABADB7', rgb: [171, 173, 184] },
  currenciesDefault: { hex: '#5782D3', rgb: [87, 130, 211] },
};

export const colors: ColorMap = {
  ...colorsBase,
  ...colorsCurrencies,
};

export const colorsRedesign: ColorMap = {
  ...colorsBaseRedesign,
  ...colorsCurrencies,
};

export type ColorsBaseType = keyof ColorsBase;
export type RedesignColorsBaseType = keyof RedesignColorBase;
export type ColorsCurrenciesType = keyof ColorsCurrencies;
export type ColorsType = ColorsBaseType | ColorsCurrenciesType;
export type RedesignColorsType = RedesignColorsBaseType | ColorsCurrenciesType;

interface ColorMap {
  [key: string]: Color;
}

export interface ColorGetterFunctions {
  get: (colorName: ColorsType) => string;
  getHEX: (colorName: ColorsType) => string;
  getRGB: (colorName: ColorsType) => string;
  getRGBA: (colorName: ColorsType, alpha: number) => string;
  getWithAlpha: (colorName: ColorsType, alpha: number) => string;
  getCurrencyType: (currency: string) => ColorsType;
  getCurrency: (currency: string) => string;
  getCurrencyHEX: (currency: string) => string;
  getCurrencyRGB: (currency: string) => string;
  getCurrencyWithAlpha: (currency: string, alpha: number) => string;
}

export interface RedesignColorGetterFunctions {
  get: (colorName: RedesignColorsType) => string;
  getHEX: (colorName: RedesignColorsType) => string;
  getRGB: (colorName: RedesignColorsType) => string;
  getRGBA: (colorName: RedesignColorsType, alpha: number) => string;
  getWithAlpha: (colorName: RedesignColorsType, alpha: number) => string;
  getCurrencyType: (currency: string) => RedesignColorsType;
  getCurrency: (currency: string) => string;
  getCurrencyHEX: (currency: string) => string;
  getCurrencyRGB: (currency: string) => string;
  getCurrencyWithAlpha: (currency: string, alpha: number) => string;
}

const getColorGetterFunctions = (colors: ColorMap): ColorGetterFunctions => {
  return {
    get(colorName: ColorsType): string {
      return getColorGetterFunctions(colors).getHEX(colorName);
    },
    getHEX(colorName: ColorsType): string {
      return colors[colorName].hex;
    },
    getRGB(colorName: ColorsType): string {
      const colorString = colors[colorName].rgb.join(', ');
      return `rgb(${colorString})`;
    },
    getRGBA(colorName: ColorsType, alpha: number): string {
      const colorString = [...colors[colorName].rgb, alpha].join(', ');
      return `rgba(${colorString})`;
    },
    getWithAlpha(colorName: ColorsType, alpha: number): string {
      const colorWithAlpha = [...colors[colorName].rgb, alpha];
      const colorString = colorWithAlpha.join(', ');
      return `rgba(${colorString})`;
    },
    getCurrencyType(currency: string): ColorsType {
      const currencyLowerCase = currency.toLowerCase();
      if (colorsCurrencies[currencyLowerCase as ColorsCurrenciesType]) {
        return currencyLowerCase as ColorsType;
      }
      return 'currenciesDefault';
    },
    getCurrency(currency: string): string {
      return getColorGetterFunctions(colors).getCurrencyHEX(currency);
    },
    getCurrencyHEX(currency: string) {
      return getColorGetterFunctions(colors).getHEX(
        getColorGetterFunctions(colors).getCurrencyType(currency)
      );
    },
    getCurrencyRGB(currency: string) {
      return getColorGetterFunctions(colors).getRGB(
        getColorGetterFunctions(colors).getCurrencyType(currency)
      );
    },
    getCurrencyWithAlpha(currency: string, alpha: number) {
      return getColorGetterFunctions(colors).getWithAlpha(
        getColorGetterFunctions(colors).getCurrencyType(currency),
        alpha
      );
    },
  };
};

const getRedesignColorGetterFunctions = (
  colors: ColorMap
): ColorGetterFunctions => {
  return {
    get(colorName: ColorsType): string {
      return getRedesignColorGetterFunctions(colors).getHEX(colorName);
    },
    getHEX(colorName: ColorsType): string {
      return colors[colorName].hex;
    },
    getRGB(colorName: ColorsType): string {
      const colorString = colors[colorName].rgb.join(', ');
      return `rgb(${colorString})`;
    },
    getRGBA(colorName: ColorsType, alpha: number): string {
      const colorString = [...colors[colorName].rgb, alpha].join(', ');
      return `rgba(${colorString})`;
    },
    getWithAlpha(colorName: ColorsType, alpha: number): string {
      const colorWithAlpha = [...colors[colorName].rgb, alpha];
      const colorString = colorWithAlpha.join(', ');
      return `rgba(${colorString})`;
    },
    getCurrencyType(currency: string): ColorsType {
      const currencyLowerCase = currency.toLowerCase();
      if (colorsCurrencies[currencyLowerCase as ColorsCurrenciesType]) {
        return currencyLowerCase as ColorsType;
      }
      return 'currenciesDefault';
    },
    getCurrency(currency: string): string {
      return getRedesignColorGetterFunctions(colors).getCurrencyHEX(currency);
    },
    getCurrencyHEX(currency: string) {
      return getRedesignColorGetterFunctions(colors).getHEX(
        getRedesignColorGetterFunctions(colors).getCurrencyType(currency)
      );
    },
    getCurrencyRGB(currency: string) {
      return getRedesignColorGetterFunctions(colors).getRGB(
        getRedesignColorGetterFunctions(colors).getCurrencyType(currency)
      );
    },
    getCurrencyWithAlpha(currency: string, alpha: number) {
      return getRedesignColorGetterFunctions(colors).getWithAlpha(
        getRedesignColorGetterFunctions(colors).getCurrencyType(currency),
        alpha
      );
    },
  };
};

/**
 * @deprecated If possible, please use `colors` from theme instead:
 * ```
 * const { colors } = useTheme()
 * ```
 * Until the method above gets more stable, feel free to keep using `Colors`
 */
const Colors = getColorGetterFunctions(colors);

/**
 * @deprecated If possible, please use `colors` from theme instead:
 * ```
 * const { colors } = useTheme()
 * ```
 * Until the method above gets more stable, feel free to keep using `Colors`
 */
const ColorsRedesign = getRedesignColorGetterFunctions(colorsRedesign);

export { Colors, ColorsRedesign };
