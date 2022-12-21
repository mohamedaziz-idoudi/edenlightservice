import React from 'react'
import './chose.css';
const Chose = () => {
  return (
    <div className='eden__chose_container'>
      <div className="eden__chose_container-header">
        <h1>Why Chose Us?</h1>
      </div>
      <div className="eden__chose_container-buttom">
        <div className='eden__chose_container-buttom_item'>
            <h3>Immediate Response</h3>
        </div>
        <div className='eden__chose_container-buttom_item'>
            <h3>We choose to promote only the best</h3>
        </div>
        <div className='eden__chose_container-buttom_item'>
            <h3>Accurate informations provided</h3>
        </div>
        <div className='eden__chose_container-buttom_item'>
            <h3>Long Distance Follow Up</h3>
        </div>
      </div>
    </div>
  )
}

export default Chose
