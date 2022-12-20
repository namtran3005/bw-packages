import React from 'react';
import { SvgProps } from '../types';

export function Trade(props: SvgProps) {
  return (
    <svg fill="none" viewBox="0 0 31 27" {...props}>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M1 4.778h22.667a1.889 1.889 0 011.889 1.889v7.555M29.333 21.778H6.667a1.889 1.889 0 01-1.89-1.89v-7.555"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M4.778 1L1 4.778l3.778 3.778M25.555 25.556l3.778-3.778L25.555 18"
      ></path>
    </svg>
  );
}
