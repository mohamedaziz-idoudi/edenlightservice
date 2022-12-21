import React from 'react'
import './sidibou.css';
import photo1 from "../../assets/Tourism/SidiBouSaid.webp";
import photo2 from "../../assets/Tourism/SidiBouSaid2.webp";
const SidiBou = () => {
  return (
    <div className='eden__sidi_bou_container'>
      <div className='eden__sidi_bou_container-header'>
        <div className='eden__sidi_bou_container-header_content'>
            <h1>Sidi Bou Saïd</h1>
            <h3>Paradise</h3>
        </div>
      </div>
      <div className='eden__sidi_bou_container-images'>
        <div className='eden__sidi_bou_container-images_item'>
            <img loading="lazy" src={photo1} alt="Image" />
        </div>
        <div className='eden__sidi_bou_container-images_item'>
            <img loading="lazy" src={photo2} alt="Image" />
        </div>
      </div>
    </div>
  )
}

export default SidiBou
