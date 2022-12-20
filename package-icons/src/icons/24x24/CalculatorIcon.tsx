import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const CalculatorIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 24,
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 18H16V16H14V18ZM11 12H13V10H11V12ZM14 21H16V19H14V21ZM14 15H16V13H14V15ZM17 12H19V10H17V12ZM20 21C20 21.55 19.55 22 19 22H5C4.445 22 4 21.55 4 21V3C4 2.445 4.445 2 5 2H19C19.55 2 20 2.445 20 3V21ZM19 1H5C3.895 1 3 1.895 3 3V21C3 22.105 3.895 23 5 23H19C20.1 23 21 22.105 21 21V3C21 1.895 20.1 1 19 1ZM14 12H16V10H14V12ZM6 8H18V4H6V8ZM5 9H19V3H5V9ZM11 15H13V13H11V15ZM17 21H19V13H17V21ZM5 18H7V16H5V18ZM5 12H7V10H5V12ZM5 21H7V19H5V21ZM5 15H7V13H5V15ZM11 18H13V16H11V18ZM8 21H10V19H8V21ZM11 21H13V19H11V21ZM8 18H10V16H8V18ZM8 15H10V13H8V15ZM8 12H10V10H8V12Z"
        fill="currentColor"
      />
    ),
  }
);

export default CalculatorIcon;
