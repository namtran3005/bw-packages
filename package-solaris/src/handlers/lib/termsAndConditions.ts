import * as queryString from 'querystring';
import {
  TermsAndConditionsItemType,
  TermsAndConditionsFilterType, TermsAndConditionsConsentInput,
} from '../../types';
import { Handler } from '../handler';

export class TermsAndConditionsHandler extends Handler {
  public async getAllBy(
    filter: TermsAndConditionsFilterType
  ): Promise<TermsAndConditionsItemType[]> {
    const params = queryString.stringify(filter);
    return this.client.get({
      url: `/terms_and_conditions_events?${params}`,
    });
  }

  public async setConsent(payload: TermsAndConditionsConsentInput): Promise<TermsAndConditionsItemType> {
    return this.client.post({
      url: '/terms_and_conditions_events',
      data: payload
    });
  }
}
