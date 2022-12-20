import * as React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const TinyDownArrow: React.FC<IconContentComponentProps> = Icon({
  size: 16,
  icon: (
    <React.Fragment>
      <polygon
        id="Triangle"
        fill="currentColor"
        fillRule="nonzero"
        transform="translate(8.000000, 8.000000) rotate(-180.000000) translate(-8.000000, -8.000000) "
        points="8 5 14 11 2 11"
      />
    </React.Fragment>
  ),
});

export default TinyDownArrow;
