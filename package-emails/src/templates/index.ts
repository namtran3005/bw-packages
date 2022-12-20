import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../locales';

import {
  CsdAdminAccountsVariables as CsdAdminAccountsVariablesType,
  csdAdminAccounts,
} from './lib/csdAdminAccounts';
import {
  CsdMissingTaxInfoDaysVariables as CsdMissingTaxInfoDaysVariablesType,
  csdMissingTaxInfoDays,
} from './lib/csdMissingTaxInfoDays';
import {
  CsdMonthlyStatementVariables as CsdMonthlyStatementVariablesType,
  csdMonthlyStatement,
} from './lib/csdMonthlyStatement';
import {
  MainAccountFreezeVariables as MainAccountFreezeVariablesType,
  mainAccountFreeze,
} from './lib/mainAccountFreeze';
import {
  MainAccountCloseVariables as MainAccountCloseVariablesType,
  mainAccountClose,
} from './lib/mainAccountClose';
import {
  MainAccountSignupVariables as MainAccountSignupVariablesType,
  mainAccountSignup,
} from './lib/mainAccountSignup';
import {
  MainAccountSignupIneligibleVariables as MainAccountSignupIneligibleVariablesType,
  mainAccountSignupIneligible,
} from './lib/mainAccountSignupIneligible';
import {
  MainAccountUnfreezeVariables as MainAccountUnfreezeVariablesType,
  mainAccountUnfreeze,
} from './lib/mainAccountUnfreeze';
import {
  MainCardActivatedVariables as MainCardActivatedVariablesType,
  mainCardActivated,
} from './lib/mainCardActivated';
import {
  MainCardBlockedBySbVariables as MainCardBlockedBySbVariablesType,
  mainCardBlockedBySb,
} from './lib/mainCardBlockedBySb';
import {
  MainCardClosedBySbVariables as MainCardClosedBySbVariablesType,
  mainCardClosedBySb,
} from './lib/mainCardClosedBySb';
import {
  MainCardOrderVariables as MainCardOrderVariablesType,
  mainCardOrder,
} from './lib/mainCardOrder';
import {
  MainCardPinChangeVariables as MainCardPinChangeVariablesType,
  mainCardPinChange,
} from './lib/mainCardPinChange';
import {
  MainCardUnblockedBySbVariables as MainCardUnblockedBySbVariablesType,
  mainCardUnblockedBySb,
} from './lib/mainCardUnblockedBySb';
import {
  MainCreateWalletVariables as MainCreateWalletVariablesType,
  mainCreateWallet,
} from './lib/mainCreateWallet';
import {
  MainCreateEthWalletAndroidVariables as MainCreateEthWalletAndroidVariablesType,
  mainCreateEthWalletAndroid,
} from './lib/mainCreateEthWalletAndroid';
import {
  MainCreateEthWalletIosVariables as MainCreateEthWalletIosVariablesType,
  mainCreateEthWalletIos,
} from './lib/mainCreateEthWalletIos';
import {
  MainIncomingCryptoTransactionVariables as MainIncomingCryptoTransactionVariablesType,
  mainIncomingCryptoTransaction,
} from './lib/mainIncomingCryptoTranscation';
import {
  MainIncomingFiatTransactionVariables as MainIncomingFiatTransactionVariablesType,
  mainIncomingFiatTransaction,
} from './lib/mainIncomingFiatTranscation';
import {
  MainIdentificationFailedVariables as MainIdentificationFailedVariablesType,
  mainIdentificationFailed,
} from './lib/mainIdentificationFailed';
import {
  MainPasswordChangedVariables as MainPasswordChangedVariablesType,
  mainPasswordChanged,
} from './lib/mainPasswordChanged';
import {
  MainResetPasswordVariables as MainResetPasswordVariablesType,
  mainResetPassword,
} from './lib/mainResetPassword';
import {
  mainSignupWithSameEmail,
  MainSignupWithSameEmailVariables as MainSignupWithSameEmailVariablesType,
} from './lib/mainSignupWithSameEmail';
import {
  mainStandingOrderLastExecution,
  MainStandingOrderLastExecutionVariables as MainStandingOrderLastExecutionVariablesType,
} from './lib/mainStandingOrderLastExecution';
import {
  MainTradingInvoiceBuyCryptoVariables as MainTradingInvoiceBuyCryptoVariablesType,
  mainTradingInvoiceBuyBtc,
  mainTradingInvoiceBuyEth,
} from './lib/mainTradingInvoiceBuyCrypto';
import {
  MainTradingInvoiceSellCryptoVariables as MainTradingInvoiceSellCryptoVariablesType,
  mainTradingInvoiceSellBtc,
  mainTradingInvoiceSellEth,
} from './lib/mainTradingInvoiceSellCrypto';
import {
  MainEmailChangedVariables as MainEmailChangedVariablesType,
  mainEmailChanged,
} from './lib/mainEmailChanged';
import {
  MainAttachedTransactionsVariables as MainAttachedTransactionsVariablesType,
  mainAttachedTransactions,
} from './lib/mainAttachedTransactions';
import {
  MainAccountStatementVariables as MainAccountStatementVariablesType,
  mainAccountStatement,
} from './lib/mainAccountStatement';
import {
  MainConfirmCurrentEmailAddressVariables as MainConfirmCurrentEmailAddressVariablesType,
  mainConfirmCurrentEmailAddress,
} from './lib/mainConfirmCurrentEmailAddress';
import {
  MainConfirmNewEmailAddressVariables as MainConfirmNewEmailAddressVariablesType,
  mainConfirmNewEmailAddress,
} from './lib/mainConfirmNewEmailAddress';
import {
  MainReferralTransactionVariables as MainReferralTransactionVariablesType,
  mainReferralTransaction,
} from './lib/mainReferralTransaction';
import {
  MainCardFraudCasePendingVariables as MainCardFraudCasePendingVariablesType,
  mainCardFraudCasePending,
} from './lib/mainCardFraudCasePending';
import {
  MainCardFraudCaseTimeoutVariables as MainCardFraudCaseTimeoutVariablesType,
  mainCardFraudCaseTimeout,
} from './lib/mainCardFraudCaseTimeout';
import {
  MainAccountSeizureVariables as MainAccountSeizureVariablesType,
  mainAccountSeizure,
} from './lib/mainAccountSeizure';
import {
  MainAccountDownloadAppVariables as MainAccountDownloadAppVariablesType,
  mainAccountDownloadApp,
} from './lib/mainAccountDownloadApp';
import {
  MainCryptoLendingAccountOpenedVariables as MainCryptoLendingAccountOpenedVariablesType,
  mainCryptoLendingAccountOpened,
} from './lib/mainCryptoLendingAccountOpened';
import {
  MainCryptoLendingAccountDeclinedVariables as MainCryptoLendingAccountDeclinedVariablesType,
  mainCryptoLendingAccountDeclined,
} from './lib/mainCryptoLendingAccountDeclined';
import {
  MainCryptoLendingInvestmentPendingVariables as MainCryptoLendingInvestmentPendingVariablesType,
  mainCryptoLendingInvestmentPending,
} from './lib/mainCryptoLendingInvestmentPending';
import {
  MainCryptoLendingInvestmentSettledVariables as MainCryptoLendingInvestmentSettledVariablesType,
  mainCryptoLendingInvestmentSettled,
} from './lib/mainCryptoLendingInvestmentSettled';
import {
  MainCryptoLendingWithdrawalPendingVariables as MainCryptoLendingWithdrawalPendingVariablesType,
  mainCryptoLendingWithdrawalPending,
} from './lib/mainCryptoLendingWithdrawalPending';
import {
  MainCryptoLendingWithdrawalSettledVariables as MainCryptoLendingWithdrawalSettledVariablesType,
  mainCryptoLendingWithdrawalSettled,
} from './lib/mainCryptoLendingWithdrawalSettled';
import {
  MainCryptoTaxReportGeneratedVariables as MainCryptoTaxReportGeneratedVariablesType,
  mainCryptoTaxReportGenerated,
} from './lib/mainCryptoTaxReportGenerated';
import {
  MainNewDevicePairedVariables as MainNewDevicePairedVariablesType,
  mainNewDevicePaired,
} from './lib/mainNewDevicePaired';
import {
  MainAccountScreenedDeclinedVariables as MainAccountScreenedDeclinedVariablesType,
  mainAccountScreenedDeclined,
} from './lib/mainAccountScreenedDeclined';
import {
  MainSdaImmediateAccountClosureVariables as MainSdaImmediateAccountClosureVariablesType,
  mainSdaImmediateAccountClosure,
} from './lib/mainSdaImmediateAccountClosure';
import {
  MainSdaOrdinaryAccountClosureVariables as MainSdaOrdinaryAccountClosureVariablesType,
  mainSdaOrdinaryAccountClosure,
} from './lib/mainSdaOrdinaryAccountClosure';
import {
  MainAutoBuyInsufficientFundsVariables as MainAutoBuyInsufficientFundsVariablesType,
  mainAutoBuyInsufficientFunds,
} from './lib/mainAutoBuyInsufficientFunds';

