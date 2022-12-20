import React from 'react';
import { SvgProps } from '../types';

export function Lock(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M23 13v-3a7 7 0 00-14 0v3m-3 0h20v16H6V13z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M16 22.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={props.color}
        stroke={props.color}
      />
    </svg>
  );
}
