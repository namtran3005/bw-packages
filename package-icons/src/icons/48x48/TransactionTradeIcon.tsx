import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const TransactionTradeIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 48,
    icon: (
      <React.Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34 0C34.5522 0 35 0.447754 35 1V10C35 10.5522 34.5522 11 34 11H25C24.4478 11 24 10.5522 24 10C24 9.44775 24.4478 9 25 9H31.9619C28.8423 5.32764 24.1934 3 19 3C9.61108 3 2 10.6111 2 20C2 20.5522 1.55225 21 1 21C0.447754 21 0 20.5522 0 20C0 9.50659 8.50659 1 19 1C24.541 1 29.5281 3.3728 33 7.15454V1C33 0.447754 33.4478 0 34 0ZM38 20C38 19.4478 37.5522 19 37 19C36.4478 19 36 19.4478 36 20C36 29.3889 28.3889 37 19 37C13.8069 37 9.15723 34.6721 6.03784 31H13C13.5522 31 14 30.5522 14 30C14 29.4478 13.5522 29 13 29H4C3.44775 29 3 29.4478 3 30V39C3 39.5522 3.44775 40 4 40C4.55225 40 5 39.5522 5 39V32.8452C8.47192 36.6272 13.4587 39 19 39C29.4934 39 38 30.4934 38 20Z"
          transform="translate(5 4)"
          fill="currentColor"
        />
      </React.Fragment>
    ),
  }
);

export default TransactionTradeIcon;
