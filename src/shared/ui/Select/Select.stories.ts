import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Normal: Story = {
  args: {
    defaultValue: 'default',
    value: 'Recently added',
    label: 'Sort By',
    items: [
      { value: 'Recently added', content: 'Recently added' },
      { value: '2', content: '2' },
    ],
  },
};
