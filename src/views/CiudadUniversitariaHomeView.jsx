import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/Fondo CUC-01.png";
import { useTranslation } from "react-i18next";


const CiudadUniversitariaHomeView = () => {
  const { t } = useTranslation();

  return (
    <div id="home-ciudad">
      <Parallax bgImage={image} strength={500}>
        <div className="bg-opacity-75 h-90vh flex justify-center items-center">
          <div className="text-container">
            <h1>{t('homeUniversity.title')}</h1>
            <h2 className="pb-4">{t('homeUniversity.subtitle')}</h2>
            <p>{t('homeUniversity.quote')}</p>
            <span >{t('homeUniversity.author')}</span>
            <div className="mt-16 underline pb-16">
              <Link to="/ciudad-universitaria">{t('homeUniversity.learn_more')}</Link>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default CiudadUniversitariaHomeView;