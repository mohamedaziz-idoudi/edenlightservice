import React from 'react'
import './bizerte.css';
import bizerte1 from "../../assets/Tourism/bizerte1.webp";
import bizerte2 from "../../assets/Tourism/bizerte2.webp";
import RafRaf from "../../assets/Tourism/RafRaf.webp";
const Bizerte = () => {
  return (
    <div className="bizerte__container">
      <div className="bizerte__container_header">
        <div className="bizerte__container_header-content">
          <h1>Bizerte</h1>
          <h3>1h Drive from Tunis</h3>
        </div>
      </div>
      <div className="bizerte__container_body">
        <div className="bizerte__container_body-item">
          <img loading="lazy" src={RafRaf} alt="IMG" />
          <h2>Bizerte: Raf-Raf Beach</h2>
        </div>
        <div className="bizerte__container_body-item">
          <img loading="lazy" src={bizerte2} alt="IMG" />
          <h2>Bizerte: The City</h2>
        </div>
      </div>
      <div className='kelibia__container'>
        <div className="kelibia__container-content">
          <h1>Kelibia</h1>
          <h3>2h Drive From Tunis</h3>
        </div>
      </div>
    </div>
  )
}

export default Bizerte
