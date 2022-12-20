import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const PencilIcon: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 24,
  icon: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.12 7.121L19.97 8.268L15.73 4.025L16.875 2.8785C16.875 2.8785 17.69 2 19 2C20.655 2 22 3.343 22 5C22 5.828 21.66 6.578 21.12 7.121ZM8.5 19.742V16C8.5 15.7235 8.275 15.5 8 15.5H4.255L15.025 4.732L19.265 8.9745L8.5 19.742ZM7.5 20.3945L4 21.2125V20H2.785L3.605 16.5H7.5V20.3945ZM19 1C17.895 1 16.895 1.4475 16.17 2.1715L2.67 15.6715L1 23L8.325 21.328L21.825 7.828C22.55 7.105 23 6.1045 23 5C23 2.791 21.205 1 19 1Z"
      fill="currentColor"
    />
  ),
});

export default PencilIcon;
