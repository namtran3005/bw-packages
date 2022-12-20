import * as React from 'react';
import { Slide } from '@material-ui/core';
import { SlideProps } from '@material-ui/core/Slide';

const TransitionSlide: React.FunctionComponent<SlideProps> = (props) => (
  <Slide {...props} />
);

export { TransitionSlide, SlideProps as TransitionSlideProps };
