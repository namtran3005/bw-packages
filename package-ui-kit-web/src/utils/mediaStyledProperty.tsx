/*
 * Util just for packages/ui-kit-website internal use
 */

import { Media } from '@bitwala-cryptobank-squad/package-theme';

/* eslint-disable @typescript-eslint/no-explicit-any */

interface MediaStyledPropertyMediaTypes<T> {
  smallPhone?: T;
  phone?: T;
  tablet?: T;
  desktop?: T;
  largeDesktop?: T;
  giantDesktop?: T;

  smallPhoneUp?: T;
  phoneUp?: T;
  tabletUp?: T;
  desktopUp?: T;
  largeDesktopUp?: T;
  giantDesktopUp?: T;

  phoneDown?: T;
  tabletDown?: T;
  desktopDown?: T;
  largeDesktopDown?: T;
  giantDesktopDown?: T;
}

const mediaHashMap: { [key: string]: string } = {
  smallPhone: Media.between(Media.smallPhone, Media.phone),
  phone: Media.between(Media.phone, Media.tablet),
  tablet: Media.between(Media.tablet, Media.desktop),
  desktop: Media.between(Media.desktop, Media.largeDesktop),
  largeDesktop: Media.between(Media.largeDesktop, Media.giantDesktop),
  giantDesktop: Media.up(Media.giantDesktop),

  smallPhoneUp: Media.up(Media.smallPhone),
  phoneUp: Media.up(Media.phone),
  tabletUp: Media.up(Media.tablet),
  desktopUp: Media.up(Media.desktop),
  largeDesktopUp: Media.up(Media.largeDesktop),
  giantDesktopUp: Media.up(Media.giantDesktop),

  phoneDown: Media.down(Media.phone),
  tabletDown: Media.down(Media.tablet),
  desktopDown: Media.down(Media.desktop),
  largeDesktopDown: Media.down(Media.largeDesktop),
  giantDesktopDown: Media.down(Media.giantDesktop),
};

export type SimpleValue = string | number;
export type MediaStyledProperty<T> = T | MediaStyledPropertyMediaTypes<T>;
export interface MediaStyledPropertyPreset<T> {
  value: MediaStyledPropertiesInput<T>;
  transform: MediaStyledPropertyTransform;
}

export interface MediaStyledPropertiesInput<T> {
  [key: string]: MediaStyledProperty<T> | MediaStyledPropertyPreset<T>;
}

export type MediaStyledPropertyTransform = (value: SimpleValue) => SimpleValue;

/* utility functions */
const getValue = (
  propertyPreset: MediaStyledPropertyPreset<any>
): MediaStyledPropertiesInput<any> | SimpleValue => {
  if (
    typeof propertyPreset !== 'undefined' &&
    typeof propertyPreset.value !== 'undefined'
  ) {
    return propertyPreset.value;
  }
  return propertyPreset;
};
function getTransform<T = any>(
  propertyPreset: MediaStyledPropertyPreset<T>
): MediaStyledPropertyTransform {
  if (
    typeof propertyPreset !== 'undefined' &&
    typeof propertyPreset.transform !== 'undefined'
  ) {
    return propertyPreset.transform;
  }
  return (value => value) as MediaStyledPropertyTransform;
}
// function gerPropertyPreset<T = any>() {}

function isSimpleValue<T = any>(
  value: MediaStyledPropertiesInput<T> | SimpleValue
): boolean {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined'
  );
}

/* mediaStyledProperties */

export const mediaStyledProperties = (
  properties: MediaStyledPropertiesInput<any>
) => {
  const propertyNames = Object.keys(properties);

  const styledString = propertyNames
    .map(propertyName => {
      const inputValue = properties[propertyName];
      const value = getValue(inputValue);
      const transform = getTransform(inputValue);

      if (isSimpleValue(value)) {
        const propertyValue = transform(value as SimpleValue);
        if (typeof propertyValue !== 'undefined') {
          return `${propertyName}: ${propertyValue};`;
        } else {
          return '';
        }
      }

      return Object.keys(value)
        .map(deviceSize => {
          const deviceSizeValue = (value as MediaStyledPropertiesInput<any>)[
            deviceSize
          ];

          if (typeof deviceSizeValue === 'undefined') {
            return '';
          }

          if (isSimpleValue(deviceSizeValue)) {
            return `${mediaHashMap[deviceSize]} {
              ${propertyName}: ${transform(deviceSizeValue)};
            }`;
          }

          return '';
        })
        .join('');
    })
    .join('');

  return styledString;
};