import {
  MainAutoBuyTradingLimitExceededVariables as MainAutoBuyTradingLimitExceededVariablesType,
  mainAutoBuyTradingLimitExceeded,
} from './lib/mainAutoBuyTradingLimitExceeded';

import {
  MainAutoBuyRejectedUnknownIssueVariables as MainAutoBuyRejectedUnknownIssueVariablesType,
  mainAutoBuyRejectedUnknownIssue,
} from './lib/mainAutoBuyTransactionRejectedUnknownIssue';

import {
  MainEtfInvestmentFailedVariables as EtfInvestmentFailedVariablesType,
  mainEtfInvestmentFailed,
} from './lib/mainEtfInvestmentFailed';

import {
  MainEtfInvestmentPendingVariables as EtfInvestmentPendingVariablesType,
  mainEtfInvestmentPending,
} from './lib/mainEtfInvestmentPending';

import {
  MainEtfInvestmentCompletedVariables as EtfInvestmentCompletedVariablesType,
  mainEtfInvestmentCompleted,
} from './lib/mainEtfInvestmentCompleted';

import {
  MainEtfWithdrawalFailedVariables as EtfWithdrawalFailedVariablesType,
  mainEtfWithdrawalFailed,
} from './lib/mainEtfWithdrawalFailed';

