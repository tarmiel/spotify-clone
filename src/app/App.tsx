import { ToastContainer as NotificationContainer } from 'react-toastify';

import { cn } from '@/shared/lib/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import AppRouter from './providers/router/ui/AppRouter';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('App', theme)}>
      <AppRouter />
      <NotificationContainer />
    </div>
  );
};

export default App;
