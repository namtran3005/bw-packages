import { SignedApiClient } from './client';

export class SignedApi {
  public static getStatusValidator(codes: number[]) {
    return (status: number) => codes.includes(status);
  }
  private client: SignedApiClient;

  constructor(url: string, secret: string) {
    this.client = new SignedApiClient(url, secret);
  }

  public async callAPI(url: string, payload: any): Promise<boolean> {
    const res = await this.client.call({
      method: 'POST',
      url,
      data: payload,
      validateStatus: SignedApi.getStatusValidator([200, 404]),
    });
    return res.status === 200;
  }
}
