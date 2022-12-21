import React, { useState, useEffect, useRef } from 'react'
import { useNavigate} from "react-router-dom";
import './form.css';
import Axios from 'axios';
const Form = () => {
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

  let navigate= useNavigate();

  const submit_business = () => {
    Axios.post("http://localhost:3001/api/insert_business", {
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
    Axios.post("http://localhost:3001/api/insert_customer", {
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
        <h1>Contact Us</h1>
        <p>If you want to include additional files, please contact this email: <span>contact@edenlightservice.com</span></p>
      </div>
      <div className='eden__form_business'>
        <label>Please specify the business relation:</label>
        <select name="businessModel" id="bus_mod" onChange={(e) => {
          setType(e.target.value);
          console.log(e.target.value);
        }
        }>
          <option value="">----Are you a..----</option>
          <option value="b2c">Customer</option>
          <option value="b2b" onChange={(e) => {
            setType(e.target.value);
          }
          }>Business</option>
        </select>

        <div className="form__item">
          {type === "b2c" && (
            <div>
              <legend>Personal Informations</legend>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Name</label>
                <input className='eden__contact_item' type="text" name="user_name" ref={ref_name} onChange={(e) => {
                  setName(e.target.value);
                }} />
              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Email</label>
                <input className='eden__contact_item' type="email"
                  name="user_email" ref={ref_email} onChange={(e) => {
                    setEmail(e.target.value); handleChange(e);
                  }} />
                  {error && <p style={{color: 'red'}}>{error}</p>}

              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Phone Number</label>
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
              <legend>Lodging</legend>
              <div className='eden__contact_line'>
                <label>Please select a type of lodging:</label>
                <select name="type" id="type" onChange={(e) => {
                  setLodgingType(e.target.value);
                }}>
                  <option value="">Please select</option>
                  <option value="Hotel" >Hotel</option>
                  <option value="House" >House</option>
                </select>
              </div>
              {lodgingType === 'Hotel' && (
                <React.Fragment>
                  <div className='eden__contact_line'>
                    <label>Please select an option:</label>
                    <select name="lodging" id="lodging" onChange={(e) => {
                      setStars(e.target.value);
                    }}>
                      <option value="">Please select</option>
                      <option value="3_stars">3 Stars</option>
                      <option value="4_stars">4 Stars</option>
                      <option value="5_stars">5 Stars</option>
                    </select>
                  </div>
                  <div className='eden__contact_line'>
                    <label>Type of Lodging:</label>
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
                  <label>Number of Persons</label>
                  <input type="number" onChange={(e) => {
                    setPersons(e.target.value);
                  }} />
                  <label>Number of Rooms</label>
                  <input type="number" onChange={(e) => {
                    setRooms(e.target.value);
                  }} />
                </div>
              )}
              <div className='form__button'>
                <button className='form__button' onClick={submit_customer}>Submit</button>
              </div>
              <p id='notification'></p>
            </div>

          )}
        </div>
        <div className="form__item">
          {type === "b2b" && (
            <React.Fragment>
              <legend>Personal Informations</legend>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Personal Name</label>
                <input className='eden__contact_item' type="text" name="user_name" ref={ref_name} onChange={(e) => {
                  setName(e.target.value);
                }} />
              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Personal Email</label>
                <input className='eden__contact_item' type="email" value={email}
                  name="user_email" ref={ref_email} onChange={(e) => {
                    setEmail(e.target.value);
                  }} />

              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Personal Phone Number</label>
                <input className='eden__contact_item' type="tel" pattern="^[0-9]{3,45}$" name='user_phone' ref={ref_phone} onChange={(e) => {
                  setPhone(e.target.value);
                }} />
              </div>
              <legend>Business Informations</legend>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Business Name</label>
                <input className='eden__contact_item' type="text" name="user_name" ref={ref_name} onChange={(e) => {
                  setBname(e.target.value);
                }} />
              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Business Email</label>
                <input className='eden__contact_item' type="email" value={bemail}
                  name="user_email" ref={ref_email} onChange={(e) => {
                    setBemail(e.target.value);
                  }} />

              </div>
              <div className='eden__contact_line'>
                <label className='eden__contact_item'>Business Phone Number</label>
                <input className='eden__contact_item' type="tel" pattern="^[0-9]{3,45}$" name='user_phone' ref={ref_phone} onChange={(e) => {
                  setBphone(e.target.value);
                }} />
              </div>
              <div className='eden__contact_line'>
                <label>Brief Description of the work:</label>
                <textarea className='eden__contact_item' type="text" onChange={(e) => {
                  setWork(e.target.value);
                }} />
              </div>
              <legend>Send us a message</legend>
              <div className='eden__contact_line'>
                <label>Message</label>
                <textarea className='eden__contact_item' onChange={(e) => {
                  setContact(e.target.value);
                }} />
              </div>
              <div className="eden__contact_line">
                <div className='form__button'>
                  <button onClick={submit_business}>Submit</button>
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