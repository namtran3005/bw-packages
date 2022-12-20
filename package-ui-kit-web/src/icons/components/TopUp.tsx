import React from 'react';
import { SvgProps } from '../types';

export function TopUp(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M6.5 15a.5.5 0 110 1 .5.5 0 010-1zM25.5 25a.5.5 0 110 1 .5.5 0 010-1z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M3 6h26M7 2h18M1 10h30v20H1V10zm11 10a4 4 0 108 0 4 4 0 00-8 0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
