import { SolarisApiClient } from './client';
import { ClientCreds, ISolaris } from './iSolaris';

export * from './types';
export * from './validations';
export * from './errors';
export * from './iSolaris';

export const solarisClientFactory = (creds: ClientCreds): ISolaris =>
  new SolarisApiClient(creds);

export { Solaris } from './api';
