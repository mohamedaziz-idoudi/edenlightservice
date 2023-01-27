import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";

const Home_part_med = () => {
  const {t} = useTranslation();
    let navigate = useNavigate();
  return (
    <div className="container section__padding">
      <div className="container__box-partners container-box">
        <div className="partners-text">
          <h3>{t('home.medtour.partners_title')}</h3>
          <p>
          {t('home.medtour.partners_content')}
          </p>
        </div>
        <div className="partners-button">
            <button type="button" onClick={() => { navigate("/partners"); window.scrollTo({top: 0, behavior: "smooth"})}}>{t('home.medtour.button')}</button>
        </div>
      </div>
      <div className="container__box-med container-box">
        <div className="med-text">
          <h3>{t('home.medtour.med_title')}</h3>
          <p>
          {t('home.medtour.med_content')}
          </p>
        </div>
        <div className="med-button">
            <button type="button" onClick={() => { navigate("/medicaltourism"); window.scrollTo({top: 0, behavior: "smooth"})}}>{t('home.medtour.button')}</button>
        </div>
      </div>
    </div>
  );
};

export default Home_part_med;
