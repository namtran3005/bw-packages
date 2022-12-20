import deasynchronize from 'deasynchronize'
import { IBasePlugin } from '.'
export const ssmPlugin: IBasePlugin = {
  protocol: 'ssm',
  getValue: (key: string) => {
    const value = deasynchronize(key, async (key: string) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const AWS = require('@aws-sdk/client-ssm')
      const client = new AWS.SSM({
        region: 'eu-central-1',
      })
      const resp = await client.getParameter({
        Name: key,
        WithDecryption: true,
      })
      return resp.Parameter.Value
    })
    return value
  },
}
