import * as React from 'react';

import {
  Root,
  RootProps as BackgroundImageProps,
} from './BackgroundImage.styled';

const BackgroundImage: React.FunctionComponent<BackgroundImageProps> = (
  props
) => <Root {...props}>{props.children}</Root>;

export { BackgroundImage, BackgroundImageProps };
