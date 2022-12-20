import React from 'react';
import { SvgProps } from '../types';

export function FoodAndDrink(props: SvgProps) {
  return (
    <svg {...props} fill="none" viewBox="0 0 32 32">
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M9 31.001H4l-3-22h17l-.488 3.578"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M8 23.001l3-22 6 1M15 27.001h14v2a2 2 0 01-2 2H17a2 2 0 01-2-2v-2zM19 17.001h6a4 4 0 014 4v2H15v-2a4 4 0 014-4v0zM13 23.001h18v4H13v-4z"
      ></path>
    </svg>
  );
}
