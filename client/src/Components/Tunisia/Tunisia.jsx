import React from "react";
import "./tunisia.css";
import { useTranslation } from "react-i18next";
import language from "../../assets/language.png";
import currency from "../../assets/money.png";
import timezone from "../../assets/time.png";
import capital from "../../assets/capital.png";
const Tunisia = () => {
  const {t} = useTranslation()
  return (
    <div className="tunisia__container section__padding">
      <div className="tunisia__container-left tunisia__container-item">
        <h1>{t('medtour.tun.w_title')}</h1>
        <p>
        {t('medtour.tun.w_content')}
        </p>
      </div>
      <div className="tunisia__container-right tunisia__container-item">
        <div className="tunisia__container-right_top">
          <div className="tunisia__container-right_item">
            <div className="tunisia__container-right_item-img">
              <img loading="lazy" src={language} alt="Language" />
            </div>
            <div className="tunisia__container-right_item-caption">
              <h3>{t('medtour.tun.l_title')}</h3>
              <h4>{t('medtour.tun.l_content')}</h4>
            </div>
          </div>
          <div className="tunisia__container-right_item">
            <div className="tunisia__container-right_item-img">
              <img loading="lazy" src={capital} alt="Capital" />
            </div>
            <div className="tunisia__container-right_item-caption">
              <h3>{t('medtour.tun.c_title')}</h3>
              <h4>Tunis</h4>
            </div>
          </div>
        </div>
        <div className="tunisia__container-right_buttom">
          <div className="tunisia__container-right_item">
            <div className="tunisia__container-right_item-img">
              <img loading="lazy" src={timezone} alt="Timezone" />
            </div>
            <div className="tunisia__container-right_item-caption">
              <h3>Timezone</h3>
              <h4>GMT +1</h4>
            </div>
          </div>
          <div className="tunisia__container-right_item">
            <div className="tunisia__container-right_item-img">
              <img loading="lazy" src={currency} alt="Currency" />
            </div>
            <div className="tunisia__container-right_item-caption">
              <h3>{t('medtour.tun.cur_title')}</h3>
              <h4>{t('medtour.tun.cur_content')}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tunisia;
