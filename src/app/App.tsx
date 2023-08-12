import { FC, Suspense } from 'react';

import { useTranslation } from 'react-i18next';

const App: FC = () => {
  const { t, i18n } = useTranslation();
  const onToggleLang = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  return (
    <Suspense fallback={'...loading'}>
      <div className={'App'}>
        <button onClick={onToggleLang}>{t('language')}</button>
      </div>
    </Suspense>
  );
};

export default App;
