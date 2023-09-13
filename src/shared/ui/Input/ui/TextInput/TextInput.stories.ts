import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: '< >/TextInput',
  component: TextInput,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Normal: Story = {
  args: {},
};
