import { Octokit } from '@octokit/rest'
import fastify from 'fastify'

import { config } from '../lib/config'
import { logger } from '../lib/logger'
import { startTunnel } from '../lib/ngrok'

interface IFigmaPayload {
  event_type: string
  passcode: string
  timestamp: Date
  webhook_id: string
  file_key: string
  file_name: string
  description: string
  label: string
  triggered_by: {
    id: string
    handle: string
  }
  version_id: string
}

export const app = fastify({ logger: { level: 'error' } })

const port = 8080
const github = new Octokit(config.github)

app.post<{ Body: IFigmaPayload }>('/', async (req, res) => {
  logger.info(
    `event ${req.body.event_type}: ${JSON.stringify(req.body, null, 2)}`
  )
  if (req.body.passcode !== config.figma.passcode) {
    res.code(400).send({ message: 'passcode is incorrect' })
    return
  } else {
    const watchedEvents = ['FILE_VERSION_UPDATE']
    if (process.env.NODE_ENV === 'local') {
      watchedEvents.push('PING')
    }
    if (watchedEvents.includes(req.body.event_type)) {
      logger.info(
        `event ${req.body.event_type}: ${req.body.file_name || 'PING'}`
      )
      if (Object.values(config.figma.files).includes(req.body.file_key)) {
        logger.info(`actionable event for file ${req.body.file_name}`)
        await github.rest.repos.createDispatchEvent({
          repo: config.github.repo,
          owner: config.github.owner,
          event_type: 'figma-change',
        })
        logger.info('triggered github action for rebuild')
      }
    }
    return {}
  }
})

const start = async () => {
  if (process.env.NODE_ENV === 'local') {
    await startTunnel(port)
  }
  const address = await app.listen(port)
  logger.info(`🚀 started server at ${address}`)
}

if (require.main === module) {
  start()
}
