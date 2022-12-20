import React from 'react';
import { SvgProps } from '../types';

export function AlarmBell(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M9.58 6.425A7.862 7.862 0 006.52 9.484M8.541 3A8.048 8.048 0 003 8.542m13-1.293c4.256 0 7.428 4.108 7.428 8.751 0 5.812 1.858 7.428 1.858 7.428H6.714S8.571 21.843 8.571 16c0-4.643 3.172-8.75 7.429-8.75zm0 0V4.857m1.857 22.286a1.857 1.857 0 11-3.714 0M22.42 6.425a7.993 7.993 0 011.743 1.314c.517.518.96 1.105 1.315 1.745M23.459 3A8.048 8.048 0 0129 8.542"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
