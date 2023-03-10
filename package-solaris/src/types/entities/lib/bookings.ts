import * as yup from 'yup';
import { bookingValidationSchema, MoneyAmount } from '../../..';

export enum BookingType {
  SEPA_CREDIT_TRANSFER = 'SEPA_CREDIT_TRANSFER',
  CREDIT_TRANSFER_CANCELLATION = 'CREDIT_TRANSFER_CANCELLATION',
  SEPA_CREDIT_TRANSFER_RETURN = 'SEPA_CREDIT_TRANSFER_RETURN',
  CANCELLATION_SEPA_CREDIT_TRANSFER_RETURN = 'CANCELLATION_SEPA_CREDIT_TRANSFER_RETURN',
  DIRECT_DEBIT = 'DIRECT_DEBIT',
  SEPA_DIRECT_DEBIT = 'SEPA_DIRECT_DEBIT',
  CANCELLATION_DIRECT_DEBIT = 'CANCELLATION_DIRECT_DEBIT',
  CANCELLATION_SEPA_DIRECT_DEBIT = 'CANCELLATION_SEPA_DIRECT_DEBIT',
  SEPA_DIRECT_DEBIT_RETURN = 'SEPA_DIRECT_DEBIT_RETURN',
  CANCELLATION_SEPA_DIRECT_DEBIT_RETURN = 'CANCELLATION_SEPA_DIRECT_DEBIT_RETURN',
  CANCELLATION_DOUBLE_BOOKING = 'CANCELLATION_DOUBLE_BOOKING',
  CANCELLATION_BOOKING = 'CANCELLATION_BOOKING',
  CARD_TRANSACTION = 'CARD_TRANSACTION',
  CANCELLATION_CARD_TRANSACTION = 'CANCELLATION_CARD_TRANSACTION',
  CARD_TRANSACTION_DIRECT = 'CARD_TRANSACTION_DIRECT',
  CANCELLATION_CARD_TRANSACTION_DIRECT = 'CANCELLATION_CARD_TRANSACTION_DIRECT',
  CHARGE_CARD = 'CHARGE_CARD',
  CANCELLATION_CHARGE_CARD = 'CANCELLATION_CHARGE_CARD',
  INTERNATIONAL_CREDIT_TRANSFER = 'INTERNATIONAL_CREDIT_TRANSFER',
  CANCELLATION_INTERNATIONAL_CREDIT_TRANSFER = 'CANCELLATION_INTERNATIONAL_CREDIT_TRANSFER',
  FOREIGN_PAYMENT = 'FOREIGN_PAYMENT',
  INTEREST_ACCRUED = 'INTEREST_ACCRUED',
  CANCELLATION_INTEREST_ACCRUED = 'CANCELLATION_INTEREST_ACCRUED',
  REBOOKING = 'REBOOKING',
  CANCELLATION_REBOOKING = 'CANCELLATION_REBOOKING',
  REBOOKING_INTEREST = 'REBOOKING_INTEREST',
  CANCELLATION_REBOOKING_INTEREST = 'CANCELLATION_REBOOKING_INTEREST',
  CHARGE_SEPA_DIRECT_DEBIT_RETURN = 'CHARGE_SEPA_DIRECT_DEBIT_RETURN',
  CANCELLATION_CHARGE_SEPA_DIRECT_DEBIT_RETURN = 'CANCELLATION_CHARGE_SEPA_DIRECT_DEBIT_RETURN',
  INTERNAL_TRANSFER = 'INTERNAL_TRANSFER',
  CANCELLATION_INTERNAL_TRANSFER = 'CANCELLATION_INTERNAL_TRANSFER',
  CRYPTO_EXCHANGE = 'CRYPTO_EXCHANGE',
  B2C_CRYPTO_EXCHANGE_BTC = 'B2C_CRYPTO_EXCHANGE_BTC',
  B2C_CRYPTO_EXCHANGE_BTC_RETURN = 'B2C_CRYPTO_EXCHANGE_BTC_RETURN',
  B2C_CRYPTO_EXCHANGE_ETH = 'B2C_CRYPTO_EXCHANGE_ETH',
  B2C_CRYPTO_EXCHANGE_ETH_RETURN = 'B2C_CRYPTO_EXCHANGE_ETH_RETURN',
  TARGET_2_CREDIT_TRANSFER = 'Target2CreditTransfer',
  SEIZURE_REBOOKING = 'SeizureRebooking',
  VERIFICATION_CODE = 'VERIFICATION_CODE',
  OTHER = 'OTHER',
  B2C_SAVING_POTS_FGP = 'B2C_SAVING_POTS_FGP',
  B2C_SAVING_POTS_PFT = 'B2C_SAVING_POTS_PFT',
  B2C_SAVING_POTS_PVP = 'B2C_SAVING_POTS_PVP',
  CARD_DIRECT_DEBIT = 'CARD_DIRECT_DEBIT'
}
export interface Booking {
  solarisId: string;
  accountId?: string;
  creationDate: Date;
  valutaDate: Date;
  bookingDate: Date;
  bookingType: BookingType;
  amount: MoneyAmount;
  description?: string;
  recipientBic?: string;
  recipientIban?: string;
  recipientName?: string;
  senderBic?: string;
  senderIban?: string;
  senderName?: string;
  endToEndId?: string;
  creditorIdentifier?: string;
  mandateReference?: string;
  transactionId?: string;
  returnTransactionId?: string;
  sepaReturnCode?: string;
  sepaReturnReason?: string;
  sepaReturnReasonDefinition?: string;
  metaInfo?: string;
  recordedAt?: Date;
  reconciliationId?: string;
}

export type BookingPayloadValidated = yup.InferType<
  typeof bookingValidationSchema
>;
