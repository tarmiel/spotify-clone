import { MainLayout } from '@/shared/layouts/MainLayout';
import { cn } from '@/shared/lib/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { SideBar } from '@/widgets/SideBar';

import AppRouter from './providers/router/ui/AppRouter';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('App', theme)}>
      <MainLayout sidebar={<SideBar />} content={<AppRouter />} />
    </div>
  );
};

export default App;
