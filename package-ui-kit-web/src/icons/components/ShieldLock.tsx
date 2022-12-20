import React from 'react';
import { SvgProps } from '../types';

export function ShieldLock(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M3.867 5.95v9.474a14.817 14.817 0 009.497 13.83l1.295.497a3.732 3.732 0 002.68 0l1.296-.498a14.817 14.817 0 009.497-13.829V5.95a1.85 1.85 0 00-1.08-1.695A27.003 27.003 0 0016 2 27.003 27.003 0 004.947 4.255a1.85 1.85 0 00-1.08 1.695z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M10.4 13.2h11.2v9.334H10.4V13.2z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M16 7.6a3.733 3.733 0 00-3.734 3.734v1.867h7.467v-1.867a3.733 3.733 0 00-3.734-3.733z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M16 17.437a.467.467 0 110 .934.467.467 0 010-.934z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
