import { Countries } from "../../misc/lib/countries";
import { Address } from "../../misc/lib/address";

export enum Title {
  DR = "DR",
  PROF = "PROF",
  PROF_DR = "PROF_DR",
  MAGISTER = "MAGISTER",
}

export enum Salutation {
  MR = "MR",
  MS = "MS",
}

export enum EmploymentStatus {
  EMPLOYED = "EMPLOYED",
  UNEMPLOYED = "UNEMPLOYED",
  PUBLIC_SECTOR_EMPLOYEE = "PUBLIC_SECTOR_EMPLOYEE",
  PROFESSIONAL_SOLDIER = "PROFESSIONAL_SOLDIER",
  FREELANCER = "FREELANCER",
  HOUSEWORK = "HOUSEWORK",
  APPRENTICE = "APPRENTICE",
  MANAGEMENT = "MANAGEMENT",
  RETIRED = "RETIRED",
  STUDENT = "STUDENT",
  SELF_EMPLOYED = "SELF_EMPLOYED",
  MILITARY_OR_COMMUNITY_SERVICE = "MILITARY_OR_COMMUNITY_SERVICE",
}

export enum TaxAssessment {
  NONE = "NONE",
  SEPARATE = "SEPARATE",
  JOINT = "JOINT",
}

export enum MaritalStatus {
  SINGLE = "SINGLE",
  MARRIED = "MARRIED",
  DIVORCED = "DIVORCED",
  WIDOWED = "WIDOWED",
  UNKNOWN = "UNKNOWN",
}

export enum ScreeningProgress {
  SCREENED = "SCREENED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_SCREENED = "NOT_SCREENED",
  POTENTIAL_MATCH = "POTENTIAL_MATCH",
  SCREENED_ACCEPTED = "SCREENED_ACCEPTED",
  SCREENED_DECLINED = "SCREENED_DECLINED",
}

export enum BusinessTradingName {
  FIRST_PREMIUM_TIER = "P1",
}

export interface PersonTaxInformation {
  taxAssessment?: TaxAssessment;
  maritalStatus?: MaritalStatus;
}

export interface PersonInput {
  title?: Title;
  salutation?: Salutation;
  firstName: string;
  lastName: string;
  address: Address;
  contactAddress?: Address;
  employmentStatus: EmploymentStatus;
  jobTitle?: string;
  email?: string;
  mobileNumber: string;
  birthName?: string;
  birthDate: string;
  birthCity: string;
  birthCountry: Countries;
  nationality: Countries;
  taxInformation?: PersonTaxInformation;
  fatcaRelevant?: boolean;
  fatcaCrsConfirmedAt?: string;
  businessPurpose?: string;
  industry?: string;
  industryKey?: string;
  termsConditionsSignedAt?: string;
  addressDocumentType?: string;
  addressDocumentIssuedDate?: string;
  screeningProgress?: ScreeningProgress;
  businessTradingName?: BusinessTradingName;
  riskClassificationStatus?: RiskClassificationStatus;
  customerVettingStatus?: CustomerVettingStatus;
}

export interface Person extends PersonInput {
  solarisId: string;
}

export interface PersonPatch {
  title?: Title;
  salutation?: Salutation;
  firstName?: string;
  lastName?: string;
  address?: Address;
  contactAddress?: Address;
  employmentStatus?: EmploymentStatus;
  jobTitle?: string;
  email?: string;
  taxInformation?: PersonTaxInformation;
  fatcaRelevant?: boolean;
  fatcaCrsConfirmedAt?: string;
  businessPurpose?: string;
  industry?: string;
  industryKey?: string;
  termsConditionsSignedAt?: string;
  businessTradingName?: BusinessTradingName;
}

export enum RiskClassificationStatus {
  NOT_SCORED = "NOT_SCORED",
  POTENTIAL_RISK = "POTENTIAL_RISK",
  NORMAL_RISK = "NORMAL_RISK",
  INFORMATION_REQUESTED = "INFORMATION_REQUESTED",
  INFORMATION_RECEIVED = "INFORMATION_RECEIVED",
  RISK_ACCEPTED = "RISK_ACCEPTED",
  RISK_REJECTED = "RISK_REJECTED",
  CUSTOMER_UNRESPONSIVE = "CUSTOMER_UNRESPONSIVE",
  SCORING_NOT_REQUIRED = "SCORING_NOT_REQUIRED",
}

export enum CustomerVettingStatus {
  NOT_VETTED = "NOT_VETTED",
  NO_MATCH = "NO_MATCH",
  POTENTIAL_MATCH = "POTENTIAL_MATCH",
  INFORMATION_REQUESTED = "INFORMATION_REQUESTED",
  INFORMATION_RECEIVED = "INFORMATION_RECEIVED",
  RISK_ACCEPTED = "RISK_ACCEPTED",
  RISK_REJECTED = "RISK_REJECTED",
  CUSTOMER_UNRESPONSIVE = "CUSTOMER_UNRESPONSIVE",
  VETTING_NOT_REQUIRED = "VETTING_NOT_REQUIRED",
}
