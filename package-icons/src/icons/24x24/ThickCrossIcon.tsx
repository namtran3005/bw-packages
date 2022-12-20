import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const ThickCrossIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 24,
    icon: (
      <g
        id="small-misc/close"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="action-button"
          transform="translate(11.909903, 11.909903) rotate(-315.000000) translate(-11.909903, -11.909903) translate(0.409903, -0.090097)"
          stroke="currentColor"
          strokeWidth="4.19999993"
        >
          <g id="Group" transform="translate(-0.000000, 0.312500)">
            <line x1="22" y1="11.6875" x2="0" y2="11.6875" id="Path-3-Copy" />
            <line
              x1="22"
              y1="11.6875"
              x2="4.97379915e-14"
              y2="11.6875"
              id="Path-3-Copy-3"
              transform="translate(11.000000, 11.687500) rotate(-90.000000) translate(-11.000000, -11.687500) "
            />
          </g>
        </g>
      </g>
    ),
  }
);

export default ThickCrossIcon;
