import { IsDefined } from 'class-validator'
import mock from 'mock-fs'
import { loadConfig } from '../../src'
class Config {
  @IsDefined()
  password: string
}
describe('kube plugin', () => {
  afterEach(() => {
    mock.restore()
  })
  it('should load kubernetes secrets', () => {
    mock({
      'config/default.yml': 'password: ${kube:postgres-credentials/password}',
    })
    const config = loadConfig(Config)
    expect(config.password).toEqual('OmrQW2RKqVEXPrVV')
  })
})
