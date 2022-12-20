import React from 'react';
import { SvgProps } from '../types';

export function SafeETH(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M22.269 3l3.269 5.178-3.27 2.013L19 8.178 22.269 3zM19 10.191l3.269 1.962 3.269-1.962-3.27 3.923L19 10.191z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinejoin="round"
      />
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
        d="M23 17v5a2 2 0 01-2 2H10a2 2 0 01-2-2V12a2 2 0 012-2h5.5"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
