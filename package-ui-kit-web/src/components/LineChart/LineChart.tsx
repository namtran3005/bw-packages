import React from 'react';
import { debounce } from 'throttle-debounce';
import {
  VictoryChart,
  VictoryAxis,
  VictoryArea,
  VictoryVoronoiContainer,
} from 'victory';

import { Colors } from '@bitwala-cryptobank-squad/package-theme';

const chartStyle = () => ({
  data: {
    stroke: Colors.get('primaryGreen'),
    strokeWidth: 1.5,
    fill: Colors.get('primaryGreen'),
    strokeLinejoin: 'round',
    overflow: 'visible',
  },
});

const axisXStyle = () => ({
  axis: {
    stroke: 'none',
  },
  ticks: {
    stroke: 'none',
  },
  tickLabels: {
    fill: Colors.get('text'),
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export interface DataPoint {
  t: string;
  p: number;
}

interface Props {
  chartData: DataPoint[];
  chartHeight: number;
  labelComponent?: React.ReactElement<{ dateFormat?: string }>;
  getPeriodLabels: (t: number) => string;
}

const calculateChart = debounce(
  200,
  false,
  ({ isMounted, chartData, setChartState }) => {
    if (!isMounted || !chartData || chartData.length < 1) return;
    const yValues = chartData.map((el: DataPoint) => el.p);
    const minY = Math.min.apply(undefined, yValues);
    const maxY = Math.max.apply(undefined, yValues);
    setChartState({ chartData, minY, maxY });
  }
);

const initialChartState = {
  chartData: [],
  minY: 0,
  maxY: 0,
};

export const LineChart = (props: Props) => {
  const {
    chartData: chartDataProps,
    chartHeight,
    labelComponent,
    getPeriodLabels,
  } = props;

  const [isMounted, setIsMounted] = React.useState(false);

  const [{ chartData, minY, maxY }, setChartState] = React.useState(
    initialChartState
  );

  React.useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, [setIsMounted]);

  React.useEffect(() => {
    calculateChart({
      isMounted,
      chartData: chartDataProps,
      setChartState,
    });
    return () => {
      setChartState(initialChartState);
    };
  }, [chartDataProps, chartDataProps.length, setChartState, isMounted]);

  const displayLabels = () => '';

  const getTickValues = (data: DataPoint[]) => {
    // creates 4 evenly spaced labels for x axis
    const fractions = [1 / 8, 3 / 8, 5 / 8, 7 / 8];
    const firstDate = Number(data[0].t);
    const lastDate = Number(data[data.length - 1].t);
    const tickValues = fractions.map((fraction) => {
      const rawTickValue = firstDate + (lastDate - firstDate) * fraction;
      const roundedTickValue = rawTickValue - (rawTickValue % 300000); // time value truncated to 5 mins chunk
      return roundedTickValue;
    });
    return tickValues;
  };

  return (
    <React.Fragment>
      {chartData.length > 0 ? (
        <VictoryChart
          minDomain={{ y: minY }}
          maxDomain={{ y: maxY }}
          style={{
            parent: { marginTop: 0, marginBottom: -4 },
          }}
          domainPadding={0}
          padding={{ top: 12 }}
          height={chartHeight}
          containerComponent={
            <VictoryVoronoiContainer
              labels={labelComponent && displayLabels}
              labelComponent={labelComponent && labelComponent}
              voronoiDimension="x"
            />
          }
        >
          <VictoryArea
            name="PriceChart"
            style={chartStyle()}
            data={chartData}
            x="t"
            y="p"
            interpolation="natural"
            animate={{
              delay: 0,
              duration: 20,
              easing: 'cubicIn',
              onLoad: { duration: 500 },
            }}
          />
          <VictoryAxis
            minDomain={{ x: 0 }}
            offsetY={35}
            tickValues={chartData.length > 0 ? getTickValues(chartData) : []}
            tickFormat={getPeriodLabels}
            style={axisXStyle()}
          />
        </VictoryChart>
      ) : (
        <div style={{ minHeight: chartHeight + 12 }} />
      )}
    </React.Fragment>
  );
};
