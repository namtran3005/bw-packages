import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const ChecklistIcon: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 24,
  icon: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 22C21.55 22 22 21.5525 22 21V3.0005C22 2.448 21.55 2 21 2H3C2.445 2 2 2.448 2 3.0005V21C2 21.5525 2.445 22 3 22H21ZM3 1H21C22.1 1 23 1.8955 23 3.0005V21C23 22.1055 22.1 23 21 23H3C1.895 23 1 22.1055 1 21V3.0005C1 1.8955 1.895 1 3 1ZM5.45 4.9545L6 3.5L6.545 4.9545H8L6.815 5.864L7.36 7.5005L6 6.5L4.635 7.5005L5.18 5.864L4 4.9545H5.45ZM19.5 5.0005H10.5C10.22 5.0005 10 5.224 10 5.5C10 5.7765 10.22 6 10.5 6H19.5C19.775 6 20 5.7765 20 5.5C20 5.224 19.775 5.0005 19.5 5.0005ZM19.5 11.0005H10.5C10.22 11.0005 10 11.2235 10 11.5005C10 11.7765 10.22 12 10.5 12H19.5C19.775 12 20 11.7765 20 11.5005C20 11.2235 19.775 11.0005 19.5 11.0005ZM6 15.5005L6.545 16.9545H8L6.815 17.864L7.36 19.5L6 18.5L4.635 19.5L5.18 17.864L4 16.9545H5.45L6 15.5005ZM6 9.5L5.45 10.9545H4L5.18 11.864L4.635 13.5005L6 12.5L7.36 13.5005L6.815 11.864L8 10.9545H6.545L6 9.5ZM19.5 17H10.5C10.22 17 10 17.224 10 17.5005C10 17.7765 10.22 18.0005 10.5 18.0005H19.5C19.775 18.0005 20 17.7765 20 17.5005C20 17.224 19.775 17 19.5 17Z"
      fill="currentColor"
    />
  ),
});

export default ChecklistIcon;