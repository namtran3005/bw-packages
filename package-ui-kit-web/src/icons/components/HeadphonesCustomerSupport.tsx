import React from 'react';
import { SvgProps } from '../types';

export function HeadphonesCustomerSupport(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M5.733 12.267A3.733 3.733 0 002 16v3.733a3.734 3.734 0 003.733 3.734h.934a.933.933 0 00.933-.934V13.2a.933.933 0 00-.933-.933h-.934zm0 0a10.267 10.267 0 1120.534 0m0 11.2h-.934a.933.933 0 01-.933-.934V13.2a.933.933 0 01.933-.933h.934m0 11.2A3.733 3.733 0 0030 19.733V16a3.733 3.733 0 00-3.733-3.733m0 11.2v.933a3.733 3.733 0 01-3.734 3.733h-2.8m0 0a1.866 1.866 0 00-1.866-1.866H16A1.866 1.866 0 1016 30h1.867a1.867 1.867 0 001.866-1.867z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
