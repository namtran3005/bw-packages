import React from 'react';
import { SvgProps } from '../types';

export function Limits(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M15.75 7A13.855 13.855 0 002 20.961V23.5a1.833 1.833 0 001.834 1.833h23.833A1.833 1.833 0 0029.5 23.5v-2.542A13.855 13.855 0 0015.75 7z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M12.084 25.333v-.917a3.667 3.667 0 117.333 0v.917M18.5 12.504l-2.75 8.25"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M7.042 19.833a.459.459 0 100 .918.459.459 0 000-.918zM8.875 15.254a.458.458 0 100 .916.458.458 0 000-.917zM24.458 19.833a.458.458 0 100 .917.458.458 0 000-.917zM22.625 15.254a.458.458 0 100 .915.458.458 0 000-.915zM12.542 11.587a.458.458 0 100 .916.458.458 0 000-.916z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
