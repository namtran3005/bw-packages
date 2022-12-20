import { MixedSchema } from 'yup';

import { mainAccountSignupIneligibleSchema } from './lib/mainAccountSignupIneligibleSchema';
import { csdMissingTaxInfoDaysSchema } from './lib/csdMissingTaxInfoDaysSchema';
import { csdMonthlyStatementSchema } from './lib/csdMonthlyStatementSchema';
import { mainAccountFreezeSchema } from './lib/mainAccountFreezeSchema';
import { mainAccountCloseSchema } from './lib/mainAccountCloseSchema';
import { mainAccountUnfreezeSchema } from './lib/mainAccountUnfreezeSchema';
import { mainAccountSeizureSchema } from './lib/mainAccountSeizureSchema';
import { mainCardActivatedSchema } from './lib/mainCardActivatedSchema';
import { mainStandingOrderLastExecutionSchema } from './lib/mainStandingOrderLastExecutionSchema';
import { mainCardFraudCasePendingSchema } from './lib/mainCardFraudCasePendingSchema';
import { mainCardFraudCaseTimeoutSchema } from './lib/mainCardFraudCaseTimeoutSchema';
import { mainEmailChangedSchema } from './lib/mainEmailChangedSchema';
import { mainConfirmCurrentEmailAddressSchema } from './lib/mainConfirmCurrentEmailAddressSchema';
import { mainConfirmMewEmailAddressSchema } from './lib/mainConfirmNewEmailAddressSchema';
import { mainReferralTransactionSchema } from './lib/mainReferralTransactionSchema';
import { mainTradingInvoiceBuyCryptoSchema } from './lib/mainTradingInvoiceBuyCryptoSchema';
import { mainTradingInvoiceSellCryptoSchema } from './lib/mainTradingInvoiceSellCryptoSchema';
import { mainAccountDownloadMobileAppSchema } from './lib/mainAccountDownloadMobileAppSchema';
import { mainSignupWithSameEmailSchema } from './lib/mainSignupWithSameEmailSchema';
import { mainIdentificationFailedSchema } from './lib/mainIdentificationFailedSchema';
import { mainCardOrderSchema } from './lib/mainCardOrderSchema';
import { mainCardBlockedBySbSchema } from './lib/mainCardBlockedBySbSchema';
import { mainCardUnblockedBySbSchema } from './lib/mainCardUnblockedBySbSchema';
import { mainCardClosedBySbSchema } from './lib/mainCardClosedBySbSchema';
import { mainCreateBtcWalletSchema } from './lib/mainCreateBtcWalletSchema';
import { mainCreateEthWalletIosSchema } from './lib/mainCreateEthWalletIosSchema';
import { mainCreateEthWalletAndroidSchema } from './lib/mainCreateEthWalletAndroidSchema';
import { mainAccountSignupSchema } from './lib/mainAccountSignupSchema';
import { mainResetPasswordSchema } from './lib/mainResetPasswordSchema';
import { mainPasswordChangedSchema } from './lib/mainPasswordChangedSchema';
import { mainCardPinChangeSchema } from './lib/mainCardPinChangeSchema';
import { mainCryptoLendingAccountDeclinedSchema } from './lib/mainCryptoLendingAccountDeclinedSchema';
import { mainCryptoLendingAccountOpenedSchema } from './lib/mainCryptoLendingAccountOpenedSchema';
import { mainCryptoLendingInvestmentPendingSchema } from './lib/mainCryptoLendingInvestmentPendingSchema';
import { mainCryptoLendingInvestmentSettledSchema } from './lib/mainCryptoLendingInvestmentSettledSchema';
import { mainCryptoLendingWithdrawalPendingSchema } from './lib/mainCryptoLendingWithdrawalPendingSchema';
import { mainCryptoLendingWithdrawalSettledSchema } from './lib/mainCryptoLendingWithdrawalSettledSchema';
import { mainCryptoTaxReportGeneratedSchema } from './lib/mainCryptoTaxReportGeneratedSchema';
import { mainIncomingFiatTransactionSchema } from './lib/mainIncomingFiatTransactionSchema';
import { mainIncomingCryptoTransactionSchema } from './lib/mainIncomingCryptoTransactionSchema';
import { csdAdminAccountsSchema } from './lib/csdAdminAccountsSchema';
import { mainNewDevicePairedSchema } from './lib/mainNewDevicePairedSchema';
import { mainAccountScreenedDeclinedSchema } from './lib/mainAccountScreenedDeclinedSchema';
import { mainSdaImmediateAccountClosureSchema } from './lib/mainSdaImmediateAccountClosureSchema';
import { mainSdaOrdinaryAccountClosureSchema } from './lib/mainSdaOrdinaryAccountClosureSchema';
import { mainAutoBuyInsufficientFundsSchema } from './lib/mainAutoBuyInsufficientFundsSchema';
import { mainAutoBuyTradingLimitExceeded } from './lib/mainAutoBuyTradingLimitExceeded';
import { mainAutoBuyRejectedUnknownIssueSchema } from './lib/mainAutoBuyRejectedUnknownIssueSchema';
import { mainEtfInvestmentFailedSchema } from './lib/mainEtfInvestmentFailedSchema';
import { mainEtfInvestmentPendingSchema } from './lib/mainEtfInvestmentPendingSchema';
import { mainEtfInvestmentCompletedSchema } from './lib/mainEtfInvestmentCompletedSchema';
import { mainEtfWithdrawalFailedSchema } from './lib/mainEtfWithdrawalFailedSchema';
import { mainEtfWithdrawalPendingSchema } from './lib/mainEtfWithdrawalPendingSchema';
import { mainEtfWithdrawalCompletedSchema } from './lib/mainEtfWithdrawalCompletedSchema';
import { mainEtfRefundSchema } from './lib/mainEtfRefundSchema';
import { mainSolarisTandCAnnouncementSchema } from './lib/mainSolarisTandCAnnouncementSchema';
import { mainAcceptSolarisTandCSchema } from './lib/mainAcceptSolarisTandCSchema';
import { mainRejectSolarisTandCSchema } from './lib/mainRejectSolarisTandCSchema';
import { mainSolarisYellowStatusExistingUsersSchema } from './lib/mainSolarisYellowStatusExistingUsersSchema';
import { mainSolarisYellowStatusNewUsersSchema } from './lib/mainSolarisYellowStatusNewUsersSchema';

