import React from 'react'
import './team.css';
import photo from "../../assets/john.webp";
const Team = () => {
    return (
        <div className='team__container section__padding'>
            <div className='team__container_title'>
                <h1>Our Team</h1>
            </div>
            <div className='team__container_top team__container_two_objects'>
                <div className='team__box'>
                    <div className="team__box_right">
                        <div className='team__box_right-titles'>
                            <h5>CEO - Founder</h5>
                            <h3>EFFA, Roland</h3>
                        </div>
                    </div>
                </div>
                <div className='team__box'>
                    <div className="team__box_right">
                        <div className='team__box_right-titles'>
                            <h5>Co Founder, DGA</h5>
                            <h3>RACHELRITA, Dian</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='team__container_mid team__container_two_objects'>
                <div className='team__box'>
                    <div className="team__box_right">
                        <div className='team__box_right-titles'>
                            <h5>Chief Technology Officer</h5>
                            <h3>IDOUDI, Mohamed Aziz</h3>
                        </div>
                    </div>
                </div>
                <div className='team__box'>
                    <div className="team__box_right">
                        <div className='team__box_right-titles'>
                            <h5>Communication & Marketing Manager</h5>
                            <h3>MIRI, Mohamed</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='team__container_buttom'>
                <div className='team__box'>
                    <div className="team__box_right">
                        <div className='team__box_right-titles'>
                            <h5>Chauffeur</h5>
                            <h3>BOULAARES, Fares</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
