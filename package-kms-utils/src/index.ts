import AWS from 'aws-sdk';

const sts = new AWS.STS({ region: process.env.AWS_REGION });
const kms = new AWS.KMS({ region: process.env.AWS_REGION });

const defaultRoleSessionName = 'awssdk';

const encryptKMS = async ({
  encryptionRoleArn = '',
  encryptionKeyArn = '',
  roleSessionName = defaultRoleSessionName,
  data = '',
}: {
  encryptionRoleArn: string;
  encryptionKeyArn: string;
  roleSessionName?: string;
  data: string;
}) => {
  const roleCreds = await sts
    .assumeRole({
      RoleArn: encryptionRoleArn,
      RoleSessionName: roleSessionName,
    })
    .promise();
  const { AccessKeyId = '', SecretAccessKey = '', SessionToken = '' } =
    roleCreds.Credentials || {};
  kms.config.update({
    accessKeyId: AccessKeyId,
    secretAccessKey: SecretAccessKey,
    sessionToken: SessionToken,
  });
  const { CiphertextBlob } = await kms
    .encrypt({ KeyId: encryptionKeyArn, Plaintext: data })
    .promise();
  return CiphertextBlob as Buffer;
};

const decryptKMS = async ({
  decryptionRoleArn,
  roleSessionName = defaultRoleSessionName,
  data,
}: {
  decryptionRoleArn: string;
  roleSessionName?: string;
  data: string | Buffer;
}) => {
  const roleCreds = await sts
    .assumeRole({
      RoleArn: decryptionRoleArn,
      RoleSessionName: roleSessionName,
    })
    .promise();
  const { AccessKeyId = '', SecretAccessKey = '', SessionToken = '' } =
    roleCreds.Credentials || {};
  kms.config.update({
    accessKeyId: AccessKeyId,
    secretAccessKey: SecretAccessKey,
    sessionToken: SessionToken,
  });
  const { Plaintext } = await kms.decrypt({ CiphertextBlob: data }).promise();
  return Plaintext as Buffer;
};

export { encryptKMS as encrypt, decryptKMS as decrypt };
