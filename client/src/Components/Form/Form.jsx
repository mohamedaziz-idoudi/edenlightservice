import React, { useState, useEffect, useRef } from 'react'
import {useTranslation} from 'react-i18next'
import { Link, useNavigate } from "react-router-dom";
import './form.css';
import Axios from 'axios';
const Form = () => {
  const {t} = useTranslation()
  const ref_name = useRef(null);
  const ref_email = useRef(null);
  const ref_phone = useRef(null);
  const ref_message = useRef(null);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [pension, setPension] = useState('');
  const [stars, setStars] = useState('');
  const [lodgingType, setLodgingType] = useState('');
  const [persons, setPersons] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [bname, setBname] = useState('');
  const [bemail, setBemail] = useState('');
  const [bphone, setBphone] = useState('');
  const [work, setWork] = useState('');
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
  };

  let navigate = useNavigate();

  const submit_business = () => {
    Axios.post("https://api.edenlightservice.com/api/insert_business", {
      name: name,
      email: email,
      phone: phone,
      message: contact,
      bname: bname,
      bemail: bemail,
      bphone: bphone,
      work: work
    }).then(() => {
      alert("Successfull insert");
    });
    navigate('/redirect');
  }

  const submit_customer = () => {
    Axios.post("https://api.edenlightservice.com/api/insert_customer", {
      name: name,
      email: email,
      phone: phone,
      message: contact,
      lodgingType: lodgingType,
      nb_stars: stars,
      resort: pension,
      nb_rooms: rooms,
      nb_persons: persons
    }).then(() => {
      alert("successful insert");
    })
    navigate('/redirect');

  }

  return (
    <div className='eden__form'>
      <div className="eden__form-title">
        <h1>{t('form.title')}</h1>
        <p>{t('form.caption')} <span>contact@edenlightservice.com</span></p>
      </div>
      <div className='eden__form_business'>
        <label>{t('form.rel')}</label>
        <select name="businessModel" id="bus_mod" onChange={(e) => {
          setType(e.target.value);
          console.log(e.target.value);
        }
        }>
          <option value="">{t('form.rel_a')}</option>
          <option value="b2c">{t('form.rel_c')}</option>
          <option value="b2b" onChange={(e) => {
            setType(e.target.value);
          }
          }>{t('form.rel_b')}</option>
        </select>

        <div className="form__item">
          {type === "b2c" && (
            <div>
              <div className="eden__form-title">
                <h1>{t('form.res')}</h1>
                <p>{t('form.res_content')} <br /> <Link to='/message' target='_blank'>{t('form.res_link')}</Link></p>
              </div>
              <legend>{t('form.l1')}</legend>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>{t('form.name')}</label>
                <input className='eden__contact_item' type="text" name="user_name" ref={ref_name} onChange={(e) => {
                  setName(e.target.value);
                }} />
              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>{t('form.email')}</label>
                <input className='eden__contact_item' type="email"
                  name="user_email" ref={ref_email} onChange={(e) => {
                    setEmail(e.target.value); handleChange(e);
                  }} />
                {error && <p style={{ color: 'red' }}>{error}</p>}

              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>{t('form.ph')}</label>
                <input className='eden__contact_item' type="tel" pattern="^[0-9]{3,45}$" name='user_phone' ref={ref_phone} onChange={(e) => {
                  setPhone(e.target.value);
                }} />
              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Message</label>
                <textarea className='eden__contact_item' name="message" ref={ref_message} onChange={(e) => {
                  setContact(e.target.value);
                }} />
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
                      <option value="3_stars">3 Stars</option>
                      <option value="4_stars">4 Stars</option>
                      <option value="5_stars">5 Stars</option>
                    </select>
                  </div>
                  <div className='eden__contact_line'>
                    <label>{t('form.hlod')}</label>
                    <select name="type_lod" id="type_lod" onChange={(e) => {
                      setPension(e.target.value);

                    }}>
                      <option value="">Please select</option>
                      <option value="all_inclusive">All Inclusive</option>
                      <option value="standard">Standard</option>
                    </select>
                  </div>
                </React.Fragment>
              )}
              {lodgingType === 'House' && (
                <div>
                  <label>{t('form.s_num')}</label>
                  <input type="number" onChange={(e) => {
                    setPersons(e.target.value);
                  }} />
                  <label>{t('form.s_rooms')}</label>
                  <input type="number" onChange={(e) => {
                    setRooms(e.target.value);
                  }} />
                </div>
              )}
              <div className='form__button'>
                <button className='form__button' onClick={submit_customer}>{t('form.button')}</button>
              </div>
              <p id='notification'></p>
            </div>

          )}
        </div>
        <div className="form__item">
          {type === "b2b" && (
            <React.Fragment>
              <legend>{t('form.l1')}</legend>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>{t('form.name')}</label>
                <input className='eden__contact_item' type="text" name="user_name" ref={ref_name} onChange={(e) => {
                  setName(e.target.value);
                }} />
              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>{t('form.email')}</label>
                <input className='eden__contact_item' type="email" value={email}
                  name="user_email" ref={ref_email} onChange={(e) => {
                    setEmail(e.target.value);
                  }} />

              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>{t('form.ph')}</label>
                <input className='eden__contact_item' type="tel" pattern="^[0-9]{3,45}$" name='user_phone' ref={ref_phone} onChange={(e) => {
                  setPhone(e.target.value);
                }} />
              </div>
              <legend>Business Informations</legend>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>{t('form.bus')}</label>
                <input className='eden__contact_item' type="text" name="user_name" ref={ref_name} onChange={(e) => {
                  setBname(e.target.value);
                }} />
              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>{t('form.bemail')}</label>
                <input className='eden__contact_item' type="email" value={bemail}
                  name="user_email" ref={ref_email} onChange={(e) => {
                    setBemail(e.target.value);
                  }} />

              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>{t('form.bph')}</label>
                <input className='eden__contact_item' type="tel" pattern="^[0-9]{3,45}$" name='user_phone' ref={ref_phone} onChange={(e) => {
                  setBphone(e.target.value);
                }} />
              </div>
              <div className='eden__contact_line'>
                <label>{t('form.desc')}</label>
                <textarea className='eden__contact_item' type="text" onChange={(e) => {
                  setWork(e.target.value);
                }} />
              </div>
              <legend>{t('form.ms')}</legend>
              <div className='eden__contact_line'>
                <label>Message</label>
                <textarea className='eden__contact_item' onChange={(e) => {
                  setContact(e.target.value);
                }} />
              </div>
              <div className="eden__contact_line">
                <div className='form__button'>
                  <button onClick={submit_business}>{t('form.button')}</button>
                </div>
                <p id='notification'></p>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default Form