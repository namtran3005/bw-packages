import * as React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const TinyUpArrow: React.FC<IconContentComponentProps> = Icon({
  size: 16,
  icon: (
    <React.Fragment>
      <polygon
        id="Triangle"
        fill="currentColor"
        fillRule="nonzero"
        points="8 5 14 11 2 11"
      />
    </React.Fragment>
  ),
});

export default TinyUpArrow;
