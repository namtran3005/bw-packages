import * as React from 'react';
import Fade, { FadeProps } from '@material-ui/core/Fade';
import Slide, { SlideProps } from '@material-ui/core/Slide';

const TransitionFade: React.ForwardRefExoticComponent<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FadeProps | { children?: any }
> = React.forwardRef((props, ref) => <Fade {...props} ref={ref} />);

const TransitionSlide: React.ForwardRefExoticComponent<SlideProps> = React.forwardRef(
  (props: SlideProps, ref) => <Slide {...props} ref={ref} />
);

export {
  TransitionSlide,
  SlideProps as TransitionSlideProps,
  TransitionFade,
  FadeProps as TransitionFadeProps,
};
