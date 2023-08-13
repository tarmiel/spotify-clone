import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Typography';

const meta: Meta<typeof Text> = {
  title: 'shared/Typography',
  component: Text,
  argTypes: {},
  //tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'H1 Heading',
  },
};
export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'H2 Heading',
  },
};
export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'H3 Heading',
  },
};
export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'H4 Heading',
  },
};
export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'H5 Heading',
  },
};
export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'H6 Heading',
  },
};
export const SubH1: Story = {
  args: {
    variant: 'subheading1',
    children: 'SubH1 Heading',
  },
};
export const SubH2: Story = {
  args: {
    variant: 'subheading2',
    children: 'SubH2 Heading',
  },
};
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body1 Text',
  },
};
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body2 Text',
  },
};
export const Body3: Story = {
  args: {
    variant: 'body3',
    children: 'Body3 Text',
  },
};
export const Body4: Story = {
  args: {
    variant: 'body4',
    children: 'Body4 Text',
  },
};
