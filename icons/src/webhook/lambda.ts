import lambda from 'aws-lambda-fastify'

import { app } from './index'

export const handler = lambda(app)
