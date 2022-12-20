import * as React from 'react';
import { Collapse } from '@material-ui/core';
import { CollapseProps } from '@material-ui/core/Collapse';

const TransitionCollapse: React.FunctionComponent<CollapseProps> = (props) => (
  <Collapse {...props} />
);

export { TransitionCollapse, CollapseProps as TransitionCollapseProps };
