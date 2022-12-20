import React from 'react';
import { SvgProps } from '../types';

export function SafeBTC(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M16 15a2 2 0 110 4 2 2 0 010-4M8 28v1.692M23 28v1.692M7 14h2M7 19h2"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M27 17v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h9.5"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M23 17v5a2 2 0 01-2 2H10a2 2 0 01-2-2V12a2 2 0 012-2h5.5M22.951 12.33a2.213 2.213 0 000-4.428 2.213 2.213 0 000-4.426H20v8.853h2.951zM22.213 3.476V2M22.213 13.805v-1.476"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
