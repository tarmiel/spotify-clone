import path from 'path';
import { loadConfigFromFile, mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-onboarding',
    'storybook-addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config, { configType }) {
    const response = await loadConfigFromFile(
      {
        mode: 'development',
        command: 'serve',
      },
      path.resolve(__dirname, '../../vite.config.ts'),
    );

    return mergeConfig(config, {
      ...response?.config,
      plugins: [],
      resolve: {
        alias: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '../../src'),
          },
        ],
      },
      define: { 'process.env': {} },
    });
  },
};
export default config;
