import { randomBytes } from 'crypto';
import { Document, Schema, SchemaTypes } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { Countries } from '@bitwala-cryptobank-squad/package-solaris';

const TRADING_LIMIT = 30000;

export interface ProfileDoc {
  firstName: string;
  lastName: string;
  dob: Date;
  country: string;
}
export interface EmailDoc {
  address: string;
  verified: boolean;
}
export interface ServicesDoc {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  password: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'two-factor': any;
}

export const emailSchema = new Schema({
  address: String,
  verified: Boolean,
});

export const ServicesSchema = new Schema({
  password: SchemaTypes.Mixed,
  'two-factor': SchemaTypes.Mixed,
});

export interface AddressOnboarding {
  country: Countries;
  city: string;
  street: string;
  number: string;
  additional: string;
  postalCode: string;
  state: string;
}

export const addressOnboardingShape = {
  street: {
    type: String,
    required: true,
    maxlength: 35,
  },
  number: {
    type: String,
    required: true,
    maxlength: 35,
  },
  additional: {
    type: String,
    required: false,
    maxlength: 35,
  },
  postalCode: {
    type: String,
    required: true,
    maxlength: 10,
  },
  city: {
    type: String,
    required: true,
    maxlength: 35,
  },
  country: {
    type: String,
    required: true,
    enum: Object.values(Countries),
  },
  state: {
    type: String,
    required: false,
    maxlength: 35,
  },
};

export const addressOnboardingSchema: Schema = new Schema(
  addressOnboardingShape,
  { _id: false }
);

export interface UserMeta {
  firstName: string;
  lastName: string;
  country: string;
  document: string;
  nationality: string;
  address: AddressOnboarding;
}

export enum EmailChangeReason {
  CHANGED_BY_SOLARIS = 'CHANGED_BY_SOLARIS',
}

export enum ReferrerType {
  IMPACT_RADIUS = 'impactRadius',
}

export enum ReceiveEthWarningChoice {
  KEEP_REMINDING_ME = 'KEEP_REMINDING_ME',
  DONT_REMIND_ME_FOR_ONE_MONTH = 'DONT_REMIND_ME_FOR_ONE_MONTH',
}

export interface UtmConfig {
  when?: Date; // this will be needed later on to track expiry of UTMs
  term?: string;
  name?: string;
  source?: string;
  content?: string;
  medium?: string;
  clickId?: string;
  impactRadiusClickTimestamp?: string;
  impactRadiusShareId?: string;
  impactRadiusRandInt?: string;
  referrerType?: ReferrerType;
}

export interface EmailDocOld {
  address: string;
  changeReason: EmailChangeReason;
  when: Date;
}

export interface PushNotificationsConfig {
  deviceToken: string;
  endpointArn: string;
}

export enum ReferredUserStatus {
  REGISTERED = 'REGISTERED',
  COMPLETED = 'COMPLETED',
  PAID = 'PAID',
}

export interface ReferredUser {
  userId: string;
  status: string;
  createdAt: Date;
  promotion?: string;
  bonusAmount: number;
}

export interface AppRatingDoc {
  appRatingStatus: AppRatingStatus;
  appRatingDate: Date;
  appRatingPlatform: AppRatingPlatform;
}

export enum AppRatingStatus {
  RATEDNOW = 'RATEDNOW',
  NOTNOW = 'NOTNOW',
  SENTFEEDBACK = 'SENTFEEDBACK',
}

export enum AppRatingPlatform {
  IOS = 'IOS',
  ANDROID = 'ANDROID',
}

export interface PushNotificationUserProperties {
  id: string;
  locale: Locales;
}

export interface FriendCompleted {
  userId: string;
  modalDismissed: boolean;
}

export interface PromoData {
  friendsPending?: number;
  friendsCompleted?: number;
  bonusAmountPending?: number;
  bonusAmountPaid?: number;
  friendsCompletedList?: FriendCompleted[];
}

export enum KycReminderType {
  IN_ONE_HOUR = 'IN_ONE_HOUR',
  TONIGHT = 'TONIGHT',
  TOMORROW = 'TOMORROW',
  NEXT_WEEKEND = 'NEXT_WEEKEND',
}

export enum KycReminderStatus {
  CREATED = 'CREATED',
  TRIGGERED = 'TRIGGERED',
}

export interface KycReminderDetails {
  fireDate: Date;
  type: KycReminderType;
  status: KycReminderStatus;
}

export enum GlobalPushNotificationEvent {
  GLOBAL_BTC_PRICE_ALERT = 'GLOBAL_BTC_PRICE_ALERT',
  GLOBAL_ETH_PRICE_ALERT = 'GLOBAL_ETH_PRICE_ALERT',
  TRADING_LIMIT_UPDATED = 'TRADING_LIMIT_UPDATED',
}

