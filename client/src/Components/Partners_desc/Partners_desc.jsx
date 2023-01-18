import React from 'react'
import './partners_desc.css';
import doc_part from "../../assets/docpng.png";
import healthcare from "../../assets/healthcare.png";
import hand from "../../assets/hand.png";
import solidarity from "../../assets/solidarity.png";
import { useNavigate } from 'react-router-dom';

const Partners_desc = () => {
  let navigate= useNavigate();
  return (
    <React.Fragment>
    <div className='eden__partners_desc-container section__padding'>
        <div className='eden__partners_desc-container_img'>
            <img loading="lazy" src={doc_part} alt="Partners" />
        </div>
        <div className='eden__partners_desc-container_content'>
            <h1>Quality Care</h1>
            <h4>Your health is our priority</h4>
            <p>EDEN Light Services with the collaboration of multiple partners and medical centers assures the best medical services for its patients</p>
            <button type='button' onClick={() => {navigate("/message"); window.scrollTo({top: 0, behavior: "smooth"})}}>Send us a message</button>
        </div>
    </div>
    
    </React.Fragment>
  )
}

export default Partners_desc