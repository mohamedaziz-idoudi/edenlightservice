import React from "react";
import "./guide.css";
import { useTranslation } from "react-i18next";
import guide from "../../assets/guide.webp";
const Guide = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <div className="eden__guide_container section__padding">
        <div className="guide__header">
          <h3>{t('medtour.guide.title')}</h3>
          <p>{t('medtour.guide.caption')}</p>
        </div>
        <div className="guide__container">
          <div className="guide__container-image">
            <img loading="lazy" src={guide} alt="Tunisia" />
          </div>
          <div className="guide__container-caption">
            <h1>{t('medtour.guide.tag')}</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Guide;
