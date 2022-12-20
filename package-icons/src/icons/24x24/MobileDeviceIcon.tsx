import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const KebabMenuIcon: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 24,
  icon: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 2.5H12.5C12.775 2.5 13 2.72 13 3C13 3.275 12.775 3.5 12.5 3.5H11.5C11.22 3.5 11 3.275 11 3C11 2.72 11.22 2.5 11.5 2.5ZM7 4H17V3C17 2.445 16.55 2 16 2H8C7.445 2 7 2.445 7 3V4ZM16 22C16.55 22 17 21.55 17 21V20H7V21C7 21.55 7.445 22 8 22H16ZM8 1H16C17.1 1 18 1.895 18 3V21C18 22.105 17.1 23 16 23H8C6.895 23 6 22.105 6 21V3C6 1.895 6.895 1 8 1ZM12.5 21C12.5 21.275 12.275 21.5 12 21.5C11.72 21.5 11.5 21.275 11.5 21C11.5 20.72 11.72 20.5 12 20.5C12.275 20.5 12.5 20.72 12.5 21ZM17 5H7V19H17V5Z"
      fill="currentColor"
    />
  ),
});

export default KebabMenuIcon;
