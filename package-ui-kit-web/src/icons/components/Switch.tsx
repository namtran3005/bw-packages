import React from 'react';
import { SvgProps } from '../types';

export function Switch(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M23.368 14.267H8.634A5.648 5.648 0 013 8.634 5.65 5.65 0 018.634 3h14.734A5.65 5.65 0 0129 8.634a5.65 5.65 0 01-5.633 5.633zM23.368 29.001H8.634A5.648 5.648 0 013 23.368a5.65 5.65 0 015.634-5.634h14.734A5.651 5.651 0 0129 23.368 5.65 5.65 0 0123.368 29z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M6.467 8.634a2.167 2.167 0 104.333 0 2.167 2.167 0 00-4.333 0zM21.201 23.368a2.167 2.167 0 104.333 0 2.167 2.167 0 00-4.333 0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
