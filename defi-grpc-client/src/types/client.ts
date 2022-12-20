import { Health, Mifid, Users } from '@bitwala-cryptobank-squad/defi-proto';
import { Client } from '@nuri/grpc-client';

export type HealthServiceClient = Client<typeof Health.HealthService>;
export type MifidServiceClient = Client<typeof Mifid.MifidService>;
export type UsersServiceClient = Client<typeof Users.UsersService>;
