import deasynchronize from 'deasynchronize'
import { IBasePlugin } from '.'
export const awsPlugin: IBasePlugin = {
  protocol: 'aws',
  getValue: (key: string) => {
    const value = deasynchronize(key, async (secretKey: string) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const AWS = require('@aws-sdk/client-secrets-manager')
      const client = new AWS.SecretsManager({
        region: 'eu-central-1',
      })
      const resp = await client.getSecretValue({ SecretId: secretKey })
      return resp.SecretString
    })
    return value
  },
}
