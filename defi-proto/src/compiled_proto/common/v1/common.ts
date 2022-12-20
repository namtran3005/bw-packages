/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "common.v1";

export enum SourceOfWealth {
  SOURCE_OF_WEALTH_UNSPECIFIED = 0,
  SOURCE_OF_WEALTH_SALARY = 1,
  SOURCE_OF_WEALTH_PENSION = 2,
  SOURCE_OF_WEALTH_CAPITAL_INCOME = 3,
  SOURCE_OF_WEALTH_RENTAL_INCOME = 4,
  SOURCE_OF_WEALTH_LOANS = 5,
  SOURCE_OF_WEALTH_INSURANCE_CLAIMS = 6,
  SOURCE_OF_WEALTH_DIVORCE = 7,
  SOURCE_OF_WEALTH_LOTTERY = 8,
  SOURCE_OF_WEALTH_SAVINGS = 9,
  SOURCE_OF_WEALTH_HERITAGE = 10,
  SOURCE_OF_WEALTH_GIFT = 11,
  SOURCE_OF_WEALTH_INVESTMENTS = 12,
  SOURCE_OF_WEALTH_LIFE_INSURANCE = 13,
  SOURCE_OF_WEALTH_COMPANIES = 14,
  SOURCE_OF_WEALTH_JUDGEMENTS = 15,
  SOURCE_OF_WEALTH_CRYPTO = 16,
  UNRECOGNIZED = -1,
}

export function sourceOfWealthFromJSON(object: any): SourceOfWealth {
  switch (object) {
    case 0:
    case "SOURCE_OF_WEALTH_UNSPECIFIED":
      return SourceOfWealth.SOURCE_OF_WEALTH_UNSPECIFIED;
    case 1:
    case "SOURCE_OF_WEALTH_SALARY":
      return SourceOfWealth.SOURCE_OF_WEALTH_SALARY;
    case 2:
    case "SOURCE_OF_WEALTH_PENSION":
      return SourceOfWealth.SOURCE_OF_WEALTH_PENSION;
    case 3:
    case "SOURCE_OF_WEALTH_CAPITAL_INCOME":
      return SourceOfWealth.SOURCE_OF_WEALTH_CAPITAL_INCOME;
    case 4:
    case "SOURCE_OF_WEALTH_RENTAL_INCOME":
      return SourceOfWealth.SOURCE_OF_WEALTH_RENTAL_INCOME;
    case 5:
    case "SOURCE_OF_WEALTH_LOANS":
      return SourceOfWealth.SOURCE_OF_WEALTH_LOANS;
    case 6:
    case "SOURCE_OF_WEALTH_INSURANCE_CLAIMS":
      return SourceOfWealth.SOURCE_OF_WEALTH_INSURANCE_CLAIMS;
    case 7:
    case "SOURCE_OF_WEALTH_DIVORCE":
      return SourceOfWealth.SOURCE_OF_WEALTH_DIVORCE;
    case 8:
    case "SOURCE_OF_WEALTH_LOTTERY":
      return SourceOfWealth.SOURCE_OF_WEALTH_LOTTERY;
    case 9:
    case "SOURCE_OF_WEALTH_SAVINGS":
      return SourceOfWealth.SOURCE_OF_WEALTH_SAVINGS;
    case 10:
    case "SOURCE_OF_WEALTH_HERITAGE":
      return SourceOfWealth.SOURCE_OF_WEALTH_HERITAGE;
    case 11:
    case "SOURCE_OF_WEALTH_GIFT":
      return SourceOfWealth.SOURCE_OF_WEALTH_GIFT;
    case 12:
    case "SOURCE_OF_WEALTH_INVESTMENTS":
      return SourceOfWealth.SOURCE_OF_WEALTH_INVESTMENTS;
    case 13:
    case "SOURCE_OF_WEALTH_LIFE_INSURANCE":
      return SourceOfWealth.SOURCE_OF_WEALTH_LIFE_INSURANCE;
    case 14:
    case "SOURCE_OF_WEALTH_COMPANIES":
      return SourceOfWealth.SOURCE_OF_WEALTH_COMPANIES;
    case 15:
    case "SOURCE_OF_WEALTH_JUDGEMENTS":
      return SourceOfWealth.SOURCE_OF_WEALTH_JUDGEMENTS;
    case 16:
    case "SOURCE_OF_WEALTH_CRYPTO":
      return SourceOfWealth.SOURCE_OF_WEALTH_CRYPTO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceOfWealth.UNRECOGNIZED;
  }
}

