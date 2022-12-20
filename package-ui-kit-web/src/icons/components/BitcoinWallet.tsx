import React from 'react';
import { SvgProps } from '../types';

export function BitcoinWallet(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M13.336 18.557h3.698m-1.088-5.221v-1.74m0 13.923v-1.74M25.52 8.114V4.847a1.74 1.74 0 00-1.94-1.73L5.975 5.146a3.481 3.481 0 00-3.082 3.46v1.249m13.924 13.924a2.61 2.61 0 100-5.222 2.61 2.61 0 000-5.221h-3.481v10.443h3.48zM2.893 8.114H29V29H2.893V8.114z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
