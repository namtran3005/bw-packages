import * as React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const EmailSocialIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 48,
    icon: (
      <React.Fragment>
        <g
          id="email"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M20,0 C31.0447594,0.00225841072 39.9977416,8.9552406 40,20 C39.9977416,31.0447594 31.0447594,39.9977416 20,40 C8.9552406,39.9977416 0.00225841072,31.0447594 0,20 C0.00225841072,8.9552406 8.9552406,0.00225841072 20,0 Z M20,38 C29.9355383,38 38,29.9365508 38,20 C38,10.0553493 29.9365508,2 20,2 C10.0553493,2 2,10.0553493 2,20 C2,29.9355383 10.0553493,38 20,38 Z"
            id="Shape"
            fill="currentColor"
            fillRule="nonzero"
          />
          <g
            id="Group-10"
            transform="translate(10.000000, 13.000000)"
            strokeLinejoin="round"
          >
            <rect
              id="Rectangle"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="currentColor"
              x="-0.375"
              y="-0.375"
              width="20.75"
              height="14.75"
              rx="2"
            />
            <polyline
              id="Path"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              points="1.02498612 1.45797997 10 8.438 19.0083341 1.45797997"
            />
            <line
              x1="14"
              y1="8.438"
              x2="17.5867133"
              y2="11.3222958"
              id="Path-6"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="2"
              y1="8.438"
              x2="5.58671333"
              y2="11.3222958"
              id="Path-6"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              transform="translate(3.793357, 9.880148) scale(-1, 1) translate(-3.793357, -9.880148) "
            />
          </g>
        </g>
      </React.Fragment>
    ),
  }
);

export default EmailSocialIcon;
