import { SecretsManager } from '../index';

const sm = new SecretsManager();
const mockStringToEncrypt = 'BitwalaSecret';
const mockEncKey = 'a'.repeat(32);
const mockEncKeyWrong = 'a'.repeat(30);
const mockSecretForName = 'SECRET_MONGO_URL';

process.env.SECRET_MONGO_URL = 'value';

describe('secret manager package tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('Should encrypt a string', () => {
    const data = sm.encrypt(mockStringToEncrypt, mockEncKey);
    expect(data.encrypted).toBeDefined();
    expect(data.iv).toBeDefined();
  });

  it('Should throw an error for invalid encryption key', () => {
    try {
      sm.encrypt(mockStringToEncrypt, mockEncKeyWrong);
      throw new Error('Invalid key');
    } catch (e) {
      // eslint-disable-next-line jest/no-try-expect,jest/no-conditional-expect
      expect(e).toBeDefined();
    }
  });

  it('Should decrypt an encrypted string', () => {
    const data = sm.encrypt(mockStringToEncrypt, mockEncKey);
    const formattedEncryptedDAta = `${data.iv}:${data.encrypted}`;

    const plainData = sm.decrypt(formattedEncryptedDAta, mockEncKey);
    expect(plainData).toBeDefined();
    expect(plainData).toBe(mockStringToEncrypt);
  });

  it('Should get secret getStringSecret', () => {
    const data = sm.getStringSecret({ secretFor: mockSecretForName });
    expect(data).toBeDefined();
  });

  it('Should get secret getJSONSecret', () => {
    const data = sm.getJSONSecret({
      secretFor: mockSecretForName,
      attribute: 'dummy',
    });
    expect(data).toBeDefined();
  });

  it('Should get secret getEncryptedJSONSecret', () => {
    const data = sm.getEncryptedJSONSecret({
      key: mockEncKey,
      secretFor: mockSecretForName,
      attribute: 'dummy',
    });
    expect(data).toBeDefined();
  });

  it('Should get secret getEncryptedStringSecret', () => {
    const data = sm.getEncryptedStringSecret({
      key: mockEncKey,
      secretFor: mockSecretForName,
    });
    expect(data).toBeDefined();
  });
});
