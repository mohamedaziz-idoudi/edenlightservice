import React from 'react'
import './esth.css'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import { Esth_spec } from '../../Components'
import {useNavigate} from 'react-router-dom'
import hayathem from
 '../../assets/hayathem.jpg';
const Esth = () => {
  const navigate = useNavigate();
  return (
    <div className='eden__esth'>
      <div className="eden__esth-header">
        <h1>Cosmetic Surgery in Tunisia</h1>
        <h4>Consult the informations related to cosmetic services we assure</h4>
      </div>
      <div className="eden__esth-proph section__padding">
        <h2>"Having Surgery Is An Act Of Love Towards Oneself"</h2>
        <p>Let 2023 be the year of resolutions for your lifestyle.
          Since a long time ago, Tunisia has been the center of medical assistance in Africa specifically in the field of cosmetics.
          EDEN Light Service accompanies you to perform cosmetic surgery in Tunisia and seeks the satisfaction of its patients.</p>
        <h4>Learn about the procedure</h4>
        <div className="eden__esth-proph_procedure">
          <div className="eden__esth-proph_procedure-item">
            <div className="eden__esth-proph_procedure-item_icon">
              <RiIcons.RiNumber1 />
            </div>
            <h5>Get in touch with us</h5>
            <div className="form__button">
              <button onClick={()=> {
                navigate("/message");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}>Send us a message</button>
            </div>
          </div>
          <div className="eden__esth-proph_procedure-item">
            <div className="eden__esth-proph_procedure-item_icon">
              <RiIcons.RiNumber2 />
            </div>
            <h5>Get an idea on the prices</h5>
            <div className="form__button">
              <button onClick={()=> {
                navigate("/devis_esth");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}>Get your Quote for free</button>
            </div>
          </div>
          <div className="eden__esth-proph_procedure-item">
            <div className="eden__esth-proph_procedure-item_icon">
              <RiIcons.RiNumber3 />
            </div>
            <h5>Have a great stay during the treatment period</h5>
            <div className="form__button">
              <button onClick={()=> {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}>Reserve your stay</button>
            </div>
          </div>
          <div className="eden__esth-proph_procedure-item">
            <div className="eden__esth-proph_procedure-item_icon">
              <RiIcons.RiNumber4 />
            </div>
            <h5>When it comes to treatment. EDEN Light Service keeps on monitoring its patients once it's done.</h5>
          </div>
        </div>
      </div>
      <Esth_spec />
      <div className="eden__blob-associates"></div>
      <div className="eden__esth-associates section__padding">
        <div className="eden__esth-associates_item">
          <div className="eden__esth-associates_item-titles">
            <h5>ONE OF OUR ASSOCIATES</h5>
            <h2>Dr. Hayathem Helali</h2>
            <h3>Aesthetic and maxillofacial surgery، cranio orbital and restorative</h3>
          </div>
          <div className="eden__esth-associates_item-content">
            <p>Dr. Helali: specialist in maxillofacial and aesthetic surgery, reconstructive surgery, malformation of the skull, orbit, whole body, facial cancer, scars and burns, plastic surgeon.</p>
          </div>
        </div>
        <div className="eden__esth-associates_item-image">
          <img src={hayathem} alt="Picture" loading='lazy' />
        </div>
      </div>
    </div>
  )
}

export default Esth
