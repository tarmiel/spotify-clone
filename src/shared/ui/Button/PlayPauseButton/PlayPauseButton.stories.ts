import type { Meta, StoryObj } from '@storybook/react';

import { PlayPauseButton } from './PlayPauseButton';

const meta: Meta<typeof PlayPauseButton> = {
  title: 'shared/Button/PlayPauseButton',
  component: PlayPauseButton,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PlayPauseButton>;

export const Normal: Story = {
  args: {},
};
