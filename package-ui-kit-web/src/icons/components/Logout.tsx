import React from 'react';
import { SvgProps } from '../types';

export function Logout(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M2 16h19.5m0 0l-4.643 4.642M21.5 16l-4.643-4.642M5.165 21.69a13 13 0 10.221-11.814"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
