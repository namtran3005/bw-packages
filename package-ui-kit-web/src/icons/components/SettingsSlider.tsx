import React from 'react';
import { SvgProps } from '../types';

export function SettingsSlider(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M16.801 20h6.4m-6.4 0a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0zm-8 0h3.2m6.4-8h-9.6m-4.8-8h24v24h-24V4zm19.2 8a2.4 2.4 0 10-4.8 0 2.4 2.4 0 004.8 0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
