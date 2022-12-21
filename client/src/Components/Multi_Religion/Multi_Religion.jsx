import React from 'react'
import './multi_religion.css'
import islam from "../../assets/Tourism/islam.webp";
import jew from "../../assets/Tourism/Jewish.webp";
import christian from "../../assets/Tourism/cathedral.webp";
const Multi_Religion = () => {
    return (
        <div className='eden__religion_container section__padding'>
            <div className='eden__religion_container-header'>
                <h1>A Multi-Religional Country</h1>
                <h3>Tunisia has its respect for all different religions</h3>
            </div>
            <div className='eden__religion_container-content'>
                <div className='eden__religion_container-content_item'>
                    <img loading="lazy" src={islam} alt="Mosque" />
                    <div className='eden__religion_container-content_item-caption'>
                        <h2>Islam</h2>
                        <h4>The main and official religion of Tunisia</h4>
                    </div>
                </div>
                <div className='eden__religion_container-content_item'>
                    <img loading="lazy" src={christian} alt="Cathedral" />
                    <div className='eden__religion_container-content_item-caption'>
                        <h2>Christianity</h2>
                        <h4>One of the most known cathedrals in Tunisia: Saint-Vincent-de-Paul Cathedral</h4>
                    </div>
                </div>
                <div className='eden__religion_container-content_item'>
                    <img loading="lazy" src={jew} alt="Jewish" />
                    <div className='eden__religion_container-content_item-caption'>
                        <h2>Judaism</h2>
                        <h4>Specifically the island of Djerba is known by its Jewish Minority</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Multi_Religion
