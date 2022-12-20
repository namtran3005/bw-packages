import { inspect } from 'util';
import {
  createLogger,
  format,
  transports,
  LogEntry,
  Logger as LoggerInstanceType,
  LeveledLogMethod,
} from 'winston';
import { NpmConfigSetLevels } from 'winston/lib/winston/config';
import { isObject } from './utils';

export interface LoggerInstance extends LoggerInstanceType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Loggers {
  [key: string]: LoggerInstance;
}

export const loggers: Loggers = {};

export const logger = (label: string): LoggerInstance => {
  const printObjsInLog = (message: object) =>
    inspect(message, {
      depth: null,
      colors: process.env.NODE_ENV === 'development',
      // we need this additional indentation for correct parsing by AWS Cloudwatch
    }).replace(/\n/g, `\n  `);
  const formatMessage = ({
    timestamp,
    level,
    label: logLabel,
    message,
    stack,
  }: LogEntry) =>
    stack
      ? `${timestamp} - ${level}: [${logLabel}] ${stack}`
      : `${timestamp} - ${level}: [${logLabel}] ${
          isObject(message)
            ? // Used pretty-print implementation from winston, to avoid printing extra informations like level, label, timestamp etc.
              `${printObjsInLog(message)}`
            : message
        }`;

  const devFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.label({ label }),
    format.printf(info => formatMessage(info))
  );

  const prodFormat = format.combine(
    format.timestamp(),
    format.label({ label }),
    format.printf(info => formatMessage(info))
  );

  if (!loggers[label]) {
    const winstonLogger: LoggerInstance = createLogger({
      // To preserve message of type Error
      format: format.errors({ stack: true }),
      transports: [
        new transports.Console({
          format:
            process.env.NODE_ENV === 'development' ? devFormat : prodFormat,
          // Do not print log during tests for better readability of errors
          silent:
            process.env.NODE_ENV === 'test' &&
            process.env.TEST_PLATFORM !== 'cypress',
          level:
            process.env.DEBUG === 'true' || process.env.DEBUG === 'TRUE'
              ? 'silly'
              : 'info',
        }),
      ],
    });

    // Override the default implementation for each leveled log method to handle multiple arguments
    // https://github.com/winstonjs/winston/blob/master/lib/winston/create-logger.js#L71
    Object.keys(winstonLogger.levels as NpmConfigSetLevels).forEach(
      (level: keyof NpmConfigSetLevels) => {
        const defaultLeveledLogMethod: LeveledLogMethod = winstonLogger[level];

        /**
         * Check if there are multiple arguments being passed
         * If NO then call the original leveled log method
         * If YES and first is string and second is string or numbers then concatenate them and pass them as new argument to the original leveled log method
         * If YES and not above then call the original leveled log method by passing them individually
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        winstonLogger[level] = (...args: any[]) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const callDefaultLeveledLogMethod = (...newArgs: any[]) =>
            newArgs.forEach(newArg => defaultLeveledLogMethod(newArg));

          if (args.length > 1) {
            const [firstArgs, secondArgs, ...remainingArgs] = args;
            const isFirstArgObj = isObject(firstArgs);
            if (
              (typeof firstArgs === 'string' || isFirstArgObj) &&
              ['string', 'number'].includes(typeof secondArgs)
            ) {
              const concatenatedStr = isFirstArgObj
                ? `${printObjsInLog(firstArgs)} ${secondArgs}`
                : `${firstArgs} ${secondArgs}`;
              return callDefaultLeveledLogMethod(
                concatenatedStr,
                ...remainingArgs
              );
            }
          }
          callDefaultLeveledLogMethod(...args);
        };
      }
    );

    loggers[label] = winstonLogger;
  }
  return loggers[label];
};
