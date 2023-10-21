import type { Meta, StoryObj } from '@storybook/react';

import { ShuffleButton } from './ShuffleButton';

const meta: Meta<typeof ShuffleButton> = {
  title: 'shared/Button/ShuffleButton',
  component: ShuffleButton,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ShuffleButton>;

export const Normal: Story = {
  args: {},
};
