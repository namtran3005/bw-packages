import { getAuthHeaders } from './utils/signatures';

export const getNonce = () => Date.now().toString();

export enum SignatureErrors {
  INVALID_SIGNATURE = 'Invalid signature',
  NONCE_INVALID = 'Nonce is invalid',
}

export interface AuthHeaders {
  [K: string]: string;
}

export const verifySignature = (
  uriPath: string,
  content: string,
  headers: AuthHeaders,
  secret: string,
  skipNonceCheck: boolean = false
) => {
  const expectedHeaders = getAuthHeaders(
    uriPath,
    content,
    secret,
    headers['x-bitwala-nonce']
  );

  // if the nonce is bigger than now +- 1 minute, then throw an error
  if (
    !skipNonceCheck &&
    Math.abs(Date.now() - Number(headers['x-bitwala-nonce'])) > 60000
  ) {
    throw new Error(SignatureErrors.NONCE_INVALID);
  }
  if (
    expectedHeaders['x-bitwala-signature'] !== headers['x-bitwala-signature']
  ) {
    throw new Error(SignatureErrors.INVALID_SIGNATURE);
  }
};