import {
  MainEtfWithdrawalPendingVariables as EtfWithdrawalPendingVariablesType,
  mainEtfWithdrawalPending,
} from './lib/mainEtfWithdrawalPending';

import {
  MainEtfWithdrawalCompletedVariables as EtfWithdrawalCompletedVariablesType,
  mainEtfWithdrawalCompleted,
} from './lib/mainEtfWithdrawalCompleted';

import {
  MainEtfRefundVariables as MainEtfRefundVariablesType,
  mainEtfRefund,
} from './lib/mainEtfRefund';

import {
  MainSolarisTandCAnnouncementVariables as MainSolarisTandCAnnouncementVariablesType,
  mainSolarisTandCAnnouncement,
} from './lib/mainSolarisTandCAnnouncement';

import {
  MainSolarisTandCUpdateVariables as MainSolarisTandCUpdateVariablesType,
  mainSolarisTandCUpdate,
} from './lib/mainSolarisTandCUpdate';

import {
  MainAcceptSolarisTandCVariables as MainAcceptSolarisTandCVariablesType,
  mainAcceptSolarisTandC,
} from './lib/mainAcceptSolarisTandC';

import {
  MainRejectSolarisTandCVariables as MainRejectSolarisTandCVariablesType,
  mainRejectSolarisTandC,
} from './lib/mainRejectSolarisTandC';

import {
  MainSolarisYellowStatusExistingUsersVariables as MainSolarisYellowStatusExistingUsersVariablesType,
  mainSolarisYellowStatusExistingUsers,
} from './lib/mainSolarisYellowStatusExistingUsers';

import {
  MainSolarisYellowStatusNewUsersVariables as MainSolarisYellowStatusNewUsersVariablesType,
  mainSolarisYellowStatusNewUsers,
} from './lib/mainSolarisYellowStatusNewUsers';

export { wrapContent } from './wrapContent';

