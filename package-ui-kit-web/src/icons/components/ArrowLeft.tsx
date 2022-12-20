import React from 'react';
import { SvgProps } from '../types';

export function ArrowLeft(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M2 15.333h28M6.667 10.667L2 15.333 6.667 20"
        vectorEffect="non-scaling-stroke"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
