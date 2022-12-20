import React from 'react';
import { SvgProps } from '../types';

export function Pharmacy(props: SvgProps) {
  return (
    <svg {...props} fill="none" viewBox="0 0 32 32">
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M1 16a15 15 0 1030 0 15 15 0 00-30 0v0z"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M24 13h-5V8a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H8a1 1 0 00-1 1v4a1 1 0 001 1h5v5a1 1 0 001 1h4a1 1 0 001-1v-5h5a1 1 0 001-1v-4a1 1 0 00-1-1z"
      ></path>
    </svg>
  );
}
