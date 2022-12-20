import React from 'react';
import { SvgProps } from '../types';

export function QR(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M8 8h3.556v3.556H8V8zM8 20.445h3.556V24H8v-3.555zM20.445 8H24v3.556h-3.555V8zM8 16.889h7.111v1.778M18.667 18.667V24H24v-5.333h-1.778M15.111 22.222V24M15.111 8v5.333h1.778M20.445 15.111H24"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
