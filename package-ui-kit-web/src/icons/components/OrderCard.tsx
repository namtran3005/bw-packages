import React from 'react';
import { SvgProps } from '../types';

export function OrderCard(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.6 9.551c0-.437.245-.906.787-1.296.54-.39 1.328-.655 2.234-.655h17.195c.907 0 1.694.266 2.235.655.542.39.786.86.786 1.296v3.844c.593.362 1.13.803 1.6 1.31V9.55c0-1.082-.61-1.989-1.451-2.594C27.143 6.35 26.02 6 24.816 6H7.621c-1.204 0-2.327.35-3.17.957C3.612 7.562 3 8.469 3 9.55v12.38c0 1.083.61 1.99 1.452 2.595.842.607 1.965.957 3.17.957h11.32a7.576 7.576 0 01-1.374-1.6H7.62c-.906 0-1.694-.266-2.234-.655-.542-.39-.787-.86-.787-1.296V9.552z"
        fill={props.color}
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M6.78 15.742H17.71M6.78 11.768h15.896"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M22.813 19.376H20v-3.375M20.142 19.376a4.5 4.5 0 11.84 3.933"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
