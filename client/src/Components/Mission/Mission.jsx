import React from 'react'
import './mission.css';
import deco from "../../assets/Partners/movenpick.jpg";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Mission = () => {
  let navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className='mission__container section__margin'>
      <div className='mission__container-text'>
        <div className='mission__container-text_titles'>
          <h4>{t('home.mission.about')}</h4>
          <h1>{t('home.mission.title')}</h1>
        </div>
        <div className='mission__container-text_content'>
          <p>{t('home.mission.paragraph1')}</p>
          <p>{t('home.mission.paragraph2')}</p>
          <button type='button' className='btn_fill' onClick={() => {
            navigate('/about'); window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }}>{t('home.mission.button')}</button>
        </div>
      </div>
      <div className='mission__container-decoration'>
        <div className='mission__container-decoration_box'></div>
        <div className='mission__container-decoration_img'>
          <img loading="lazy" src={deco} alt="Decoration" />
        </div>
      </div>
    </div>
  )
}

export default Mission