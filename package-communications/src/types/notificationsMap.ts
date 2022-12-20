import { TemplateNames } from '@bitwala-cryptobank-squad/package-emails';

import {
  Currency,
  PriceAlertType,
} from '@bitwala-cryptobank-squad/package-constants';

export enum NotificationsEventType {
  SIGNUP = 'SIGNUP',
  ONBOARDING_DOWNLOAD_APP = 'ONBOARDING_DOWNLOAD_APP',
  SIGNUP_INELIGIBLE = 'SIGNUP_INELIGIBLE',
  PASSWORD_CHANGED = 'PASSWORD_CHANGED',
  RESET_PASSWORD = 'RESET_PASSWORD',
  ACCOUNT_FREEZE = 'ACCOUNT_FREEZE',
  ACCOUNT_CLOSED = 'ACCOUNT_CLOSED',
  ACCOUNT_UNFREEZE = 'ACCOUNT_UNFREEZE',
  ACCOUNT_SEIZURE_CREATED = 'ACCOUNT_SEIZURE_CREATED',
  ACCOUNT_SCREENED_DECLINED = 'ACCOUNT_SCREENED_DECLINED',
  CREATE_BITCOIN_WALLET = 'CREATE_BITCOIN_WALLET',
  EMAIL_CHANGED = 'EMAIL_CHANGED',
  CONFIRM_CURRENT_EMAIL_ADDRESS = 'CONFIRM_CURRENT_EMAIL_ADDRESS',
  CONFIRM_NEW_EMAIL_ADDRESS = 'CONFIRM_NEW_EMAIL_ADDRESS',
  INCOMING_TRANSACTION_CRYPTO = 'INCOMING_TRANSACTION_CRYPTO',
  INCOMING_TRANSACTION_FIAT = 'INCOMING_TRANSACTION_FIAT',
  IDENTIFICATION_FAILED = 'IDENTIFICATION_FAILED',
  CARD_ORDER = 'CARD_ORDER',
  CREATE_ETH_WALLET_IOS = 'CREATE_ETH_WALLET_IOS',
  CREATE_ETH_WALLET_ANDROID = 'CREATE_ETH_WALLET_ANDROID',
  CARD_BLOCKED_BY_SB = 'CARD_BLOCKED_BY_SB',
  CARD_UNBLOCKED_BY_SB = 'CARD_UNBLOCKED_BY_SB',
  CARD_CLOSED_BY_SB = 'CARD_CLOSED_BY_SB',
  CARD_ACTIVATED = 'CARD_ACTIVATED',
  CARD_PIN_CHANGE = 'CARD_PIN_CHANGE',
  SIGNUP_WITH_SAME_EMAIL = 'SIGNUP_WITH_SAME_EMAIL',
  STANDING_ORDER_LAST_EXECUTION = 'STANDING_ORDER_LAST_EXECUTION',
  TRADING_INVOICE_BUY_ETH = 'TRADING_INVOICE_BUY_ETH',
  TRADING_INVOICE_BUY_BTC = 'TRADING_INVOICE_BUY_BTC',
  TRADING_INVOICE_SELL_ETH = 'TRADING_INVOICE_SELL_ETH',
  TRADING_INVOICE_SELL_BTC = 'TRADING_INVOICE_SELL_BTC',
  REFERRAL_TRANSACTION = 'REFERRAL_TRANSACTION',
  CARD_FRAUD_CASE_PENDING = 'CARD_FRAUD_CASE_PENDING',
  CARD_FRAUD_CASE_TIMEOUT = 'CARD_FRAUD_CASE_TIMEOUT',
  CRYPTO_LENDING_ACCOUNT_DECLINED = 'CRYPTO_LENDING_ACCOUNT_DECLINED',
  CRYPTO_LENDING_ACCOUNT_OPENED = 'CRYPTO_LENDING_ACCOUNT_OPENED',
  CRYPTO_LENDING_INVESTMENT_PENDING = 'CRYPTO_LENDING_INVESTMENT_PENDING',
  CRYPTO_LENDING_INVESTMENT_SETTLED = 'CRYPTO_LENDING_INVESTMENT_SETTLED',
  CRYPTO_LENDING_WITHDRAWAL_PENDING = 'CRYPTO_LENDING_WITHDRAWAL_PENDING',
  CRYPTO_LENDING_WITHDRAWAL_SETTLED = 'CRYPTO_LENDING_WITHDRAWAL_SETTLED',
  CRYPTOTAX_REPORT_GENERATED = 'CRYPTOTAX_REPORT_GENERATED',
  SB_DEVICE_BINDING_NEW_DEVICE = 'SB_DEVICE_BINDING_NEW_DEVICE',
  SDA_IMMEDIATE_ACCOUNT_CLOSURE = 'SDA_IMMEDIATE_ACCOUNT_CLOSURE',
  SDA_ORDINARY_ACCOUNT_CLOSURE = 'SDA_ORDINARY_ACCOUNT_CLOSURE',
  AUTOBUY_EXCECUTION_DECLINED_INSUFFICIENT_FUNDS = 'AUTOBUY_EXCECUTION_DECLINED_INSUFFICIENT_FUNDS',
  AUTOBUY_TRANSACTION_REJECTED_UNKNOWN_ISSUE = 'AUTOBUY_TRANSACTION_REJECTED_UNKNOWN_ISSUE',
  ETF_INVESTMENT_PENDING = 'ETF_INVESTMENT_PENDING',
  ETF_INVESTMENT_COMPLETED = 'ETF_INVESTMENT_COMPLETED',
  ETF_INVESTMENT_FAILED = 'ETF_INVESTMENT_FAILED',
  ETF_WITHDRAWAL_PENDING = 'ETF_WITHDRAWAL_PENDING',
  ETF_WITHDRAWAL_COMPLETED = 'ETF_WITHDRAWAL_COMPLETED',
  ETF_WITHDRAWAL_FAILED = 'ETF_WITHDRAWAL_FAILED',
  ETF_REFUND = 'ETF_REFUND',
  ACCEPT_SOLARIS_TERMS_AND_CONDITIONS = 'ACCEPT_SOLARIS_TERMS_AND_CONDITIONS',
  REJECT_SOLARIS_TERMS_AND_CONDITIONS = 'REJECT_SOLARIS_TERMS_AND_CONDITIONS',
  SOLARIS_YELLOW_STATUS_EXISTING_USERS = 'SOLARIS_YELLOW_STATUS_EXISTING_USERS',
  SOLARIS_YELLOW_STATUS_NEW_USERS = 'SOLARIS_YELLOW_STATUS_NEW_USERS',
}

