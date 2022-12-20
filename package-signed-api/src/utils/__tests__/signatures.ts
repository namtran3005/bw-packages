import * as sigUtils from '../signatures';

const mockTimestamp = 9000;

describe('Request signing utils', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => mockTimestamp);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('getNonce helper', () => {
    it('should return a string with current timestamp', () => {
      expect(sigUtils.getNonce()).toEqual(mockTimestamp.toString());
    });
  });

  describe('getAuthHeaders helper', () => {
    it('should generate correct signature and nonce headers', () => {
      const uriPath = '/foo';
      const content = '{"bar": "baz"}';
      const secret = 'secret';

      const headers = sigUtils.getAuthHeaders(uriPath, content, secret);

      expect(headers).toMatchObject({
        'x-bitwala-nonce': '9000',
        'x-bitwala-signature':
          '38a30e554eb89f0edf6ea31f37561c446554547eb733dc29ca37b643569e8946e6c7c077f1a1147d3dae019697008e2d4fc69ce388e23f4163313cae62a0b801',
      });
    });

    it('should use optional nonce if supplied', () => {
      const uriPath = '/foo';
      const content = '{"bar": "baz"}';
      const secret = 'secret';

      const headers = sigUtils.getAuthHeaders(uriPath, content, secret, '8000');

      expect(headers).toMatchObject({
        'x-bitwala-nonce': '8000',
        'x-bitwala-signature':
          'b6feb2d7fd5c6599029dab0e5bb83173b107ceb7e7a8f9c5f8e42a805a0b6d6e2b1fda62c8c5b6df0b4d319080ff7279f1632d5a26ff5840d75e3fd8a381bc11',
      });
    });
  });
});
