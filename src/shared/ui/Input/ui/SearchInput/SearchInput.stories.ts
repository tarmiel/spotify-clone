import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'shared/Input/SearchInput',
  component: SearchInput,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    full: false,
  },
};
