import { AxiosResponse } from 'axios';
import { Handler } from '../handler';
import { StatsResponse } from '../../types';
export class StatsHandler extends Handler {
  public fetchStats = async (): Promise<AxiosResponse<StatsResponse>> => {
    return this.client.get<StatsResponse>('stats');
  };
}
