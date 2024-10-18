import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import logo from '../../../src/assets/img/logo.svg';
import LanguageKey from '../../core/locales/LanguageKey';
import { HOME_ROUTE } from '../../helpers/constants/routes';

const Popup: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(HOME_ROUTE);
  };

  return (
    <div className="App">
      <div className="flex items-center justify-center w-full h-full flex-1 flex-col">
        <div className="max-w-xs flex items-center flex-col">
          <div className="text-xl font-bold pb-12">RED X </div>
          <img src={logo} className="App-logo" alt="logo" />

          <div className="pt-4 pb-6 text-center">
            <p className="title-text text-textPrimary font-medium text-unset text-base">
              {' '}
              Ví tiền mã hóa đa chuỗi an toàn và đáng tin cậy
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-xs pb-16">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={goToHome}
          >
            {t(LanguageKey.common_text_continue)}
          </button>
        </div>
        <div className="font-bold text-base border-t w-full pt-4 cursor-pointer">
          <a className="App-link">Thiết lập lại ví</a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
