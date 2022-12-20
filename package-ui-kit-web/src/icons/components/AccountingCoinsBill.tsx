import React from 'react';
import { SvgProps } from '../types';

export function AccountingCoinsBill(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M2 18.8c0 .99.787 1.94 2.187 2.64 1.4.7 3.3 1.093 5.28 1.093 1.98 0 3.88-.393 5.28-1.093 1.4-.7 2.186-1.65 2.186-2.64 0-.99-.786-1.94-2.187-2.64-1.4-.7-3.3-1.093-5.28-1.093-1.98 0-3.879.393-5.28 1.093C2.787 16.86 2 17.81 2 18.8v0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M2 18.8v7.467C2 28.329 5.343 30 9.467 30s7.466-1.671 7.466-3.733V18.8"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M16.933 22.533c0 2.062-3.342 3.734-7.466 3.734C5.343 26.267 2 24.595 2 22.533M20.667 20.667h7.466A1.867 1.867 0 0030 18.8V3.867A1.867 1.867 0 0028.133 2H3.867A1.867 1.867 0 002 3.867v9.342M12.267 11.334a3.732 3.732 0 116.196 2.806"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M6.2 4.956a1.244 1.244 0 110 2.488 1.244 1.244 0 010-2.488zM26.111 14.911a1.245 1.245 0 110 2.49 1.245 1.245 0 010-2.49z"
        fill={props.color}
      />
    </svg>
  );
}
