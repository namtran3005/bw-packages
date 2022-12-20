import React from 'react';
import { SvgProps } from '../types';

export function EUR(props: SvgProps) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M16.5 21C10.7 21 7.5 17.8 7.5 12C7.5 6.2 10.7 3 16.5 3M4.5 9H16.5M4.5 15H13.5"
        stroke={props.color}
        strokeWidth={props.strokeWidth || 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
