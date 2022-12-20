import * as mongoose from 'mongoose';
import { logger } from '@bitwala-cryptobank-squad/package-logger';
import { ConnectionStatus, IConnection } from './';

const log = logger('DATABASES.CONNECTION');

export class Connection implements IConnection {
  public db: mongoose.Connection;
  public status: ConnectionStatus;

  constructor(mongooseInstance: mongoose.Mongoose) {
    log.info('New mongo connection intiated');
    this.status = ConnectionStatus.DISCONNECTED;

    this.db = mongooseInstance.createConnection();

    this.db.on(ConnectionStatus.CONNECTING, () =>
      this.setStatus(ConnectionStatus.CONNECTING)
    );
    this.db.on(ConnectionStatus.CONNECTED, () =>
      this.setStatus(ConnectionStatus.CONNECTED)
    );
    this.db.on(ConnectionStatus.DISCONNECTED, () =>
      this.setStatus(ConnectionStatus.DISCONNECTED)
    );
  }

  public connect(
    connectionString: string,
    options?: mongoose.ConnectionOptions
  ): Promise<mongoose.Connection> {
    return this.db.openUri(connectionString, {
      useNewUrlParser: true,
      ...options,
    });
  }

  /**
   * Close the connection to MongoDB.
   */
  public close(): Promise<void> {
    return this.db.close();
  }

  public async ensureIsConnected(
    connectionString: string,
    connectionOptions?: mongoose.ConnectionOptions
  ): Promise<unknown> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      if (this.status === ConnectionStatus.CONNECTED) {
        return resolve(undefined);
      } else if (this.status !== ConnectionStatus.CONNECTING) {
        this.db.openUri(connectionString, connectionOptions);
        return resolve(undefined);
      }
      this.db.once(ConnectionStatus.CONNECTED, resolve);
    });
  }

  private setStatus(status: ConnectionStatus) {
    this.status = status;
  }
}
