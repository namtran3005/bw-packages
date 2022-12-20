import React from 'react';
import { SvgProps } from '../types';

export function Telegram(props: SvgProps) {
  return (
    <svg viewBox="0 0 36 36" fill="none" {...props}>
      <circle cx="18" cy="18" r="16.8" stroke={props.color} strokeWidth="1.6" />
      <path
        d="M26.4993 9.33334L7.6899 17.1033C7.57866 17.1503 7.48473 17.2306 7.42106 17.3332C7.35739 17.4358 7.32713 17.5556 7.33445 17.6761C7.34176 17.7966 7.3863 17.9119 7.4619 18.0061C7.53751 18.1002 7.64047 18.1686 7.75658 18.2017L14.8315 20.1678L26.4993 9.33334Z"
        stroke={props.color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.4993 9.33334L23.2906 24.5732C23.265 24.6925 23.2106 24.8038 23.1322 24.8974C23.0539 24.991 22.9539 25.064 22.8409 25.1101C22.7279 25.1563 22.6053 25.1742 22.4839 25.1622C22.3624 25.1503 22.2457 25.1089 22.1438 25.0416L14.8314 20.1678L26.4993 9.33334Z"
        stroke={props.color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8314 20.1678V25.5684C14.8316 25.6633 14.863 25.7556 14.9208 25.8309C14.9786 25.9062 15.0596 25.9604 15.1513 25.9851C15.2429 26.0099 15.3402 26.0038 15.428 25.9678C15.5158 25.9318 15.5894 25.8679 15.6373 25.7859L17.7717 22.1272"
        stroke={props.color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
