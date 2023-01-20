import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './form.css'
const FormEs = () => {
    const navigate = useNavigate();
    const [listeEsth, setListeEsth] = useState([{}]);
    const [listeLog, setListeLog] = useState([{}]);
    const form = useRef();
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
    const [surgery, setSurgery] = useState([]);
    const [opList, setOpList] = useState([]);
    const [stay, setStay] = useState('');
    const [car, setCar] = useState('');
    const [sahara, setSahara] = useState(false);
    const [beach, setBeach] = useState(false);
    const [priceOps, setPriceOps] = useState(0);
    useEffect(() => {
        Axios.get("http://localhost:3001/api/getops").then((data) => {
            setOpList(data.data);
        })
    }, [])
    const handleSubmit = async (e) => {
        await e.preventDefault();
        let ops_sum = await Axios.get("http://localhost:3001/api/sum_ops", {
            params: {
                operations: surgery
            }
        });
        setPriceOps(ops_sum.data[0].sum);
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
        max= await max + priceOps;
        min=await min + priceOps;
        document.getElementById("overall_price").innerHTML = `The price will be in between ${min}€ and ${max}€`;

    }
    const handleSelection = (e) => {
        setSurgery({ val: e.target.value });
    }
    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_m7wfjkm', 'template_gt9up8s', form.current, 'X5Y0NG0RZyPxtjPPT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        ref_name.current.value = null;
        ref_email.current.value = null;
        ref_phone.current.value = null;
        ref_message.current.value = null;
        document.getElementById("notification").innerHTML = "Message sent successfully!";
    };
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
    return (
        <React.Fragment>
            <div className="formbg">
                <div className='form__title'>
                    <h1>Get your cosmetic quote for free</h1>
                    <p>If you want to include additional files, please send us an email via: Contact@edenlightservice.com</p>
                </div>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className='eden__contact_line'>
                        <label className='eden__contact_item'>Name</label>
                        <input className='eden__contact_item' type="text" name="user_name" ref={ref_name} />
                    </div>
                    <div className='eden__contact_line'>
                        <label className='eden__contact_item'>Email</label>
                        <input className='eden__contact_item' type="email" value={message}
                            onChange={handleChange} name="user_email" ref={ref_email} />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    <div className='eden__contact_line'>
                        <label className='eden__contact_item'>Phone Number</label>
                        <input className='eden__contact_item' type="tel" pattern="^[0-9]{3,45}$" name='user_phone' ref={ref_phone} />
                    </div>
                    <div className='eden__contact_line'>
                        <label className='eden__contact_item'>Sexe</label>
                        <select name="gender" id="gender">
                            <option value="">---Select your gender---</option>
                            <option value="Homme">Male</option>
                            <option value="Femme">Female</option>
                        </select>

                    </div>
                    <div className="eden__contact-ops_title">
                        <h3>Choose the operation(s) you desire</h3>
                    </div>
                    <div className="eden__contact_selection">

                        {Array.from(opList).map((val, key) => {
                            return (
                                <div className="eden__contact_selection-item">
                                    <li key={key}>
                                        <div className="toppings-list-item">
                                            <div className="left-section">
                                                <input
                                                    type="checkbox"
                                                    id={`custom-checkbox-${key}`}
                                                    name={val.operation}
                                                    value={key + 1}
                                                    onChange={(e) => {
                                                        surgery.push(+e.target.value);
                                                        console.log(surgery);

                                                    }}
                                                />
                                                <label htmlFor={`custom-checkbox-${key}`}>{val.operation}</label>
                                            </div>
                                        </div>
                                    </li>

                                </div>
                            )
                        })}
                    </div>
                    <div className="eden__form-title">
                        <h1>Reserve your stay</h1>
                        <p>If you feel like getting more informations before reserving your stay, please <br /> <Link to='/message' target='_blank'>Click here to send us a message</Link></p>
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
                                    <option value="">---Please Select---</option>
                                    <option value="Hotel 4 etoiles">4 Stars</option>
                                    <option value="Hotel 5 etoiles">5 Stars</option>
                                </select>
                            </div>
                        </React.Fragment>
                    )}
                    {lodgingType === 'House' && (
                        <div className='eden__contact_line'>
                            <label >Please specify where you want to pass your stay</label>
                            <select name="villa_apart" id="villa_apart" onChange={(e) => {
                                setStay(e.target.value);
                            }}>
                                <option value="">---Please Select----</option>
                                <option value="Villa">Villa</option>
                                <option value="Apartment">Apartment</option>
                            </select>
                        </div>
                    )}
                    <div className='eden__contact_line'>
                        <label>Car (Optional)</label>
                        <select name='car' onChange={(e) => {
                            setCar(e.target.value);
                        }}>
                            <option value="">---Please Select---</option>
                            <option value="Voiture de Luxe">Luxury Car</option>
                            <option value="Voiture Standard">Standard Car</option>
                        </select>
                    </div>
                    <div className="eden__contact_line">
                        <label>Are you interested in visiting El Sahara</label>
                        <select name="sahara" id="sahara" onChange={(e) => {
                            setSahara(e.target.value);
                        }}>
                            <option value="">---Please Select---</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="eden__contact_line">
                        <label>Are you interested in visiting Beach Leisure</label>
                        <select name="beach" id="beach" onChange={(e) => {
                            setBeach(e.target.value);
                        }}>
                            <option value="">---Please Select---</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <input type="submit" value="Send" />
                    <p id='overall_price'></p>
                </form>
            </div >
        </React.Fragment >
    )
}

export default FormEs