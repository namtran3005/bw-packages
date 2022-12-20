import { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: 'webpack5',
  },
}
export default config
