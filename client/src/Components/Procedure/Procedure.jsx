import React from 'react';
import './procedure.css';
import explore from "../../assets/explore.png";
import match from "../../assets/match.png";
import arrange from "../../assets/arrange.png";
import treat from "../../assets/treat.png";
import { Navigate, useNavigate } from 'react-router-dom';
const Procedure = () => {
    let navigate= useNavigate();
    return (
        <div className='eden__procedure_container section__padding'>
            <div className='eden__procedure_container-header'>
                <h4>PROCEDURE</h4>
                <h2>Finding Healthcare Abroad</h2>
            </div>
            <div className='eden__procedure_container-caption'>
                <p>We'll help you map out the whole procedure</p>
            </div>
            <div className='eden__procedure_container-content'>
                <div className='eden__procedure_container-content_item'>
                    <div className='eden__procedure_container-content_item-img'>
                        <img loading="lazy" src={explore} alt="Explore" />
                    </div>
                    <div className='eden__procedure_container-content_item-caption'>
                        <h2>Explore</h2>
                        <p>Explore the different hospitals and clinics</p>
                    </div>
                </div>
                <div className='eden__procedure_container-content_item'>
                    <div className='eden__procedure_container-content_item-img'>
                        <img loading="lazy" src={match} alt="Match" />
                    </div>
                    <div className='eden__procedure_container-content_item-caption'>
                        <h2>Match</h2>
                        <p>Based on your needs, EDEN Light Service recommends the best destinations</p>
                    </div>
                </div>
                <div className='eden__procedure_container-content_item'>
                    <div className='eden__procedure_container-content_item-img'>
                        <img loading="lazy" src={arrange} alt="Arrange" />
                    </div>
                    <div className='eden__procedure_container-content_item-caption'>
                        <h2>Arrange</h2>
                        <p>Once matched, you'll be contacted shortly with the needed informations</p>
                    </div>
                </div>
                <div className='eden__procedure_container-content_item'>
                    <div className='eden__procedure_container-content_item-img'>
                        <img loading="lazy" src={treat} alt="Treat" />
                    </div>
                    <div className='eden__procedure_container-content_item-caption'>
                        <h2>Treat</h2>
                        <p>Finalize your treatment with the clinic of your choice</p>
                    </div>
                </div>
            </div>
            <div className='eden__procedure_container-footer'>
                <p>Please contact us to start your procedure</p>
                <button type='button' onClick={() => {navigate("/contact"); window.scrollTo( { top: 0, behavior: "smooth"})}}>Contact Us</button>
            </div>
        </div>
    )
}

export default Procedure
