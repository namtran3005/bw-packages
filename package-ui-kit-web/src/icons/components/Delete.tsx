import React from 'react';
import { SvgProps } from '../types';

export function Delete(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M13 22v-8m6 8v-8M3 8h26m-6 20H9a2 2 0 01-2-2V8h18v18a2 2 0 01-2 2zM19 4h-6a2 2 0 00-2 2v2h10V6a2 2 0 00-2-2z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
