import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const EditPencil: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 24,
  icon: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.12,7.121 L19.97,8.268 L15.73,4.025 L16.875,2.8785 C16.875,2.8785 17.69,2 19,2 C20.655,2 22,3.343 22,5 C22,5.828 21.66,6.578 21.12,7.121 Z M8.5,19.742 L8.5,16 C8.5,15.7235 8.275,15.5 8,15.5 L4.255,15.5 L15.025,4.732 L19.265,8.9745 L8.5,19.742 Z M7.5,20.3945 L4,21.2125 L4,20 L2.785,20 L3.605,16.5 L7.5,16.5 L7.5,20.3945 Z M19,1 C17.895,1 16.895,1.4475 16.17,2.1715 L2.67,15.6715 L1,23 L8.325,21.328 L21.825,7.828 C22.55,7.105 23,6.1045 23,5 C23,2.791 21.205,1 19,1 Z"
      fill="currentColor"
    />
  ),
});

export default EditPencil;
