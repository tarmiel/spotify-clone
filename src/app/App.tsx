import { useTranslation } from 'react-i18next';

import { MainLayout } from '@/shared/layouts/MainLayout';
import { cn } from '@/shared/lib/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const onToggleLang = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <div className={cn('App', theme)}>
      <MainLayout />
    </div>
  );
};

export default App;
