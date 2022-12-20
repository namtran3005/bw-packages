import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const CardTransactionHouseholdIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 48,
    icon: (
      <React.Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25,38 C25.552,38 26,37.553 26,37 C26,36.448 25.552,36 25,36 C24.449,36 24,36.448 24,37 C24,37.553 24.449,38 25,38 Z M38,40 L30,40 L30,27 C30,26.448 29.552,26 29,26 L19,26 C18.449,26 18,26.448 18,27 L18,40 L10,40 L10,18.414 L24,4.414 L38,18.414 L38,40 Z M30,44 L38,44 L38,42 L30,42 L30,44 Z M20,44 L28,44 L28,28 L20,28 L20,44 Z M10,44 L18,44 L18,42 L10,42 L10,44 Z M32,6 L36,6 L36,13.587 L32,9.587 L32,6 Z M45.708,23.294 L38,15.587 L38,5 C38,4.448 37.552,4 37,4 L31,4 C30.449,4 30,4.448 30,5 L30,7.587 L24.708,2.294 C24.526,2.112 24.276,2 24,2 C23.725,2 23.475,2.112 23.293,2.294 L2.293,23.294 C2.112,23.474 2,23.724 2,24 C2,24.553 2.449,25 3,25 C3.276,25 3.526,24.889 3.708,24.707 L8,20.414 L8,45 C8,45.553 8.449,46 9,46 L39,46 C39.552,46 40,45.553 40,45 L40,20.414 L44.293,24.707 C44.475,24.889 44.725,25 45,25 C45.552,25 46,24.553 46,24 C46,23.724 45.889,23.474 45.708,23.294 Z"
          fill="currentColor"
        />
      </React.Fragment>
    ),
  }
);

export default CardTransactionHouseholdIcon;
