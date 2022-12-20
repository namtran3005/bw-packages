import React from 'react';
import { SvgProps } from '../types';

export function PhoneType(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M16.867 18.6v7.243A3.157 3.157 0 0113.71 29H6.158A3.158 3.158 0 013 25.843V7.892a3.16 3.16 0 013.158-3.159h2.909M3 23.8h13.867"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M25.533 3H16a3.467 3.467 0 00-3.467 3.467v5.2A3.467 3.467 0 0016 15.133h4.333v4.334l4.334-4.334h.866A3.467 3.467 0 0029 11.667v-5.2A3.466 3.466 0 0025.533 3v0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M16.433 8.633a.433.433 0 100 .867.433.433 0 000-.867zM20.767 8.633a.434.434 0 100 .868.434.434 0 000-.868zM25.1 8.633a.434.434 0 100 .868.434.434 0 000-.868z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
