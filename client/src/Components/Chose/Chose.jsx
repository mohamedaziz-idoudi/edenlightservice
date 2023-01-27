import React from 'react'
import './chose.css';
import { useTranslation } from 'react-i18next';
const Chose = () => {
  const {t} = useTranslation()
  return (
    <div className='eden__chose_container'>
      <div className="eden__chose_container-header">
        <h1>{t('about.why.title')}</h1>
      </div>
      <div className="eden__chose_container-buttom">
        <div className='eden__chose_container-buttom_item'>
            <h3>{t('about.why.one')}</h3>
        </div>
        <div className='eden__chose_container-buttom_item'>
            <h3>{t('about.why.two')}</h3>
        </div>
        <div className='eden__chose_container-buttom_item'>
            <h3>{t('about.why.three')}</h3>
        </div>
        <div className='eden__chose_container-buttom_item'>
            <h3>{t('about.why.four')}</h3>
        </div>
      </div>
    </div>
  )
}

export default Chose
