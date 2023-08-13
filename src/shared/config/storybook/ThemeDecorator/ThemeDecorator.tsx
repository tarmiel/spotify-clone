import { Decorator } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';

import { Theme } from '../../../types/theme';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (StoryComponent) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`App ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
