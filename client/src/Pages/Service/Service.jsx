import React, { useState } from 'react';
import './service.css';
import { Fields, Services } from '../../Components'
import photo from '../../assets/ss.webp';
import { useNavigate, Link } from 'react-router-dom';
import woman from '../../assets/woman.png';
import male from '../../assets/male.png';
import baby from '../../assets/baby.png';
import child from '../../assets/child.webp';
import female from '../../assets/women_services.webp';
import male_pat from '../../assets/male_pat.webp';
const Service = () => {
  const [ped, setPed] = useState(false);
  const [homme, setHomme] = useState(false);
  const [femme, setFemme] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='eden__service_container'>
      <div className='eden__service_container-header'>
        <div className="eden__service_container-header_content">
          <h1>Services</h1>
        </div>
      </div>
      <div className="eden__services_fields">
        <Fields />
      </div>
      <div className="eden__service_container-body section__padding">
        <div className="eden__service_container-body_top">
          <div className="eden__service_container-body_top-left">
            <h2>What do we offer?</h2>
            <p>EDEN Light Service offers multiple categories of services to cover all its patients' needs</p>
            <button type='button' onClick={() => { navigate("/contact"); window.scrollTo({ top: 0, behavior: "smooth" }) }}>Contact Us</button>
          </div>
          <div className="eden__service_container-body_top-right">
            <img loading="lazy" src={photo} alt="Image" />
          </div>
        </div>
        <div className="eden__service_container-body_buttom">
          <div className='eden__service_container-body_buttom-item' onClick={() => { setPed(!ped); setFemme(false); setHomme(false); }}>
            <div className="eden__service_container-body_buttom-item_img">
              <img loading="lazy" src={baby} alt="Baby" />
            </div>
            <div className="eden__service_container-body_buttom-item_caption">
              <h2>Child Services</h2>
            </div>
          </div>
          <div className='eden__service_container-body_buttom-item' onClick={() => { setFemme(!femme); setHomme(false); setPed(false); }}>
            <div className="eden__service_container-body_buttom-item_img">
              <img loading="lazy" src={woman} alt="Woman" />
            </div>
            <div className="eden__service_container-body_buttom-item_caption">
              <h2>Women Services</h2>
            </div>
          </div>
          <div className='eden__service_container-body_buttom-item' onClick={() => { setHomme(!homme); setFemme(false); setPed(false); }}>
            <div className="eden__service_container-body_buttom-item_img">
              <img loading="lazy" src={male} alt="Male" />
            </div>
            <div className="eden__service_container-body_buttom-item_caption">
              <h2>Male Services</h2>
            </div>
          </div>
        </div>
      </div>
      {ped && (
        <div id='child_services' className="eden__service_container-blog section__padding">
          <div className="eden__service_container-blog_title">
            <h1>Child Services</h1>
          </div>
          <div className='eden__service_container-blog_content'>
            <div className='eden__service_container-blog_content-left'>
              <ul>
                <li>Pediatrics</li>
                <li>Pedodontics</li>
                <li>Pediatric Neurology</li>
                <li>Pediatric Hematology</li>
                <li>Ophthalmology</li>
                <li>Harelip</li>
              </ul>
            </div>
            <div className='eden__service_container-blog_content-right'>
              <img loading="lazy" src={child} alt="Child" />
            </div>
          </div>
        </div>
      )}
      {femme && (
        <div id='women_services' className="eden__service_container-blog section__padding">
          <div className="eden__service_container-blog_title">
            <h1>Women Services</h1>
          </div>
          <div className='eden__service_container-blog_content'>
            <div className='eden__service_container-blog_content-left'>
              <ul>
                <li>Medically Assisted Procreation (MPA)</li>
                <li>Myomectomy (myomas, fibroids)</li>
                <li>Cosmetic and reconstructive surgery (Belly, Face, Breasts, etc...)</li>
                <li>Bariatric Surgery (Sleeve, Bypass, Gastric band)</li>
                <li>Lithiasis</li>
                <li>Retinal detachment</li>
                <li>Corneal transplant</li>
              </ul>
            </div>
            <div className='eden__service_container-blog_content-right'>
              <img loading="lazy" src={female} alt="Female" />
            </div>
          </div>
        </div>
      )}
      {homme && (
        <div id='male_services' className="eden__service_container-blog section__padding">
          <div className="eden__service_container-blog_title">
            <h1>Male Services</h1>
          </div>
          <div className='eden__service_container-blog_content'>
            <div className='eden__service_container-blog_content-left'>
              <ul>
                <li>Urolithiasis urology</li>
                <li>Varicocella</li>
                <li>Infertility</li>
                <li>Penile prosthesis</li>
                <li>Prostate</li>
                <li>Diabetes</li>
                <li>Hypertension</li>
                <li>Orthopedics (hip fracture, lumbar spine, osteoarthritis, gonarthrosis, ligament
                  cruciate, discoid meniscus, arthritis, arthroplasty, cataracte etc)</li>
                <li>Glaucoma</li>
              </ul>
            </div>
            <div className='eden__service_container-blog_content-right'>
              <img loading="lazy" src={male_pat} alt="Male" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Service
