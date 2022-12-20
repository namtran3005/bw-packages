import React from 'react';
import { SvgProps } from '../types';

export function BuyCrypto(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M1 19v12m0-2h22a4 4 0 00-4-4h-5m0 0a4 4 0 00-4-4H1m13 4H9m15.747-1.463A12 12 0 107.4 16.152M16 13h4.25M19 7V5m0 16v-2m1 0a3 3 0 000-6 3 3 0 000-6h-4v12h4z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
