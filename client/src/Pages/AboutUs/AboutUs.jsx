import React from 'react'
import './aboutus.css';
import { useTranslation } from 'react-i18next';
import { About_Desc , Chose, Team } from "../../Components";
const AboutUs = () => {
  const {t}= useTranslation();
  return (
    <React.Fragment>
      <div className='about__header'>
        <div className='about__header_title'>
          <h1>{t('about.title')}</h1>
        </div>
      </div>
      <div className='about__description'>
        <About_Desc />
      </div>
      <div className='about__chose'>
        <Chose />
      </div>
      <div className="about__team">
        <Team />
      </div>
    </React.Fragment>
  )
}

export default AboutUs