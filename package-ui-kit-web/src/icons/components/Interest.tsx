import React from 'react';
import { SvgProps } from '../types';

export function Interest(props: SvgProps) {
  return (
    <svg {...props} fill="none" viewBox="0 0 28 28">
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M18.644 22.358a3.714 3.714 0 107.428 0 3.714 3.714 0 00-7.428 0v0zM1.929 5.643a3.714 3.714 0 107.429 0 3.714 3.714 0 00-7.429 0v0zM3.242 27a.919.919 0 01-.656-.272l-1.313-1.313a.926.926 0 010-1.313l22.83-22.83a.93.93 0 011.313 0l1.314 1.313a.933.933 0 010 1.313L3.899 26.728a.921.921 0 01-.657.273v0z"
      ></path>
    </svg>
  );
}
