import React from 'react';
import './procedure.css';
import explore from "../../assets/explore.png";
import match from "../../assets/match.png";
import arrange from "../../assets/arrange.png";
import treat from "../../assets/treat.png";
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Procedure = () => {
    const {t} = useTranslation();
    let navigate= useNavigate();
    return (
        <div className='eden__procedure_container section__padding'>
            <div className='eden__procedure_container-header'>
                <h4>{t('home.services.procedure.subtitle')}</h4>
                <h2>{t('home.services.procedure.title')}</h2>
            </div>
            <div className='eden__procedure_container-caption'>
                <p>{t('home.services.procedure.para1')}</p>
            </div>
            <div className='eden__procedure_container-content'>
                <div className='eden__procedure_container-content_item'>
                    <div className='eden__procedure_container-content_item-img'>
                        <img loading="lazy" src={explore} alt="Explore" />
                    </div>
                    <div className='eden__procedure_container-content_item-caption'>
                        <h2>{t('home.services.procedure.explore_title')}</h2>
                        <p>{t('home.services.procedure.explore_content')}</p>
                    </div>
                </div>
                <div className='eden__procedure_container-content_item'>
                    <div className='eden__procedure_container-content_item-img'>
                        <img loading="lazy" src={match} alt="Match" />
                    </div>
                    <div className='eden__procedure_container-content_item-caption'>
                        <h2>{t('home.services.procedure.match_title')}</h2>
                        <p>{t('home.services.procedure.match_content')}</p>
                    </div>
                </div>
                <div className='eden__procedure_container-content_item'>
                    <div className='eden__procedure_container-content_item-img'>
                        <img loading="lazy" src={arrange} alt="Arrange" />
                    </div>
                    <div className='eden__procedure_container-content_item-caption'>
                        <h2>{t('home.services.procedure.arrange_title')}</h2>
                        <p>{t('home.services.procedure.arrange_content')}</p>
                    </div>
                </div>
                <div className='eden__procedure_container-content_item'>
                    <div className='eden__procedure_container-content_item-img'>
                        <img loading="lazy" src={treat} alt="Treat" />
                    </div>
                    <div className='eden__procedure_container-content_item-caption'>
                        <h2>{t('home.services.procedure.treat_title')}</h2>
                        <p>{t('home.services.procedure.treat_content')}</p>
                    </div>
                </div>
            </div>
            <div className='eden__procedure_container-footer'>
                <p>{t('home.services.procedure.caption')}</p>
                <button type='button' onClick={() => {navigate("/contact"); window.scrollTo( { top: 0, behavior: "smooth"})}}>{t('home.services.procedure.button')}</button>
            </div>
        </div>
    )
}

export default Procedure
