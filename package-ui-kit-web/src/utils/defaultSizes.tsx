import { Media } from '@bitwala-cryptobank-squad/package-theme';
import {
  WithSizesConfigCallback,
  WithSizesPropsAny,
  WithSizesConfigSizes,
} from '../types/sizes';

export const defaultSizes: WithSizesConfigCallback<WithSizesPropsAny> = ({
  width,
  height,
}: WithSizesConfigSizes): WithSizesPropsAny => ({
  isLandscape: width > height,

  isSmallPhone: width <= Media.phone,
  isPhone: width > Media.phone && width <= Media.tablet,
  isTablet: width > Media.tablet && width <= Media.desktop,
  isDesktop: width > Media.desktop && width <= Media.phone,
  isLargeDesktop: width > Media.largeDesktop && width <= Media.phone,
  isGiantDesktop: width > Media.giantDesktop && width <= Media.phone,

  isSmallPhoneUp: width > Media.smallPhone,
  isPhoneUp: width > Media.phone,
  isTabletUp: width > Media.tablet,
  isDesktopUp: width > Media.desktop,
  isLargeDesktopUp: width > Media.largeDesktop,
  isGiantDesktopUp: width > Media.giantDesktop,

  isSmallPhoneDown: width < Media.smallPhone,
  isPhoneDown: width < Media.phone,
  isTabletDown: width < Media.tablet,
  isDesktopDown: width < Media.desktop,
  isLargeDesktopDown: width < Media.largeDesktop,
  isGiantDesktopDown: width < Media.giantDesktop,
});
