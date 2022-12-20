import React from 'react';
import { SvgProps } from '../types';

export function DownloadFile(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M15.2 21.6a6.4 6.4 0 1012.8 0 6.4 6.4 0 00-12.8 0zM21.6 18.4v6.4M21.6 24.8l2.4-2.4M21.6 24.8l-2.4-2.4"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M12 24.8H5.6A1.6 1.6 0 014 23.2V5.6A1.6 1.6 0 015.6 4h11.338a1.6 1.6 0 011.13.468l3.064 3.064c.3.3.468.706.468 1.13V12"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
