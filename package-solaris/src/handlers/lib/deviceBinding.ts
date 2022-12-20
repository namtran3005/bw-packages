import {
  ResolveRetrieveDevice,
  ResolveCreateDevice,
  DeviceData,
  NewDeviceKeyData
} from '../../types';
import { Handler } from '../handler';

export class DeviceBindingHandler extends Handler {
  public createDevice(data: DeviceData): Promise<ResolveCreateDevice> {
    return this.client.post({
      url: '/mfa/devices',
      data,
    });
  }

  public async verifyDevice(
    signatureId: string,
    signature: string
  ): Promise<boolean> {
    const result = await this.client.put({
      url: `/mfa/challenges/signatures/${signatureId}`,
      data: { signature },
    });
    return result.status === 204;
  }

  public retrieveDevice(deviceId: string): Promise<ResolveRetrieveDevice> {
    return this.client.get({
      url: `/mfa/devices/${deviceId}`,
    });
  }

  public async removeDevice(deviceId: string): Promise<boolean> {
    const result = await this.client.delete({
      url: `/mfa/devices/${deviceId}`,
    });
    return result.status === 204;
  }

  public async addNewKeyToDevice(deviceId: string, data: NewDeviceKeyData): Promise<boolean> {
    const result = await this.client.post({
      url: `/mfa/devices/${deviceId}/keys`,
      data
    })
    return !!result.solarisId
  }
}
