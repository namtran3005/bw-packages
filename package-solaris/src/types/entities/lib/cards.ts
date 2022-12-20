export enum CardType {
  MASTERCARD_DEBIT = 'MASTERCARD_DEBIT',
  MASTERCARD_BUSINESS_DEBIT = 'MASTERCARD_BUSINESS_DEBIT',
  VISA_DEBIT = 'VISA_DEBIT',
}

export enum CardStatus {
  PROCESSING = 'PROCESSING',
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
  ACTIVATION_BLOCKED_BY_SOLARIS = 'ACTIVATION_BLOCKED_BY_SOLARIS',
  BLOCKED = 'BLOCKED',
  BLOCKED_BY_SOLARIS = 'BLOCKED_BY_SOLARIS',
  CLOSED = 'CLOSED',
  CLOSED_BY_SOLARIS = 'CLOSED_BY_SOLARIS',
}

export interface CardRepresentation {
  maskedPan: string;
  line1: string;
  formattedExpirationDate: string;
}

export interface Card {
  solarisId: string;
  type?: CardType;
  status: CardStatus;
  expirationDate?: Date;
  personId?: string;
  businessId?: string | null;
  representation?: CardRepresentation;
  reference?: string | null;
}

export interface CardInput {
  type: CardType;
  pin: string;
  line1: string;
  reference: string;
}

export enum CardLimitsType {
  CARD_PRESENT = 'CARD_PRESENT',
  CARD_NOT_PRESENT = 'CARD_NOT_PRESENT',
}

export enum CardLimitsTimePeriod {
  DAILY = 'DAILY',
  MONTHLY = 'MONTHLY',
}

export interface CardLimitsItem {
  maxAmountCents: number;
  maxTransactions: number;
}

export interface CardLimitsDescriptor {
  daily: CardLimitsItem;
  monthly: CardLimitsItem;
}

export interface CardLimits {
  cardPresent?: CardLimitsDescriptor;
  cardNotPresent?: CardLimitsDescriptor;
}

export enum CardAuthorizationDeclineReason {
  // Failed online authentication. Please try again.
  AUTHENTICATION_REQUIRED = 'AUTHENTICATION_REQUIRED',
  // Something went wrong. Contact us for further details.
  CARD_BLOCKED = 'CARD_BLOCKED',
  // Something went wrong. Contact us for further details.
  ACCOUNT_CLOSED = 'ACCOUNT_CLOSED',
  // Account limit reached. Please contact us for further details.
  ACCOUNT_LIMIT_REACHED = 'ACCOUNT_LIMIT_REACHED',
  // Incorrect card details provided. Please try again.
  EXPIRY_DATE_INVALID = 'EXPIRY_DATE_INVALID',
  // Card not active. Please activate your card and try again.
  CARD_INACTIVE = 'CARD_INACTIVE',
  // Daily card limit exceeded. Please review the card limits and try again.
  CARD_NOT_PRESENT_AMOUNT_LIMIT_REACHED_DAILY = 'CARD_NOT_PRESENT_AMOUNT_LIMIT_REACHED_DAILY',
  // Monthly card limit exceeded. Please review the card limits and try again.
  CARD_NOT_PRESENT_AMOUNT_LIMIT_REACHED_MONTHLY = 'CARD_NOT_PRESENT_AMOUNT_LIMIT_REACHED_MONTHLY',
  // Daily card limit exceeded. Please review the card limits and try again.
  CARD_NOT_PRESENT_USE_LIMIT_REACHED_DAILY = 'CARD_NOT_PRESENT_USE_LIMIT_REACHED_DAILY',
  // Monthly card limit exceeded. Please review the card limits and try again.
  CARD_NOT_PRESENT_USE_LIMIT_REACHED_MONTHLY = 'CARD_NOT_PRESENT_USE_LIMIT_REACHED_MONTHLY',
  // Daily card limit exceeded. Please review the card limits and try again.
  CARD_PRESENT_AMOUNT_LIMIT_REACHED_DAILY = 'CARD_PRESENT_AMOUNT_LIMIT_REACHED_DAILY',
  // Monthly card limit exceeded. Please review the card limits and try again.
  CARD_PRESENT_AMOUNT_LIMIT_REACHED_MONTHLY = 'CARD_PRESENT_AMOUNT_LIMIT_REACHED_MONTHLY',
  // Daily card limit exceeded. Please review the card limits and try again.
  CARD_PRESENT_USE_LIMIT_REACHED_DAILY = 'CARD_PRESENT_USE_LIMIT_REACHED_DAILY',
  // Monthly card limit exceeded. Please review the card limits and try again.
  CARD_PRESENT_USE_LIMIT_REACHED_MONTHLY = 'CARD_PRESENT_USE_LIMIT_REACHED_MONTHLY',
  // Daily limit for Cash withdrawals has been reached. Contact us for further details.
  CASH_ADVANCE_AMOUNT_LIMIT_REACHED_DAILY = 'CASH_ADVANCE_AMOUNT_LIMIT_REACHED_DAILY',
  // Monthly limit for Cash withdrawals has been reached. Contact us for further details.
  CASH_ADVANCE_AMOUNT_LIMIT_REACHED_MONTHLY = 'CASH_ADVANCE_AMOUNT_LIMIT_REACHED_MONTHLY',
  // There was an issue with the merchant terminal. Please try again.
  TERMINAL_ERROR = 'TERMINAL_ERROR',
  // Incorrect card details provided. Please try again.
  CVV_INCORRECT = 'CVV_INCORRECT',
  // There was an issue with the merchant terminal. Please try again.
  // NOT A TYPO! This is how it is in Solaris documentation.
  DUPLICATE_TRASACTION = 'DUPLICATE_TRASACTION',
  // Incorrect PIN entered. Please try again.
  PIN_INCORRECT = 'PIN_INCORRECT',
  // Balance is too low. Top up your account and try again.
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  // Something went wrong. Contact us for further details.
  CONTACT_BANK = 'CONTACT_BANK',
  // Card is blocked due to incorrect PIN attempts. Please reset the PIN and try again.
  INVALID_PIN_BLOCKED = 'INVALID_PIN_BLOCKED',
  // Something went wrong. Contact us for further details.
  FRAUD_SUSPECTED = 'FRAUD_SUSPECTED',
  // There was an issue with the merchant terminal. Please try again.
  PIN_ENTRY_TIMEOUT = 'PIN_ENTRY_TIMEOUT',
  // We encountered a problem while trying to approve your transaction. Please try again inserting the card in the merchant terminal.
  RETRY_WITH_CHIP_AND_PIN = 'RETRY_WITH_CHIP_AND_PIN',
  // We could not approve your transaction because the merchant did not provide correct authentication information. Please try again.
  _3DS_FAILED = '3DS_FAILED',
  //When an ecommerce authorization by PSP (payment service provider) does not include SCA (strong customer authentication) and an exception is not available, Issuer is required to decline this authorization. Merchants can start a new one during the same checkout session giving the customer the impression that a purchase has not been declined. This applies for card authorizations and bookings.
  SCA_REQUIRED = 'SCA_REQUIRED',
}
export type CardAuthorizationDeclineExtendedReason =
  | CardAuthorizationDeclineReason.CARD_INACTIVE
  | CardAuthorizationDeclineReason.CARD_NOT_PRESENT_USE_LIMIT_REACHED_DAILY
  | CardAuthorizationDeclineReason.CARD_NOT_PRESENT_USE_LIMIT_REACHED_MONTHLY
  | CardAuthorizationDeclineReason.CARD_PRESENT_USE_LIMIT_REACHED_DAILY
  | CardAuthorizationDeclineReason.CARD_PRESENT_USE_LIMIT_REACHED_MONTHLY
  | CardAuthorizationDeclineReason.CASH_ADVANCE_AMOUNT_LIMIT_REACHED_DAILY
  | CardAuthorizationDeclineReason.CASH_ADVANCE_AMOUNT_LIMIT_REACHED_MONTHLY
  | CardAuthorizationDeclineReason.INSUFFICIENT_FUNDS
  | CardAuthorizationDeclineReason._3DS_FAILED;

