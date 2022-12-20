import React from 'react';
import { SvgProps } from '../types';

export function Success(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M8 17.63l3.267 4.637a1.398 1.398 0 002.276.068L24 9.104"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
