import React from 'react';
import { SvgProps } from '../types';

export function Home(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M15.96 4L4 11.315v16.22h8.485v-4.15a3.44 3.44 0 013.475-3.438v0a3.438 3.438 0 013.438 3.438v4.15h8.522V11.352L15.96 4z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