export enum SdaEntityState {
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
  CLOSING = 'CLOSING',
  PENDING = 'PENDING',
  LEGALLY_CLOSED = 'LEGALLY_CLOSED',
}

export enum IndicativeDeletionResult {
  FAIL = 'FAIL',
  SUCCESS = 'SUCCESS',
}

export enum SignupMethod {
  EMAIL = 'EMAIL',
  GOOGLE = 'GOOGLE',
}

export interface IndicativeDeletion {
  result: IndicativeDeletionResult;
  time: Date;
}

export type ReceivedPushNotifications = Record<
  GlobalPushNotificationEvent,
  Date
>;

export interface UserDoc extends Document {
  id: string;
  locale: Locales;
  marketing?: boolean;
  profile: ProfileDoc;
  emails: EmailDoc[];
  emailsOld?: EmailDocOld[];
  frozen?: boolean;
  frozenReason?: string;
  frozenAt?: Date;
  gdprDeletedAt?: Date;
  gdprDeletedDates?: Date[];
  services: ServicesDoc;
  solarisPersonSolarisId?: string;
  solarisAccountSolarisId?: string;
  isVerified: boolean;
  verifiedAt?: Date;
  verificationUrl?: string;
  disabledPushNotifications?: string[];
  disabledEmailNotifications?: string[];
  disabledEmailsEvents?: string[];
  clientSecret: string;
  sentMissingTaxInfoReminder: string[];
  tradedEUR?: number;
  tradingLimit: number;
  tradingLimitReached?: boolean;
  rollingTradingVolume?: number;
  createdAt: Date;
  updatedAt: Date;
  closureRequested?: boolean;
  closureRequestReason?: string;
  solarisTermsAndConditionsSignedAt: Date;
  solarisTradingTermsAndConditionsSignedAt: Date;
  bitwalaTermsAndConditionsSignedAt: Date;
  bitwalaCustodyTermsAndConditionsSignedAt?: Date;
  solarisCustodyTermsAndConditionsSignedAt?: Date;
  nuriSepaMandateSignedAt?: Date;
  privacyAcceptedAt: Date;
  isLegacy?: boolean;
  hasMadeATrade?: boolean;
  meta?: UserMeta;
  pushNotificationsConfigs?: PushNotificationsConfig[];
  iosInstalled?: boolean;
  androidInstalled?: boolean;
  utm?: UtmConfig;
  appRatings?: AppRatingDoc[];
  referralCodeTalonOneOwn: string;
  referralCodeTalonOneAdvocate: string;
  hasCompletedReferral?: boolean;
  promoData?: PromoData;
  referralModalFired?: boolean;
  kycReminder?: KycReminderDetails;
  /**
   * @deprecated
   */
  referralCode: string;
  /**
   * @deprecated
   */
  referrerUserId?: string;
  /**
   * @deprecated
   */
  referredUsers: ReferredUser[];
  synchedWithSolarisAt?: Date;
  cryptoTaxAcceptedAt?: Date;
  complianceSignedAt?: Date;
  cddEmailSentAt?: Date;
  segmentDisabledEvents?: string[];
  sdaEntityId?: string;
  sdaEntityState?: SdaEntityState;
  sdaToCAcceptedAt?: Date;
  splitIoId?: string;
  anonymousId?: string;
  hasSeenUpdateSODescriptionWidget?: boolean;
  timesHasSeenCustodyInfo?: number;
  receivedPushNotifications?: ReceivedPushNotifications;
  // sB have requested to prevent certain persons from opening an sDA account. With this field we can blacklist
  isCustodyBlocked?: boolean;
  bvdhId?: string;
  indicativeDeletion: IndicativeDeletion;

  isInterestedInVisaCard: boolean | null;
  isOnboardedInMobile: boolean | null;
  loggedInBefore?: boolean;
  sddEmailSentAt?: Date;
}

export const receivedPushNotificationsSchema: Schema = new Schema({
  [GlobalPushNotificationEvent.GLOBAL_BTC_PRICE_ALERT]: {
    type: Date,
    required: false,
    index: true,
  },
  [GlobalPushNotificationEvent.GLOBAL_ETH_PRICE_ALERT]: {
    type: Date,
    required: false,
    index: true,
  },
  [GlobalPushNotificationEvent.TRADING_LIMIT_UPDATED]: {
    type: Date,
    required: false,
    index: true,
  },
});

