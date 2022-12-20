import mock from 'mock-fs'

import { IsDefined } from 'class-validator'
import { loadConfig } from '../../src'

class Config {
  @IsDefined()
  host: string
}
describe('env plugin', () => {
  afterEach(() => {
    mock.restore()
  })
  it('should substitute single aws secret', () => {
    mock({
      'config/default.yml': 'host: ${ssm:/admin/staging/mongo/master/host}',
    })
    const config = loadConfig(Config)
    expect(config.host).toBeDefined()
  })
})
