import React from 'react';
import { SvgProps } from '../types';

export function ListBullets(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M11.664 6.467h17.333m-17.333 10.4h17.333m-17.333 10.4h17.333M2.997 5.6a2.6 2.6 0 105.2 0 2.6 2.6 0 00-5.2 0zm0 10.4a2.6 2.6 0 105.2 0 2.6 2.6 0 00-5.2 0zm0 10.4a2.6 2.6 0 105.2 0 2.6 2.6 0 00-5.2 0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