export const utmConfigSchema: Schema = new Schema(
  {
    content: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    source: {
      type: String,
      required: false,
    },
    medium: {
      type: String,
      required: false,
    },
    term: {
      type: String,
      required: false,
    },
    clickId: {
      type: String,
      required: false,
    },
    impactRadiusClickTimestamp: {
      type: String,
      required: false,
    },
    impactRadiusShareId: {
      type: String,
      required: false,
    },
    impactRadiusRandInt: {
      type: String,
      required: false,
    },
    referrerType: {
      type: String,
      required: false,
      enum: Object.values(ReferrerType),
    },
    when: {
      type: Date,
      required: false,
    },
  },
  { _id: false }
);

export const userMetaSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    document: {
      type: String,
      required: false,
    },
    address: {
      type: addressOnboardingSchema,
      required: false,
    },
    sawNuriAnnouncement: {
      type: Boolean,
      required: false,
    },
    sawBitcoinInterestModal: {
      type: Boolean,
      required: false,
    },
    sawLearn: {
      type: Boolean,
      required: false,
    },
  },
  { _id: false }
);

export const userEmailSchema: Schema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false }
);

export const userEmailOldSchema: Schema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    changeReason: {
      type: String,
      required: true,
    },
    when: {
      type: Date,
      required: true,
    },
  },
  { _id: false }
);

export const pushNotificationsConfigSchema: Schema = new Schema(
  {
    deviceToken: {
      type: String,
      required: true,
    },
    endpointArn: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

export const appRatingSchema: Schema = new Schema(
  {
    appRatingStatus: {
      type: String,
      enum: Object.values(AppRatingStatus),
      required: true,
    },
    appRatingDate: {
      type: Date,
      required: true,
    },
    appRatingPlatform: {
      type: String,
      enum: Object.values(AppRatingPlatform),
      required: true,
    },
  },
  { _id: false }
);

export const referredUserSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(ReferredUserStatus),
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    promotion: {
      type: String,
      required: false,
    },
    bonusAmount: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const friendsCompletedSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    modalDismissed: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false }
);

export const promoDataSchema: Schema = new Schema(
  {
    friendsPending: {
      type: Number,
      required: false,
      default: 0,
    },
    friendsCompleted: {
      type: Number,
      required: false,
      default: 0,
    },
    bonusAmountPending: {
      type: Number,
      required: false,
      default: 0,
    },
    bonusAmountPaid: {
      type: Number,
      required: false,
      default: 0,
    },
    friendsCompletedList: {
      type: [friendsCompletedSchema],
      required: false,
    },
  },
  { _id: false }
);

export const indicativeDeletionSchema: Schema = new Schema(
  {
    result: {
      type: IndicativeDeletionResult,
      required: true,
      index: true,
    },
    time: {
      type: Date,
      required: true,
      index: true,
    },
  },
  { _id: false }
);

export const kycReminderSchema: Schema = new Schema({
  fireDate: {
    type: Date,
    required: true,
    index: true,
  },
  status: {
    type: KycReminderStatus,
    required: true,
    index: true,
  },
  type: {
    type: KycReminderType,
    required: true,
    index: true,
  },
});

export const receiveEthWarningChoiceSchema: Schema = new Schema(
  {
    choice: {
      type: ReceiveEthWarningChoice,
      required: true,
    },
    lastUpdated: { type: Date, required: true },
  },
  { _id: false }
);

