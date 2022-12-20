/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignedApi } from '../api';
import { SignedApiClient } from '../client';

const mockUrl = 'https://prereg.bitwala.com';
const mockSecret = 'secret';

enum Mails {
  EXISTING = 'existing@mail.com',
  NON_EXISTING = 'non_existing@mail.com',
  ERROR = 'error@mail.com',
  FORBIDDEN = 'forbidden@mail.com',
  CONTINUE = 'continue@mail.com',
}

const mockStatuses: any = {
  [Mails.EXISTING]: 200,
  [Mails.NON_EXISTING]: 404,
  [Mails.ERROR]: 500,
  [Mails.FORBIDDEN]: 403,
  [Mails.CONTINUE]: 100,
};

describe('Prereg api wrapper', () => {
  describe('`SignedApi` class', () => {
    let api: SignedApi;

    beforeAll(() => {
      api = new SignedApi(mockUrl, mockSecret);
      jest.spyOn(SignedApi as any, 'getStatusValidator');
    });

    beforeEach(() => {
      jest.clearAllMocks();
      api = new SignedApi(mockUrl, mockSecret);
      jest
        .spyOn((api as any).client, 'call')
        .mockImplementation((config: any) => {
          const status = mockStatuses[config.data.email];
          const statusOk = [200, 404].includes(status);
          return statusOk
            ? Promise['resolve']({ status })
            : Promise['reject']({ status });
        });
    });

    afterAll(() => {
      jest.clearAllMocks();
      jest.restoreAllMocks();
    });

    describe('Constructor', () => {
      it('should attach a http client instance', () => {
        expect((api as any).client).toBeInstanceOf(SignedApiClient);
      });
    });

    describe('Status validator factory', () => {
      it('should return a fn which checks if received status code is one of the provided codes', () => {
        const validator = SignedApi.getStatusValidator([200]);
        expect(validator(400)).toBe(false);
        expect(validator(200)).toBe(true);
      });
    });

    describe('SignedApi.prototype.callAPI', () => {
      it('should call http client with right params', () => {
        api.callAPI('/email-check/dd2c5ab92646bdc024a570cec67664f2', {
          email: Mails.EXISTING,
        });
        expect((api as any).client.call.mock.calls[0][0]).toMatchObject({
          method: 'POST',
          url: '/email-check/dd2c5ab92646bdc024a570cec67664f2',
          data: {
            email: Mails.EXISTING,
          },
        });
        expect(
          typeof (api as any).client.call.mock.calls[0][0].validateStatus
        ).toBe('function');
      });

      it('should return true when got status 200', async () => {
        const res = await api.callAPI(
          '/email-check/dd2c5ab92646bdc024a570cec67664f2',
          { email: Mails.EXISTING }
        );
        expect(res).toBe(true);
      });

      it('should return false when got status 404', async () => {
        const res = await api.callAPI(
          '/email-check/dd2c5ab92646bdc024a570cec67664f2',
          { email: Mails.NON_EXISTING }
        );
        expect(res).toBe(false);
      });

      it('should throw when got any other status code', async () => {
        await expect(
          api.callAPI('/email-check/dd2c5ab92646bdc024a570cec67664f2', {
            email: Mails.ERROR,
          })
        ).rejects.toEqual({
          status: 500,
        });
        await expect(
          api.callAPI('/email-check/dd2c5ab92646bdc024a570cec67664f2', {
            email: Mails.FORBIDDEN,
          })
        ).rejects.toEqual({
          status: 403,
        });
        await expect(
          api.callAPI('/email-check/dd2c5ab92646bdc024a570cec67664f2', {
            email: Mails.CONTINUE,
          })
        ).rejects.toEqual({
          status: 100,
        });
      });
    });
  });
});
