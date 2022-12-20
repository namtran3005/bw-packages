import { Health, Mifid, Users } from '@bitwala-cryptobank-squad/defi-proto';
import {
  GrpcClient,
  waitForChannelReady,
  InitParams,
  ConnectionEventType,
} from '@nuri/grpc-client';
import { HealthServiceClient, MifidServiceClient, UsersServiceClient } from './types';

export class DeFiCoreApi extends GrpcClient {
  public health: HealthServiceClient;
  public mifid: MifidServiceClient;
  public users: UsersServiceClient;


  // 30 seconds
  private healthCheckInterval = 30 * 1000;

  constructor(private readonly params: InitParams) {
    super(params);

    this.health = this.register<HealthServiceClient>(Health.HealthService);
    this.mifid = this.register<MifidServiceClient>(Mifid.MifidService);
    this.users = this.register<UsersServiceClient>(Users.UsersService);

    this.startHealthCheck();
  }

  private startHealthCheck() {
    setInterval(async () => {
      if (!this.channel) {
        return;
      }

      try {
        const now = new Date();
        const deadline = new Date(now.setSeconds(now.getSeconds() + 10));

        await waitForChannelReady(this.channel, deadline);

        const health = await this.health.getHealth({});
        if (!health?.isUp) {
          // TODO: Choose what exactly we want to do if the service is down
          // or add monitoring to this to handle a failure properly
          throw new Error('DeFi service is down');
        }

        this.params.onConnectionEvent?.({
          type: ConnectionEventType.Info,
          context: { message: 'DeFi health check executed with success' },
        });
      } catch (error) {
        this.params.onConnectionEvent?.({
          type: ConnectionEventType.Error,
          context: {
            error,
            message: `Failed to connect to DeFi service: ${this.channel.getTarget()}`,
          },
        });
      }
    }, this.healthCheckInterval);
  }
}
