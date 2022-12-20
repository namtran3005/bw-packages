import { TermsAndConditionsHandler } from '../termsAndConditions';
import {
  solarisClientFactory,
  TermsAndConditionsEventType,
  TermsAndConditionsProductNameType,
} from '../../..';
import { Handler } from '../../handler';

const client = solarisClientFactory({
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
});
const termsAndConditions = new TermsAndConditionsHandler(client);

const termsAndConditionsUrl = '/terms_and_conditions_events';
const payload = {
  documentId: 'document_id',
  eventTimestamp: '2020-02-12T17:28:53Z',
  eventType: TermsAndConditionsEventType.APPROVED,
  signedBy: 'solaris_person_id',
  productName: TermsAndConditionsProductNameType.DIGITAL_BANKING,
};

describe('Terms And Conditions handlers', () => {
  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be an instance of Handler class', () => {
    expect(termsAndConditions).toBeInstanceOf(Handler);
  });

  it('should GET from /terms_and_conditions_events?', () => {
    termsAndConditions.getAllBy({});
    expect(client.get).toBeCalledWith({
      url: `${termsAndConditionsUrl}?`,
    });
  });

  it('should GET from /terms_and_conditions_events?filter[document_id]=', () => {
    termsAndConditions.getAllBy({
      'filter[document_id]': 'document_id',
    });
    expect(client.get).toBeCalledWith({
      url: `${termsAndConditionsUrl}?filter%5Bdocument_id%5D=document_id`,
    });
  });

  it('should GET from /terms_and_conditions_events?filter[document_id]=&filter[signed_by]=', () => {
    termsAndConditions.getAllBy({
      'filter[document_id]': 'document_id',
      'filter[signed_by]': 'solaris_person_solaris_id',
    });
    expect(client.get).toBeCalledWith({
      url: `${termsAndConditionsUrl}?filter%5Bdocument_id%5D=document_id&filter%5Bsigned_by%5D=solaris_person_solaris_id`,
    });
  });

  it('should POST to /terms_and_conditions_events', () => {
    termsAndConditions.setConsent(payload);
    expect(client.post).toBeCalledWith({
      url: `${termsAndConditionsUrl}`,
      data: payload,
    });
  });
});
