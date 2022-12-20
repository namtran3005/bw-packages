import deasynchronize from 'deasynchronize'
import { IBasePlugin } from '.'
export const kubePlugin: IBasePlugin = {
  protocol: 'kube',
  getValue: (key: string) => {
    const value = deasynchronize(key, async (secretKey: string) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const k8s = require('@kubernetes/client-node')
      const split = secretKey.split('/')
      const kc = new k8s.KubeConfig()
      kc.loadFromDefault()
      const k8sApi = kc.makeApiClient(k8s.CoreV1Api)
      const secret = await k8sApi.readNamespacedSecret(split[0], 'default')
      return Buffer.from(secret.body.data[split[1]], 'base64').toString(
        'binary'
      )
    })
    return value
  },
}
