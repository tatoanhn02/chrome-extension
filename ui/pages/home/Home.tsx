import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/common/button';
import { POPUP_ROUTE, SETTINGS_ROUTE } from '../../helpers/constants/routes';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToSettings = () => {
    navigate(SETTINGS_ROUTE);
  };

  const goToPopup = () => {
    navigate(POPUP_ROUTE);
  };

  return (
    <div>
      <h1 className="text-center my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Home Screen
      </h1>

      <div className="flex flex-col m-4">
        <Button
          onClick={goToSettings}
          className="py-2.5 px-5 mb-2 rounded-full"
        >
          Go to Settings
        </Button>

        <button
          type="button"
          onClick={goToPopup}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Go to Popup
        </button>
      </div>
    </div>
  );
};

export default HomePage;
