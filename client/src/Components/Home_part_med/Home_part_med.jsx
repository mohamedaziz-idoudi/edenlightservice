import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Home_part_med = () => {
    let navigate = useNavigate();
  return (
    <div className="container section__padding">
      <div className="container__box-partners container-box">
        <div className="partners-text">
          <h3>Partners</h3>
          <p>
            EDEN Light Services with the collaboration of multiple partners covers all medical needs.
          </p>
        </div>
        <div className="partners-button">
            <button type="button" onClick={() => { navigate("/partners"); window.scrollTo({top: 0, behavior: "smooth"})}}>Read More..</button>
        </div>
      </div>
      <div className="container__box-med container-box">
        <div className="med-text">
          <h3>Medical Tourism</h3>
          <p>
            Learn more about Tunisia's weather, language, sights and more..
          </p>
        </div>
        <div className="med-button">
            <button type="button" onClick={() => { navigate("/medicaltourism"); window.scrollTo({top: 0, behavior: "smooth"})}}>Read More..</button>
        </div>
      </div>
    </div>
  );
};

export default Home_part_med;
