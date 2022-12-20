import React from 'react';
import { SvgProps } from '../types';

export function Refresh(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M21.25 13.174H30v-10.5M29.559 12.507a14 14 0 10-2.618 12.232"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
