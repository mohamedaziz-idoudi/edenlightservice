import React from 'react'
import "./about_desc.css";
import logo from "../../assets/logo.png";
const About_Desc = () => {
    return (
        <div className='eden__about_desc_container section__padding'>
            <div className='eden__about_desc_container-left'>
                <img loading="lazy" src={logo} alt="LOGO" />
            </div>
            <div className='eden__about_desc_container-right'>
                <div className='eden__about_desc_container-right_titles'>
                    <h1>Learn more about what we do</h1>
                    <h3>Our Job</h3>
                    <div className='eden__about_desc_container-right_titles-decoration'></div>
                </div>
                <div className='eden__about_desc_container-right_content'>
                    <p>Because health is life, and life is first and foremost time.Time that we
                        would like to use to attend to our conveniences We proceed a particular and enhanced accent
                        on everything related to your stay so that it becomes unforgettable Eden Light accompanies you
                        for a quality, exceptional and personalized stay because health is life, and life is first and foremost time. Time that we
                        would like to use to attend to our conveniences We proceed a particular and enhanced accent
                        on everything related to your stay so that it becomes unforgettable Eden Light accompanies you
                        for a quality, exceptional and personalized stay</p>
                </div>
            </div>

        </div>
    )
}

export default About_Desc