export interface SchemasMap {
  [key: string]: MixedSchema;
}

export const emailSanitizationSchemas: SchemasMap = {
  mainAccountFreeze: mainAccountFreezeSchema,
  mainAccountUnfreeze: mainAccountUnfreezeSchema,
  mainAccountSeizure: mainAccountSeizureSchema,
  mainAccountClose: mainAccountCloseSchema,
  mainCardActivated: mainCardActivatedSchema,
  mainStandingOrderLastExecution: mainStandingOrderLastExecutionSchema,
  mainCardFraudCasePending: mainCardFraudCasePendingSchema,
  mainCardFraudCaseTimeout: mainCardFraudCaseTimeoutSchema,
  mainEmailChanged: mainEmailChangedSchema,
  mainConfirmCurrentEmailAddress: mainConfirmCurrentEmailAddressSchema,
  mainConfirmNewEmailAddress: mainConfirmMewEmailAddressSchema,
  mainReferralTransaction: mainReferralTransactionSchema,
  mainNewDevicePaired: mainNewDevicePairedSchema,
  mainTradingInvoiceBuyBtc: mainTradingInvoiceBuyCryptoSchema,
  mainTradingInvoiceBuyEth: mainTradingInvoiceBuyCryptoSchema,
  mainTradingInvoiceSellEth: mainTradingInvoiceSellCryptoSchema,
  mainTradingInvoiceSellBtc: mainTradingInvoiceSellCryptoSchema,
  mainAccountDownloadApp: mainAccountDownloadMobileAppSchema,
  mainSignupWithSameEmail: mainSignupWithSameEmailSchema,
  mainIdentificationFailed: mainIdentificationFailedSchema,
  mainCardOrder: mainCardOrderSchema,
  mainCardBlockedBySb: mainCardBlockedBySbSchema,
  mainCardUnblockedBySb: mainCardUnblockedBySbSchema,
  mainCardClosedBySb: mainCardClosedBySbSchema,
  mainCreateWallet: mainCreateBtcWalletSchema,
  mainCreateEthWalletIos: mainCreateEthWalletIosSchema,
  mainCreateEthWalletAndroid: mainCreateEthWalletAndroidSchema,
  csdMonthlyStatement: csdMonthlyStatementSchema,
  csdMissingTaxInfoDays: csdMissingTaxInfoDaysSchema,
  mainAccountSignupIneligible: mainAccountSignupIneligibleSchema,
  mainAccountSignup: mainAccountSignupSchema,
  mainResetPassword: mainResetPasswordSchema,
  mainPasswordChanged: mainPasswordChangedSchema,
  mainCardPinChange: mainCardPinChangeSchema,
  mainCryptoLendingAccountDeclined: mainCryptoLendingAccountDeclinedSchema,
  mainCryptoLendingAccountOpened: mainCryptoLendingAccountOpenedSchema,
  mainCryptoLendingInvestmentPending: mainCryptoLendingInvestmentPendingSchema,
  mainCryptoLendingInvestmentSettled: mainCryptoLendingInvestmentSettledSchema,
  mainCryptoLendingWithdrawalPending: mainCryptoLendingWithdrawalPendingSchema,
  mainCryptoLendingWithdrawalSettled: mainCryptoLendingWithdrawalSettledSchema,
  mainCryptoTaxReportGenerated: mainCryptoTaxReportGeneratedSchema,
  mainIncomingCryptoTransaction: mainIncomingCryptoTransactionSchema,
  mainIncomingFiatTransaction: mainIncomingFiatTransactionSchema,
  csdAdminAccounts: csdAdminAccountsSchema,
  mainAccountScreenedDeclined: mainAccountScreenedDeclinedSchema,
  mainSdaImmediateAccountClosure: mainSdaImmediateAccountClosureSchema,
  mainSdaOrdinaryAccountClosure: mainSdaOrdinaryAccountClosureSchema,
  mainAutoBuyInsufficientFunds: mainAutoBuyInsufficientFundsSchema,
  mainAutoBuyTradingLimitExceeded: mainAutoBuyTradingLimitExceeded,
  mainAutoBuyRejectedUnknownIssue: mainAutoBuyRejectedUnknownIssueSchema,
  mainEtfInvestmentFailed: mainEtfInvestmentFailedSchema,
  mainEtfInvestmentPending: mainEtfInvestmentPendingSchema,
  mainEtfInvestmentCompleted: mainEtfInvestmentCompletedSchema,
  mainEtfWithdrawalFailed: mainEtfWithdrawalFailedSchema,
  mainEtfWithdrawalPending: mainEtfWithdrawalPendingSchema,
  mainEtfWithdrawalCompleted: mainEtfWithdrawalCompletedSchema,
  mainEtfRefund: mainEtfRefundSchema,
  mainSolarisTandCAnnouncement: mainSolarisTandCAnnouncementSchema,
  mainAcceptSolarisTandC: mainAcceptSolarisTandCSchema,
  mainRejectSolarisTandC: mainRejectSolarisTandCSchema,
  mainSolarisYellowStatusExistingUsers: mainSolarisYellowStatusExistingUsersSchema,
  mainSolarisYellowStatusNewUsers: mainSolarisYellowStatusNewUsersSchema,
};
