import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

import '@/app/styles/index.scss';

import './shared/config/i18n/i18n';

const container = document.getElementById('root') as HTMLElement;
if (!container) {
  throw new Error('No root container found. Failed to mount the react application');
}

const root = createRoot(container);

root.render(
  <>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </>,
);
