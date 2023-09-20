import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'shared/ProgressBar',
  component: ProgressBar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
};
export const Loading: Story = {
  args: {
    min: 0,
    max: 100,
    value: 0,
    isLoading: true,
  },
};
