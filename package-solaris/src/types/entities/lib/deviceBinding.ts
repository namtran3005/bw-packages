// https://docs.solarisbank.com/core/api/v1/#5g6sqA77-post-create-a-device
import { SignatureChallenge } from './deviceChallenge';

export enum SBDeviceBindingAlgorithm {
  ECDSA_P256 = 'ecdsa-p256',
}

export interface DeviceData {
  personId: string;
  keyType: SBDeviceBindingAlgorithm;
  name: string;
  key: string;
  keyPurpose: SBDeviceBindingKeyPurpose
}

export interface ResolveCreateDevice {
  challenge: SignatureChallenge;
  solarisId: string;
}

export interface ResolveRetrieveDevice {
  personId: string;
  createdAt: string;
  solarisId: string;
  name: string;
}

export enum SBDeviceBindingKeyPurpose {
  RESTRICTED = 'restricted',
  UNRESTRICTED = 'unrestricted'
}

export interface NewDeviceKeyData {
  key: string;
  keyType: SBDeviceBindingAlgorithm;
  keyPurpose: SBDeviceBindingKeyPurpose;
  deviceSignature: {
    signatureKeyPurpose: SBDeviceBindingKeyPurpose
    signature: string
  }
}
