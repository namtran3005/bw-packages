import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const DeFlagIcon: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 100,
  icon: (
    <g
      id="de-flag-round"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <mask id="mask-2" fill="white">
        <path
          d="M51.428023,99.98 L48.571977,99.98 C21.6180242,99.2240972 0,77.136732 0,50 C0,22.3856667 22.3856667,0 50,0 C77.6143333,0 100,22.3856667 100,50 C100,77.136732 78.3819758,99.2240972 51.428023,99.98 L51.428023,99.98 Z"
          id="path-1"
        />
      </mask>
      <g id="Clip-2" />
      <polygon
        id="Fill-1"
        fill="#0A0B09"
        mask="url(#mask-2)"
        points="0 99.98 100 99.98 100 0 0 0"
      />
      <polygon
        id="Fill-3"
        fill="#C9242A"
        mask="url(#mask-2)"
        points="0 99.98 100 99.98 100 33.3333333 0 33.3333333"
      />
      <polygon
        id="Fill-4"
        fill="#F8CA23"
        mask="url(#mask-2)"
        points="0 99.98 100 99.98 100 66.6666667 0 66.6666667"
      />
    </g>
  ),
});

export default DeFlagIcon;
