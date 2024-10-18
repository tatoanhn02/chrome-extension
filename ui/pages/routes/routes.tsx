import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import {
  DEFAULT_ROUTE,
  HOME_ROUTE,
  SETTINGS_ROUTE,
} from '../../helpers/constants/routes';
import PrivateRoute from '../../helpers/higher-order-components/PrivateRoute/PrivateRoute';
import HomePage from '../home';
import Popup from '../popup/Popup';
import SettingsPage from '../settings';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={<PrivateRoute element={<HomePage />} />}
        />
        <Route
          path={SETTINGS_ROUTE}
          element={<PrivateRoute element={<SettingsPage />} />}
        />
        <Route path={DEFAULT_ROUTE} element={<Popup />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
