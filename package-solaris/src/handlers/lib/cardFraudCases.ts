import { Handler } from '../handler';
import { CardFraudCase } from '../../types';

export class CardFraudCasesHandler extends Handler {
  public confirmFraud(
    cardId: string,
    cardFraudCaseId: string
  ): Promise<Pick<CardFraudCase, 'solarisId' | 'resolution'>> {
    return this.client.post({
      url: `/cards/${cardId}/fraud_cases/${cardFraudCaseId}/confirm`,
    });
  }

  public whitelistCard(
    cardId: string,
    cardFraudCaseId: string
  ): Promise<
    Pick<CardFraudCase, 'solarisId' | 'resolution' | 'whitelistedUntil'>
  > {
    return this.client.post({
      url: `/cards/${cardId}/fraud_cases/${cardFraudCaseId}/whitelist`,
    });
  }
}
