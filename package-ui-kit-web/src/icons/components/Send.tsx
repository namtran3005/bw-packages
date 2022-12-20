import React from 'react';
import { SvgProps } from '../types';

export function Send(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M4.276 14.103a1.752 1.752 0 01-.081-3.347L27.84 3.044a.885.885 0 011.117 1.11l-7.706 23.658a1.75 1.75 0 01-3.347-.082l-2.646-10.993-10.983-2.634zM28.74 3.256l-13.481 13.48"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
