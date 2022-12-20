import * as React from 'react';
import { Fade } from '@material-ui/core';
import { FadeProps } from '@material-ui/core/Fade';

const TransitionFade: React.FunctionComponent<FadeProps> = (props) => (
  <Fade {...props} />
);

export { TransitionFade, FadeProps as TransitionFadeProps };
