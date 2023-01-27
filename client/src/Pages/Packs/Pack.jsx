import React from 'react'
import './pack.css';
import sidibou from '../../assets/Packs/sidibou.jpg';
import sousse from '../../assets/Packs/sousse-palace.jpg';
import skate from '../../assets/Packs/skate.jpg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
const Pack = () => {
    let navigate = useNavigate('');
    const {t} = useTranslation();
    return (
        <div className='eden__packs'>
            <div className="eden__packs-header">
                <div className="eden__packs-header_titles">
                    <h2>{t('pack.title')}</h2>
                </div>
            </div>
            <div className="eden__packs-content">
                <div className="eden__packs_item section__padding">
                    <div className="eden__packs-content_item-title">
                        <h2>"Mon Incroyable Famille"</h2>
                    </div>
                    <div className="eden__packs-item_content">
                        <section className='eden__packs-item_content-section'>
                            <h4>{t('pack.famille.husband.title')}</h4>
                            <ul>
                                <li>{t('pack.famille.husband.bio')}</li>
                                <li>{t('pack.famille.husband.radio')}</li>
                                <li>{t('pack.famille.husband.abdo')}</li>
                                <li>{t('pack.famille.husband.cardiac')}</li>
                                <li>{t('pack.famille.husband.gas')}</li>
                                <li>{t('pack.famille.husband.dent')}</li>
                            </ul>
                        </section>
                        <section className='eden__packs-item_content-section'>
                            <h4>{t('pack.famille.wife.title')}</h4>
                            <ul>
                                <li>{t('pack.famille.wife.bio')}</li>
                                <li>{t('pack.famille.wife.radio')}</li>
                                <li>{t('pack.famille.wife.bre')}</li>
                                <li>{t('pack.famille.wife.cardiac')}</li>
                                <li>{t('pack.famille.wife.vag')}</li>
                                <li>{t('pack.famille.wife.dent')}</li>
                            </ul>
                        </section>

                    </div>
                    <section className='eden__packs-item_content-section' id='kids'>
                        <h4>{t('pack.famille.child.title')}</h4>
                        <p>{t('pack.famille.child.soins')}</p>
                    </section>
                    <div className="eden__packs-logistics">
                        <h5>{t('pack.famille.logistic.details')}</h5>
                        <div className='eden__button-blue'>
                            <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{t('pack.famille.logistic.contact')}</button>
                            <button onClick={() => { navigate('/medicaltourism'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{t('pack.famille.logistic.visit')}</button>
                        </div>
                    </div>
                </div>
                <div className="eden__packs_item-romeo" id='romeo'>
                    <div className="eden__packs-content_item-title-romeo">
                        <h2>Romeo & Juliette</h2>
                    </div>
                    <div className="eden__packs-content_item-body-romeo">
                        <div className="eden__packs-content_item-body_text-romeo">
                            <div className="eden__packs-content_item-schedule-romeo">
                                <h3>{t('pack.romeo.stay.title')}</h3>
                                <ul>
                                    <li>{t('pack.romeo.stay.list_1')}</li>
                                    <li>{t('pack.romeo.stay.list_2')}</li>
                                    <li>{t('pack.romeo.stay.list_3')}</li>
                                </ul>
                            </div>
                            <div className="eden__packs-content_item-paragraph-romeo">
                                <section className="eden__packs-content_item-paragraph_section-romeo">
                                    <h3>{t('pack.romeo.med.title')}</h3>
                                    <ul>
                                        <li>{t('pack.romeo.med.report_title')}
                                            <ul>
                                                <li>{t('pack.romeo.med.report_content1')}</li>
                                                <li>{t('pack.romeo.med.report_content2')}</li>
                                            </ul>
                                        </li>

                                        <li>{t('pack.romeo.med.cardiac')}</li>
                                    </ul>
                                </section>
                                <section className="eden__packs-content_item-paragraph_section-romeo">
                                    <h5>{t('pack.famille.logistic.details')}</h5>
                                    <div className='form__button-romeo'>
                                        <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{t('pack.famille.logistic.contact')}</button>
                                        <button onClick={() => { navigate('/medicaltourism'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{t('pack.famille.logistic.visit')}</button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eden__packs-content_item section__padding">
                    <div className="eden__packs-content_item-title">
                        <h2>Adam & Eve</h2>
                    </div>
                    <div className="eden__packs-content_item-body">
                        <div className="eden__packs-content_item-body_text">
                            <div className="eden__packs-content_item-schedule">
                                <h3>{t('pack.adam.stay.title')}</h3>
                                <ul>
                                    <li>{t('pack.adam.stay.content')}</li>
                                </ul>
                            </div>
                            <div className="eden__packs-content_item-paragraph">
                                <section className="eden__packs-content_item-paragraph_section">
                                    <h3>Check up Adam:</h3>
                                    <ul>
                                        <li>{t('pack.adam.cadam.bio')}</li>
                                        <li>{t('pack.adam.cadam.radio')}</li>
                                        <li>{t('pack.adam.cadam.abdo')}</li>
                                        <li>{t('pack.adam.cadam.cardiac')}</li>
                                        <li>{t('pack.adam.cadam.gas')}</li>
                                        <li>{t('pack.adam.cadam.dent')}</li>
                                    </ul>
                                </section>
                                <section className="eden__packs-content_item-paragraph_section">
                                    <h3>Check up Eve:</h3>
                                    <ul>
                                        <li>{t('pack.adam.ceve.bio')}</li>
                                        <li>{t('pack.adam.ceve.radio')}</li>
                                        <li>{t('pack.adam.ceve.bre')}</li>
                                        <li>{t('pack.adam.ceve.cardiac')}</li>
                                        <li>{t('pack.adam.ceve.dent')}</li>
                                    </ul>
                                </section>
                                <section className="eden__packs-content_item-paragraph_section" id='eden__packs-w100'>
                                    <h3>{t('pack.adam.schedule.title')}</h3>
                                    <p>{t('pack.adam.schedule.visit1')}</p>
                                    <p>{t('pack.adam.schedule.visit2')}</p>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="eden__packs-item_pictures">
                        <img src={skate} alt="Skate" />
                        <img src={sidibou} alt="Sidi Bou Said" />
                        <img src={sousse} alt="Sousse" />
                    </div>
                </div>
                <div className="eden__packs-honeymoon">
                    <div className="eden__packs-honeymoon-header">
                        <h2>{t('pack.honeymoon.title')}</h2>
                    </div>
                    <div className="eden__packs-honeymoon-content">
                        <div className="eden__packs-honeymoon-content_item">
                            <h3>{t('pack.honeymoon.med.title')}</h3>
                            <p>
                            {t('pack.honeymoon.med.p1')}</p>
                            <p>
                            {t('pack.honeymoon.med.p2')}
                            </p>
                        </div>
                        <div className="eden__packs-honeymoon-content_item">
                            <h3>{t('pack.honeymoon.leisure.title')}</h3>
                            <p>
                            {t('pack.honeymoon.leisure.caption')}</p>
                            <h5>{t('pack.famille.logistic.details')}</h5>
                            <div className='form__button'>
                                <button onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{t('pack.famille.logistic.contact')}</button>
                                <button onClick={() => { navigate('/medicaltourism'); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{t('pack.famille.logistic.visit')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pack
