import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import i18next from '../core/locales';
import { store } from '../core/redux/store';
import ErrorPage from './error/error';
import AppRoutes from './routes/routes';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <I18nextProvider i18n={i18next}>
          <AppRoutes />
        </I18nextProvider>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
