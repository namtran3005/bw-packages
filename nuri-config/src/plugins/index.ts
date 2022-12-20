import { awsPlugin } from './aws'
import { envPlugin } from './env'
import { ssmPlugin } from './ssm'
import { kubePlugin } from './kube'
export type Primitive = string | boolean | number
export interface IBasePlugin {
  protocol: string
  getValue: (key: string) => Primitive
}
export const defaultPlugins = [envPlugin, awsPlugin, ssmPlugin, kubePlugin]
