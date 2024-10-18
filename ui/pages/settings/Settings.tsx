import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HOME_ROUTE } from '../../helpers/constants/routes';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(HOME_ROUTE);
  };

  return (
    <div>
      <h1 className="text-center my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Settings Screen
      </h1>
      <div className="flex flex-col m-4">
        <button
          type="button"
          onClick={goToHome}
          className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
