import React from 'react'
import './multi_religion.css'
import { useTranslation } from 'react-i18next';
import islam from "../../assets/Tourism/islam.webp";
import jew from "../../assets/Tourism/Jewish.webp";
import christian from "../../assets/Tourism/cathedral.webp";
const Multi_Religion = () => {
    const {t} = useTranslation()
    return (
        <div className='eden__religion_container section__padding'>
            <div className='eden__religion_container-header'>
                <h1>{t('medtour.multi.title')}</h1>
                <h3>{t('medtour.multi.caption')}</h3>
            </div>
            <div className='eden__religion_container-content'>
                <div className='eden__religion_container-content_item'>
                    <img loading="lazy" src={islam} alt="Mosque" />
                    <div className='eden__religion_container-content_item-caption'>
                        <h2>{t('medtour.multi.islam_title')}</h2>
                        <h4>{t('medtour.multi.islam_content')}</h4>
                    </div>
                </div>
                <div className='eden__religion_container-content_item'>
                    <img loading="lazy" src={christian} alt="Cathedral" />
                    <div className='eden__religion_container-content_item-caption'>
                        <h2>{t('medtour.multi.ch_title')}</h2>
                        <h4>{t('medtour.multi.ch_content')}</h4>
                    </div>
                </div>
                <div className='eden__religion_container-content_item'>
                    <img loading="lazy" src={jew} alt="Jewish" />
                    <div className='eden__religion_container-content_item-caption'>
                        <h2>{t('medtour.multi.jud_title')}</h2>
                        <h4>{t('medtour.multi.jud_content')}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Multi_Religion
