import React from 'react';
import { SvgProps } from '../types';

export function Settings(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M14.316 4.947a2.263 2.263 0 003.362 0l1.094-1.2a2.265 2.265 0 013.943 1.633L22.633 7a2.266 2.266 0 002.371 2.375l1.62-.082a2.265 2.265 0 011.63 3.943l-1.205 1.087a2.267 2.267 0 000 3.363l1.204 1.087a2.266 2.266 0 01-1.633 3.943L25 22.633a2.262 2.262 0 00-2.376 2.377l.082 1.619a2.266 2.266 0 01-3.934 1.63l-1.088-1.204a2.265 2.265 0 00-3.362 0l-1.093 1.204a2.265 2.265 0 01-3.938-1.628l.083-1.619a2.264 2.264 0 00-2.377-2.377l-1.62.082a2.265 2.265 0 01-1.636-3.94l1.203-1.086a2.267 2.267 0 000-3.364l-1.203-1.092A2.264 2.264 0 015.37 9.296l1.619.082a2.264 2.264 0 002.38-2.381l-.078-1.62a2.265 2.265 0 013.938-1.63l1.087 1.2z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M10.794 16.004a5.203 5.203 0 1010.406 0 5.203 5.203 0 00-10.406 0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
