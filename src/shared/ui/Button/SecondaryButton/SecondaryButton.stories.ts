import type { Meta, StoryObj } from '@storybook/react';

import { SecondaryButton } from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
  title: 'shared/Button/SecondaryButton',
  component: SecondaryButton,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
  args: {
    children: 'Secondary Button',
  },
};
