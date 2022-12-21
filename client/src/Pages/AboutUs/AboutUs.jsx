import React from 'react'
import './aboutus.css';
import { About_Desc , Chose, Team } from "../../Components";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div className='about__header'>
        <div className='about__header_title'>
          <h1>About us</h1>
        </div>
      </div>
      <div className='about__description'>
        <About_Desc />
      </div>
      <div className='about__chose'>
        <Chose />
      </div>
      <div className="about__team">
        <Team />
      </div>
    </React.Fragment>
  )
}

export default AboutUs