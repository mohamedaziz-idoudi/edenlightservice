import React from 'react'
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import './hospitals.css';
import hospital1 from "../../assets/Partners/hospital1.webp";
import hospital2 from "../../assets/Partners/hospital2.webp";
import hospital3 from "../../assets/Partners/hospital3.webp";
import hospital4 from "../../assets/Partners/hospital4.webp";



const Hospitals = () => {
    return (
        <React.Fragment>
            <div className='hospitals__container'>
                <div className='hospitals__header'>
                    <h1>Our Clinics And Medical Centers</h1>
                </div>
                <div className='hospitals__sliders'>
                    <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselItem
                            className="w-100 d-block caption"
                            itemId={1}
                            src={hospital1}
                            alt="..."
                        >
                        </MDBCarouselItem>
                        <MDBCarouselItem
                            className="w-100 d-block caption"
                            itemId={2}
                            src={hospital2}
                            alt="..."
                        >
                        </MDBCarouselItem>
                        <MDBCarouselItem
                            className="w-100 d-block"
                            itemId={3}
                            src={hospital3}
                            alt="..."
                        >
                        </MDBCarouselItem>
                    </MDBCarousel>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hospitals
