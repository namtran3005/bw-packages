import * as React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

export const DepositIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 32,
    icon: (
      <React.Fragment>
        <g
          id="transactional/deposit"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <polyline
            id="Path-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fillRule="nonzero"
            points="7 18 7 25 25 25 25 18"
          />
          <path
            d="M16.5877273,15.24 C16.5054545,15.32 16.4545455,15.4311111 16.4545455,15.5555556 C16.4545455,15.8 16.6586364,16 16.9090909,16 C17.0345455,16 17.1481818,15.9466667 17.2309091,15.8666667 L20.8672727,12.3111111 C20.9495455,12.2311111 21,12.12 21,12 C21,11.8755556 20.9495455,11.7644444 20.8672727,11.6844444 L17.2309091,8.12888889 C17.1481818,8.04888889 17.0345455,8 16.9090909,8 C16.6586364,8 16.4545455,8.19555556 16.4545455,8.44444444 C16.4545455,8.56444444 16.5054545,8.67555556 16.5877273,8.75555556 L19.4481818,11.5555556 L11.4545455,11.5555556 C11.2040909,11.5555556 11,11.7511111 11,12 C11,12.2444444 11.2040909,12.4444444 11.4545455,12.4444444 L19.4481818,12.4444444 L16.5877273,15.24 Z"
            id="Path-Copy"
            stroke="currentColor"
            fill="none"
            transform="translate(16.000000, 12.000000) rotate(-270.000000) translate(-16.000000, -12.000000) "
          />
        </g>
      </React.Fragment>
    ),
  }
);

export default DepositIcon;
