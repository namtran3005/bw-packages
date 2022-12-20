import * as React from 'react';

interface CarouselItemProps {
  children?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const CarouselItem: React.FunctionComponent<CarouselItemProps> = (props) => (
  <div {...props} />
);

export { CarouselItem, CarouselItemProps };
