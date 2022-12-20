import React from 'react';
import { SvgProps } from '../types';

export function CardSettings(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.6 9.551c0-.437.245-.906.787-1.296.54-.39 1.328-.655 2.234-.655h17.195c.907 0 1.694.266 2.235.655.542.39.786.86.786 1.296v3.844c.593.362 1.13.803 1.6 1.31V9.55c0-1.082-.61-1.989-1.451-2.594C27.143 6.35 26.02 6 24.816 6H7.621c-1.204 0-2.327.35-3.17.957C3.612 7.562 3 8.469 3 9.55v12.38c0 1.083.61 1.99 1.452 2.595.842.607 1.965.957 3.17.957h11.32a7.57 7.57 0 01-1.374-1.6H7.62c-.906 0-1.694-.266-2.234-.655-.542-.39-.787-.86-.787-1.296V9.552z"
        fill={props.color}
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M21.16 20.378a3.18 3.18 0 106.36 0 3.18 3.18 0 00-6.36 0v0zM24.34 17.198v-2.12M24.34 25.677v-2.12M27.52 20.378h2.119M19.04 20.378h2.12M21.085 24.125l1.266-1.266M21.085 16.631l1.266 1.266M27.595 24.125l-1.266-1.266M27.595 16.631l-1.266 1.266"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M6.78 15.742h10.93M6.78 11.768h15.896"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
      />
    </svg>
  );
}
