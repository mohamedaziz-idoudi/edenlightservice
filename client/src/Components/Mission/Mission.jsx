import React from 'react'
import './mission.css';
import deco from "../../assets/mission.webp";
import { useNavigate } from 'react-router-dom';

const Mission = () => {
  let navigate = useNavigate();
  return (
    <div className='mission__container section__margin'>
      <div className='mission__container-text'>
        <div className='mission__container-text_titles'>
          <h4>ABOUT US</h4>
          <h1>Our Mission</h1>
        </div>
        <div className='mission__container-text_content'>
          <p>Eden Light Service is traveling to recover your health, but not only..To
            also discover… and sometimes the opposite.</p>
          <p>Because health is life, and life is first and foremost time.Time that we
            would like to use to attend to our conveniences We proceed a particular and enhanced accent
            on everything related to your stay so that it becomes unforgettable Eden Light accompanies you
            for a...</p>
          <button type='button' className='btn_fill' onClick={() => {
            navigate('/about'); window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }}>Learn More..</button>
        </div>
      </div>
      <div className='mission__container-decoration'>
        <div className='mission__container-decoration_box'></div>
        <div className='mission__container-decoration_img'>
          <img loading="lazy" src={deco} alt="Decoration" />
        </div>
      </div>
    </div>
  )
}

export default Mission