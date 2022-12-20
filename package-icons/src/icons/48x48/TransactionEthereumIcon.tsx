import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

export const TransactionEthereumIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 48,
    icon: (
      <React.Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 43.99C11.17 43.99 4.01 36.83 4.01 28C4.01 19.17 11.17 12.01 20 12.01C28.83 12.01 35.98 19.17 35.98 28C35.98 36.83 28.83 43.99 20 43.99ZM2 28C2 37.94 10.05 46 20 46C29.94 46 38 37.94 38 28C38 18.06 29.94 10 20 10C10.05 10 2 18.06 2 28ZM28 2C22.2 2 17.06 4.75 13.77 9C14.88 8.63 16.03 8.38 17.22 8.21C20.06 5.61 23.84 4.01 28 4.01C36.83 4.01 43.98 11.17 43.98 20C43.98 24.16 42.38 27.93 39.78 30.78C39.61 31.96 39.36 33.11 38.99 34.22C43.25 30.93 46 25.79 46 20C46 10.05 37.94 2 28 2Z"
          fill="currentColor"
        />
        <path
          d="M22.3809 20.7812L25.1124 29.7124L19.5339 31.4063L15.5498 27.1501L22.3809 20.7812Z"
          fill="currentColor"
        />
        <path
          d="M15.322 28.0001L19.1923 32.6813L24.8847 30.5624L18.2813 36.0814L15.322 28.0001Z"
          fill="currentColor"
        />
      </React.Fragment>
    ),
  }
);
