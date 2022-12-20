import React from 'react';
import { SvgProps } from '../types';

export function TouchId(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M6 18.5v9M20.976 6.394A9.98 9.98 0 0015.876 5c-5.02 0-9.195 3.703-9.796 8.45M26 27.5V14.625a9.345 9.345 0 00-1.086-4.375M22.667 20v-4.5c0-3.713-3-6.75-6.667-6.75s-6.667 3.037-6.667 6.75v12m13.334 0V23m-10-1.5v6m6.666 0V16.25c0-2.063-1.5-3.75-3.333-3.75-1.833 0-3.333 1.687-3.333 3.75v2.25m3.333 6v3m0-12v6"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
