import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../../../core/redux/store';
import { POPUP_ROUTE } from '../../constants/routes';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isUnlocked = useSelector((state: RootState) => state.auth.isUnlocked);

  return isUnlocked ? element : <Navigate to={POPUP_ROUTE} />;
};

export default PrivateRoute;
