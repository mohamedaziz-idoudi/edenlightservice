import React from "react";
import "./success.css";
import Research from "../../assets/res.webp";
import { useTranslation } from "react-i18next";
import test from "../../assets/test.webp";
const Success = () => {
  const {t}= useTranslation()
  return (
    <div className="eden__success">
      <div className="eden__success_header">
        <div className="eden__success_header-titles">
        <h1 dangerouslySetInnerHTML={{ __html: t('partners.success.title') }} />
        </div>
      </div>
      <div className="eden__success-content section__padding">
        <div className="eden__success-content_left eden__success_paragraph">
          <h2>Dr. Mohamed BEJAOUI</h2>
          <p>
            {t('partners.success.p1')}
          </p>
          <p>{t('partners.success.p2')}</p>
        </div>
        <div className="eden__success-content_right eden__success_paragraph">
          <div className="eden__success-content_right-text">
            <p>
            {t('partners.success.p3')}
            </p>
            <p>
            {t('partners.success.p4')}</p>
          </div>
        </div>
      </div>
      <div className="eden__success_image2 section__padding">
        <img loading="lazy" src={Research} alt="research" />
      </div>
    </div>
  );
};

export default Success;