export enum PushNotificationsEventType {
  INCOMING_TRANSACTION_CRYPTO = 'INCOMING_TRANSACTION_CRYPTO',
  INCOMING_TRANSACTION_FIAT = 'INCOMING_TRANSACTION_FIAT',
  CARD_TXN_ATM_WITHDRAWAL = 'CARD_TXN_ATM_WITHDRAWAL',
  CARD_TXN_OFFLINE = 'CARD_TXN_OFFLINE',
  CARD_TXN_ONLINE = 'CARD_TXN_ONLINE',
  CARD_FOREIGN_TXN_OFFLINE = 'CARD_FOREIGN_TXN_OFFLINE',
  CARD_FOREIGN_TXN_ONLINE = 'CARD_FOREIGN_TXN_ONLINE',
  CARD_FOREIGN_TXN_ATM_WITHDRAWAL = 'CARD_FOREIGN_TXN_ATM_WITHDRAWAL',
  CARD_TXN_ATM_WITHDRAWAL_DECLINED = 'CARD_TXN_ATM_WITHDRAWAL_DECLINED',
  CARD_TXN_ONLINE_DECLINED = 'CARD_TXN_ONLINE_DECLINED',
  CARD_TXN_OFFLINE_DECLINED = 'CARD_TXN_OFFLINE_DECLINED',
  TRADE_COMPLETED_BUY_CRYPTO = 'TRADE_COMPLETED_BUY_CRYPTO',
  TRADE_COMPLETED_SELL_CRYPTO = 'TRADE_COMPLETED_SELL_CRYPTO',
  CARD_FRAUD_CASE_PENDING = 'CARD_FRAUD_CASE_PENDING',
  GLOBAL_BTC_PRICE_ALERT = 'GLOBAL_BTC_PRICE_ALERT',
  GLOBAL_ETH_PRICE_ALERT = 'GLOBAL_ETH_PRICE_ALERT',
  USER_BTC_ABSOLUTE_PRICE_ALERT = 'USER_BTC_ABSOLUTE_PRICE_ALERT',
  USER_ETH_ABSOLUTE_PRICE_ALERT = 'USER_ETH_ABSOLUTE_PRICE_ALERT',
  CRYPTO_LENDING_ACCOUNT_OPENED = 'CRYPTO_LENDING_ACCOUNT_OPENED',
  CRYPTO_LENDING_INTEREST_RECEIVED = 'CRYPTO_LENDING_INTEREST_RECEIVED',
  TRADING_LIMIT_UPDATED = 'TRADING_LIMIT_UPDATED',
  REMINDER = 'REMINDER',
  SCA_CHALLENGE = 'SCA_CHALLENGE',
  AUTO_BUY_CLEARING_TRANSACTION_DECLINED = 'AUTO_BUY_CLEARING_TRANSACTION_DECLINED',
  CHILD_USER_COMPLETED_REFERRAL_PROGRAM = 'CHILD_USER_COMPLETED_REFERRAL_PROGRAM',
  ETF_INVESTMENT_TRANSACTION_COMPLETED = 'ETF_INVESTMENT_TRANSACTION_COMPLETED',
  ETF_INVESTMENT_TRANSACTION_FAIL = 'ETF_INVESTMENT_TRANSACTION_FAIL',
  ETF_WITHDRAW_TRANSACTION_COMPLETED = 'ETF_WITHDRAW_TRANSACTION_COMPLETED',
  ETF_WITHDRAW_TRANSACTION_FAIL = 'ETF_WITHDRAW_TRANSACTION_FAIL',
  TRADE_LIMIT_RESET_CRYPTO = 'TRADE_LIMIT_RESET_CRYPTO',
}

