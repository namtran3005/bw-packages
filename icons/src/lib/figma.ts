import * as figma from 'figma-js'

import { config } from '../lib/config'

export interface IComponent {
  group: string
  key: string
  name: string
  nodeId: string
  description: string
}

export const getVersion = async (file: string) => {
  const client = figma.Client({ personalAccessToken: config.figma.token })
  const version = await client
    .fileVersions(file)
    .then((resp) => resp.data.versions[0])
  return version.label
}

export const getComponents = async (file: string) => {
  const client = figma.Client({ personalAccessToken: config.figma.token })
  const componentSets = await client
    .fileComponentSets(file)
    .then((resp) => resp.data.meta.component_sets)
  const components = await client.file(file).then((resp) => {
    return Object.keys(resp.data.components)
      .map((nodeId) => {
        const node = resp.data.components[nodeId]
        // @ts-ignore
        const groupId = node.componentSetId
        const group = groupId
          ? componentSets.find((cs) => cs.node_id === groupId)?.name
          : 'Misc'
        return {
          nodeId,
          ...node,
          group,
        }
      })
      .filter((c) => c.group)
  })
  return components
}

export const getImages = async (components: IComponent[], file: string) => {
  const client = figma.Client({ personalAccessToken: config.figma.token })
  const images = await client
    .fileImages(file, {
      ids: components.map((component) => component.nodeId),
      format: 'svg',
      scale: 1,
    })
    .then((data) => data.data.images)
  return images
}
