import React from 'react';
import { SvgProps } from '../types';

export function Archive(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M29 13v12a4 4 0 01-4 4H7a4 4 0 01-4-4V13M29 3H3a2 2 0 00-2 2v4h30V5a2 2 0 00-2-2zm-9 12a2 2 0 01-2 2h-4a2 2 0 010-4h4a2 2 0 012 2z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
