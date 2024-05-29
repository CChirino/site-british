import React from "react";
import Header from "../components/Header";
import { useTranslation } from 'react-i18next';

const FirstView = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-neutral-500 pb-10">
      <Header />
      <div className="flex flex-col items-center pt-5 pb-5">
        <div className="flex flex-col items-center pt-5 pb-5">
          <img
            src="/static/images/mockup EVA-67.png"
            alt="nubes"
            className="clouds w-1/2 sm:w-1/3 md:w-1/7 lg:w-1/8"
          />
        </div>
        <div className="absolute end-1/3 flex flex-col mt-10" style={{ marginRight: "16%", marginTop: "7%" }}>
          <p className="text-black px-4 py-2 mb-2" style={{ transform: "rotate(-45deg)" }} onClick={() => changeLanguage('es')}>Español</p>
          <p className="text-black px-4 py-2" style={{ transform: "rotate(-45deg)", marginRight: "15%" }} onClick={() => changeLanguage('en')}>English</p>
        </div>
        <div className="flex flex-col items-center pt-3">
          <img
            src="/static/images/2-02.png"
            alt="descripcion"
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstView;
