import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-03.png";
import { useTranslation } from "react-i18next";


const CarlosHomeView = () => {
  const { t } = useTranslation();
  return (
    <div id="home-carlos">
      <Parallax bgImage={image} strength={500}>
      <div className="bg-opacity-75 h-90vh flex justify-center items-center">
        <div className="text-container">
          <h1>{t('carlos.title')}</h1>
          <h2 className="pb-4">{t('carlos.subtitle')}</h2>
          <p>{t('carlos.description')}</p>
          <div className="mt-20 underline	">
            <Link
              to="/carlos-raul-villanueva">
              {t('carlos.learn_more')}
            </Link>
          </div>
        </div>
      </div>
      </Parallax>
    </div>
  );
};

export default CarlosHomeView;