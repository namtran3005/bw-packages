import {
  ResolveCreateDeviceChallenge,
  ResolveGetDeviceChallenge,
  SignatureChallenge,
} from '../../types/entities/lib/deviceChallenge';
import { Handler } from '../handler';

export class DeviceChallengeHandler extends Handler {
  public createDeviceChallenge(
    deviceId: string
  ): Promise<ResolveCreateDeviceChallenge> {
    return this.client.post({
      url: '/mfa/challenges/devices',
      data: { deviceId },
    });
  }

  public async verifyDeviceChallenge(
    challengeId: string,
    signature: string
  ): Promise<boolean> {
    const result = await this.client.put({
      url: `/mfa/challenges/devices/${challengeId}`,
      data: { signature },
    });
    return result.status === 204;
  }

  public async getDeviceChallenge(
    challengeId: string
  ): Promise<ResolveGetDeviceChallenge> {
    return this.client.get({
      url: `/mfa/challenges/devices/${challengeId}`,
    });
  }

  public async showSignatureChallenge(
    signatureId: string
  ): Promise<SignatureChallenge> {
    return this.client.get({
      url: `/mfa/challenges/signatures/${signatureId}`,
    });
  }
}
