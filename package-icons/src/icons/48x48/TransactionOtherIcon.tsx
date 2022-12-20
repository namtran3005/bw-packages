import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

export const size = 48;

const TransactionOtherIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size,
    IconContentComponent({ textContent }) {
      return (
        <React.Fragment>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 0C1.79077 0 0 1.79077 0 4V40C0 42.2092 1.79077 44 4 44H40C42.2092 44 44 42.2092 44 40V4C44 1.79077 42.2092 0 40 0H4ZM4 2C2.89551 2 2 2.89551 2 4V40C2 41.1045 2.89551 42 4 42H40C41.1045 42 42 41.1045 42 40V4C42 2.89551 41.1045 2 40 2H4Z"
            fill="currentColor"
            transform="translate(2 2)"
          />

          <text
            fontFamily="Lato-Bold, Lato"
            fontSize={size / 3}
            fontWeight="bold"
            textAnchor="middle"
            fill="currentColor"
          >
            <tspan x={size / 2} y={30}>
              {textContent ? textContent : 'XXX'}
            </tspan>
          </text>
        </React.Fragment>
      );
    },
  }
);

export default TransactionOtherIcon;
