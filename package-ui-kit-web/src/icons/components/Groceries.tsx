import React from 'react';
import { SvgProps } from '../types';

export function Groceries(props: SvgProps) {
  return (
    <svg fill="none" viewBox="0 0 30 26" {...props}>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M5 8.5l6-7M25 8.5l-6-7M24.248 24.5H5.752a1.923 1.923 0 01-1.844-1.515l-2.85-12A1.979 1.979 0 012.9 8.5H27.1a1.979 1.979 0 011.844 2.485l-2.851 12a1.922 1.922 0 01-1.844 1.515v0zM9 12.5v8M15 12.5v8M21 12.5v8"
      ></path>
    </svg>
  );
}
