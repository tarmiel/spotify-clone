import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Typography/Text',
  component: Text,
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'],
    },
  },
  //tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    as: 'p',
    color: 'inverted',
    weight: 'normal',
    size: 'md',
    truncate: false,
    nowrap: false,
    italic: false,
    title: 'title for text',
    children: 'Text Text 123 Текст',
  },
};
