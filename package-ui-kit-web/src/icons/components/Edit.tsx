import React from 'react';
import { SvgProps } from '../types';

export function Edit(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M24.862 18.8v9.332A1.867 1.867 0 0122.995 30H4.33a1.867 1.867 0 01-1.866-1.867V9.467A1.866 1.866 0 014.33 7.601h9.333m3.167 11.057l-4.62.66.66-4.62L24.75 2.82a2.8 2.8 0 013.96 3.96l-11.88 11.878z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
