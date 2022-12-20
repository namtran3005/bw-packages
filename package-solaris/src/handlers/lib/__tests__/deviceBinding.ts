
import { DeviceBindingHandler } from '../deviceBinding';
import { Handler } from '../../handler';
import {SBDeviceBindingAlgorithm, SBDeviceBindingKeyPurpose, solarisClientFactory} from "../../../";

const client = solarisClientFactory({
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
});

const deviceBinding = new DeviceBindingHandler(client);
const deviceId = 'device_id';
const signature = 'signature';
const signatureId = 'signature_id'
const payloadCreate = {
  personId: 'person_id',
  keyType: SBDeviceBindingAlgorithm.ECDSA_P256,
  name: 'string',
  key: 'key',
  keyPurpose: SBDeviceBindingKeyPurpose.UNRESTRICTED
}
const payloadAdd = {
  key: 'key',
  keyType: SBDeviceBindingAlgorithm.ECDSA_P256,
  keyPurpose: SBDeviceBindingKeyPurpose.RESTRICTED,
  deviceSignature: {
    signatureKeyPurpose: SBDeviceBindingKeyPurpose.UNRESTRICTED,
    signature: 'signature'
  }
};

describe('Device Binding handlers', () => {
  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be an instance of Handler class', () => {
    expect(deviceBinding).toBeInstanceOf(Handler);
  });

  it('should POST to /mfa/devices', () => {
    deviceBinding.createDevice(payloadCreate);
    expect(client.post).toBeCalledWith({
      url: `/mfa/devices`,
      data: payloadCreate
    });
  });

  it('should PUT to /mfa/challenges/signatures/:signatureId', () => {
    deviceBinding.verifyDevice(signatureId, signature);
    expect(client.put).toBeCalledWith({
      url: `/mfa/challenges/signatures/${signatureId}`,
      data: { signature }
    });
  });

  it('should GET to /mfa/devices/:deviceId', () => {
    deviceBinding.retrieveDevice(deviceId);
    expect(client.get).toBeCalledWith({
      url: `/mfa/devices/${deviceId}`
    });
  });

  it('should DELETE to /mfa/devices/:deviceId', () => {
    deviceBinding.removeDevice(deviceId);
    expect(client.delete).toBeCalledWith({
      url: `/mfa/devices/${deviceId}`
    });
  });

  it('should POST to /mfa/devices/:deviceId/keys', () => {
    deviceBinding.addNewKeyToDevice(deviceId, payloadAdd);
    expect(client.post).toBeCalledWith({
      url: `/mfa/devices/${deviceId}/keys`,
      data: payloadAdd
    });
  });
});
