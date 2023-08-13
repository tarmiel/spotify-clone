import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface App {}

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const onToggleLang = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  return (
    <div className={cn('App', theme)}>
      <button onClick={onToggleLang}>{t('language')}</button>
    </div>
  );
};

export default App;
