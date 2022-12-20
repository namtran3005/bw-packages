import mock from 'mock-fs'

import { IsDefined, IsOptional } from 'class-validator'
import { loadConfig } from '../../src'

class Config {
  @IsDefined()
  name: string

  @IsOptional()
  suffix: string
}
describe('env plugin', () => {
  afterEach(() => {
    mock.restore()
  })
  it('should substitute single aws secret', () => {
    mock({
      'config/default.yml': 'name: ${aws:MAIN/STAGING/TOKEN_SECRET}',
    })
    const config = loadConfig(Config)
    expect(config.name).toBeDefined()
  })
})
