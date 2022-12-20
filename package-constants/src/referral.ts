export const referralBonusAmountsInCents = [3000, 1500];

export const REFERRAL_THIRTY_PROMOTION_START_DATE = new Date('2020/05/05');
export const REFERRAL_THIRTY_PROMOTION_END_DATE = new Date('2020/05/20');
export const NORMAL_REFERRAL_BONUS = 15;
export const NORMAL_REFERRAL_BONUS_CURRENCY = 'EUR';
export const THIRTY_EURO_REFERRAL_BONUS = 30;

export enum ReferredUserStatus {
  REGISTERED = 'REGISTERED',
  COMPLETED = 'COMPLETED',
  PAID = 'PAID',
}

export enum Promotions {
  THIRTY_EURO = 'THIRTY_EURO',
}
