import React from 'react'
import './partners_desc.css';
import { useTranslation } from 'react-i18next';
import doc_part from "../../assets/docpng.png";
import healthcare from "../../assets/healthcare.png";
import hand from "../../assets/hand.png";
import solidarity from "../../assets/solidarity.png";
import { useNavigate } from 'react-router-dom';

const Partners_desc = () => {
  const {t}= useTranslation()
  let navigate= useNavigate();
  return (
    <React.Fragment>
    <div className='eden__partners_desc-container section__padding'>
        <div className='eden__partners_desc-container_img'>
            <img loading="lazy" src={doc_part} alt="Partners" />
        </div>
        <div className='eden__partners_desc-container_content'>
            <h1>{t('partners.desc.qual')}</h1>
            <h4>{t('partners.desc.caption')}</h4>
            <p>{t('partners.desc.para')}</p>
            <button type='button' onClick={() => {navigate("/message"); window.scrollTo({top: 0, behavior: "smooth"})}}>{t('partners.desc.button')}</button>
        </div>
    </div>
    
    </React.Fragment>
  )
}

export default Partners_desc