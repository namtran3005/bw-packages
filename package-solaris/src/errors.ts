export enum Errors {
  INVALID_WEBHOOK_SIGNATURE = 'Invalid webhook signature',
}

export interface SolarisErrorDetail {
  id: string;
  status: number;
  code: string;
  title: string;
  detail: string;
}

export interface SolarisRequestError extends Error {
  solarisError: SolarisErrorDetail;
}

/**
 * Response is 400. Check for Invalid model, validation error or type error
 * @param code string
 */
export const isSoftError = (code: string) => {
  if (['invalid_model', 'validation_error', 'type_error'].includes(code)) {
    return true;
  }
  return false;
};
