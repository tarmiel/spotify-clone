import { cn } from '@/shared/lib/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import AppRouter from './providers/router/ui/AppRouter';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('App', theme)}>
      <AppRouter />
    </div>
  );
};

export default App;
