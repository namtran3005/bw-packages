import React from 'react';
import { SvgProps } from '../types';

export function ArrowRight(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M30 15.667H2m28 0l-4.667 4.666M30 15.667L25.333 11"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
