import React from 'react';
import { SvgProps } from '../types';

export function ChevronLeft(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M22.614 2L9.274 15.34a.932.932 0 000 1.32L22.613 30"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
