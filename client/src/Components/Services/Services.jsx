import React from "react";
import "./services.css";
import { Fields, Procedure } from "../../Components";
import { useTranslation } from "react-i18next";
const Services = () => {
  const {t} = useTranslation();
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
              <li>{t('home.services.pre_tunisia.list_1')}</li>
              <li>{t('home.services.pre_tunisia.list_2')}</li>
              <li>{t('home.services.pre_tunisia.list_3')}</li>
              <li>{t('home.services.pre_tunisia.list_4')}</li>
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
              <li>{t('home.services.in_tunisia.list_1')}</li>
              <li>{t('home.services.in_tunisia.list_2')}</li>
              <li>{t('home.services.in_tunisia.list_3')}</li>
              <li>{t('home.services.in_tunisia.list_4')}</li>
              <li>{t('home.services.in_tunisia.list_5')}</li>
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
              <li>{t('home.services.post_tunisia.list_1')}</li>
              <li>{t('home.services.post_tunisia.list_2')}</li>
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
