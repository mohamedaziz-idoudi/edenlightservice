import React from 'react'
import './team.css';
import { useTranslation } from 'react-i18next';
import photo from "../../assets/john.webp";
const Team = () => {
    const {t}= useTranslation()
    return (
        <div className='team__container section__padding'>
            <div className='team__container_title'>
                <h1>{t('about.team')}</h1>
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
                            <h3>BASSEGA, Diane Rachel</h3>
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
                            <h5>Graphic Design Manager</h5>
                            <h3>MIRI, Mohamed</h3>
                        </div>
                    </div>
                </div>
                <div className='team__box'>
                    <div className="team__box_right">
                        <div className='team__box_right-titles'>
                            <h5>Communication & Marketing Manager</h5>
                            <h3>HAMMOUDA, Wael</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
