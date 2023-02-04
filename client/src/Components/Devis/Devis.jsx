import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './devis.css'
const Devis = () => {
    const navigate= useNavigate();
    const { t } = useTranslation()
    const form = useRef();
    const ref_name = useRef(null);
    const ref_email = useRef(null);
    const ref_phone = useRef(null);
    const ref_message = useRef(null);
    const [stars, setStars] = useState('');
    const [lodgingType, setLodgingType] = useState('');
    const [stay, setStay] = useState('');
    const [car, setCar] = useState('');
    const [sahara, setSahara] = useState(false);
    const [beach, setBeach] = useState(false);
    const [contact, setContact] = useState('');
    const [priceMin, setPriceMin] = useState();
    const [priceMax, setPriceMax] = useState();
    const handleSubmit = async (e) => {
        await e.preventDefault();
        let logistics_sum = await Axios.get("http://localhost:3001/api/sum_logistics", {
            params: {
                car: car,
                stars: stars,
                stay: stay,
                sahara: sahara,
                beach: beach
            }
        })
        let max = await logistics_sum.data.Maximum;
        let min = await logistics_sum.data.Minimum;
        setPriceMin(min);
        setPriceMax(max);
        setShow(true);
        ref_name.current.value = null;
        ref_email.current.value = null;
        ref_phone.current.value = null;
        ref_message.current.value = null;
    }
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(emaill) {
        return /\S+@\S+\.\S+/.test(emaill);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setMessage(event.target.value);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        navigate('/')
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('form.mod_header')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{t('form.mod_priceMin')}{priceMin}{t('form.mod_priceMax')}{priceMax}€.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        {t('form.mod')}
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="formbg">
                <div className='form__title'>
                    <h1>{t('form.devis')}</h1>
                    <p>{t('form.caption')} Contact@edenlightservice.com</p>
                </div>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className='eden__contact_line'>
                        <label className='eden__contact_item'>{t('form.name')}</label>
                        <input className='eden__contact_item' type="text" name="user_name" ref={ref_name} />
                    </div>
                    <div className='eden__contact_line'>
                        <label className='eden__contact_item'>{t('form.email')}</label>
                        <input className='eden__contact_item' type="email" value={message}
                            onChange={handleChange} name="user_email" ref={ref_email} />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    <div className='eden__contact_line'>
                        <label className='eden__contact_item'>{t('form.ph')}</label>
                        <input className='eden__contact_item' type="tel" pattern="^[0-9]{3,45}$" name='user_phone' ref={ref_phone} />
                    </div>
                    <div className='eden__contact_line'>
                        <label className='eden__contact_item'>Sexe</label>
                        <select ref={ref_message} name="user_message" id="gender" onChange={(e) => {
                            setContact(e.target.value);
                        }}>
                            <option value="">{t('formes.g1')}</option>
                            <option value="Homme">{t('formes.g2')}</option>
                            <option value="Femme">{t('formes.g3')}</option>
                        </select>

                    </div>
                    <div className="eden__form-title">
                        <h1>{t('form.res')}</h1>
                        <p>{t('form.res_content')} <br /> <Link to='/message' target='_blank'>{t('form.res_link')}</Link></p>
                    </div>

                    <legend>{t('form.l2')}</legend>
                    <div className='eden__contact_line'>
                        <label>{t('form.type')}</label>
                        <select name="type" id="type" onChange={(e) => {
                            setLodgingType(e.target.value);
                        }}>
                            <option value="">{t('form.t1')}</option>
                            <option value="Hotel" >{t('form.t2')}</option>
                            <option value="House" >{t('form.t3')}</option>
                        </select>
                    </div>
                    {lodgingType === 'Hotel' && (
                        <React.Fragment>
                            <div className='eden__contact_line'>
                                <label>{t('form.h_type')}</label>
                                <select name="lodging" id="lodging" onChange={(e) => {
                                    setStars(e.target.value);
                                }}>
                                    <option value="">{t('form.h_t1')}</option>
                                    <option value="Hotel 4 etoiles">4 Stars</option>
                                    <option value="Hotel 5 etoiles">5 Stars</option>
                                </select>
                            </div>
                        </React.Fragment>
                    )}
                    {lodgingType === 'House' && (
                        <div className='eden__contact_line'>
                            <label >{t('formes.specs')}</label>
                            <select name="villa_apart" id="villa_apart" onChange={(e) => {
                                setStay(e.target.value);
                            }}>
                                <option value="">---Please Select----</option>
                                <option value="Villa">Villa</option>
                                <option value="Apartment">{t('formes.apt')}</option>
                            </select>
                        </div>
                    )}
                    <div className='eden__contact_line'>
                        <label>{t('formes.car')}</label>
                        <select name='car' onChange={(e) => {
                            setCar(e.target.value);
                        }}>
                            <option value="">---Please Select---</option>
                            <option value="Voiture de Luxe">{t('formes.lux')}</option>
                            <option value="Voiture Standard">{t('formes.std')}</option>
                        </select>
                    </div>
                    <div className="eden__contact_line">
                        <label>{t('formes.sahara')}</label>
                        <select name="sahara" id="sahara" onChange={(e) => {
                            setSahara(e.target.value);
                        }}>
                            <option value="">---Please Select---</option>
                            <option value="yes">{t('formes.yes')}</option>
                            <option value="no">{t('formes.no')}</option>
                        </select>
                    </div>
                    <div className="eden__contact_line">
                        <label>{t('formes.beach')}</label>
                        <select name="beach" id="beach" onChange={(e) => {
                            setBeach(e.target.value);
                        }}>
                            <option value="">---Please Select---</option>
                            <option value="yes">{t('formes.yes')}</option>
                            <option value="no">{t('formes.no')}</option>
                        </select>
                    </div>
                    <input type="submit" value={t('form.button')} />
                </form>
            </div >
        </React.Fragment>
    )
}

export default Devis