export function sourceOfWealthToJSON(object: SourceOfWealth): string {
  switch (object) {
    case SourceOfWealth.SOURCE_OF_WEALTH_UNSPECIFIED:
      return "SOURCE_OF_WEALTH_UNSPECIFIED";
    case SourceOfWealth.SOURCE_OF_WEALTH_SALARY:
      return "SOURCE_OF_WEALTH_SALARY";
    case SourceOfWealth.SOURCE_OF_WEALTH_PENSION:
      return "SOURCE_OF_WEALTH_PENSION";
    case SourceOfWealth.SOURCE_OF_WEALTH_CAPITAL_INCOME:
      return "SOURCE_OF_WEALTH_CAPITAL_INCOME";
    case SourceOfWealth.SOURCE_OF_WEALTH_RENTAL_INCOME:
      return "SOURCE_OF_WEALTH_RENTAL_INCOME";
    case SourceOfWealth.SOURCE_OF_WEALTH_LOANS:
      return "SOURCE_OF_WEALTH_LOANS";
    case SourceOfWealth.SOURCE_OF_WEALTH_INSURANCE_CLAIMS:
      return "SOURCE_OF_WEALTH_INSURANCE_CLAIMS";
    case SourceOfWealth.SOURCE_OF_WEALTH_DIVORCE:
      return "SOURCE_OF_WEALTH_DIVORCE";
    case SourceOfWealth.SOURCE_OF_WEALTH_LOTTERY:
      return "SOURCE_OF_WEALTH_LOTTERY";
    case SourceOfWealth.SOURCE_OF_WEALTH_SAVINGS:
      return "SOURCE_OF_WEALTH_SAVINGS";
    case SourceOfWealth.SOURCE_OF_WEALTH_HERITAGE:
      return "SOURCE_OF_WEALTH_HERITAGE";
    case SourceOfWealth.SOURCE_OF_WEALTH_GIFT:
      return "SOURCE_OF_WEALTH_GIFT";
    case SourceOfWealth.SOURCE_OF_WEALTH_INVESTMENTS:
      return "SOURCE_OF_WEALTH_INVESTMENTS";
    case SourceOfWealth.SOURCE_OF_WEALTH_LIFE_INSURANCE:
      return "SOURCE_OF_WEALTH_LIFE_INSURANCE";
    case SourceOfWealth.SOURCE_OF_WEALTH_COMPANIES:
      return "SOURCE_OF_WEALTH_COMPANIES";
    case SourceOfWealth.SOURCE_OF_WEALTH_JUDGEMENTS:
      return "SOURCE_OF_WEALTH_JUDGEMENTS";
    case SourceOfWealth.SOURCE_OF_WEALTH_CRYPTO:
      return "SOURCE_OF_WEALTH_CRYPTO";
    default:
      return "UNKNOWN";
  }
}

/** Defines the origin of the status transition */
export enum StatusTransitionReason {
  STATUS_TRANSITION_REASON_UNSPECIFIED = 0,
  STATUS_TRANSITION_REASON_SOLARIS = 1,
  STATUS_TRANSITION_REASON_NURI = 2,
  STATUS_TRANSITION_REASON_EXT_PARTNER = 3,
  UNRECOGNIZED = -1,
}

export function statusTransitionReasonFromJSON(
  object: any
): StatusTransitionReason {
  switch (object) {
    case 0:
    case "STATUS_TRANSITION_REASON_UNSPECIFIED":
      return StatusTransitionReason.STATUS_TRANSITION_REASON_UNSPECIFIED;
    case 1:
    case "STATUS_TRANSITION_REASON_SOLARIS":
      return StatusTransitionReason.STATUS_TRANSITION_REASON_SOLARIS;
    case 2:
    case "STATUS_TRANSITION_REASON_NURI":
      return StatusTransitionReason.STATUS_TRANSITION_REASON_NURI;
    case 3:
    case "STATUS_TRANSITION_REASON_EXT_PARTNER":
      return StatusTransitionReason.STATUS_TRANSITION_REASON_EXT_PARTNER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StatusTransitionReason.UNRECOGNIZED;
  }
}

export function statusTransitionReasonToJSON(
  object: StatusTransitionReason
): string {
  switch (object) {
    case StatusTransitionReason.STATUS_TRANSITION_REASON_UNSPECIFIED:
      return "STATUS_TRANSITION_REASON_UNSPECIFIED";
    case StatusTransitionReason.STATUS_TRANSITION_REASON_SOLARIS:
      return "STATUS_TRANSITION_REASON_SOLARIS";
    case StatusTransitionReason.STATUS_TRANSITION_REASON_NURI:
      return "STATUS_TRANSITION_REASON_NURI";
    case StatusTransitionReason.STATUS_TRANSITION_REASON_EXT_PARTNER:
      return "STATUS_TRANSITION_REASON_EXT_PARTNER";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
