import { Decorator } from '@storybook/react';

import '../../../../app/styles/index.scss';

export const StyleDecorator: Decorator = (Story) => (
  <div style={{ padding: 15 }}>
    <Story />
  </div>
);
