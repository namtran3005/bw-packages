import { CardLimits } from '../../entities';

export interface LimitsItemsConstants {
  maxAmountCents: number;
  maxTransactions: number;
}

export interface LimitsDescriptorsConstants {
  daily: LimitsItemsConstants;
  monthly: LimitsItemsConstants;
}

export interface LimitsConstants {
  cardPresent: LimitsDescriptorsConstants;
  cardNotPresent: LimitsDescriptorsConstants;
}

export interface LimitsStatic {
  purchase: LimitsDescriptorsConstants;
  cashAdvance: LimitsDescriptorsConstants;
  purchasePlusCashAdvance: LimitsDescriptorsConstants;
}

const {
  SOLARIS_LIMITS_CARD_PRESENT_MONTHLY_AMOUNT,
  SOLARIS_LIMITS_CARD_NOT_PRESENT_MONTHLY_AMOUNT,
} = process.env;

export const DEBIT_CARD_LIMITS: LimitsConstants = {
  cardPresent: {
    daily: {
      maxAmountCents: 3000 * 100,
      maxTransactions: 20,
    },
    monthly: {
      maxAmountCents:
        (SOLARIS_LIMITS_CARD_PRESENT_MONTHLY_AMOUNT
          ? Number(SOLARIS_LIMITS_CARD_PRESENT_MONTHLY_AMOUNT)
          : 10000) * 100,
      maxTransactions: 150,
    },
  },
  cardNotPresent: {
    daily: {
      maxAmountCents: 5000 * 100,
      maxTransactions: 20,
    },
    monthly: {
      maxAmountCents:
        (SOLARIS_LIMITS_CARD_NOT_PRESENT_MONTHLY_AMOUNT
          ? Number(SOLARIS_LIMITS_CARD_NOT_PRESENT_MONTHLY_AMOUNT)
          : 10000) * 100,
      maxTransactions: 150,
    },
  },
};

export const DEFAULT_DEBIT_CARD_LIMITS: CardLimits = {
  cardPresent: {
    daily: {
      maxAmountCents: 1500 * 100,
      maxTransactions: 10,
    },
    monthly: {
      maxAmountCents: 3000 * 100,
      maxTransactions: 50,
    },
  },
  cardNotPresent: {
    daily: {
      maxAmountCents: 1500 * 100,
      maxTransactions: 10,
    },
    monthly: {
      maxAmountCents: 3000 * 100,
      maxTransactions: 50,
    },
  },
};

export const STATIC_DEBIT_CARD_LIMITS: LimitsStatic = {
  purchase: {
    daily: {
      maxAmountCents: 10000 * 100,
      maxTransactions: 50,
    },
    monthly: {
      maxAmountCents: 10000 * 100,
      maxTransactions: 300,
    },
  },
  cashAdvance: {
    daily: {
      maxAmountCents: 1500 * 100,
      maxTransactions: 50,
    },
    monthly: {
      maxAmountCents: 10000 * 100,
      maxTransactions: 300,
    },
  },
  purchasePlusCashAdvance: {
    // daily limits have the `-` value in the sB's docs [https://docs.solarisbank.de/debit-cards/api/v1/#card-limits]
    daily: {
      maxAmountCents: 10000 * 100,
      maxTransactions: 300,
    },
    monthly: {
      maxAmountCents: 10000 * 100,
      maxTransactions: 300,
    },
  },
};
