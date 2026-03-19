import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/vue3-vite',

  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
          @use "@/assets/styles/_functions.scss" as globalFunctions;
          @use "@/assets/styles/_variables.scss" as globalVariables;
          @use "@/assets/styles/_mixins.scss" as globalMixins;
          @use "@/assets/styles/_breakpoints.scss" as globalBreakpoints;
            `,
          },
        },
      },
    })
  },
}
export default config
