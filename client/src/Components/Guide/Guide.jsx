import React from "react";
import "./guide.css";
import guide from "../../assets/guide.webp";
const Guide = () => {
  return (
    <React.Fragment>
      <div className="eden__guide_container section__padding">
        <div className="guide__header">
          <h3>Tunisian sights: </h3>
          <p>Enjoy the virtual visit</p>
        </div>
        <div className="guide__container">
          <div className="guide__container-image">
            <img loading="lazy" src={guide} alt="Tunisia" />
          </div>
          <div className="guide__container-caption">
            <h1>Guide for best travel</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Guide;