export const usersSchema: Schema = new Schema(
  {
    locale: {
      type: String,
      required: true,
      enum: ['en', 'de'],
    },
    marketing: {
      type: Boolean,
      required: false,
    },
    emails: [
      {
        type: userEmailSchema,
        required: true,
      },
    ],
    emailsOld: [
      {
        type: userEmailOldSchema,
        required: true,
      },
    ],
    appRatings: [
      {
        type: appRatingSchema,
        required: false,
      },
    ],
    isVerified: {
      index: true,
      type: Boolean,
      required: true,
      default: false,
    },
    verifiedAt: {
      type: Date,
      required: false,
    },
    disabledEmailNotifications: [
      {
        type: String,
        required: false,
      },
    ],
    disabledPushNotifications: [
      {
        type: String,
        index: true,
        required: false,
      },
    ],
    solarisAccountSolarisId: {
      type: String,
      required: false,
      index: true,
    },
    solarisPersonSolarisId: {
      type: String,
      required: false,
      index: true,
    },
    services: {
      type: SchemaTypes.Mixed,
    },
    frozen: {
      type: Boolean,
      required: false,
      default: false,
      index: true,
    },
    frozenReason: {
      type: String,
      required: false,
    },
    frozenAt: {
      type: Date,
      required: false,
    },
    gdprDeletedAt: {
      type: Date,
      required: false,
    },
    gdprDeletedDates: [
      {
        type: Date,
        required: false,
      },
    ],
    clientSecret: {
      type: String,
      required: true,
      default: () => randomBytes(8).toString('hex'),
    },
    sentMissingTaxInfoReminder: {
      type: [String],
      required: false,
    },
    tradedEUR: {
      type: Number,
      required: false,
      index: true,
    },
    tradingLimitReached: {
      type: Boolean,
      required: false,
    },
    tradingLimit: {
      type: Number,
      required: true,
      default: TRADING_LIMIT,
    },
    rollingTradingVolume: {
      type: Number,
      required: false,
      index: true,
      default: 0,
    },
    receivedPushNotifications: {
      type: receivedPushNotificationsSchema,
      required: false,
      index: true,
    },
    closureRequested: {
      type: Boolean,
      required: false,
    },
    closureRequestReason: {
      type: String,
      required: false,
    },
    solarisTermsAndConditionsSignedAt: {
      type: Date,
      required: true,
    },
    solarisTradingTermsAndConditionsSignedAt: {
      type: Date,
      required: true,
    },
    bitwalaTermsAndConditionsSignedAt: {
      type: Date,
      required: true,
    },
    bitwalaCustodyTermsAndConditionsSignedAt: {
      type: Date,
      required: false,
    },
    solarisCustodyTermsAndConditionsSignedAt: {
      type: Date,
      required: false,
    },
    nuriSepaMandateSignedAt: {
      type: Date,
      required: false,
    },
    privacyAcceptedAt: {
      type: Date,
      required: false,
    },
    cryptoTaxAcceptedAt: {
      type: Date,
      required: false,
    },
    isLegacy: {
      type: Boolean,
      required: false,
    },
    hasMadeATrade: {
      type: Boolean,
      required: false,
    },
    meta: {
      type: userMetaSchema,
      required: false,
    },
    pushNotificationsConfigs: {
      type: [pushNotificationsConfigSchema],
      required: false,
      index: true,
    },
    iosInstalled: {
      type: Boolean,
      required: false,
    },
    androidInstalled: {
      type: Boolean,
      required: false,
    },
    utm: {
      type: utmConfigSchema,
      required: false,
    },
    referralCodeTalonOneOwn: {
      type: String,
      required: false,
      index: true,
    },
    referralCodeTalonOneAdvocate: {
      type: String,
      required: false,
      index: true,
    },
    promoData: {
      type: promoDataSchema,
      required: false,
    },
    hasCompletedReferral: {
      type: Boolean,
      required: false,
    },
    referralModalFired: {
      type: Boolean,
      required: false,
    },
    /**
     * @deprecated soon
     */
    referralCode: {
      type: String,
      required: false,
      index: true,
    },
    /**
     * @deprecated soon
     */
    referrerUserId: {
      type: String,
      required: false,
    },
    /**
     * @deprecated soon
     */
    referredUsers: {
      type: [referredUserSchema],
      required: false,
    },
    complianceSignedAt: {
      type: Date,
      required: false,
    },
    cddEmailSentAt: {
      type: Date,
      required: false,
    },
    segmentDisabledEvents: {
      type: [String],
      required: false,
    },
    hasSeenUpdateSODescriptionWidget: {
      type: Boolean,
      required: false,
    },
    splitIoId: {
      type: String,
      required: true,
      default: uuidv4,
      index: true,
    },
    anonymousId: {
      type: String,
      required: false,
    },
    isInterestedInVisaCard: {
      type: Boolean,
      required: false,
    },
    isOnboardedInMobile: {
      type: Boolean,
      required: false,
    },
    bvdhId: {
      type: String,
      required: false,
      index: true,
    },
    timesHasSeenCustodyInfo: {
      type: Number,
      required: false,
    },
    sdaEntityId: {
      type: String,
      required: false,
      index: true,
    },
    sdaEntityState: {
      type: String,
      enum: Object.values(SdaEntityState),
      required: false,
    },
    sdaToCAcceptedAt: {
      type: Date,
      required: false,
    },
    kycReminder: {
      type: kycReminderSchema,
      required: false,
    },
    isCustodyBlocked: {
      type: Boolean,
      required: false,
    },
    isFraudWarningChecked: {
      type: Boolean,
      required: false,
    },
    indicativeDeletion: {
      type: indicativeDeletionSchema,
      required: false,
    },
    receiveEthWarningModal: {
      type: receiveEthWarningChoiceSchema,
      required: false,
    },
    signupMethod: {
      type: SignupMethod,
      required: true,
    },
    loggedInBefore: {
      type: Boolean,
      required: true,
    },
    sddEmailSentAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'users' }
);

usersSchema.index({ createdAt: 1 });
usersSchema.index({ 'emails.0.address': 1 });
