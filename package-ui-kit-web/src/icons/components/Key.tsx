import React from 'react';
import { SvgProps } from '../types';

export function Key(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M16.948 18.908l2.941-2.942 2.025.543a1.817 1.817 0 002.224-2.223l-.544-2.025.907-.906 2.025.543a1.816 1.816 0 002.223-2.224l-.542-2.025a2.724 2.724 0 10-3.852-3.851L13.097 15.056a7.262 7.262 0 103.85 3.852z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M7.161 23.027a1.816 1.816 0 103.632 0 1.816 1.816 0 00-3.632 0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
