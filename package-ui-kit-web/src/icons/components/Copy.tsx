import React from 'react';
import { SvgProps } from '../types';

export function Copy(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M6.2 20.2H4.8A2.8 2.8 0 012 17.4V4.8A2.8 2.8 0 014.8 2h12.6a2.8 2.8 0 012.8 2.8v1.4m-5.6 5.6h12.6a2.8 2.8 0 012.8 2.8v12.6a2.8 2.8 0 01-2.8 2.8H14.6a2.8 2.8 0 01-2.8-2.8V14.6a2.8 2.8 0 012.8-2.8z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
