import React, { useState } from 'react';
import './service.css';
import { Fields, Services } from '../../Components'
import photo from '../../assets/ss.webp';
import { useNavigate, Link } from 'react-router-dom';
import woman from '../../assets/woman.png';
import male from '../../assets/male.png';
import baby from '../../assets/baby.png';
import child from '../../assets/child.webp';
import female from '../../assets/women_services.webp';
import male_pat from '../../assets/male_pat.webp';
import { useTranslation } from 'react-i18next';
const Service = () => {
  const {t} = useTranslation();
  const [ped, setPed] = useState(false);
  const [homme, setHomme] = useState(false);
  const [femme, setFemme] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='eden__service_container'>
      <div className='eden__service_container-header'>
        <div className="eden__service_container-header_content">
          <h1>Services</h1>
        </div>
      </div>
      <div className="eden__services_fields">
        <Fields />
      </div>
      <div className="eden__service_container-body section__padding">
        <div className="eden__service_container-body_top">
          <div className="eden__service_container-body_top-left">
            <h2>{t('services.offer.title')}</h2>
            <p>{t('services.offer.caption')}</p>
            <button type='button' onClick={() => { navigate("/contact"); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('services.offer.button')}</button>
          </div>
          <div className="eden__service_container-body_top-right">
            <img loading="lazy" src={photo} alt="Image" />
          </div>
        </div>
        <div className="eden__service_container-body_buttom">
          <div className={ped ? 'eden__service_container-body_buttom-item active' : 'eden__service_container-body_buttom-item'} onClick={() => { setPed(!ped); setFemme(false); setHomme(false); }}>
            <div className="eden__service_container-body_buttom-item_img">
              <img loading="lazy" src={baby} alt="Baby" />
            </div>
            <div className="eden__service_container-body_buttom-item_caption">
              <h2>{t('services.child.title')}</h2>
            </div>
          </div>
          <div className={femme ? 'eden__service_container-body_buttom-item active' : 'eden__service_container-body_buttom-item'} onClick={() => { setFemme(!femme); setHomme(false); setPed(false); }}>
            <div className="eden__service_container-body_buttom-item_img">
              <img loading="lazy" src={woman} alt="Woman" />
            </div>
            <div className="eden__service_container-body_buttom-item_caption">
              <h2>{t('services.woman.title')}</h2>
            </div>
          </div>
          <div className={homme ? 'eden__service_container-body_buttom-item active' : 'eden__service_container-body_buttom-item'} onClick={() => { setHomme(!homme); setFemme(false); setPed(false); }}>
            <div className="eden__service_container-body_buttom-item_img">
              <img loading="lazy" src={male} alt="Male" />
            </div>
            <div className="eden__service_container-body_buttom-item_caption">
              <h2>{t('services.men.title')}</h2>
            </div>
          </div>
        </div>
      </div>
      {ped && (
        <div id='child_services' className="eden__service_container-blog section__padding">
          <div className="eden__service_container-blog_title">
            <h1>{t('services.child.title')}</h1>
          </div>
          <div className='eden__service_container-blog_content'>
            <div className='eden__service_container-blog_content-left'>
              <ul>
                <li>{t('services.child.services.ped')}</li>
                <li>{t('services.child.services.pedo')}</li>
                <li>{t('services.child.services.neur')}</li>
                <li>{t('services.child.services.hema')}</li>
                <li>{t('services.child.services.oph')}</li>
                <li>{t('services.child.services.har')}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {femme && (
        <div id='women_services' className="eden__service_container-blog section__padding">
          <div className="eden__service_container-blog_title">
            <h1>{t('services.woman.title')}</h1>
          </div>
          <div className='eden__service_container-blog_content'>
            <div className='eden__service_container-blog_content-left'>
              <ul>
                <li>{t('services.woman.services.proc')}</li>
                <li>{t('services.woman.services.myom')}</li>
                <li>{t('services.woman.services.cosm')}</li>
                <li>{t('services.woman.services.baria')}</li>
                <li>{t('services.woman.services.lith')}</li>
                <li>{t('services.woman.services.ret')}</li>
                <li>{t('services.woman.services.cor')}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {homme && (
        <div id='male_services' className="eden__service_container-blog section__padding">
          <div className="eden__service_container-blog_title">
            <h1>{t('services.men.title')}</h1>
          </div>
          <div className='eden__service_container-blog_content'>
            <div className='eden__service_container-blog_content-left'>
              <ul>
                <li>{t('services.men.services.uro')}</li>
                <li>{t('services.men.services.var')}</li>
                <li>{t('services.men.services.inf')}</li>
                <li>{t('services.men.services.pen')}</li>
                <li>{t('services.men.services.pros')}</li>
                <li>{t('services.men.services.diab')}</li>
                <li>{t('services.men.services.hypert')}</li>
                <li>{t('services.men.services.ortho')}</li>
                <li>{t('services.men.services.glauc')}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Service