export type CsdAdminAccountsVariables = CsdAdminAccountsVariablesType;
export type CsdMonthlyStatementVariables = CsdMonthlyStatementVariablesType;
export type CsdMissingTaxInfoDaysVariables = CsdMissingTaxInfoDaysVariablesType;
export type MainAccountFreezeVariables = MainAccountFreezeVariablesType;
export type MainAccountCloseVariables = MainAccountCloseVariablesType;
export type MainAccountSignupVariables = MainAccountSignupVariablesType;
export type MainAccountSignupIneligibleVariables = MainAccountSignupIneligibleVariablesType;
export type MainAccountScreenedDeclinedVariables = MainAccountScreenedDeclinedVariablesType;
export type MainAccountUnfreezeVariables = MainAccountUnfreezeVariablesType;
export type MainCardActivatedVariables = MainCardActivatedVariablesType;
export type MainCardBlockedBySbVariables = MainCardBlockedBySbVariablesType;
export type MainCardClosedBySbVariables = MainCardClosedBySbVariablesType;
export type MainCardOrderVariables = MainCardOrderVariablesType;
export type MainCardPinChangeVariables = MainCardPinChangeVariablesType;
export type MainCardUnblockedBySbVariables = MainCardUnblockedBySbVariablesType;
export type MainCreateWalletVariables = MainCreateWalletVariablesType;
export type MainCreateEthWalletAndroidVariables = MainCreateEthWalletAndroidVariablesType;
export type MainCreateEthWalletIosVariables = MainCreateEthWalletIosVariablesType;
export type MainEmailChangedVariables = MainEmailChangedVariablesType;
export type MainAttachedTransactionsVariables = MainAttachedTransactionsVariablesType;
export type MainAccountStatementVariables = MainAccountStatementVariablesType;
export type MainConfirmCurrentEmailAddressVariables = MainConfirmCurrentEmailAddressVariablesType;
export type MainConfirmNewEmailAddressVariables = MainConfirmNewEmailAddressVariablesType;
export type MainIncomingFiatTransactionVariables = MainIncomingFiatTransactionVariablesType;
export type MainIncomingCryptoTransactionVariables = MainIncomingCryptoTransactionVariablesType;
export type MainIdentificationFailedVariables = MainIdentificationFailedVariablesType;
export type MainPasswordChangedVariables = MainPasswordChangedVariablesType;
export type MainResetPasswordVariables = MainResetPasswordVariablesType;
export type MainSignupWithSameEmailVariables = MainSignupWithSameEmailVariablesType;
export type MainStandingOrderLastExecutionVariables = MainStandingOrderLastExecutionVariablesType;
export type MainTradingInvoiceBuyCryptoVariables = MainTradingInvoiceBuyCryptoVariablesType;
export type MainTradingInvoiceSellCryptoVariables = MainTradingInvoiceSellCryptoVariablesType;
export type MainReferralTransactionVariables = MainReferralTransactionVariablesType;
export type MainCardFraudCasePendingVariables = MainCardFraudCasePendingVariablesType;
export type MainCardFraudCaseTimeoutVariables = MainCardFraudCaseTimeoutVariablesType;
export type MainAccountSeizureVariables = MainAccountSeizureVariablesType;
export type MainAccountDownloadAppVariables = MainAccountDownloadAppVariablesType;
export type MainCryptoLendingAccountOpenedVariables = MainCryptoLendingAccountOpenedVariablesType;
export type MainCryptoLendingAccountDeclinedVariables = MainCryptoLendingAccountDeclinedVariablesType;
export type MainCryptoLendingInvestmentPendingVariables = MainCryptoLendingInvestmentPendingVariablesType;
export type MainCryptoLendingInvestmentSettledVariables = MainCryptoLendingInvestmentSettledVariablesType;
export type MainCryptoLendingWithdrawalPendingVariables = MainCryptoLendingWithdrawalPendingVariablesType;
export type MainCryptoLendingWithdrawalSettledVariables = MainCryptoLendingWithdrawalSettledVariablesType;
export type MainCryptoTaxReportGeneratedVariables = MainCryptoTaxReportGeneratedVariablesType;
export type MainNewDevicePairedVariables = MainNewDevicePairedVariablesType;
export type MainSdaImmediateAccountClosureVariables = MainSdaImmediateAccountClosureVariablesType;
export type MainSdaOrdinaryAccountClosureVariables = MainSdaOrdinaryAccountClosureVariablesType;
export type AutoBuyInsufficientFundsVariables = MainAutoBuyInsufficientFundsVariablesType;
export type MainAutoBuyTradingLimitExceededVariables = MainAutoBuyTradingLimitExceededVariablesType;
export type MainAutoBuyRejectedUnknownIssueVariables = MainAutoBuyRejectedUnknownIssueVariablesType;
export type EtfInvestmentFailedVariables = EtfInvestmentFailedVariablesType;
export type EtfInvestmentPendingVariables = EtfInvestmentPendingVariablesType;
export type EtfInvestmentCompletedVariables = EtfInvestmentCompletedVariablesType;
export type EtfWithdrawalFailedVariables = EtfWithdrawalFailedVariablesType;
export type EtfWithdrawalPendingVariables = EtfWithdrawalPendingVariablesType;
export type EtfWithdrawalCompletedVariables = EtfWithdrawalCompletedVariablesType;
export type MainEtfRefundVariables = MainEtfRefundVariablesType;
export type MainSolarisTandCAnnouncementVariables = MainSolarisTandCAnnouncementVariablesType;
export type MainSolarisTandCUpdateVariables = MainSolarisTandCUpdateVariablesType;
export type MainAcceptSolarisTandCVariables = MainAcceptSolarisTandCVariablesType;
export type MainRejectSolarisTandCVariables = MainRejectSolarisTandCVariablesType;
export type MainSolarisYellowStatusExistingUsersVariables = MainSolarisYellowStatusExistingUsersVariablesType;
export type MainSolarisYellowStatusNewUsersVariables = MainSolarisYellowStatusNewUsersVariablesType;

