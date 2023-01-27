import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import "./partners.css";
import { Fields, Partners_desc, Success, Hospitals, Contact, Footer } from "../../Components";
import placeholder from "../../assets/doctor_placeholder.webp";


const Partners = () => {
  const {t} = useTranslation()
  return (
    <React.Fragment>
      <div className="partners__container section__padding">
        <h1 id="partners_title">{t('partners.title')}</h1>
      </div>
      <div className="partners__hospitals">
        <Hospitals />
      </div>
      <div className="partners__success" id="success">
        <Success />
      </div>
      <div className="partners__desc">
        <Partners_desc />
      </div>
    </React.Fragment>
  );
};

export default Partners;
