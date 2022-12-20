import React from 'react';
import { SvgProps } from '../types';

export function Show(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M15.998 9.001c-4.3-.072-8.746 2.933-11.542 6.01a1.774 1.774 0 000 2.374c2.735 3.013 7.169 6.087 11.542 6.013 4.374.074 8.809-3 11.546-6.013a1.774 1.774 0 000-2.374c-2.799-3.077-7.246-6.082-11.546-6.01z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M19.998 16.2a4 4 0 11-8-.002 4 4 0 018 .002z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
