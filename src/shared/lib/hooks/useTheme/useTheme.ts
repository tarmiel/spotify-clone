import { useContext } from 'react';

import { Theme } from '../../../types/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    //setTheme?.('');
  };

  return {
    theme: theme || 'app-dark-theme',
    toggleTheme,
  };
}
