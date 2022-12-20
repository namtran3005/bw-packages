import fs from 'fs-extra'
import path from 'path'

import { config } from './lib/config'
import { getVersion } from './lib/figma'
import { logger } from './lib/logger'

export const setVersion = async () => {
  const version = await getVersion(config.figma.files.icons)
  logger.info(`icons version ${version}`)
  const packageJson = path.resolve(__dirname, '../package.json')
  const pkg = await fs.readJson(packageJson)
  pkg.version = version
  await fs.writeJson(packageJson, pkg, { spaces: 2 })
}

if (require.main === module) {
  setVersion()
}
