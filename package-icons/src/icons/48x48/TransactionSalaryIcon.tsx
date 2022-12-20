import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const TransactionSalaryIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 48,
    icon: (
      <React.Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42 16H36V14C36 12.897 35.1 12 34 12H30C28.89 12 28 12.897 28 14V16H16V14C16 12.897 15.1 12 14 12H10C8.89 12 8 12.897 8 14V16H2V6.002H42V16ZM30 20.002H34V14H30V20.002ZM10 20.002H14V14H10V20.002ZM40 34H4V18H8V20.002C8 21.104 8.89 22 10 22H14C15.1 22 16 21.104 16 20.002V18H28V20.002C28 21.104 28.89 22 30 22H34C35.1 22 36 21.104 36 20.002V18H40V34ZM18 2H26C27.1 2 28 2.897 28 4H16C16 2.897 16.89 2 18 2ZM42 4H30C30 1.791 28.2 0 26 0H18C15.79 0 14 1.791 14 4H2C0.89 4 0 4.897 0 6.002V16C0 17.104 0.89 18 2 18V34C2 35.104 2.89 36 4 36H40C41.1 36 42 35.104 42 34V18C43.1 18 44 17.104 44 16V6.002C44 4.897 43.1 4 42 4Z"
          transform="translate(2 6)"
          fill="currentColor"
        />
      </React.Fragment>
    ),
  }
);

export default TransactionSalaryIcon;
