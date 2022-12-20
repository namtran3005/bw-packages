import { logger, LoggerInstance } from '@bitwala-cryptobank-squad/package-logger';
import {
  EmailInterface,
  PushInterface, RawEmailInterface, SMSInterface
} from './interfaces';

export * from './PushCommunicationsInterface';
export * from './EmailCommunicationsInterface';
export * from './interfaces';
export * from './notificationsMap';

export abstract class CommunicationBase {
  protected log: LoggerInstance;

  constructor(loggerLabel: string) {
    this.log = logger(loggerLabel);
  }

  protected isDeployed():boolean{
    return ['staging', 'production'].includes(process.env.NODE_ENV) ||
    process.env.NODE_ENV.startsWith('playground-');
  }

  protected logCommunication(
    params: EmailInterface | RawEmailInterface | SMSInterface | PushInterface,
    transportationMethod: string,
    debug: boolean = true
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const objToLog: any = {
      transportationMethod,
      ...params,
    };
    if (debug) {
      this.log.debug(objToLog);
    } else {
      this.log.info(objToLog);
    }
  }
}
