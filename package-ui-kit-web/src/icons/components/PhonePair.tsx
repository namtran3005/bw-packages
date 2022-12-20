import React from 'react';
import { SvgProps } from '../types';

export function PhonePair(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M18.538 20.385v5.379a3.082 3.082 0 01-3.083 3.082H8.083A3.084 3.084 0 015 25.764V8.237a3.083 3.083 0 013.083-3.083h1.994M5 23.769h13.538m0-15.23l-1.692 1.692 1.692 1.692m3.385-3.385l1.692 1.693-1.692 1.692m-8.461-8.461H27V17H13.461V3.462z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
