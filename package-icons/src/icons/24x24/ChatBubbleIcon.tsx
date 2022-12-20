import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const ChatBubbleIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 24,
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.22381 16.8968L4.41223 20.3578L8.83284 18.5888L9.14131 18.6621C10.0498 18.8781 11.0071 19 12 19C17.7198 19 22 15.2409 22 11C22 6.76052 17.7197 3 12 3C6.28034 3 2 6.76052 2 11C2 13.096 3.01566 15.0386 4.75389 16.5014L5.22381 16.8968ZM3 22L4.11 17.2665C2.185 15.6465 1 13.4385 1 11C1 6.03 5.925 2 12 2C18.075 2 23 6.03 23 11C23 15.9715 18.075 20 12 20C10.925 20 9.89 19.868 8.91 19.635L3 22Z"
        fill="currentColor"
      />
    ),
  }
);

export default ChatBubbleIcon;
