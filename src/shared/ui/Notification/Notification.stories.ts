import type { Meta, StoryObj } from '@storybook/react';

import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'shared/Notification',
  component: Notification,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    notification: {
      id: '1',
      type: 'info',
      message: 'This is info notification',
    },
    onDismiss: (id) => alert(`Dismissing Notification with id: ${id}`),
  },
};

export const Info: Story = {
  args: {
    notification: {
      id: '1',
      type: 'info',
      show: true,
      message: 'This is info notification',
    },
    onDismiss: (id) => alert(`Dismissing Notification with id: ${id}`),
  },
};
export const Success: Story = {
  args: {
    notification: {
      id: '1',
      type: 'success',
      message: 'This is success notification',
    },
    onDismiss: (id) => alert(`Dismissing Notification with id: ${id}`),
  },
};
export const Warning: Story = {
  args: {
    notification: {
      id: '1',
      type: 'warning',
      message: 'This is warning notification',
    },
    onDismiss: (id) => alert(`Dismissing Notification with id: ${id}`),
  },
};
export const Error: Story = {
  args: {
    notification: {
      id: '1',
      type: 'error',
      message: 'This is error notification',
    },
    onDismiss: (id) => alert(`Dismissing Notification with id: ${id}`),
  },
};
