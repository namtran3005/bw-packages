import React from 'react';
import { SvgProps } from '../types';

export function Alert(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M13.778 26.334a2.319 2.319 0 004.45 0M16 5.5V3m0 2.5a8.334 8.334 0 018.334 8.334c0 7.829 1.667 9.167 1.667 9.167H6s1.667-2.13 1.667-9.167A8.334 8.334 0 0116 5.5z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