const env = process.env.NODE_ENV;

export enum TemplateNames {
  CsdAdminAccounts = 'csdAdminAccounts',
  CsdMissingTaxInfoDays = 'csdMissingTaxInfoDays',
  CsdMonthlyStatement = 'csdMonthlyStatement',
  MainAccountFreeze = 'mainAccountFreeze',
  MainAccountClose = 'mainAccountClose',
  MainAccountSignup = 'mainAccountSignup',
  MainAccountSignupIneligible = 'mainAccountSignupIneligible',
  MainAccountUnfreeze = 'mainAccountUnfreeze',
  MainCardActivated = 'mainCardActivated',
  MainCardBlockedBySb = 'mainCardBlockedBySb',
  MainCardClosedBySb = 'mainCardClosedBySb',
  MainCardOrder = 'mainCardOrder',
  MainCardPinChange = 'mainCardPinChange',
  MainCardUnblockedBySb = 'mainCardUnblockedBySb',
  MainCreateWallet = 'mainCreateWallet',
  MainCreateEthWalletAndroid = 'mainCreateEthWalletAndroid',
  MainCreateEthWalletIos = 'mainCreateEthWalletIos',
  MainEmailChanged = 'mainEmailChanged',
  MainAttachedTransactions = 'mainAttachedTransactions',
  MainAccountStatement = 'mainAccountStatement',
  MainConfirmCurrentEmailAddress = 'mainConfirmCurrentEmailAddress',
  MainConfirmNewEmailAddress = 'mainConfirmNewEmailAddress',
  MainIncomingCryptoTransaction = 'mainIncomingCryptoTransaction',
  MainIncomingFiatTransaction = 'mainIncomingFiatTransaction',
  MainIdentificationFailed = 'mainIdentificationFailed',
  MainPasswordChanged = 'mainPasswordChanged',
  MainResetPassword = 'mainResetPassword',
  MainSignupWithSameEmail = 'mainSignupWithSameEmail',
  MainStandingOrderLastExecution = 'mainStandingOrderLastExecution',
  mainTradingInvoiceBuyBtc = 'mainTradingInvoiceBuyBtc',
  mainTradingInvoiceBuyEth = 'mainTradingInvoiceBuyEth',
  mainTradingInvoiceSellBtc = 'mainTradingInvoiceSellBtc',
  mainTradingInvoiceSellEth = 'mainTradingInvoiceSellEth',
  MainReferralTransaction = 'mainReferralTransaction',
  MainCardFraudCasePending = 'mainCardFraudCasePending',
  MainCardFraudCaseTimeout = 'mainCardFraudCaseTimeout',
  MainAccountSeizure = 'mainAccountSeizure',
  MainAccountDownloadApp = 'mainAccountDownloadApp',
  MainAccountScreenedDeclined = 'mainAccountScreenedDeclined',
  MainCryptoLendingAccountOpened = 'mainCryptoLendingAccountOpened',
  MainCryptoLendingAccountDeclined = 'mainCryptoLendingAccountDeclined',
  MainCryptoLendingInvestmentPending = 'mainCryptoLendingInvestmentPending',
  MainCryptoLendingInvestmentSettled = 'mainCryptoLendingInvestmentSettled',
  MainCryptoLendingWithdrawalPending = 'mainCryptoLendingWithdrawalPending',
  MainCryptoLendingWithdrawalSettled = 'mainCryptoLendingWithdrawalSettled',
  MainCryptoTaxReportGenerated = 'mainCryptoTaxReportGenerated',
  MainNewDevicePaired = 'mainNewDevicePaired',
  MainSdaImmediateAccountClosure = 'mainSdaImmediateAccountClosure',
  MainSdaOrdinaryAccountClosure = 'mainSdaOrdinaryAccountClosure',
  MainAutoBuyInsufficientFunds = 'mainAutoBuyInsufficientFunds',
  MainAutoBuyTradingLimitExceeded = 'mainAutoBuyTradingLimitExceeded',
  MainAutoBuyRejectedUnknownIssue = 'mainAutoBuyRejectedUnknownIssue',
  MainEtfInvestmentPending = 'mainEtfInvestmentPending',
  MainEtfInvestmentCompleted = 'mainEtfInvestmentCompleted',
  MainEtfInvestmentFailed = 'mainEtfInvestmentFailed',
  MainEtfWithdrawalPending = 'mainEtfWithdrawalPending',
  MainEtfWithdrawalCompleted = 'mainEtfWithdrawalCompleted',
  MainEtfWithdrawalFailed = 'mainEtfWithdrawalFailed',
  MainEtfRefund = 'mainEtfRefund',
  MainSolarisTandCAnnouncement = 'mainSolarisTandCAnnouncement',
  MainAcceptSolarisTandC = 'mainAcceptSolarisTandC',
  MainRejectSolarisTandC = 'mainRejectSolarisTandC',
  MainSolarisYellowStatusExistingUsers = 'mainSolarisYellowStatusExistingUsers',
  MainSolarisYellowStatusNewUsers = 'mainSolarisYellowStatusNewUsers',
  MainSolarisTandCUpdate = 'mainSolarisTandCUpdate',
}
export type Templates = { [key in TemplateNames]: (locale: Locales) => string };

