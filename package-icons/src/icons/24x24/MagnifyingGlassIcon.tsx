import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const MagnifyingGlassIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 24,
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9099 16.32C13.5499 17.37 11.85 18 10 18C5.59 18 2 14.415 2 10C2 5.585 5.59 2 10 2C14.41 2 18 5.585 18 10C18 11.848 17.3701 13.55 16.3201 14.905C16.3201 14.905 20.1 18.69 21.71 20.29C21.89 20.48 22 20.74 22 21C22 21.26 21.89 21.52 21.71 21.71C21.32 22.1 20.68 22.1 20.29 21.71C18.69 20.1 14.9099 16.32 14.9099 16.32ZM10 4C13.31 4 16 6.689 16 10C16 13.311 13.31 16 10 16C6.69 16 4 13.311 4 10C4 6.689 6.69 4 10 4Z"
        fill="currentColor"
      />
    ),
  }
);

export default MagnifyingGlassIcon;
