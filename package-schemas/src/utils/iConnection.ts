import * as mongoose from 'mongoose';

export enum ConnectionStatus {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
}

export interface IConnection {
  db: mongoose.Connection;
  status: ConnectionStatus;
  /**
   * Opens the connection to MongoDB.
   */
  connect(
    connectionString: string,
    options?: mongoose.ConnectionOptions
  ): Promise<mongoose.Connection>;

  /**
   * Close the connection to MongoDB.
   */
  close(): Promise<void>;

  ensureIsConnected(
    connectionString: string,
    connectionOptions?: mongoose.ConnectionOptions
  ): Promise<unknown>;
}
