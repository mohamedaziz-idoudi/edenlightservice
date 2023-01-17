import React, { Component } from "react";

import "./partners.css";
import { Fields, Partners_desc, Success, Hospitals, Contact, Footer } from "../../Components";
import placeholder from "../../assets/doctor_placeholder.webp";


const Partners = () => {
  return (
    <React.Fragment>
      <div className="partners__container section__padding">
        <h1 id="partners_title">Partners</h1>
      </div>
      <div className="partners__hospitals">
        <Hospitals />
      </div>
      <div className="partners__amilcar">
          </div>
          <div className="partners__success" id="success">
            <Success />
          </div>
          <div className="partners__desc">
            <Partners_desc />
          </div>
        </React.Fragment>
        );
};

        export default Partners;
