import React from 'react'
import './sightsone.css';
import djerba1 from "../../assets/Tourism/djerba1.webp";
import djerba2 from "../../assets/Tourism/djerba2.webp";
import djerba3 from "../../assets/Tourism/djerba3.webp";
const Sights_one = () => {
    return (
        <div className='eden__sights_container'>
            <div className='eden__sights_container-header'>
                <div className='eden__sights_container-header_caption'>
                    <h1>Djerba</h1>
                    <h3>Island Of Dreams</h3>
                    <p>6h-7h drive from Tunis</p>
                </div>
            </div>
            <div className='eden__sights_container-body section__padding'>
                <div className='eden__sights_container-body_header'>
                    <h1>Beach Tour at Djerba</h1>
                </div>
                <div className='eden__sights_container-body_images'>
                    <img loading="lazy" src={djerba1} alt="Djerba" />
                    <img loading="lazy" src={djerba3} alt="Djerba" />
                </div>
                <div className='eden__sights_container-body_description'>
                    <p>Djerba is the largest island in North Africa off the coast of Tunisia.
                        It is known for its long and unique history of its Jewish minority.</p>
                </div>
            </div>
        </div>

    )
}

export default Sights_one
