import React from 'react'
import "./kairouan.css"
import { useTranslation } from 'react-i18next';
import kairouan1 from "../../assets/Tourism/kairouan2.webp";
import Kairouan2 from "../../assets/Tourism/Kairouan4.webp";
const Kairouan = () => {
  const {t} = useTranslation()
  return (
    <div className='eden__kairouan_container'>
      <div className='eden__kairouan_header'>
        <div className='eden__kairouan_header-content'>
          <h1>Kairouan</h1>
          <h3>{t('medtour.kairouan.caption')}</h3>
          <p>3h-4h Drive from Tunis</p>
        </div>
      </div>
      <div className='eden__kairouan_content section__padding'>
        <div className='eden__kairouan_content-left eden__kairouan_content-item'>
          <img loading="lazy" src={kairouan1} alt="Image" />
        </div>
        <div className='eden__kairouan_content-right eden__kairouan_content-item'>
          <div className='eden__kairouan_content-right_top'>
            <img loading="lazy" src={Kairouan2} alt="Image" />
          </div>
          <div className='eden__kairouan_content-right_buttom'>
            <h1>{t('medtour.kairouan.title')}</h1>
            <p>{t('medtour.kairouan.par')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kairouan
