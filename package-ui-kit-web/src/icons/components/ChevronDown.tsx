import React from 'react';
import { SvgProps } from '../types';

export function ChevronDown(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M2 9.386l13.34 13.34a.933.933 0 001.32 0L30 9.387"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
