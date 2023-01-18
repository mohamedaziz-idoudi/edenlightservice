import React from 'react'
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import './hospitals.css';
import hospital1 from "../../assets/Partners/mov2.jpg";
import hospital2 from "../../assets/Partners/mov1.jpg";
import hospital3 from "../../assets/Partners/novotel.jpg";
const Hospitals = () => {
    return (
        <React.Fragment>
            <div className='hospitals__container'>
                <div className='hospitals__header'>
                    <h1>Check out our hotels</h1>
                </div>
                <div className='hospitals__sliders'>
                    <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselItem
                            className="d-block caption"
                            itemId={1}
                            src={hospital1}
                            alt="..."
                        >
                        </MDBCarouselItem>
                        <MDBCarouselItem
                            className="w-100 d-block caption"
                            itemId={2}
                            width="600"
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
