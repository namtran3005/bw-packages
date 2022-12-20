import { transform } from '@svgr/core'
import { capitalCase, paramCase, pascalCase } from 'change-case'
import download from 'download'
import fs from 'fs-extra'

import { config } from '../lib/config'
import { IComponent } from './figma'

export interface IGenerated {
  importStatement: string
  componentName: string
}
export const setupDirectories = async () => {
  if (fs.existsSync(config.iconsPath)) {
    await fs.rm(config.iconsPath, { recursive: true, force: true })
  }
  if (fs.existsSync(config.illustrationsPath)) {
    await fs.rm(config.illustrationsPath, { recursive: true, force: true })
  }
  if (fs.existsSync(config.illustrationsStoriesPath)) {
    await fs.rm(config.illustrationsStoriesPath, {
      recursive: true,
      force: true,
    })
  }
  if (fs.existsSync(config.iconStoriesPath)) {
    await fs.rm(config.iconStoriesPath, { recursive: true, force: true })
  }
  await fs.mkdirs(config.iconsPath)
  await fs.mkdirs(config.illustrationsPath)
  await fs.mkdirs(config.iconStoriesPath)
  await fs.mkdirs(config.illustrationsStoriesPath)
}

const getNames = (component: IComponent) => {
  const componentName = capitalCase(component.name.replaceAll(/.*?=/g, ''))
  const pascalName = pascalCase(
    `${component.group}${componentName}`
  ).replaceAll('_', '')
  const kebabName = paramCase(`${component.group} ${componentName}`)
  const shortName = pascalCase(componentName)
  return { pascalName, kebabName, shortName }
}

export const generateComponent = async (
  component: IComponent,
  url: string,
  type: 'icon' | 'illustration'
): Promise<IGenerated> => {
  const { pascalName, kebabName } = getNames(component)
  const suffix = capitalCase(type)
  const svg = await download(url).then((resp) => resp.toString())
  const tsCode = await transform(
    svg,
    {
      icon: true,
      typescript: true,
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier',
      ],
      runtimeConfig: true,
      prettierConfig: {
        trailingComma: 'es5',
        semi: false,
        tabWidth: 2,
        singleQuote: true,
        parser: 'babel-ts',
      },
      svgProps: {
        viewBox: type === 'icon' ? '0 0 34 34' : '0 0 320 320',
      },
    },
    {
      componentName: `${pascalName}${suffix}`,
    }
  )
  const withDefaultProps = `
  ${pascalName}${suffix}.defaultProps = default${suffix}Props
  export default ${pascalName}${suffix}
  `
  let cleanCode = tsCode
    .replaceAll('"1em"', '{props.size}')
    .replaceAll(
      "import { SVGProps } from 'react'",
      `import { I${suffix}, default${suffix}Props } from '../../lib/base-props'`
    )
    .replaceAll('props: SVGProps<SVGSVGElement>', `props: I${suffix}`)
    .replaceAll(`export default ${pascalName}${suffix}`, withDefaultProps)
  if (type === 'icon') {
    cleanCode = cleanCode.replaceAll('"#2C232E"', '{props.color}')
  }
  const dir = type === 'icon' ? config.iconsPath : config.illustrationsPath
  await fs.writeFile(`${dir}/${kebabName}.tsx`, cleanCode)
  return {
    importStatement: `import ${pascalName}${suffix} from './components/${type}s/${kebabName}'`,
    componentName: `${pascalName}${suffix}`,
  }
}

export const generateStory = async (
  component: IComponent,
  type: 'icon' | 'illustration'
) => {
  const { pascalName, kebabName, shortName } = getNames(component)
  const suffix = capitalCase(type)
  const group = component.group === 'Misc' ? 'Miscellaneous' : component.group
  let args = `{
    size: '64px',
    color: default${suffix}Props.color
  }`
  if (type === 'illustration') {
    args = `{
      size: '320px'
    }`
  }
  const importDefaults =
    type === 'icon'
      ? `import { default${suffix}Props } from '../../lib/base-props'`
      : ''
  const template = `
  import React from 'react'

  import { ComponentStory, ComponentMeta } from '@storybook/react'
  import ${pascalName}${suffix} from '../../components/${type}s/${kebabName}'
  ${importDefaults}
  const ${pascalName}${suffix}Meta: ComponentMeta<typeof ${pascalName}${suffix}> = {
    title: '${suffix}s/${group}/${capitalCase(shortName)}',
    component: ${pascalName}${suffix},
    args: ${args},
  }
  export default ${pascalName}${suffix}Meta
  type ${pascalName}${suffix}Story = ComponentStory<typeof ${pascalName}${suffix}>
  export const ${pascalName}: ${pascalName}${suffix}Story = (args) => <${pascalName}${suffix} {...args} />
  ${pascalName}.storyName = '${capitalCase(shortName)}'
  `
  const dir =
    type === 'icon' ? config.iconStoriesPath : config.illustrationsStoriesPath
  await fs.writeFile(`${dir}/${kebabName}.stories.tsx`, template)
}
