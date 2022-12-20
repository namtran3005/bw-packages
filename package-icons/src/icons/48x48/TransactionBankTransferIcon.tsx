import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const TransactionBankTransferIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 48,
    icon: (
      <React.Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16H42V14H2V16ZM34 36H38V18H34V36ZM28 36H32V18H28V36ZM18 36H26V18H18V36ZM12 36H16V18H12V36ZM6 36H10V18H6V36ZM40.27 38L41.61 42H2.38L3.72 38H40.27ZM22 2.152L39.23 12H4.76L22 2.152ZM43 18C43.55 18 44 17.553 44 17V13.001C44 12.629 43.78 12.318 43.48 12.146L43.49 12.132L22.49 0.132L22.48 0.146C22.34 0.062 22.18 0 22 0C21.81 0 21.65 0.062 21.51 0.146L21.5 0.132L0.5 12.132L0.51 12.146C0.21 12.318 0 12.629 0 13.001V17C0 17.553 0.44 18 1 18H4V36H3C2.55 36 2.19 36.291 2.06 36.687L2.05 36.684L0.05 42.684L0.06 42.687C0.02 42.787 0 42.89 0 43C0 43.553 0.44 44 1 44H43C43.55 44 44 43.553 44 43C44 42.89 43.97 42.787 43.93 42.687L43.94 42.684L41.94 36.684L41.93 36.687C41.8 36.291 41.44 36 41 36H40V18H43Z"
          transform="translate(2 2)"
          fill="currentColor"
        />
      </React.Fragment>
    ),
  }
);

export default TransactionBankTransferIcon;
