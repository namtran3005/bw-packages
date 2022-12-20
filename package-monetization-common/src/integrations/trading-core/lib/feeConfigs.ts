import { FeeConfigRecord } from '../types';
import { Handler } from './handler';

export class FeeConfigsHandler extends Handler {
  public async getFeeConfigs() : Promise<FeeConfigRecord[]> {
    return this.client.get<FeeConfigRecord[]>({path: 'fee_configs'});
  }
}
