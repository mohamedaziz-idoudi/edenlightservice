import React from 'react'
import "./kairouan.css"
import kairouan1 from "../../assets/Tourism/kairouan2.webp";
import Kairouan2 from "../../assets/Tourism/Kairouan4.webp";
const Kairouan = () => {
  return (
    <div className='eden__kairouan_container'>
      <div className='eden__kairouan_header'>
        <div className='eden__kairouan_header-content'>
          <h1>Kairouan</h1>
          <h3>Capital of Tradition</h3>
          <p>3h-4h Drive from Tunis</p>
        </div>
      </div>
      <div className='eden__kairouan_content section__padding'>
        <div className='eden__kairouan_content-left eden__kairouan_content-item'>
          <img loading="lazy" src={kairouan1} alt="Image" />
        </div>
        <div className='eden__kairouan_content-right eden__kairouan_content-item'>
          <div className='eden__kairouan_content-right_top'>
            <img loading="lazy" src={Kairouan2} alt="Image" />
          </div>
          <div className='eden__kairouan_content-right_buttom'>
            <h1>The Capital of Islamic Culture</h1>
            <p>Kairouan, one of the most celebrated cities of the Islamic world, captivates visitors with the unique charm of its medina. The Great Mosque is a universal architectural masterpiece. A mandatory stop during a trip to Tunisia and a starting point to discover the impressive ancient site of Sbeïtla in the High Steppes region. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kairouan
