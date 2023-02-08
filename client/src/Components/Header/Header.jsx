import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const {t} = useTranslation();
  let navigate=useNavigate();
  return (
    <div className='eden__header_container section__margin'>
        <div className='Titles'>
            <h1>{t('home.header.country')} </h1>
            <h4>{t('home.header.title')}</h4>
        </div>
        <div className='eden__header_container-doctors'>
            <p>{t('home.header.subtitle')}</p>
            <button type='button' onClick={ () => {navigate('/partners')}}>{t('home.header.button')}</button>
        </div>
    </div>
  )
}

export default Header