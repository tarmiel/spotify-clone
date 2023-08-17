import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'shared/Divider',
  component: Divider,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};
export const WithText: Story = {
  args: {
    children: 'OR',
  },
};
