import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const CopyDocumentIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 48,
    icon: (
      <React.Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 18.0001V12.1541L23.21 18.0001H18ZM24 40C24 41.106 23.1 42 22 42H4C2.89 42 2 41.106 2 40V14C2 12.897 2.89 12 4 12H16V18C16 19.104 16.89 20 18 20H24V40ZM4 10C1.79 10 0 11.791 0 14V40C0 42.21 1.79 44 4 44H22C24.2 44 26 42.21 26 40V18L19 10H4ZM28 8.00005V2.15405L33.21 8.00005H28ZM29 0H14C11.79 0 10 1.791 10 4V7C10 7.553 10.44 8 11 8C11.55 8 12 7.553 12 7V4C12 2.897 12.89 2 14 2H26V8C26 9.104 26.89 10 28 10H34V30C34 31.104 33.1 32 32 32H29C28.44 32 28 32.448 28 33C28 33.553 28.44 34 29 34H32C34.2 34 36 32.211 36 30V8L29 0ZM6 25C6 25.553 6.44 26 7 26H19C19.55 26 20 25.553 20 25C20 24.448 19.55 24 19 24H7C6.44 24 6 24.448 6 25V25ZM7 20H11C11.55 20 12 19.553 12 19C12 18.448 11.55 18 11 18H7C6.44 18 6 18.448 6 19C6 19.553 6.44 20 7 20V20ZM15 36H7C6.44 36 6 36.448 6 37C6 37.553 6.44 38 7 38H15C15.55 38 16 37.553 16 37C16 36.448 15.55 36 15 36V36ZM19 30H7C6.44 30 6 30.448 6 31C6 31.553 6.44 32 7 32H19C19.55 32 20 31.553 20 31C20 30.448 19.55 30 19 30V30Z"
          transform="translate(6 2)"
          fill="currentColor"
        />
      </React.Fragment>
    ),
  }
);

export default CopyDocumentIcon;
