import React from 'react';
import { SvgProps } from '../types';

export function ChevronRight(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M9.386 30l13.34-13.34a.932.932 0 000-1.32L9.387 2"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
