import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { CarouselItem, CarouselItemProps } from '../CarouselItem';
import {
  Root,
  RootProps,
  RootIndicator,
  RootIndicatorItem,
  RootIndicatorItemDot,
} from './Carousel.styled';

interface CarouselProps extends RootProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: React.ReactElement<any>;
  onChange(currentStep: number): void;
}

class Carousel extends React.Component<CarouselProps> {
  public static Item = CarouselItem;

  public constructor(props: CarouselProps) {
    super(props);

    this.indicatorItemOnClickHandler = this.indicatorItemOnClickHandler.bind(
      this
    );
    this.renderIndicatorItem = this.renderIndicatorItem.bind(this);
  }

  public indicatorItemOnClickHandler(index: number): void {
    const { onChange } = this.props;
    onChange(index);
  }

  public renderIndicatorItem(index: number): JSX.Element {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const { children, onChange, ...cleanProps } = this.props;

    return (
      <RootIndicatorItem
        {...cleanProps}
        onClick={this.indicatorItemOnClickHandler.bind(this, index)}
      >
        <RootIndicatorItemDot {...cleanProps} />
      </RootIndicatorItem>
    );
  }

  public render(): JSX.Element {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const { children, onChange, ...cleanProps } = this.props;

    return (
      <Root {...cleanProps}>
        <SwipeableViews index={this.props.index} animateHeight={false} disabled>
          {children}
        </SwipeableViews>

        <RootIndicator {...cleanProps}>
          {React.Children.map(children, (child, index) =>
            this.renderIndicatorItem(index)
          )}
        </RootIndicator>
      </Root>
    );
  }
}

export { Carousel, CarouselProps, CarouselItem, CarouselItemProps };
