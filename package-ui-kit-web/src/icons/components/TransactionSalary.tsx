import React from 'react';
import { SvgProps } from '../types';

export function TransactionSalary(props: SvgProps) {
  return (
    <svg {...props} fill="none" viewBox="0 0 32 32">
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M18.524 17h9l.628 1.056a1.288 1.288 0 010 1.428l-.4.596a1.287 1.287 0 00-.08 1.29l.666 1.333a1.288 1.288 0 010 1.152l-.76 1.521a1.29 1.29 0 00-.07.983l.223.666a1.284 1.284 0 01-.311 1.318L25.524 30h-9.027c-.49 0-.977.094-1.433.276L12.53 31M3.524 23.276l4.323-1.621a2.58 2.58 0 001.289-1.067l2.78-6.43a3.86 3.86 0 011.147-1.189l.968-.646"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M14.595 16.273L12.533 1.831A.727.727 0 0113.252 1h10.07"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M18.883 17L17.755 5.788a.666.666 0 01.666-.737h9.2a.666.666 0 01.667.769L26.61 17"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M22.784 11.495a.5.5 0 11-.5.505.5.5 0 01.5-.5"
      ></path>
    </svg>
  );
}
