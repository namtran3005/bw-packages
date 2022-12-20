import React from 'react';
import { SvgProps } from '../types';

export function Wealth(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M8.327 10.51H2v15.8h6.327v-15.8zM19.163 13.114h-6.327v13.213h6.327V13.114zM30 6h-6.327v20.31H30V6z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