export const notificationsEvents = Object.values(NotificationsEventType);

export interface NotificationDetails {
  templateName: TemplateNames;
}

export type NotificationsMap = {
  [key in NotificationsEventType]: NotificationDetails;
};

export const notificationsMap: NotificationsMap = {
  [NotificationsEventType.SIGNUP]: {
    templateName: TemplateNames.MainAccountSignup,
  },
  [NotificationsEventType.SIGNUP_INELIGIBLE]: {
    templateName: TemplateNames.MainAccountSignupIneligible,
  },
  [NotificationsEventType.PASSWORD_CHANGED]: {
    templateName: TemplateNames.MainPasswordChanged,
  },
  [NotificationsEventType.RESET_PASSWORD]: {
    templateName: TemplateNames.MainResetPassword,
  },
  [NotificationsEventType.ACCOUNT_FREEZE]: {
    templateName: TemplateNames.MainAccountFreeze,
  },
  [NotificationsEventType.ACCOUNT_CLOSED]: {
    templateName: TemplateNames.MainAccountClose,
  },
  [NotificationsEventType.ACCOUNT_UNFREEZE]: {
    templateName: TemplateNames.MainAccountUnfreeze,
  },
  [NotificationsEventType.ACCOUNT_SCREENED_DECLINED]: {
    templateName: TemplateNames.MainAccountScreenedDeclined,
  },
  [NotificationsEventType.CREATE_BITCOIN_WALLET]: {
    templateName: TemplateNames.MainCreateWallet,
  },
  [NotificationsEventType.EMAIL_CHANGED]: {
    templateName: TemplateNames.MainEmailChanged,
  },
  [NotificationsEventType.CONFIRM_CURRENT_EMAIL_ADDRESS]: {
    templateName: TemplateNames.MainConfirmCurrentEmailAddress,
  },
  [NotificationsEventType.CONFIRM_NEW_EMAIL_ADDRESS]: {
    templateName: TemplateNames.MainConfirmNewEmailAddress,
  },
  [NotificationsEventType.INCOMING_TRANSACTION_FIAT]: {
    templateName: TemplateNames.MainIncomingFiatTransaction,
  },
  [NotificationsEventType.INCOMING_TRANSACTION_CRYPTO]: {
    templateName: TemplateNames.MainIncomingCryptoTransaction,
  },
  [NotificationsEventType.IDENTIFICATION_FAILED]: {
    templateName: TemplateNames.MainIdentificationFailed,
  },
  [NotificationsEventType.CARD_ORDER]: {
    templateName: TemplateNames.MainCardOrder,
  },
  [NotificationsEventType.CARD_ACTIVATED]: {
    templateName: TemplateNames.MainCardActivated,
  },
  [NotificationsEventType.CARD_PIN_CHANGE]: {
    templateName: TemplateNames.MainCardPinChange,
  },
  [NotificationsEventType.CARD_BLOCKED_BY_SB]: {
    templateName: TemplateNames.MainCardBlockedBySb,
  },
  [NotificationsEventType.CARD_UNBLOCKED_BY_SB]: {
    templateName: TemplateNames.MainCardUnblockedBySb,
  },
  [NotificationsEventType.CARD_CLOSED_BY_SB]: {
    templateName: TemplateNames.MainCardClosedBySb,
  },
  [NotificationsEventType.SIGNUP_WITH_SAME_EMAIL]: {
    templateName: TemplateNames.MainSignupWithSameEmail,
  },
  [NotificationsEventType.STANDING_ORDER_LAST_EXECUTION]: {
    templateName: TemplateNames.MainStandingOrderLastExecution,
  },
  [NotificationsEventType.TRADING_INVOICE_BUY_BTC]: {
    templateName: TemplateNames.mainTradingInvoiceBuyBtc,
  },
  [NotificationsEventType.TRADING_INVOICE_BUY_ETH]: {
    templateName: TemplateNames.mainTradingInvoiceBuyEth,
  },
  [NotificationsEventType.TRADING_INVOICE_SELL_BTC]: {
    templateName: TemplateNames.mainTradingInvoiceSellBtc,
  },
  [NotificationsEventType.TRADING_INVOICE_SELL_ETH]: {
    templateName: TemplateNames.mainTradingInvoiceSellEth,
  },
  [NotificationsEventType.REFERRAL_TRANSACTION]: {
    templateName: TemplateNames.MainReferralTransaction,
  },
  [NotificationsEventType.CARD_FRAUD_CASE_PENDING]: {
    templateName: TemplateNames.MainCardFraudCasePending,
  },
  [NotificationsEventType.CARD_FRAUD_CASE_TIMEOUT]: {
    templateName: TemplateNames.MainCardFraudCaseTimeout,
  },
  [NotificationsEventType.ACCOUNT_SEIZURE_CREATED]: {
    templateName: TemplateNames.MainAccountSeizure,
  },
  [NotificationsEventType.CREATE_ETH_WALLET_IOS]: {
    templateName: TemplateNames.MainCreateEthWalletIos,
  },
  [NotificationsEventType.CREATE_ETH_WALLET_ANDROID]: {
    templateName: TemplateNames.MainCreateEthWalletAndroid,
  },
  [NotificationsEventType.ONBOARDING_DOWNLOAD_APP]: {
    templateName: TemplateNames.MainAccountDownloadApp,
  },
  [NotificationsEventType.CRYPTO_LENDING_ACCOUNT_DECLINED]: {
    templateName: TemplateNames.MainCryptoLendingAccountDeclined,
  },
  [NotificationsEventType.CRYPTO_LENDING_ACCOUNT_OPENED]: {
    templateName: TemplateNames.MainCryptoLendingAccountOpened,
  },
  [NotificationsEventType.CRYPTO_LENDING_INVESTMENT_PENDING]: {
    templateName: TemplateNames.MainCryptoLendingInvestmentPending,
  },
  [NotificationsEventType.CRYPTO_LENDING_INVESTMENT_SETTLED]: {
    templateName: TemplateNames.MainCryptoLendingInvestmentSettled,
  },
  [NotificationsEventType.CRYPTO_LENDING_WITHDRAWAL_PENDING]: {
    templateName: TemplateNames.MainCryptoLendingWithdrawalPending,
  },
  [NotificationsEventType.CRYPTO_LENDING_WITHDRAWAL_SETTLED]: {
    templateName: TemplateNames.MainCryptoLendingWithdrawalSettled,
  },
  [NotificationsEventType.CRYPTOTAX_REPORT_GENERATED]: {
    templateName: TemplateNames.MainCryptoTaxReportGenerated,
  },
  [NotificationsEventType.SB_DEVICE_BINDING_NEW_DEVICE]: {
    templateName: TemplateNames.MainNewDevicePaired,
  },
  [NotificationsEventType.SDA_IMMEDIATE_ACCOUNT_CLOSURE]: {
    templateName: TemplateNames.MainSdaImmediateAccountClosure,
  },
  [NotificationsEventType.SDA_ORDINARY_ACCOUNT_CLOSURE]: {
    templateName: TemplateNames.MainSdaOrdinaryAccountClosure,
  },
  [NotificationsEventType.CONFIRM_CURRENT_EMAIL_ADDRESS]: {
    templateName: TemplateNames.MainConfirmCurrentEmailAddress,
  },
  [NotificationsEventType.CONFIRM_NEW_EMAIL_ADDRESS]: {
    templateName: TemplateNames.MainConfirmNewEmailAddress,
  },
  [NotificationsEventType.AUTOBUY_EXCECUTION_DECLINED_INSUFFICIENT_FUNDS]: {
    templateName: TemplateNames.MainAutoBuyInsufficientFunds,
  },
  [NotificationsEventType.AUTOBUY_TRANSACTION_REJECTED_UNKNOWN_ISSUE]: {
    templateName: TemplateNames.MainAutoBuyRejectedUnknownIssue,
  },
  [NotificationsEventType.ETF_INVESTMENT_PENDING]: {
    templateName: TemplateNames.MainEtfInvestmentPending,
  },
  [NotificationsEventType.ETF_INVESTMENT_COMPLETED]: {
    templateName: TemplateNames.MainEtfInvestmentCompleted,
  },
  [NotificationsEventType.ETF_INVESTMENT_FAILED]: {
    templateName: TemplateNames.MainEtfInvestmentFailed,
  },
  [NotificationsEventType.ETF_WITHDRAWAL_PENDING]: {
    templateName: TemplateNames.MainEtfWithdrawalPending,
  },
  [NotificationsEventType.ETF_WITHDRAWAL_COMPLETED]: {
    templateName: TemplateNames.MainEtfWithdrawalCompleted,
  },
  [NotificationsEventType.ETF_WITHDRAWAL_FAILED]: {
    templateName: TemplateNames.MainEtfWithdrawalFailed,
  },
  [NotificationsEventType.ETF_REFUND]: {
    templateName: TemplateNames.MainEtfRefund,
  },
  [NotificationsEventType.ACCEPT_SOLARIS_TERMS_AND_CONDITIONS]: {
    templateName: TemplateNames.MainAcceptSolarisTandC,
  },
  [NotificationsEventType.REJECT_SOLARIS_TERMS_AND_CONDITIONS]: {
    templateName: TemplateNames.MainRejectSolarisTandC,
  },
  [NotificationsEventType.SOLARIS_YELLOW_STATUS_EXISTING_USERS]: {
    templateName: TemplateNames.MainSolarisYellowStatusExistingUsers,
  },
  [NotificationsEventType.SOLARIS_YELLOW_STATUS_NEW_USERS]: {
    templateName: TemplateNames.MainSolarisYellowStatusNewUsers,
  },
};

