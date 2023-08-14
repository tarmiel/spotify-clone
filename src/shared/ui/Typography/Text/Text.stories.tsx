import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Typography/Text',
  component: Text,
  argTypes: {},
  //tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading: Story = {
  args: {
    as: 'h1',
    children: 'Text Text 123 Текст',
  },
};
export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'Text Text 123 Текст',
  },
};
export const Span: Story = {
  args: {
    as: 'span',
    children: 'Text Text 123 Текст',
  },
};
