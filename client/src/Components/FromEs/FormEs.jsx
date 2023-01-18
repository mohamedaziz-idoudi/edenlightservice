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
    const [persons, setPersons] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [surgery,setSurgery] = useState(0);

    const handleSelection = (e) => {
        setSurgery({val: e.target.value});
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
    const submit_customer = () => {
        Axios.post("http://89.116.228.82/api/insert_customer", {
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
        <React.Fragment>
            <div className="formbg">
                <div className='form__title'>
                    <h1>Get your cosmetic quote for free</h1>
                    <p>If you want to include additional files, please send us an email via: Contact@edenlightservice.com</p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
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
                    <div className="eden__contact_line">
                        <label className='eden__contact_item'>Choose the operation you desire</label>
                        <select multiple name="operation" id="operation" onChange={handleSelection}>
                            <optgroup label='Chirurgie des seins'>
                                <option value={1}>Augmentation mammaire avec prothèses</option>
                                <option value={2}>Lifting mammaire avec prothèses</option>
                                <option value={26}>Lifting mammaires sans prothèses</option>
                                <option value={3}>Lipofilling mammaire</option>
                                <option value={4}>Réduction mammaire</option>
                                <option value={5}>Changement de prothèses</option>
                                <option value={6}>Gynécomastie</option>
                            </optgroup>
                            <optgroup label='Chirurgie de la Silhouette'>
                                <option value={7}>Augmentation des fesses(Brazilian Buttlift)</option>
                                <option value={8}>Liposuccion VASER</option>
                                <option value={9}>Liposuccion classique</option>
                                <option value={10}>Lipo-Abdominoplastie</option>
                                <option value={11}>Minilift abdominal</option>
                                <option value={12}>Lifting des bras</option>
                                <option value={13}>Lifting des cuisses</option>
                                <option value={14}>Bodylift</option>
                            </optgroup>
                            <optgroup label='Chirurgie du visage'>
                                <option value={15}>Rhinoplastie</option>
                                <option value={16}>Lifting cervico facial (visage)</option>
                                <option value={17}>Blépharoplastie</option>
                            </optgroup>
                            <optgroup label="Chirurgie intime">
                                <option value={18}>Vaginoplastie</option>
                                <option value={19}>Labioplastie</option>
                            </optgroup>
                            <optgroup label="Chirurgie de l'obésité">
                                <option value={20}>Vaginoplastie</option>
                                <option value={21}>ByPass / Mini ByPass</option>
                            </optgroup>
                            <optgroup label='Implants dentaires'>
                                <option value={22}>Implant dentaire</option>
                                <option value={23}>Couronne en céramo-métallique sur implant</option>
                                <option value={24}>Facettes</option>
                            </optgroup>
                            <optgroup label='Implants capillaires'>
                                <option value={25}>Greffe Capillaire FUE</option>
                            </optgroup>
                        </select>
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
                                    <option value="">Please select</option>

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
                    <div className='eden__contact_line'>
                        <label>Car (Optional)</label>
                        <select name='car'>
                            <option value="">---Please Select---</option>
                            <option value="Luxe">Luxury Car</option>
                            <option value="Standard">Standard Car</option>
                        </select>
                    </div>
                    <div className="eden__contact-line">
                        <label>Are you interested in visiting El Sahara</label>
                        <select name="sahara" id="sahara">
                            <option value="">---Please Select---</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="eden__contact-line">
                        <label>Are you interested in visiting Beach Leisure</label>
                        <select name="sahara" id="sahara">
                            <option value="">---Please Select---</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <input type="submit" value="Send" />
                    <p id='notification'></p>
                </form>
            </div >
        </React.Fragment >
    )
}

export default FormEs