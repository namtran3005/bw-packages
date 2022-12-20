import React from 'react';
import { SvgProps } from '../types';

export function FailedCircle(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M10 21.999l12-12m0 12l-12-12m-9 6a15 15 0 1030 0 15 15 0 00-30 0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
