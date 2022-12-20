import React from 'react';
import { SvgProps } from '../types';

export function ChevronUp(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M30 22.614L16.66 9.274a.932.932 0 00-1.32 0L2 22.614"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
