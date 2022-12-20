export interface WithSizesProps {
  isLandscape?: boolean;

  isSmallPhone?: boolean;
  isPhone?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
  isLargeDesktop?: boolean;
  isGiantDesktop?: boolean;

  isSmallPhoneUp?: boolean;
  isPhoneUp?: boolean;
  isTabletUp?: boolean;
  isDesktopUp?: boolean;
  isLargeDesktopUp?: boolean;
  isGiantDesktopUp?: boolean;

  isSmallPhoneDown?: boolean;
  isPhoneDown?: boolean;
  isTabletDown?: boolean;
  isDesktopDown?: boolean;
  isLargeDesktopDown?: boolean;
  isGiantDesktopDown?: boolean;
}

export interface WithSizesPropsAny {
  [key: string]: boolean | undefined;
}

export interface WithSizesConfigSizes {
  width: number;
  height: number;
  canUseDOM: boolean;
}

export type WithSizesConfigCallback<T> = (
  withSizesConfig: WithSizesConfigSizes
) => T;
