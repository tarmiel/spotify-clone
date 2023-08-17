import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const onToggleLang = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <div className={cn('App', theme)}>
      <button onClick={onToggleLang}>{t('language')}</button>
      <Icon type={'outlined'} name={'Arrow'} color={'red'} width={20} height={20} />
    </div>
  );
};

export default App;
