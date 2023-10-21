import type { Meta, StoryObj } from '@storybook/react';

import { LikeButton } from './LikeButton';

const meta: Meta<typeof LikeButton> = {
  title: 'shared/Button/LikeButton',
  component: LikeButton,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LikeButton>;

export const Default: Story = {
  args: {},
};
