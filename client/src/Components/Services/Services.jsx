import React from "react";
import "./services.css";
import { Fields, Procedure } from "../../Components";
const Services = () => {
  return (
    <React.Fragment>
      <div className="services__container section__padding">
        <article className="accordio-panel grey">
          <input id="accordion-question1" name="accordion" type="radio" checked />
          <label for="accordion-question1" >
            Pre-Tunisia Services
            <i class="ri-add-line open"></i>
            <i class="ri-subtract-line close"></i>
          </label>
          <div className="accordion-body">
            <ul className="accordion-answer">
              <li>Estimative quotation</li>
              <li>Assistance with procedures and formalities for entering Tunisia</li>
              <li>Accommodation-airport transfer</li>
              <li>Preparation for your arrival (choice of hotel, airline, car, meals, sites to visit)</li>
            </ul>
          </div>
        </article>
        <article className="accordio-panel dgrey">
          <input id="accordion-question2" name="accordion" type="radio" checked />
          <label for="accordion-question2" >
            In-Tunisia Services
            <i class="ri-add-line open"></i>
            <i class="ri-subtract-line close"></i>
          </label>
          <div className="accordion-body">
            <ul className="accordion-answer">
              <li>Reception at the airport and transfer either to the hotel or to the clinic</li>
              <li>Appointment management and planning</li>
              <li>Personalized follow-up of each patient according to the criteria selected by him/herself</li>
              <li>Visit the sites of Tunis</li>
              <li>Excursion to other cities and tourist places (optional)</li>
            </ul>
          </div>
        </article>
        <article className="accordio-panel bgreen">
          <input id="accordion-question3" name="accordion" type="radio" checked />
          <label for="accordion-question3" >
            Post-Tunisia Services
            <i class="ri-add-line open"></i>
            <i class="ri-subtract-line close"></i>
          </label>
          <div className="accordion-body">
            <ul className="accordion-answer">
              <li>Patient follow-up</li>
              <li>Reminder of the deadlines for the next inspection appointments</li>
            </ul>
          </div>
        </article>
      </div>
      <div className="services__procedure">
        <Procedure />
      </div>
    </React.Fragment>
  );
};

export default Services;
