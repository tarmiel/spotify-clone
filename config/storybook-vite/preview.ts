import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    themes: {
      default: 'dark',
      list: [
        { name: 'dark', class: 'dark', color: '#000000' },
        { name: 'light', class: 'light', color: '#ffffff' },
      ],
    },
  },
};

export default preview;
