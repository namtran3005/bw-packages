import React from 'react';
import { SvgProps } from '../types';

export function Bank(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M2 31h28M30 11H2l12.919-7.683a2 2 0 012.162 0L30 11zM28 15v12h-4V15M18 15v12h-4V15M8 15v12H4V15"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
