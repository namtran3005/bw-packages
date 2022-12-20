export interface AMLReportProfile {
  profile: number;
  cname: string;
}

interface CoinfirmReportInfoSection {
  report_id: string;
  version: string;
  address: string;
  address_type: string;
  address_subtype: string;
  address_estimation: string;
  asset: string;
  precision: number;
  report_type: string;
  report_time: Date;
  report_block_height: number;
  addrss_used: boolean;
  is_cluster?: boolean;
  is_smart_contract?: boolean;
  whitelist: boolean;
}

interface CoinfirmBasicCScoreSection {
  cscore: number;
}

interface CoinfirmFullCScoreSection {
  cscore: number;
  cscore_info: [CoinfirmCScoreInfo];
}

interface CoinfirmBasicProfileSection {
  owner: CoinfirmBasicProfileOwner;
}

interface CoinfirmFullProfileSection {
  owner: CoinfirmFullProfileOwner;
  owner_risk_indicators: CoinfirmOwnerRiskIndicator;
  cluster_info: CoinfirmClusterInfo;
  identified_profiles: [object];
}

interface CoinfirmAssetsSection {
  assets_count: number;
  usd_value: number;
  assetsP: [CoinfirmAssets];
  assets_balance_history: [CoinfirmAssetsBalanceHistory];
}

interface CoinfirmAssets {
  name: string;
  balance: number;
  balance_use: number;
  xrate: number;
  precision: number;
}

interface CoinfirmAssetsBalanceHistory {
  period: string;
  input: number;
  output: number;
  total_balance_usd: number;
}

interface CoinfirmOwnerRiskIndicator {
  name: string;
  risk: string;
  description: string;
}

interface CoinfirmClusterInfo {
  name: string;
  value: string;
  description: string;
}

interface CoinfirmBasicProfileOwner {
  name: string;
}

interface CoinfirmFullProfileOwner {
  name: string;
  url: string;
  type: string;
  legal_entity_name: string;
  description: string;
}

interface CoinfirmBasicFinancialAnalysisSection {
  cc_balance: number;
}

interface CoinfirmFullFinancialAnalysisSection {
  cc_balance: number;
  usd_balance: number;
  usd_balance_without_tokens: number;
  usd_exchange_rate: number;
  first_input: CoinfirmInputOutputTxInfo;
  last_input: CoinfirmInputOutputTxInfo;
  first_output: CoinfirmInputOutputTxInfo;
  last_output: CoinfirmInputOutputTxInfo;
}

interface CoinfirmFullIndicatorsSection {
  cat_name: string;
  risk_detected: boolean;
  sub_categories: [object];
}

interface CoinfirmInputOutputTxInfo {
  block_time: string;
  tx_hash: string;
  amount: number;
  usd_value: number;
  block_height: number;
  activated: boolean;
}

interface CoinfirmOtherInformationSection {
  disclaimer: string;
  glossary: [CoinfirmGlossary];
}

interface CoinfirmGlossary {
  term: string;
  description: string;
}

interface CoinfirmCScoreInfo {
  name: string;
  group_name: string;
  impact: number;
  type: number;
  id: number;
}

export interface CoinfirmBasicAMLReport {
  report_info_section: CoinfirmReportInfoSection;
  cscore_section: CoinfirmBasicCScoreSection;
  profile_section: CoinfirmBasicProfileSection;
  financial_analysis_section: CoinfirmBasicFinancialAnalysisSection;
  indicators_section: CoinfirmFullIndicatorsSection;
  other_information_section: CoinfirmOtherInformationSection;
}

export interface CoinfirmFullAMLReport {
  report_info_section: CoinfirmReportInfoSection;
  cscore_section: CoinfirmFullCScoreSection;
  profile_section: CoinfirmFullProfileSection;
  assets_section: CoinfirmAssetsSection;
  financial_analysis_section: CoinfirmFullFinancialAnalysisSection;
  other_information_section: CoinfirmOtherInformationSection;
}

export enum CoinfirmReportType {
  BASIC = 'basic',
  STANDARD = 'standard',
  FULL = 'full',
}

export interface CoinfirmOptions {
  apiUrl: string;
  apiToken: string;
  apiVersion?: string;
  timeout?: number;
}
