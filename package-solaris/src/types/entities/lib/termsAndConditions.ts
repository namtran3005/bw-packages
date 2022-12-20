export enum TermsAndConditionsEventType {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export enum TermsAndConditionsProductNameType {
  DIGITAL_BANKING = 'DIGITAL_BANKING',
}
export type TermsAndConditionsFilterType = {
  'filter[id]'?: string;
  'filter[document_id]'?: string;
  'filter[event_timestamp][min]'?: string;
  'filter[event_timestamp][max]'?: string;
  'filter[event_type]'?: TermsAndConditionsEventType;
  'filter[product_name]'?: TermsAndConditionsProductNameType;
  'filter[signed_by]'?: string;
  'filter[signed_on_behalf_of]'?: string;
};

export interface TermsAndConditionsConsentInput {
  documentId: string;
  eventTimestamp: string;
  eventType: TermsAndConditionsEventType;
  signedBy: string;
  productName: TermsAndConditionsProductNameType;
}

export interface TermsAndConditionsItemType
  extends TermsAndConditionsConsentInput {
  solarisId: string;
  createdAt: Date;
  signedOnBehalfOf: string;
}
