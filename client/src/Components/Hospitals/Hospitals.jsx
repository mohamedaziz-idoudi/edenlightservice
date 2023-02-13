import React from 'react'
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import {useTranslation} from 'react-i18next'
import './hospitals.css';
import hospital1 from "../../assets/Partners/four seasons.jpg";
import hospital2 from "../../assets/Partners/mov1.jpg";
import hospital3 from "../../assets/Partners/novotel.jpg";
import hospital4 from '../../assets/Partners/fourseasons.jpg'
import hospital5 from '../../assets/Partners/fs.jpg'
import hospital6 from '../../assets/Partners/ffss.jpg'
import gal from '../../assets/Partners/decor.webp'
import gal1 from '../../assets/Partners/dec.webp'
import video1 from '../../assets/Partners/amilcar.mp4'

const Hospitals = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <div className='hospitals__container'>
                <div className='hospitals__header'>
                    <h1>{t('partners.hos.title')}</h1>
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
                            width="600"
                            src={hospital4}
                            alt="..."
                        >
                        </MDBCarouselItem>
                        <MDBCarouselItem
                            className="w-100 d-block"
                            itemId={3}
                            src={hospital5}
                            alt="..."
                        >
                        </MDBCarouselItem>
                        <MDBCarouselItem
                            className="w-100 d-block"
                            itemId={3}
                            src={hospital6}
                            alt="..."
                        >
                        </MDBCarouselItem>
                        <MDBCarouselItem
                            className="w-100 d-block"
                            itemId={3}
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
                <div className="eden__home-gallery">
                    <div className="eden__home-gallery_element">
                        <div className="eden__home-gallery_element-images">
                            <div className="eden__home-gallery_top">
                                <img src={gal} alt="PlaceHolder" />
                                <img src={gal1} alt="PlaceHolder" />
                            </div>
                            <iframe src="https://www.youtube.com/embed/xVyl_6MumRE" title="EDEN Light Service: Notre partenaire 'La Clinique Méditerranéenne'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe src="https://www.youtube.com/embed/4rEG9NXauQ0" title="La chirurgie de l'obésité  avec  Dr. Mohamed Amine Makni  ( Chirurgien Viscéral et Digestif) ." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                    </div>
                    <div className="eden__home-gallery_element-title gradient__text">
                        <h2>{t('partners.hos.gal')}</h2>
                    </div>
                    <div className="eden__home-gallery_paragraph">
                        <p>{t('partners.hos.parag')}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hospitals
