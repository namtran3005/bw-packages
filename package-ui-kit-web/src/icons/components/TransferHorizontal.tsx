import React from 'react';
import { SvgProps } from '../types';

export function TransferHorizontal(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M14 20h17m0 0l-4-4m4 4l-4 4m-9-12H1m0 0l4 4m-4-4l4-4"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
