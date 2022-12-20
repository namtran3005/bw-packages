import dfns from 'date-fns';
import { parseFromTimeZone } from 'date-fns-timezone';

type RangeOperator = '$gt' | '$lt' | '$lte' | '$gte';
type Sampling = '$first' | '$last';
type DateRangeQuery = Partial<Record<RangeOperator, Date>>;

/**
 * Aggregating data for graphs can be quite complex, so this complexity is hidden behind a 'preset' concept.
 *
 * Data sets, typically needed for the graph are defined as presets,
 * so the domain layer doesn't care how exactly is that data stored and retrieved.
 *
 * For future extensibility a suggested way can be adding more presets, and/or implementing
 * a parameterized 'custom' preset, which would allow to specify the time range and granularity.
 */

export type Interval = 'm5' | 'm30' | 'd1';

export const intervals: Record<Interval, number> = {
  m5: 5 * 60 * 1e3,
  m30: 30 * 60 * 1e3,
  d1: 24 * 60 * 60 * 1e3,
};

export enum PresetName {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export interface PresetDefinition {
  match: { date: DateRangeQuery };
  filter: { t: DateRangeQuery };
  interval: number;
  sampling: Sampling;
}

/**
 * If an EoD price is queried, EoD can mean different time and date depending on the TZ.
 * To reduce the number of inconsistencies (e.g. due to VPN usage), it's agreed to always use Europe/Berlin as the default TZ.
 */
export const timezone = 'Europe/Berlin';

export const getNow = () => new Date();

export const presets = {
  [PresetName.DAY]: () => ({
    match: {
      date: {
        $gte: new Date(
          parseFromTimeZone(dfns.startOfDay(getNow()).toISOString(), {
            timeZone: timezone,
          }).setUTCHours(0, 0, 0, 0)
        ),
        $lt: parseFromTimeZone(dfns.endOfDay(getNow()).toISOString(), {
          timeZone: timezone,
        }),
      },
    },
    filter: {
      t: {
        $gte: parseFromTimeZone(dfns.startOfDay(getNow()).toISOString(), {
          timeZone: timezone,
        }),
        $lt: parseFromTimeZone(dfns.endOfDay(getNow()).toISOString(), {
          timeZone: timezone,
        }),
      },
    },
    interval: intervals.m5,
    sampling: '$last',
  }),
  [PresetName.WEEK]: () => ({
    match: {
      date: {
        $gte: new Date(
          parseFromTimeZone(
            dfns.startOfDay(dfns.subWeeks(getNow(), 1)).toISOString(),
            { timeZone: timezone }
          ).setUTCHours(0, 0, 0, 0)
        ),
        $lt: parseFromTimeZone(dfns.endOfDay(getNow()).toISOString(), {
          timeZone: timezone,
        }),
      },
    },
    filter: {
      t: {
        $gte: parseFromTimeZone(
          dfns.startOfDay(dfns.subWeeks(getNow(), 1)).toISOString(),
          { timeZone: timezone }
        ),
        $lt: parseFromTimeZone(getNow().toISOString(), {
          timeZone: timezone,
        }),
      },
    },
    interval: intervals.m30,
    sampling: '$last',
  }),
  [PresetName.MONTH]: () => ({
    match: {
      date: {
        $gte: new Date(
          parseFromTimeZone(
            dfns.startOfDay(dfns.subMonths(getNow(), 1)).toISOString(),
            { timeZone: timezone }
          ).setUTCHours(0, 0, 0, 0)
        ),
        // If prices are sampled by EoD the last data point should be the yesterday's EoD
        $lt: parseFromTimeZone(dfns.startOfDay(getNow()).toISOString(), {
          timeZone: timezone,
        }),
      },
    },
    filter: {
      t: {
        $gte: parseFromTimeZone(dfns.subMonths(getNow(), 1).toISOString(), {
          timeZone: timezone,
        }),
        // If prices are sampled by EoD the last data point should be the yesterday's EoD
        $lt: parseFromTimeZone(dfns.startOfDay(getNow()).toISOString(), {
          timeZone: timezone,
        }),
      },
    },
    interval: intervals.d1,
    sampling: '$last',
  }),
  [PresetName.YEAR]: () => ({
    match: {
      date: {
        $gte: new Date(
          parseFromTimeZone(
            dfns.startOfDay(dfns.subYears(getNow(), 1)).toISOString(),
            { timeZone: timezone }
          ).setUTCHours(0, 0, 0, 0)
        ),
        // If prices are sampled by EoD the last data point should be the yesterday's EoD
        $lt: parseFromTimeZone(dfns.startOfDay(getNow()).toISOString(), {
          timeZone: timezone,
        }),
      },
    },
    filter: {
      t: {
        $gte: parseFromTimeZone(
          dfns.startOfDay(dfns.subYears(getNow(), 1)).toISOString(),
          { timeZone: timezone }
        ),
        // If prices are sampled by EoD the last data point should be the yesterday's EoD
        $lt: parseFromTimeZone(dfns.startOfDay(getNow()).toISOString(), {
          timeZone: timezone,
        }),
      },
    },
    interval: intervals.d1,
    sampling: '$last',
  }),
};
