import { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';
import { H1 } from '@/shared/ui/Typography/Heading';
import { Text } from '@/shared/ui/Typography/Text/Text';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const onToggleLang = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <div className={cn('App', theme)}>
      <button onClick={onToggleLang}>{t('language')}</button>
      <Text as={'h1'}>Text</Text>
      <H1>Heading</H1>

      <Icon type={'outlined'} name={'Earth'} width={50} height={50} color={'red'} />
    </div>
  );
};

export default App;
