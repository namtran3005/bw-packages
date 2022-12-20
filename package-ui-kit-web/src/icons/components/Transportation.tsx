import React from 'react';
import { SvgProps } from '../types';

export function Transportation(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M7 26.4147V28.948C7 29.4784 7.21071 29.9871 7.58579 30.3622C7.96086 30.7373 8.46957 30.948 9 30.948C9.53043 30.948 10.0391 30.7373 10.4142 30.3622C10.7893 29.9871 11 29.4784 11 28.948V26.948"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 6.95068H3C2.46957 6.95068 1.96086 7.1614 1.58579 7.53647C1.21071 7.91154 1 8.42025 1 8.95068V12.9507"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 6.95068H29C29.5304 6.95068 30.0391 7.1614 30.4142 7.53647C30.7893 7.91154 31 8.42025 31 8.95068V12.9507"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 26.9507H9C7.93913 26.9507 6.92172 26.5293 6.17157 25.7791C5.42143 25.029 5 24.0116 5 22.9507V4.95068C5 3.88982 5.42143 2.8724 6.17157 2.12226C6.92172 1.37211 7.93913 0.950684 9 0.950684H23C24.0609 0.950684 25.0783 1.37211 25.8284 2.12226C26.5786 2.8724 27 3.88982 27 4.95068V14.9507"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 18.9507H5"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22.9507H11"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 4.95068H19"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 18.9507H31V30.9507H15V18.9507Z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 22.9507H31"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 26.9507H22"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
