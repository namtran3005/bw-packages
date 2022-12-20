import { createHash, createHmac } from 'crypto';

export const getNonce = () => Date.now().toString();

export const getAuthHeaders = (
  uriPath: string,
  content: string,
  secret: string,
  nonce?: string
) => {
  if (!nonce) {
    nonce = getNonce();
  }

  const bodyDigest = createHash('sha256')
    .update(content)
    .digest('hex')
    .toLowerCase();

  const msg = uriPath + bodyDigest + nonce;

  const signature = createHmac('sha512', secret)
    .update(msg)
    .digest('hex');

  return {
    'x-bitwala-nonce': nonce,
    'x-bitwala-signature': signature,
  };
};
