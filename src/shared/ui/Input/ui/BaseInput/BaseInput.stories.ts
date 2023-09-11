import type { Meta, StoryObj } from '@storybook/react';

import { BaseInput } from './BaseInput';

const meta: Meta<typeof BaseInput> = {
  title: 'shared/Input/BaseInput',
  component: BaseInput,
  argTypes: {},
  args: {
    placeholder: 'Placeholder',
    full: false,
    rounded: 'none',
  },
};

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
  args: {},
};
