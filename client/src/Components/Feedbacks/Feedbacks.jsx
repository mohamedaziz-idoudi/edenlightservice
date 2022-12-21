import React from "react";
import "./feedbacks.css";
import quote from "../../assets/quote.png";
import john from "../../assets/john.webp";

const Feedbacks = () => {
  return (
    <div className="feedbacks__container section__margin">
      <div className="feedbacks__container-header">
        <h1>Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <div className="feedbacks__container-boxes">
        <div className="feedbacks__container-boxes_item">
          <div className="feedbacks__container-boxes_item-header">
            <div className="feedbacks__name">
              <div className="feedbacks__image">
                <img loading="lazy" src={quote} alt="Quote" />
              </div>
              <h4>John Doe</h4>
            </div>
          </div>
          <div className="feedbacks__container-boxes_item-content">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </p>
          </div>
        </div>
        <div className="feedbacks__container-boxes_item">
          <div className="feedbacks__container-boxes_item-header">
            <div className="feedbacks__name">
              <div className="feedbacks__image">
                <img loading="lazy" src={quote} alt="Quote" />
              </div>
              <h4>John Doe</h4>
            </div>
          </div>
          <div className="feedbacks__container-boxes_item-content">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
