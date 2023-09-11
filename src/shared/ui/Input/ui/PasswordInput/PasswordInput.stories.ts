import type { Meta, StoryObj } from '@storybook/react';

import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'shared/Input/PasswordInput',
  component: PasswordInput,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Normal: Story = {
  args: {},
};
