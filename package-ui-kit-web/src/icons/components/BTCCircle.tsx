import React from 'react';
import { SvgProps } from '../types';

export function BTCCircle(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M16.963 16.06a3.523 3.523 0 110 7.045h-4.696V9.015h4.696a3.523 3.523 0 110 7.045zm0 0h-4.696m3.522-7.045V6.667m0 18.787v-2.349M2 16a14 14 0 1028 0 14 14 0 00-28 0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
