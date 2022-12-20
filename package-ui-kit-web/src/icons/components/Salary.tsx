import React from 'react';
import { SvgProps } from '../types';

export function Salary(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M24.5 19a.5.5 0 110 1 .5.5 0 010-1z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M29 24.667v2a4 4 0 01-4 4H5a4 4 0 01-4-4v-14a4 4 0 014-4m24 16a2 2 0 002-2v-6a2 2 0 00-2-2m0 10h-5a5 5 0 110-10h5m-24-6h20m-20 0L19.21 1.56a2 2 0 012.685.895L25 8.666m0 0a4 4 0 014 4v2"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
