import React from 'react';
import { SvgProps } from '../types';

export function Email(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M20.26 13.66l4.407 4.073M11.739 13.66l-4.406 4.073m21.24-9.806l-10.993 7.58a2.78 2.78 0 01-3.16 0L3.428 7.928M3 7.333h26v17.334H3V7.333z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
