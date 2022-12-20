import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const TransactionSolarisDefaultIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 48,
    icon: (
      <React.Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 18H42V14H2V18ZM6 42H38V20H6V42ZM8 2H24V7C24 7.553 24.44 8 25 8H30V12H8V2ZM26 3L29 6H26V3ZM36 4V12H32V6L30 4H36ZM42 12H38V4C38 2.896 37.1 2 36 2H28L26 0H8C6.89 0 6 0.896 6 2V12H2C0.89 12 0 12.896 0 14V18C0 19.105 0.89 20 2 20H4V42C4 43.104 4.89 44.001 6 44.001H38C39.1 44.001 40 43.104 40 42V20H42C43.1 20 44 19.105 44 18V14C44 12.896 43.1 12 42 12ZM16 28H28V26H16V28ZM16 30H28C29.1 30 30 29.104 30 28V26C30 24.896 29.1 24.001 28 24.001H16C14.89 24.001 14 24.896 14 26V28C14 29.104 14.89 30 16 30Z"
          transform="translate(2 2)"
          fill="currentColor"
        />
      </React.Fragment>
    ),
  }
);

export default TransactionSolarisDefaultIcon;
