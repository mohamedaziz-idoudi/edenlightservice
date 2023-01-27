import React from "react";
import "./fields.css";
import neurology from "../../assets/brain.png";
import dental from "../../assets/tooth.png";
import cardio from "../../assets/cardiogram.png";
import emergencies from "../../assets/first-aid-kit.png";
import cosmetic from "../../assets/cosmetic-surgery.png";
import eye from "../../assets/eye.png";
import { useTranslation } from "react-i18next";
import {Footer} from '../../Components'
const Fields = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
    <div className="eden__fields-container">
      <div className="eden__fields-titles">
        <h2>{t('services.fields.title')}</h2>
        <p>{t('services.fields.caption')}</p>
      </div>
      <div className="eden__fields-items">
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={neurology} alt="Brain" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>{t('services.fields.neuro')}</p>
          </div>
        </div>
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={dental} alt="tooth" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>{t('services.fields.dental')}</p>
          </div>
        </div>
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={cardio} alt="Cardio" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>{t('services.fields.hc')}</p>
          </div>
        </div>
      </div>
      <div className="eden__fields-items">
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={emergencies} alt="Emergencies" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>{t('services.fields.emer')}</p>
          </div>
        </div>
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={cosmetic} alt="Cosmetics" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>{t('services.fields.esth')}</p>
          </div>
        </div>
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={eye} alt="Eye" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>{t('services.fields.eye')}</p>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Fields;
