export const media = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const mediaDevices = {
  smallPhone: 320,
  phone: 480,
  tablet: 700,
  desktop: 1023,
  largeDesktop: 1200,
  giantDesktop: 1800,
};

export const allMedia = {
  ...media,
  ...mediaDevices,
};

export type MediaType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'smallPhone'
  | 'phone'
  | 'tablet'
  | 'desktop'
  | 'largeDesktop'
  | 'giantDesktop';

export const Media = {
  down(size: MediaType | number) {
    return `@media (max-width: ${
      typeof size === 'number' ? size : allMedia[size]
    }px)`;
  },
  up(size: MediaType | number) {
    return `@media (min-width: ${
      typeof size === 'number' ? size : allMedia[size]
    }px)`;
  },
  between(start: MediaType | number, end: MediaType | number) {
    return `@media (min-width: ${
      typeof start === 'number' ? start : allMedia[start]
    }px) and (max-width: ${typeof end === 'number' ? end : allMedia[end]}px)`;
  },
  ...media,
  ...mediaDevices,
};
