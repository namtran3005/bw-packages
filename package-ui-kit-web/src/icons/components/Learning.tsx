import React from 'react';
import { SvgProps } from '../types';

export function Learning(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M16 29.001c-.61-1.921-4.556-4.16-11.374-4.467A1.734 1.734 0 013 22.792V7.364A1.733 1.733 0 014.857 5.63c4.466.231 7.636 1.3 9.426 2.548m1.718 20.823c.61-1.921 4.556-4.16 11.374-4.467a1.734 1.734 0 001.626-1.742v-10.26m-13 16.47V14.266m-3.072-1.997a28.235 28.235 0 00-6.441-1.502m6.441 5.911a28.906 28.906 0 00-6.441-1.502m6.441 6.175a29.182 29.182 0 00-6.5-1.502M22.068 3v1.733m-5.56 1.121l1.226 1.227m9.893-1.227l-1.226 1.227m-4.333 9.786v1.734m3.466-6.934a3.467 3.467 0 10-5.2 2.986v2.214h3.467v-2.214a3.45 3.45 0 001.733-2.986z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
