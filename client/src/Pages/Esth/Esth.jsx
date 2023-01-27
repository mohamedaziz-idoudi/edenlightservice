import React from 'react'
import './esth.css'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import { Esth_spec } from '../../Components'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import hayathem from
  '../../assets/hayathem.jpg';
  import makni from '../../assets/Partners/makni.webp';
const Esth = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  return (
    <div className='eden__esth'>
      <div className="eden__esth-header">
        <h1>{t('esth.header.title')}</h1>
        <h4>{t('esth.header.caption')}</h4>
      </div>
      <div className="eden__esth-proph section__padding">
        <h2>{`"${t('esth.procedure.quote')}"`}</h2>
        <p>{t('esth.procedure.paragraph')}</p>
        <h4>{t('esth.procedure.learn')}</h4>
        <div className="eden__esth-proph_procedure">
          <div className="eden__esth-proph_procedure-item">
            <div className="eden__esth-proph_procedure-item_icon">
              <RiIcons.RiNumber1 />
            </div>
            <h5>{t('esth.procedure.touch')}</h5>
            <div className="form__button">
              <button onClick={() => {
                navigate("/message");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}>{t('esth.procedure.contact')}</button>
            </div>
          </div>
          <div className="eden__esth-proph_procedure-item">
            <div className="eden__esth-proph_procedure-item_icon">
              <RiIcons.RiNumber2 />
            </div>
            <h5>{t('esth.procedure.prices')}</h5>
            <div className="form__button">
              <button onClick={() => {
                navigate("/devis_esth");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}>{t('esth.procedure.devis')}</button>
            </div>
          </div>
          <div className="eden__esth-proph_procedure-item">
            <div className="eden__esth-proph_procedure-item_icon">
              <RiIcons.RiNumber3 />
            </div>
            <h5>{t('esth.procedure.stay')}</h5>
            <div className="form__button">
              <button onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}>{t('esth.procedure.reserve')}</button>
            </div>
          </div>
          <div className="eden__esth-proph_procedure-item">
            <div className="eden__esth-proph_procedure-item_icon">
              <RiIcons.RiNumber4 />
            </div>
            <h5>{t('esth.procedure.after')}</h5>
          </div>
        </div>
      </div>
      <Esth_spec />
      <div className="eden__blob-associates"></div>
      <div className="eden__esth-associates section__padding">
        <div className="eden__esth-associates_item">
          <div className="eden__esth-associates_item-titles">
            <h5>{t('esth.associates.hayathem.subtitle')}</h5>
            <h2>Dr. Hayathem Helali</h2>
            <h3>{t('esth.associates.hayathem.specs')}</h3>
          </div>
          <div className="eden__esth-associates_item-content">
            <p>{t('esth.associates.hayathem.content')}</p>
          </div>
        </div>
        <div className="eden__esth-associates_item-image">
          <img src={hayathem} alt="Picture" loading='lazy' />
        </div>
      </div>
      <div className="eden__esth-associates section__padding">
        <div className="eden__esth-associates_item">
          <div className="eden__esth-associates_item-titles">
            <h5>{t('esth.associates.amin.subtitle')}</h5>
            <h2>Pr. MAKNI, Amin</h2>
            <h3>{t('esth.associates.amin.specs')}</h3>
          </div>
          <div className="eden__esth-associates_item-content">
            <p>{t('esth.associates.amin.content1')}</p>
            <p>{t('esth.associates.amin.content2')}</p>
            <p>{t('esth.associates.amin.content3')}</p>
            <p>{t('esth.associates.amin.content4')}</p>
            <p>{t('esth.associates.amin.content5')}</p>
            <p>{t('esth.associates.amin.content6')}</p>
            <p>{t('esth.associates.amin.content7')}</p>
            <p>{t('esth.associates.amin.content8')}</p>
            <p>{t('esth.associates.amin.content9')}</p>
          </div>
        </div>
        <div className="eden__esth-associates_item-image">
          <img src={makni} alt="Picture" loading='lazy' />
        </div>
      </div>
    </div>
  )
}

export default Esth
