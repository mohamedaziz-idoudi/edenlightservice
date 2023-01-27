import React from 'react'
import { useTranslation } from 'react-i18next'
import './esth_spec.css'
const Esth_spec = () => {
  const {t} = useTranslation()
  return (
    <div className='eden__esth-spec'>
      <div className="eden__esth-spec_header">
        <h2>{t('esth.spec.title')}</h2>
      </div>
      <div className="eden__esth-spec_breasts">
        <h5>{t('esth.spec.bre.enl')}</h5>
        <h5>{t('esth.spec.bre.lift')}</h5>
        <h5>{t('esth.spec.bre.lipo')}</h5>
        <h5>{t('esth.spec.bre.red')}</h5>
      </div>
      <div className="eden__esth-spec_abs">
        <h5>{t('esth.spec.abd.pl')}</h5>
        <h5>{t('esth.spec.abd.mini')}</h5>
      </div>
      <div className="eden__esth-spec_lipda">
        <h5>{t('esth.spec.lipo.suc')}</h5>
        <h5>{t('esth.spec.lipo.asp')}</h5>
        <h5>{t('esth.spec.lipo.scu')}</h5>
        <h5>{t('esth.spec.lipo.th')}</h5>
      </div>
      <div className="eden__esth-spec_gyn">
        <h5>{t('esth.spec.gyn')}</h5>
      </div>
      <div className="eden__esth-spec_lipo">
        <h5>{t('esth.spec.butt.lipo')}</h5>
        <h5>Brazilian Buttlift</h5>
      </div>
      <div className="eden__esth-spec_bodylift">
        <h5>{t('esth.spec.body.arm')}</h5>
        <h5>Body Lift</h5>
      </div>
      <div className="eden__esth-spec_face">
        <h5>{t('esth.spec.face.lift')}</h5>
        <h5>{t('esth.spec.face.lipo')}</h5>
        <h5>{t('esth.spec.face.rh')}</h5>
        <h5>{t('esth.spec.face.ble')}</h5>
        <h5>{t('esth.spec.face.oto')}</h5>
      </div>
      <div className="eden__esth-spec_vag">
        <h5>{t('esth.spec.vag.pl')}</h5>
        <h5>{t('esth.spec.vag.lab')}</h5>
      </div>
      <div className="eden__esth-spec_male">
        <h5>{t('esth.spec.male')}</h5>
      </div>
    </div>
  )
}

export default Esth_spec
