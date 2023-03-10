import React from 'react';
import { SvgProps } from '../types';

export function Invest(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M19.663 16.053a9.96 9.96 0 01-8.7-5.028 10.057 10.057 0 0117.415 0 9.974 9.974 0 01-8.715 5.028v0zM27.898 11.025H11.675M16.17 11.025l4.795 4.795M23.28 6.887l-4.22 4.22M11.428 11.025H7.263M13.086 22.836l7.304-.644a1.273 1.273 0 001.37-1.233 1.37 1.37 0 00-1.37-1.302l-7.947-.247a.891.891 0 01-.425-.164c-.918-.795-2.384-2.165-3.344-3.056a3.22 3.22 0 00-2.233-.89H4.03c-.74 0-1.07.137-1.247.767l-1.288 5.782c-.11.562 0 .767.603.767h2.274a63.582 63.582 0 008.098 4.042 6.508 6.508 0 004.261-.096 126.116 126.116 0 0012.044-4.33 1.411 1.411 0 10-.671-2.74c-1.672.316-5.481 1.124-6.509 1.288"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
