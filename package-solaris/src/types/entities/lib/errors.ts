export interface SolarisErrorSource {
  field: string;
  message: string;
}

export interface SolarisError {
  solarisId: string;
  status: string;
  code: string;
  title: string;
  detail: string;
  source?: SolarisErrorSource;
}
