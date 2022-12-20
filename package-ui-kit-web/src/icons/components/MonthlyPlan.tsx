import React from 'react';
import { SvgProps } from '../types';

export function MonthlyPlan(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M24.943 8A12 12 0 004 16v1m0 0l3-3m-3 3l-3-3m6.057 10A12 12 0 0028 16v-1m0 0l-3 3m3-3l3 3m-18-2h4.25M16 10V8m0 16v-2m1 0a3 3 0 000-6 3 3 0 000-6h-4v12h4z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
