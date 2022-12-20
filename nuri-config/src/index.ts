import fs from 'fs'
import { config as dotenvConfig } from 'dotenv'
import yaml from 'js-yaml'
import merge from 'deepmerge'
import flat from 'flat'
import 'reflect-metadata'
import { plainToClass } from 'class-transformer'
import { validateSync, ValidationError } from 'class-validator'
import { defaultPlugins, IBasePlugin } from './plugins'
const getMessages = (messages: string[], error: ValidationError) => {
  if (error.constraints) {
    Object.values(error.constraints).forEach((msg) => messages.push(msg))
  }
  if (error.children) {
    error.children.forEach((child) => getMessages(messages, child))
  }
}

export const readAndMergeConfigFiles = (configDir: string) => {
  const defaultConfig =
    yaml.load(fs.readFileSync(`${configDir}/config/default.yml`, 'utf8')) || {}
  const exists = fs.existsSync(
    `${configDir}/config/${process.env.NODE_ENV}.yml`
  )
  let overrideConfig = {}
  if (exists) {
    overrideConfig = yaml.load(
      fs.readFileSync(`${configDir}/config/${process.env.NODE_ENV}.yml`, 'utf8')
    )
  }
  return merge(defaultConfig, overrideConfig)
}
export const loadConfig = <T extends object>(
  schema: new () => T,
  plugins: IBasePlugin[] = [],
  configDir: string = process.cwd()
) => {
  plugins.push(...defaultPlugins)
  dotenvConfig()
  const merged = readAndMergeConfigFiles(configDir)
  const flattened = flat(merged)
  const errors: ValidationError[] = []
  const keyRegex = /\${(.*?):(.*?)\}/g
  for (const flKey of Object.keys(flattened)) {
    if (typeof flattened[flKey] === 'string') {
      const key = flattened[flKey] as string
      const matches = key.matchAll(keyRegex)
      for (const match of matches || []) {
        const protocol = match[1]
        const plugin = plugins.find((pl) => pl.protocol === protocol)
        if (!plugin) {
          const error = new ValidationError()
          error.constraints = {
            plugins: `Failed to find plugin for protocol ${protocol}: ${match}`,
          }
          errors.push(error)
        } else {
          const substitution = match[2]
          const value = plugin.getValue(substitution)
          if (value) {
            flattened[flKey] = (flattened[flKey] as string).replace(
              match[0],
              value.toString()
            )
          } else {
            flattened[flKey] = null
          }
        }
      }
    }
  }
  const unflattened = flat.unflatten(flattened)

  const parsed = plainToClass(schema, unflattened as T)
  const validationErrors = validateSync(parsed)
  errors.push(...validationErrors)
  if (errors.length > 0) {
    const messages = []
    errors.forEach((error) => getMessages(messages, error))
    throw new Error(`[${messages.join(', ')}]`)
  }
  return parsed
}
