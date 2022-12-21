import React from "react";
import "./medicaltour.css";
import { SidiBou ,Tunisia, Guide, Sights_one, Kairouan, Multi_Religion, Capital, Tataouine, Bizerte } from "../../Components";
import modern from "../../assets/modern.webp";
import unique from "../../assets/unique.webp";
import culture from "../../assets/culture.webp";
const MedicalTour = () => {
  return (
    <React.Fragment>
      <div className="eden__med_header">
        <div className="eden__med_header-title">
          <h1>Medical Tourism</h1>
          <h3>Enjoy the Tour</h3>
        </div>
      </div>
      <div className="eden__guide">
        <Guide />
      </div>
      <div className="eden__capital">
        <Capital />
      </div>
      <div className="eden__sidi_bou">
        <SidiBou />
      </div>
      <div className="eden__sights_one">
        <Sights_one />
      </div>
      <div className="eden__bizerte">
        <Bizerte />
      </div>
      <div className="eden__tataouine">
        <Tataouine />
      </div>
      <div className="eden__kairouan">
        <Kairouan />
      </div>
      <div className="eden__multi_religion">
        <Multi_Religion />
      </div>
      <div className="eden__tunisia">
        <Tunisia />
      </div>

    </React.Fragment>
  );
};

export default MedicalTour;
