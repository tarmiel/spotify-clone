import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'shared/Button/IconButton',
  component: IconButton,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    icon: {
      type: 'outlined',
      name: 'Heart',
    },
    rounded: 'full',
    hoverScale: true,
  },
};
export const WithBg: Story = {
  args: {
    variant: 'bg',
    size: 'md',
    icon: {
      type: 'outlined',
      name: 'Heart',
    },
    rounded: 'full',
    hoverScale: true,
  },
};
export const Highlight: Story = {
  args: {
    variant: 'highlight',
    size: 'md',
    icon: {
      type: 'outlined',
      name: 'Heart',
    },
    rounded: 'full',
    hoverScale: true,
  },
};
