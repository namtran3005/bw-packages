import React from 'react';
import { SvgProps } from '../types';

export function AlertEthereum(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M13.778 26.334a2.319 2.319 0 004.45 0M16 5.5V3"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.47 5.04a9.132 9.132 0 00-11.603 8.794c0 3.457-.41 5.67-.8 6.996a8.218 8.218 0 01-.52 1.368 3.232 3.232 0 01-.182.316l-.002.003A.8.8 0 006 23.8h20a.8.8 0 00.534-1.396l-.004-.005a1.264 1.264 0 01-.113-.157c-.114-.181-.296-.53-.487-1.132-.265-.835-.544-2.144-.69-4.147a7.592 7.592 0 01-1.606-.013c.152 2.17.454 3.646.77 4.644.072.225.144.426.216.606H7.29c.101-.26.207-.565.31-.918.443-1.498.867-3.868.867-7.45a7.534 7.534 0 019.166-7.354c.226-.512.507-.994.837-1.439z"
        fill={props.color}
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M24.269 3l3.269 5.178-3.27 2.013L21 8.178 24.269 3zM21 10.191l3.269 1.962 3.269-1.962-3.27 3.923L21 10.191z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
