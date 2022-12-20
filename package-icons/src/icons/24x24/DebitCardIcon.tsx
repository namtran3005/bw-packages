import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const MinusIcon: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 24,
  icon: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4H22C22.552 4 23 4.445 23 5V19C23 19.55 22.552 20 22 20H2C1.448 20 1 19.55 1 19V5C1 4.445 1.448 4 2 4ZM22 5H2V7H22V5ZM2 11H22V19H2V11ZM4.5 14C4.22386 14 4 14.2239 4 14.5C4 14.7761 4.22386 15 4.5 15H13.5C13.7761 15 14 14.7761 14 14.5C14 14.2239 13.7761 14 13.5 14H4.5ZM4 16.5C4 16.2239 4.22386 16 4.5 16H11.5C11.7761 16 12 16.2239 12 16.5C12 16.7761 11.7761 17 11.5 17H4.5C4.22386 17 4 16.7761 4 16.5ZM17.5 14C17.2239 14 17 14.2239 17 14.5V16.5C17 16.7761 17.2239 17 17.5 17H19.5C19.7761 17 20 16.7761 20 16.5V14.5C20 14.2239 19.7761 14 19.5 14H17.5Z"
      fill="currentColor"
    />
  ),
});

export default MinusIcon;
