import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const ChevronRightIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 24,
    icon: (
      <g transform="matrix(1,0,0,1,-885,-272)">
        <g
          id="basic.regular.chevronRight"
          transform="matrix(0.800768,0,0,0.984948,885,272)"
        >
          <rect x="0" y="0" width="29.971" height="24.367" fill="transparent" />
          <g transform="matrix(0.80276,-0.652648,0.80276,0.652648,-147.35,-105.293)">
            <path
              d="M16.1,195C16.1,195.292 15.984,195.572 15.778,195.778C15.572,195.984 15.292,196.1 15,196.1C12.514,196.1 6.486,196.1 4,196.1C3.708,196.1 3.429,195.984 3.222,195.778C3.016,195.572 2.9,195.292 2.9,195C2.9,194.393 3.393,193.9 4,193.9C6.786,193.9 13.9,193.9 13.9,193.9C13.9,193.9 13.9,186.786 13.9,184C13.9,183.393 14.393,182.9 15,182.9C15.292,182.9 15.572,183.016 15.778,183.222C15.984,183.429 16.1,183.708 16.1,184C16.1,186.486 16.1,192.514 16.1,195Z"
              fill="currentColor"
              fillRule="nonzero"
            />
          </g>
        </g>
      </g>
    ),
  }
);

export default ChevronRightIcon;