export const getSubject = (templateName: TemplateNames, locale: Locales) =>
  intl.formatMessage(
    {
      id: `emails.${
        templateName === TemplateNames.CsdMonthlyStatement
          ? 'csdMonthlyStatements'
          : templateName
      }.subject`,
    },
    locale
  );
export const getTextPart = (templateName: TemplateNames, locale: Locales) =>
  intl.formatMessage(
    {
      id: `emails.${
        templateName === TemplateNames.CsdMonthlyStatement
          ? 'csdMonthlyStatements'
          : templateName
      }.textPart`,
    },
    locale
  );
export const getFileName = (templateName: TemplateNames, locale: Locales) => {
  let envString = env === 'production' ? 'production' : 'staging';
  if (env && env.startsWith('playground-')) {
    envString = env;
  }
  return `${templateName}_${locale}_${envString}`;
};

export const templates = {
  [TemplateNames.CsdAdminAccounts]: csdAdminAccounts,
  [TemplateNames.CsdMissingTaxInfoDays]: csdMissingTaxInfoDays,
  [TemplateNames.CsdMonthlyStatement]: csdMonthlyStatement,
  [TemplateNames.MainAccountFreeze]: mainAccountFreeze,
  [TemplateNames.MainAccountClose]: mainAccountClose,
  [TemplateNames.MainAccountSignup]: mainAccountSignup,
  [TemplateNames.MainAccountSignupIneligible]: mainAccountSignupIneligible,
  [TemplateNames.MainAccountScreenedDeclined]: mainAccountScreenedDeclined,
  [TemplateNames.MainAccountUnfreeze]: mainAccountUnfreeze,
  [TemplateNames.MainCardActivated]: mainCardActivated,
  [TemplateNames.MainCardBlockedBySb]: mainCardBlockedBySb,
  [TemplateNames.MainCardClosedBySb]: mainCardClosedBySb,
  [TemplateNames.MainCardOrder]: mainCardOrder,
  [TemplateNames.MainCardPinChange]: mainCardPinChange,
  [TemplateNames.MainCardUnblockedBySb]: mainCardUnblockedBySb,
  [TemplateNames.MainCreateWallet]: mainCreateWallet,
  [TemplateNames.MainCreateEthWalletIos]: mainCreateEthWalletIos,
  [TemplateNames.MainCreateEthWalletAndroid]: mainCreateEthWalletAndroid,
  [TemplateNames.MainEmailChanged]: mainEmailChanged,
  [TemplateNames.MainAttachedTransactions]: mainAttachedTransactions,
  [TemplateNames.MainAccountStatement]: mainAccountStatement,
  [TemplateNames.MainConfirmCurrentEmailAddress]: mainConfirmCurrentEmailAddress,
  [TemplateNames.MainConfirmNewEmailAddress]: mainConfirmNewEmailAddress,
  [TemplateNames.MainIncomingCryptoTransaction]: mainIncomingCryptoTransaction,
  [TemplateNames.MainIncomingFiatTransaction]: mainIncomingFiatTransaction,
  [TemplateNames.MainIdentificationFailed]: mainIdentificationFailed,
  [TemplateNames.MainPasswordChanged]: mainPasswordChanged,
  [TemplateNames.MainResetPassword]: mainResetPassword,
  [TemplateNames.MainSignupWithSameEmail]: mainSignupWithSameEmail,
  [TemplateNames.MainStandingOrderLastExecution]: mainStandingOrderLastExecution,
  [TemplateNames.mainTradingInvoiceBuyBtc]: mainTradingInvoiceBuyBtc,
  [TemplateNames.mainTradingInvoiceBuyEth]: mainTradingInvoiceBuyEth,
  [TemplateNames.mainTradingInvoiceSellBtc]: mainTradingInvoiceSellBtc,
  [TemplateNames.mainTradingInvoiceSellEth]: mainTradingInvoiceSellEth,
  [TemplateNames.MainReferralTransaction]: mainReferralTransaction,
  [TemplateNames.MainCardFraudCasePending]: mainCardFraudCasePending,
  [TemplateNames.MainCardFraudCaseTimeout]: mainCardFraudCaseTimeout,
  [TemplateNames.MainAccountSeizure]: mainAccountSeizure,
  [TemplateNames.MainAccountDownloadApp]: mainAccountDownloadApp,
  [TemplateNames.MainCryptoLendingAccountOpened]: mainCryptoLendingAccountOpened,
  [TemplateNames.MainCryptoLendingAccountDeclined]: mainCryptoLendingAccountDeclined,
  [TemplateNames.MainCryptoLendingInvestmentPending]: mainCryptoLendingInvestmentPending,
  [TemplateNames.MainCryptoLendingInvestmentSettled]: mainCryptoLendingInvestmentSettled,
  [TemplateNames.MainCryptoLendingWithdrawalPending]: mainCryptoLendingWithdrawalPending,
  [TemplateNames.MainCryptoLendingWithdrawalSettled]: mainCryptoLendingWithdrawalSettled,
  [TemplateNames.MainCryptoTaxReportGenerated]: mainCryptoTaxReportGenerated,
  [TemplateNames.MainNewDevicePaired]: mainNewDevicePaired,
  [TemplateNames.MainSdaImmediateAccountClosure]: mainSdaImmediateAccountClosure,
  [TemplateNames.MainSdaOrdinaryAccountClosure]: mainSdaOrdinaryAccountClosure,
  [TemplateNames.MainAutoBuyInsufficientFunds]: mainAutoBuyInsufficientFunds,
  [TemplateNames.MainAutoBuyTradingLimitExceeded]: mainAutoBuyTradingLimitExceeded,
  [TemplateNames.MainAutoBuyRejectedUnknownIssue]: mainAutoBuyRejectedUnknownIssue,
  [TemplateNames.MainEtfInvestmentFailed]: mainEtfInvestmentFailed,
  [TemplateNames.MainEtfInvestmentPending]: mainEtfInvestmentPending,
  [TemplateNames.MainEtfInvestmentCompleted]: mainEtfInvestmentCompleted,
  [TemplateNames.MainEtfWithdrawalPending]: mainEtfWithdrawalPending,
  [TemplateNames.MainEtfWithdrawalCompleted]: mainEtfWithdrawalCompleted,
  [TemplateNames.MainEtfWithdrawalFailed]: mainEtfWithdrawalFailed,
  [TemplateNames.MainEtfRefund]: mainEtfRefund,
  [TemplateNames.MainSolarisTandCAnnouncement]: mainSolarisTandCAnnouncement,
  [TemplateNames.MainSolarisTandCUpdate]: mainSolarisTandCUpdate,
  [TemplateNames.MainAcceptSolarisTandC]: mainAcceptSolarisTandC,
  [TemplateNames.MainRejectSolarisTandC]: mainRejectSolarisTandC,
  [TemplateNames.MainSolarisYellowStatusExistingUsers]: mainSolarisYellowStatusExistingUsers,
  [TemplateNames.MainSolarisYellowStatusNewUsers]: mainSolarisYellowStatusNewUsers,
};
