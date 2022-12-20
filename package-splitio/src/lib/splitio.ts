import { SplitFactory } from '@splitsoftware/splitio';
import {
  IClient,
  INodeSettings,
  Properties,
  TreatmentWithConfig,
  TreatmentsWithConfig,
} from '@splitsoftware/splitio/types/splitio';
import { logger } from '@bitwala-cryptobank-squad/package-logger';

export enum TrafficType {
  USER = 'user',
  ANONYMOUS = 'anonymous',
  ACCOUNT = 'account',
}

export class SplitIo {
  private static instance: SplitIo = new SplitIo();
  private _client: IClient | null = null;

  public logger = logger('SPLIT_IO');

  constructor() {
    if (SplitIo.instance) {
      throw new Error(
        'Error: Instantiation failed: Use Split.getInstance() instead of new.'
      );
    }
    SplitIo.instance = this;
  }

  public init(settings: INodeSettings): Promise<void> {
    this.logger.info('init');

    const factory = SplitFactory(settings);

    const client: IClient = factory.client();

    return new Promise((resolve) => {
      client.on(client.Event.SDK_READY, () => {
        this.logger.info('Event received: SDK_READY');

        this._client = client;
        resolve();
      });

      client.on(client.Event.SDK_READY_FROM_CACHE, () => {
        this.logger.info('Event received: SDK_READY_FROM_CACHE');

        this._client = client;
        resolve();
      });

      client.on(client.Event.SDK_READY_TIMED_OUT, () => {
        this.logger.error('Event received: SDK_READY_TIMED_OUT');

        resolve();
      });
    });
  }

  public static getInstance(): SplitIo {
    return SplitIo.instance;
  }

  public get client() {
    return this._client;
  }

  public set client(client: IClient | null) {
    this._client = client;
  }

  public getTreatment(splitName: string, splitIoId?: string): string | null {
    if (!this.client) {
      this.logger.error(
        `Failed to get treatment: ${splitName}. Client is undefined`
      );

      return null;
    }

    const treatment = this.client.getTreatment(splitIoId || 'user', splitName);

    if (!treatment || treatment === 'control') {
      this.logger.error(
        `Failed to get treatment: ${splitName}. Value is ${treatment}`
      );

      return null;
    }

    return treatment;
  }

  public getTreatmentWithConfig(
    splitName: string,
    splitIoId?: string
  ): TreatmentWithConfig | null {
    if (!this.client) {
      this.logger.error(
        `Failed to get treatment: ${splitName}. Client is undefined`
      );

      return null;
    }

    const treatmentWithConfig = this.client.getTreatmentWithConfig(
      splitIoId || 'user',
      splitName
    );

    if (!treatmentWithConfig || treatmentWithConfig?.treatment === 'control') {
      this.logger.error(
        `Failed to get treatment: ${splitName}. Value is ${treatmentWithConfig?.treatment}`
      );

      return null;
    }

    return treatmentWithConfig;
  }

  public getTreatments(
    splitNames: string[],
    splitIoId?: string
  ): Record<string, string> {
    if (!this.client) {
      this.logger.error(
        `Failed to get treatment: ${splitNames}. Client is undefined`
      );

      return {};
    }

    return this.client.getTreatments(splitIoId || 'user', splitNames, {
      system_time: Date.now(),
    });
  }

  public getTreatmentsWithConfig(
    splitNames: string[],
    splitIoId?: string
  ): TreatmentsWithConfig | null {
    if (!this.client) {
      this.logger.error(
        `Failed to get treatment: ${splitNames}. Client is undefined`
      );

      return null;
    }

    return this.client.getTreatmentsWithConfig(
      splitIoId || 'user',
      splitNames,
      {
        system_time: Date.now(),
      }
    );
  }

  public sendEvent(
    id: string,
    trafficType: TrafficType,
    eventName: string,
    eventValue: number | undefined,
    extraProperties: Properties | undefined
  ): boolean {
    if (!this.client) {
      this.logger.error(
        `Failed to initialize splitio client. Client is undefined`
      );
      return false;
    }

    return this.client.track(
      id,
      trafficType,
      eventName,
      eventValue,
      extraProperties
    );
  }
}

export const splitIo = SplitIo.getInstance();
