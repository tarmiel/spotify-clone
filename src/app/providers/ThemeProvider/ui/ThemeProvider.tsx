import React, { ReactNode, useEffect, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/types/theme';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(fallbackTheme || 'app-dark-theme');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{props.children}</ThemeContext.Provider>;
};

export default ThemeProvider;
