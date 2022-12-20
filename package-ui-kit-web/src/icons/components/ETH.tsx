import React from 'react';
import { SvgProps } from '../types';

export function ETH(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.8274 2.25L17.6549 11.4807L11.8274 15.0704L6 11.4807L11.8274 2.25Z"
        stroke={props.color}
        strokeWidth={props.strokeWidth || 1.6}
        strokeLinejoin="round"
      />
      <path
        d="M6 15.0703L11.8274 18.5668L17.6549 15.0703L11.8274 22.0632L6 15.0703Z"
        stroke={props.color}
        strokeWidth={props.strokeWidth || 1.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}
