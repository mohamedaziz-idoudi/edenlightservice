import React from "react";
import "./stories.css";
import sideImage from "../../assets/bejaoui.jpg";
import { useNavigate } from "react-router-dom";
const Stories = () => {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="eden__stories_container section__padding">
        <div className="eden__stories_container-image">
          <img loading="lazy" src={sideImage} alt="Image" />
        </div>
        <div className="eden__stories_container-content">
          <div className="eden__stories_container-content_decoration"></div>
          <div className="eden__stories_container-container_text">
            <div className="eden__stories-titles">
              <h2>
                See the latest invention of <br /> Dr. Mohamed Bejaoui
              </h2>
            </div>
            <div className="eden__stories-paragraph">
              <p>
                In 2015, he and his team were the first to perform haplo-identical allografts, ie from a non-HLA-identical family donor. In 2018, he was the first with his team to perform the first autograft of
                hematopoietic stem cells in childhood solid tumors...
              </p>
              <button
                type="button"
                onClick={() => {
                  navigate("/partners");
                }}
              >
                Read More..
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="eden__stories_container section__margin eden__stories__margin">
        <div className="eden__stories_container-header">
          <div className="eden__stories_container-header_left eden__stories_container-header_item">
            <h4>OUR VISION</h4>
            <h1>
              Specific goals for your therapy will be determined by you and your
              doctor
            </h1>
            <div className="eden__stories_container-header_left-decoration"></div>
          </div>
          <div className="eden__stories_container-header_right eden__stories_container-header_item">
            <p>
              Eden Light is the guide to regaining your physical, psychological and social health in
              international reference clinics, with experienced doctors, surrounded by a team of
              health professionals who take care of every detail of your stay.
            </p>
          </div>
        </div>
        <div className="eden__stories_container-body">
          <div className="eden__stories_container-body_box">
            <h2>Our Goal</h2>
            <p>
              EDEN Light Services' vision is to assure the comfort and the best
              healthcare services to its patients
            </p>
          </div>
          <div className="eden__stories_container-body_box">
            <h2>Our Counselors</h2>
            <p>
              We are passionate and compassionate professionals, driven by the
              mission of helping more people live a better and happier life
              every day.
            </p>
          </div>
          <div className="eden__stories_container-body_box">
            <h2>Our Support</h2>
            <p>
              Our support team is always here to answer any question and resolve
              any problem.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stories;
