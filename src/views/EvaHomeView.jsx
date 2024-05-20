import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-05.png";
import FooterHome from "../components/FooterHome";
import { useTranslation } from "react-i18next";

const EvaHomeView = () => {
  const { t } = useTranslation();

  return (
    <div id="home-eva">
      <Parallax bgImage={image} strength={500}>
      <div className="bg-opacity-75 h-90vh flex justify-center items-center">
        <div className="text-container">
        <img
            className="w-1/5"
            src="/static/images/eva-logo.png"
            alt="Eva Logo"
          />
          <h1>{t('eva.title')}</h1>
          <p>{t('eva.description1')}
         </p>
         <br />
         <p>
         {t('eva.description2')}
         </p>
          <div className="mt-20 underline pb-16	">
          <Link
              to="/proyecto-eva">
               {t('eva.learn_more')}
            </Link>
          </div>
        </div>
      </div>
        </Parallax>
      <FooterHome/>
    </div>
  );
};

export default EvaHomeView;