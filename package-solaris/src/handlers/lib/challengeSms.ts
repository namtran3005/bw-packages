import { ResolveChallengeSms } from '../../types/entities/lib/challengeSms';
import { Handler } from '../handler';

export class ChallengeSmsHandler extends Handler {
  public sendChallengeSms(personId: string): Promise<ResolveChallengeSms> {
    return this.client.post({
      url: '/mfa/challenges/sms',
      data: { personId },
    });
  }

  public async verifyChallengeSms(
    smsId: string,
    code: string
  ): Promise<boolean> {
    try {
      const result = await this.client.put({
        url: `/mfa/challenges/sms/${smsId}`,
        data: { code },
      });
      return result.status === 204;
    } catch (error) {
      return false;
    }
  }
}
