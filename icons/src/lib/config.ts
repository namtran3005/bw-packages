import { loadConfig } from '@bitwala-cryptobank-squad/nuri-config'
import { Type } from 'class-transformer'
import { IsDefined, IsOptional, ValidateNested } from 'class-validator'
import { Ngrok } from 'ngrok'
import path from 'path'
import pino from 'pino'

class Files {
  @IsDefined()
  icons: string

  @IsDefined()
  illustrations: string
}
class Figma {
  @IsDefined()
  token: string

  @IsDefined()
  @ValidateNested()
  @Type(() => Files)
  files: Files

  @IsOptional()
  passcode: string
}
class Github {
  @IsDefined()
  auth: string

  @IsDefined()
  baseUrl: string = 'https://github.bitwa.la/api/v3'

  @IsDefined()
  owner: string

  @IsDefined()
  repo: string
}
class Config {
  @IsDefined()
  logger: pino.LoggerOptions

  @IsDefined()
  @ValidateNested()
  @Type(() => Figma)
  figma: Figma

  @IsOptional()
  iconsPath = `${path.resolve(process.cwd())}/src/components/icons`

  @IsOptional()
  illustrationsPath = `${path.resolve(
    process.cwd()
  )}/src/components/illustrations`

  @IsOptional()
  iconStoriesPath = `${path.resolve(process.cwd())}/src/stories/icons`

  @IsOptional()
  illustrationsStoriesPath = `${path.resolve(
    process.cwd()
  )}/src/stories/illustrations`

  @IsOptional()
  ngrok: Ngrok.Options

  @IsDefined()
  @ValidateNested()
  @Type(() => Github)
  github: Github
}

export const config = loadConfig(Config)
