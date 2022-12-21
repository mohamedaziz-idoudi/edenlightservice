import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  let navigate=useNavigate();
  return (
    <div className='eden__header_container section__margin'>
        <div className='Titles'>
            <h1>Tunisia: </h1>
            <h4>Capital of Medical Healthcare in Africa</h4>
        </div>
        <div className='eden__header_container-doctors'>
            <p>Learn about Tunisian Doctors' latest inventions & success stories</p>
            <button type='button' onClick={ () => {navigate('/partners')}}>Learn More..</button>
        </div>
    </div>
  )
}

export default Header