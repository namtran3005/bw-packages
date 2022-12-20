import React from 'react';
import { SvgProps } from '../types';

export function GiftBox(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M28.133 15.067H3.867v13.066A1.866 1.866 0 005.733 30h20.534a1.867 1.867 0 001.866-1.867V15.067zM28.133 9.467H3.867A1.867 1.867 0 002 11.333v2.8a.933.933 0 00.933.934h26.134a.933.933 0 00.933-.934v-2.8a1.867 1.867 0 00-1.867-1.866z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M15.067 9.467c-4.124 0-8.4-3.343-8.4-7.467zM6.667 2c4.124 0 8.4 3.343 8.4 7.467zM16.933 9.467c4.124 0 8.4-3.343 8.4-7.467zM25.333 2c-4.124 0-8.4 3.343-8.4 7.467zM13.2 9.467h5.6V30h-5.6V9.467z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
