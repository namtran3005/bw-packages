import ngrok from 'ngrok'

import { logger } from '../lib/logger'
import { config } from './config'

export const startTunnel = async (port: number) => {
  logger.info('connecting to ngrok...')
  const tunnel = await ngrok.connect({ ...config.ngrok, addr: port })
  logger.info(`connected to ngrok at ${tunnel}`)
}
