import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const CardTransactionPharmacyIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 48,
    icon: (
      <React.Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34,26 L26,26 L26,34 L22,34 L22,26 L14,26 L14,22 L22,22 L22,14 L26,14 L26,22 L34,22 L34,26 Z M34,20 L28,20 L28,14 C28,12.89 27.1,12 26,12 L22,12 C20.89,12 20,12.89 20,14 L20,20 L14,20 C12.89,20 12,20.89 12,22 L12,26 C12,27.1 12.89,28 14,28 L20,28 L20,34 C20,35.1 20.89,36 22,36 L26,36 C27.1,36 28,35.1 28,34 L28,28 L34,28 C35.1,28 36,27.1 36,26 L36,22 C36,20.89 35.1,20 34,20 Z M44,42 C44,43.1 43.1,44 42,44 L6,44 C4.89,44 4,43.1 4,42 L4,6 C4,4.89 4.89,4 6,4 L42,4 C43.1,4 44,4.89 44,6 L44,42 Z M42,2 L6,2 C3.79,2 2,3.79 2,6 L2,42 C2,44.21 3.79,46 6,46 L42,46 C44.2,46 46,44.21 46,42 L46,6 C46,3.79 44.2,2 42,2 Z"
          fill="currentColor"
        />
      </React.Fragment>
    ),
  }
);

export default CardTransactionPharmacyIcon;
