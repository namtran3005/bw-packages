import React from 'react';
import { SvgProps } from '../types';

export function ProfileNavigation(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M16.264 19.573h2.984c3.48 0 6.463 2.155 7.292 4.973l1.16 3.811H4l1.16-3.811c.663-2.818 3.812-4.973 7.293-4.973h3.811z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M9.938 9.63c0-3.205 2.625-5.83 5.83-5.83 3.203 0 5.829 2.625 5.829 5.83 0 3.204-2.626 5.829-5.83 5.829s-5.83-2.625-5.83-5.83z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
      />
    </svg>
  );
}
