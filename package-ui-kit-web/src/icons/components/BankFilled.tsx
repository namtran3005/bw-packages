import React from 'react';
import { SvgProps } from '../types';

export function BankFilled(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M2 31h28"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M30 11H2l12.919-7.683a2 2 0 012.162 0L30 11z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M28 15v12h-4V15"
        fill={props.color}
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M28 15v12h-4V15h4z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M18 15v12h-4V15"
        fill={props.color}
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M18 15v12h-4V15h4z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M8 15v12H4V15"
        fill={props.color}
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M8 15v12H4V15h4z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
