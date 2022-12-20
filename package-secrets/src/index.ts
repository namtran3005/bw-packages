import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';
import { SecretsManager as manager } from 'aws-sdk';

export interface GetSecretsFromJsonArgs {
  secretFor: string;
  attribute: string;
}

export interface GetEncryptedStringSecretArgs {
  secretFor: string;
  key?: string;
}

export interface GetStringSecretArg {
  secretFor: string;
}

export interface GetEncryptedJSONSecretArgs {
  secretFor: string;
  key?: string;
  attribute: string;
}

const IV_LENGTH = 16; // For AES, this is always 16

const client = new manager({
  endpoint: 'https://secretsmanager.eu-central-1.amazonaws.com',
  region: 'eu-central-1',
});

const dummyMasterKeyValues = ['null', 'undefined', 'NaN', 'dummy'];

export class SecretsManager {
  private masterKey: string;
  private plainTextMode: boolean;

  constructor() {
    if (
      process.env.NODE_ENV !== 'production' &&
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      dummyMasterKeyValues.includes(process.env.MASTER_KEY!)
    ) {
      this.masterKey = '';
      this.plainTextMode = true;
      return;
    }

    if (process.env.MASTER_KEY) {
      this.masterKey = process.env.MASTER_KEY as string;
      this.plainTextMode = false;
    } else if (process.env.NODE_ENV === 'production') {
      /*
       * Don't test NODE_ENV for anything but the string 'production'.
       * See https://nemisj.com/not-use-node_env-defining-environments/.
       */
      throw new Error('Master encryption key is not defined');
    } else {
      this.masterKey = '';
      this.plainTextMode = true;
    }
  }

  /**
   *
   * @param text any length of string to encrypt
   * @param key Must be 256 bytes (32 characters)
   */
  public encrypt(text: string, key: string) {
    const iv = randomBytes(IV_LENGTH);
    // eslint-disable-next-line node/no-deprecated-api
    const cipher = createCipheriv('aes-256-cbc', new Buffer(key), iv);
    const buff = Buffer.from(text, 'utf8');
    let encrypted = cipher.update(buff);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return {
      iv: iv.toString('hex'),
      encrypted: encrypted.toString('hex'),
    };
  }

  /**
   *
   * @param text string to be decrypted includes initialization vector
   *              format:  "IV16CARACTERS:ENCRYPTEDTEXT"
   *              IV and ecrypted data are separated with `:`
   * @param key Must be 256 bytes (32 characters)
   */
  public decrypt(text: string, key: string) {
    const textParts = text.split(':') as string[];
    // eslint-disable-next-line node/no-deprecated-api
    const ivBuffer = new Buffer(textParts.shift() as string, 'hex');
    // eslint-disable-next-line node/no-deprecated-api
    const encryptedText = new Buffer(textParts.join(':'), 'hex');
    // eslint-disable-next-line node/no-deprecated-api
    const decipher = createDecipheriv('aes-256-cbc', new Buffer(key), ivBuffer);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }

  /**
   * @description  get raw secret from AWS SM and return
   * @returns the plain string of secret (it can be double encrypted by our side)
   * @param secretFor string for the environment name that holds secret id
   */
  public async getStringSecret({
    secretFor,
  }: GetStringSecretArg): Promise<string> {
    if (this.plainTextMode) {
      return process.env[secretFor] as string;
    }
    const secretId = this.getSecretId(secretFor);
    const secret = new Promise(
      // eslint-disable-next-line no-async-promise-executor
      async (resolve, reject): Promise<void> => {
        await client.getSecretValue({ SecretId: secretId }, (err, data) => {
          if (err) {
            return reject('SecretsManager:' + err.code + err.message);
          } else {
            return resolve(
              data.SecretString !== '' ? (data.SecretString as string) : ''
            );
          }
        });
      }
    );
    return (await secret) as string;
  }

  /**
   * @description get raw secret -> parse json and get attr. value -> decrypt and return
   * @throws when there is an error during decryption of the value of the secret JSON attribute
   * @throws when there is no master encryption key passed or in process.env
   */
  public async getEncryptedJSONSecret({
    secretFor,
    attribute,
    key,
  }: GetEncryptedJSONSecretArgs) {
    if (this.plainTextMode) {
      return process.env[secretFor] as string;
    }
    if (!key) {
      key = this.masterKey;
    }
    const secret = await this.getJSONSecret({ secretFor, attribute });

    const decrypted = this.decrypt(secret, key);
    return decrypted;
  }

  /**
   * @description get raw secret -> decrypt and return
   *   for dev and test return directly the env variable for secretFor
   * @throws when there is an error during decryption of the value of the secret JSON attribute
   * @throws when there is no master encryption key passed or in the process.env
   */
  public async getEncryptedStringSecret({
    secretFor,
    key,
  }: GetEncryptedStringSecretArgs) {
    if (this.plainTextMode) {
      return process.env[secretFor] as string;
    }
    if (!key) {
      key = this.masterKey;
    }
    const secret = await this.getStringSecret({ secretFor });

    const decrypted = this.decrypt(secret, key);
    return decrypted;
  }

  /**
   * @description get ra string -> parse JSON and return the attr. value
   * @throws when secret value can not be parsed as JSON
   */
  public async getJSONSecret({
    secretFor,
    attribute,
  }: GetSecretsFromJsonArgs): Promise<string> {
    if (this.plainTextMode) {
      return process.env[secretFor] as string;
    }
    const secretString: string = await this.getStringSecret({ secretFor });
    try {
      const secretJson = JSON.parse(secretString);
      return secretJson[attribute];
    } catch {
      throw new Error('Secret cannot be parsed.');
    }
  }

  /**
   * @throws "No value with this environment key"
   * @param secretFor string for the environment name that holds secret id
   */
  private getSecretId(secretFor: string) {
    if (!process.env[secretFor]) {
      throw new Error(`No value with this environment key: ${secretFor}`);
    }
    return process.env[secretFor] as string;
  }
}