export enum CardTransactionMetadataPosEntryMode {
  // Payment conducted using the chip on the card
  CHIP = 'CHIP',
  // Payment conducted using the NFC module on the card
  CONTACTLESS = 'CONTACTLESS',
  // Payment conducted using the magnetic stripe on the card
  MAG_STRIPE = 'MAG_STRIPE',
  // Payment conducted by submitting the card details without using the physical card itself. This usually happens in context of e-commerce purchases
  CARD_NOT_PRESENT = 'CARD_NOT_PRESENT',
  // Payment conducted by communicating the card details to the acquiring bank via telephone
  PHONE = 'PHONE',
  // Unspecified, data not available
  UNKNOWN = 'UNKNOWN',
  // Something new and broke our server
  CREDENTIAL_ON_FILE = 'CREDENTIAL_ON_FILE',
  MANUAL_PAN_ENTRY = 'MANUAL_PAN_ENTRY',
  ECOMMERCE = 'ECOMMERCE',
}

export enum CardTransactionMetadataTransactionType {
  // Purchase conducted at a POS or via e-commerce
  PURCHASE = 'PURCHASE',
  // Money withdrawn at an ATM
  CASH_ATM = 'CASH_ATM',
  // Money withdrawn at the counter of a bank
  CASH_MANUAL = 'CASH_MANUAL',
  // Money returned to the cardholder, for example due to a refund
  CREDIT_PRESENTMENT = 'CREDIT_PRESENTMENT',
  // Unspecified, data not available
  UNKNOWN = 'UNKNOWN',
  AFT = 'AFT',
  OCT = 'OCT',
  BALANCE_INQUIRY = 'BALANCE_INQUIRY',
  INQUIRY = 'INQUIRY',
}

export interface CardTransactionMetadata {
  // solarisBank card UID of the card that was used for conducting the payment.
  cardId: string;
  // Type of the card payment
  type: CardTransactionMetadataTransactionType;
  status: string;
  attemptedAt: Date;
  // Used Point Of Sale method for the card payment. Please find a list of all possible values below
  posEntryMode: CardTransactionMetadataPosEntryMode;
  merchant: {
    countryCode: string;
    categoryCode: string;
    name: string;
  };
  amount: {
    currency: string;
    value: number;
    precision?: number;
  };
  originalAmount: {
    currency: string;
    value: number;
    precision?: number;
  };
}

export interface CardAuthorizationMetaInfoParsed {
  cards: {
    card_id: string;
    merchant: {
      id: string;
      country_code?: string | null;
      category_code?: string | null;
      name?: string | null;
      town?: string | null;
    };
    original_amount: {
      currency: string;
      value: number;
      fx_rate?: number;
      fx_markup?: number | null;
      issuer_fee?: number;
    };
    pos_entry_mode: CardTransactionMetadataPosEntryMode;
    trace_id: string;
    transaction_date: Date;
    transaction_time: Date;
    transaction_type: CardTransactionMetadataTransactionType;
  };
}
