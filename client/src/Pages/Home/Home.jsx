import React from "react";
import {
  News,
  Mission,
  Feedbacks,
  Home_part_med,
  Services,
  Footer,
  Header,
  Stories,
} from "../../Components";
import "./home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="actualites">
        <Header />
      </div>
      <div className="eden__mission">
        <Mission />
      </div>
      <div className="eden__stories">
        <Stories />
      </div>
      <div className="eden__part_med">
        <Home_part_med />
      </div>
      <div className="eden__services" id="services">
        <Services />
      </div>
      <div className="eden__feedbacks">
        <Feedbacks />
      </div>
      {/*
      <div className="eden__footer">
        <Footer />
  </div> */}
    </React.Fragment>
  );
};

export default Home;
