import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const FancyActivatedCardIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 192,
    icon: (
      <React.Fragment>
        <g
          id="actiavted-card"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M99,157 C65.8625,157 39,130.1375 39,97 C39,63.865 65.8625,37 99,37 C132.1375,37 159,63.865 159,97 C159,130.1375 132.1375,157 99,157 Z"
            id="Fill-233-Copy-3"
            fill="#EFF1F4"
          />
          <path
            d="M159.333333,141 L32.6666667,141 C29,141 26,137.988462 26,134.307692 L26,60.6923077 C26,57.0115385 29,54 32.6666667,54 L159.333333,54 C163,54 166,57.0115385 166,60.6923077 L166,134.307692 C166,137.988462 163,141 159.333333,141 Z"
            id="Fill-31"
            fill="#1D4477"
          />
          <circle
            id="Oval-15"
            stroke="#1ABC9C"
            strokeWidth="4"
            fill="#FFFFFF"
            fillRule="nonzero"
            cx="66"
            cy="138"
            r="20"
          />
          <circle
            id="Oval-14"
            fill="#EFF1F4"
            fillRule="nonzero"
            cx="139"
            cy="123"
            r="7"
          />
          <circle
            id="Oval-14-Copy-2"
            fill="#EFF1F4"
            fillRule="nonzero"
            cx="146"
            cy="74"
            r="7"
          />
          <circle
            id="Oval-14-Copy"
            fill="#EFF1F4"
            fillRule="nonzero"
            cx="148"
            cy="123"
            r="7"
          />
          <polyline
            id="Path-13"
            stroke="#1ABC9C"
            strokeWidth="4"
            strokeLinecap="round"
            fillRule="nonzero"
            points="57 140.090909 62.744186 146 76 131"
          />
        </g>
      </React.Fragment>
    ),
  }
);

export default FancyActivatedCardIcon;
