import type { Meta, StoryObj } from '@storybook/react';

import { EmailInput } from './EmailInput';

const meta: Meta<typeof EmailInput> = {
  title: 'shared/Input/EmailInput',
  component: EmailInput,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof EmailInput>;

export const Normal: Story = {
  args: {},
};
