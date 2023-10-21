import type { Meta, StoryObj } from '@storybook/react';

import { RepeatButton } from './RepeatButton';

const meta: Meta<typeof RepeatButton> = {
  title: 'shared/Button/RepeatButton',
  component: RepeatButton,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RepeatButton>;

export const Normal: Story = {
  args: {},
};
