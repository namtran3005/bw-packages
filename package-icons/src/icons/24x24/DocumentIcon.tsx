import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const DocumentIcon: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 24,
  icon: (
    <React.Fragment>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3C4 2.735 4.11005 2.48003 4.30005 2.29303C4.48005 2.10503 4.74 2 5 2C7.4 2 13.37 2 15 2C15.27 2 15.52 2.10503 15.71 2.29303C16.5299 3.12003 18.8799 5.46602 19.7099 6.29302C19.8899 6.48002 20 6.73499 20 6.99999C20 9.03299 20 17.98 20 21C20 21.265 19.8899 21.5199 19.7099 21.7069C19.5199 21.8949 19.27 22 19 22C16.13 22 7.88 22 5 22C4.74 22 4.48005 21.8949 4.30005 21.7069C4.11005 21.5199 4 21.265 4 21C4 17.586 4 6.41399 4 3ZM14 4H6V20H18V7.99999C18 7.99999 16.18 7.99999 15 7.99999C14.44 7.99999 14 7.55199 14 6.99999C14 5.81499 14 4 14 4ZM15 4.41998V6.99999H17.5799L15 4.41998Z"
        fill="currentColor"
      />
      <rect x="8" y="16" width="4" height="1" rx="0.5" fill="currentColor" />
      <rect x="8" y="13" width="8" height="1" rx="0.5" fill="currentColor" />
      <rect x="8" y="10" width="8" height="1" rx="0.5" fill="currentColor" />
    </React.Fragment>
  ),
});

export default DocumentIcon;
