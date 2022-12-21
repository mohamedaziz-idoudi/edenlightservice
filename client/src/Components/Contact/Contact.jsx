import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
const Contact = () => {
  const form = useRef();
  const ref_name = useRef(null);
  const ref_email = useRef(null);
  const ref_phone = useRef(null);
  const ref_message = useRef(null);
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
          <h1>Contact Us</h1>
          <p>If you want to include additional files, please contact this number: 99 999 999</p>
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
            {error && <p style={{color: 'red'}}>{error}</p>}
          </div>
          <div className='eden__contact_line'>
            <label className='eden__contact_item'>Phone Number</label>
            <input className='eden__contact_item' type="tel" pattern="^[0-9]{3,45}$" name='user_phone' ref={ref_phone} />
          </div>
          <div className='eden__contact_line'>
            <label className='eden__contact_item'>Message</label>
            <textarea className='eden__contact_item' name="message" ref={ref_message} />
          </div>
          <input type="submit" value="Send" />
          <p id='notification'></p>
        </form>
      </div>
    </React.Fragment>
  );
}; export default Contact