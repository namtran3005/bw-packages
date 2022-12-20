import React from 'react';
import { SvgProps } from '../types';

export function MessagesBubble(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M16.867 3A12.117 12.117 0 006.563 21.519L3 29.002l7.482-3.563A12.134 12.134 0 1016.867 3z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
