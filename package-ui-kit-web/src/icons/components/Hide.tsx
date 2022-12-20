import React from 'react';
import { SvgProps } from '../types';

export function Hide(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M6.077 25.4L25.243 7M12.395 23.408c1.005.312 2.052.467 3.104.459 4.19.07 8.441-2.876 11.064-5.762a1.7 1.7 0 000-2.276 21.02 21.02 0 00-3.142-2.818M17.965 10.355a9.763 9.763 0 00-2.466-.288c-4.121-.069-8.383 2.813-11.062 5.76a1.7 1.7 0 000 2.275 21.262 21.262 0 002.658 2.454M11.665 16.967a3.83 3.83 0 013.833-3.834M19.332 16.966a3.832 3.832 0 01-3.834 3.834"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
