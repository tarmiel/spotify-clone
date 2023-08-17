import { Children } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { OutlinedButton } from './OutlinedButton';

const meta: Meta<typeof OutlinedButton> = {
  title: 'shared/Button/OutlinedButton',
  component: OutlinedButton,
  argTypes: {},
  args: {
    children: 'Outlined Button',
  },
};

export default meta;
type Story = StoryObj<typeof OutlinedButton>;

export const Default: Story = {
  args: {},
};
export const WithIcon: Story = {
  args: {
    icon: {
      type: 'filled',
      name: 'Library',
    },
    size: 'sm',
  },
};
