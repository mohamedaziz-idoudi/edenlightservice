import React from 'react'
import "./about_desc.css";
import { useTranslation } from 'react-i18next';
import logo from "../../assets/logo.png";
const About_Desc = () => {
    const {t}= useTranslation();
    return (
        <div className='eden__about_desc_container section__padding'>
            <div className='eden__about_desc_container-left'>
                <img loading="lazy" src={logo} alt="LOGO" />
            </div>
            <div className='eden__about_desc_container-right'>
                <div className='eden__about_desc_container-right_titles'>
                    <h1>{t('about.section.title')}</h1>
                    <h3>{t('about.section.caption')}</h3>
                    <div className='eden__about_desc_container-right_titles-decoration'></div>
                </div>
                <div className='eden__about_desc_container-right_content'>
                    <p>{t('about.section.par')}</p>
                </div>
            </div>

        </div>
    )
}

export default About_Desc
