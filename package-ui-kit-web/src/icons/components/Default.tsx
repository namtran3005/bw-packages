import React from 'react';
import { SvgProps } from '../types';

export function Default(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M30 29C30 29.5304 29.7893 30.0391 29.4142 30.4142C29.0391 30.7893 28.5304 31 28 31H4C3.46957 31 2.96086 30.7893 2.58579 30.4142C2.21071 30.0391 2 29.5304 2 29V3C2 2.46957 2.21071 1.96086 2.58579 1.58579C2.96086 1.21071 3.46957 1 4 1H24.06C24.5821 0.999705 25.0835 1.20355 25.4573 1.568L29.396 5.412C29.5871 5.59831 29.7391 5.82099 29.8428 6.06693C29.9465 6.31287 30 6.57708 30 6.844V29Z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.06006 11H24.0601"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.06006 17H24.0601"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.06006 23H16.0601"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
