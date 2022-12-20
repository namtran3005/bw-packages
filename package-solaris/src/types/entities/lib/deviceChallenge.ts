export interface ResolveCreateDeviceChallenge {
  createdAt: string;
  type: string;
  solarisId: string;
  expiresAt: string;
  stringToSign: string;
}

export interface ResolveGetDeviceChallenge {
  createdAt: string;
  type: string;
  solarisId: string;
  expiresAt: string;
  stringToSign: string;
}

export interface SignatureChallenge {
  createdAt: string;
  type: string;
  solarisId: string;
  expiresAt: string;
}
