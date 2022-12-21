import React from "react";
import "./fields.css";
import neurology from "../../assets/brain.png";
import dental from "../../assets/tooth.png";
import cardio from "../../assets/cardiogram.png";
import emergencies from "../../assets/first-aid-kit.png";
import cosmetic from "../../assets/cosmetic-surgery.png";
import eye from "../../assets/eye.png";
import {Footer} from '../../Components'
const Fields = () => {
  return (
    <React.Fragment>
    <div className="eden__fields-container">
      <div className="eden__fields-titles">
        <h2>Our Medical Services</h2>
        <p>Sample text. Lorem ipsum dolor sit amet,
           consectetur<br /> adipiscing elit nullam nunc
            justo sagittis suscipit ultrices.</p>
      </div>
      <div className="eden__fields-items">
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={neurology} alt="Brain" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>Neurology</p>
          </div>
        </div>
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={dental} alt="tooth" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>Dental Care</p>
          </div>
        </div>
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={cardio} alt="Cardio" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>Heart Care</p>
          </div>
        </div>
      </div>
      <div className="eden__fields-items">
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={emergencies} alt="Emergencies" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>Emergencies</p>
          </div>
        </div>
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={cosmetic} alt="Cosmetics" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>Cosmetics</p>
          </div>
        </div>
        <div className="eden__fields-container_item">
          <div className="eden__fields-container_item-img">
            <img loading="lazy" src={eye} alt="Eye" />
          </div>
          <div className="eden__fields-container_item-caption">
            <p>Eye Care</p>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Fields;
