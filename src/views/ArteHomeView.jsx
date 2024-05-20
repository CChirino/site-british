import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-04.png";
import { useTranslation } from "react-i18next";

const ArteHomeView = () => {
  const { t } = useTranslation();

  return (
    <div id="home-arte">
      <Parallax bgImage={image} strength={500}>
      <div className="bg-opacity-75 h-90vh flex justify-center items-center">
        <div className="text-container">
          <h1>{t('arte.title')}</h1>
          <h2 className="pb-4">{t('arte.subtitle')}</h2>
          <p>{t('arte.description1')}</p>
          <br/> 
          <p>{t('arte.description2')}</p>
          <span> {t('arte.author')}</span>
          <div className="mt-20 underline	pb-16">
            <Link
              to="/sintesis-de-las-artes">
              {t('arte.learn_more')}
            </Link>
          </div>
        </div>
      </div>
      </Parallax>
    </div>
  );
};

export default ArteHomeView;