export const priceAlertsPNEventMap: Record<
  PriceAlertType,
  Record<Currency, PushNotificationsEventType>
> = {
  [PriceAlertType.RELATIVE]: {
    [Currency.BTC]: PushNotificationsEventType.GLOBAL_BTC_PRICE_ALERT,
    [Currency.ETH]: PushNotificationsEventType.GLOBAL_ETH_PRICE_ALERT,
  },
  [PriceAlertType.ABSOLUTE]: {
    [Currency.BTC]: PushNotificationsEventType.USER_BTC_ABSOLUTE_PRICE_ALERT,
    [Currency.ETH]: PushNotificationsEventType.USER_ETH_ABSOLUTE_PRICE_ALERT,
  },
};

export enum WalletNames {
  VAULT = 'Vault',
  WALLET = 'Wallet',
}

// receiver userID or email (In case we don't have the user obj in the db yet)
export type EmailToParams =
  | {
      userId: string;
      email?: string;
      locale?: string;
      bccAddress?: string[];
      ccAddress?: string[];
    }
  | {
      email: string;
      userId?: string;
      locale?: string;
      bccAddress?: string[];
      ccAddress?: string[];
    };

// receiver userID or email (In case we don't have the user obj in the db yet)
export interface PushToParams {
  userId: string;
  locale?: string;
}
