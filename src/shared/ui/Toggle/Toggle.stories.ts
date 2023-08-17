import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'shared/Toggle',
  component: Toggle,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Normal: Story = {
  args: {},
};
