import React from "react";
import "./tunisia.css";
import language from "../../assets/language.png";
import currency from "../../assets/money.png";
import timezone from "../../assets/time.png";
import capital from "../../assets/capital.png";
const Tunisia = () => {
  return (
    <div className="tunisia__container section__padding">
      <div className="tunisia__container-left tunisia__container-item">
        <h1>Weather</h1>
        <p>
          Hot-summer Mediterranean climate characterized by hot and dry,
          prolonged summers and mild winters with moderate rainfall.Winter is
          the wettest season of the year, when more than a third of the annual
          rainfall
        </p>
      </div>
      <div className="tunisia__container-right tunisia__container-item">
        <div className="tunisia__container-right_top">
          <div className="tunisia__container-right_item">
            <div className="tunisia__container-right_item-img">
              <img loading="lazy" src={language} alt="Language" />
            </div>
            <div className="tunisia__container-right_item-caption">
              <h3>Language</h3>
              <h4>Arabic, French, English</h4>
            </div>
          </div>
          <div className="tunisia__container-right_item">
            <div className="tunisia__container-right_item-img">
              <img loading="lazy" src={capital} alt="Capital" />
            </div>
            <div className="tunisia__container-right_item-caption">
              <h3>Capital</h3>
              <h4>Tunis</h4>
            </div>
          </div>
        </div>
        <div className="tunisia__container-right_buttom">
          <div className="tunisia__container-right_item">
            <div className="tunisia__container-right_item-img">
              <img loading="lazy" src={timezone} alt="Timezone" />
            </div>
            <div className="tunisia__container-right_item-caption">
              <h3>Timezone</h3>
              <h4>GMT +1</h4>
            </div>
          </div>
          <div className="tunisia__container-right_item">
            <div className="tunisia__container-right_item-img">
              <img loading="lazy" src={currency} alt="Currency" />
            </div>
            <div className="tunisia__container-right_item-caption">
              <h3>Currency</h3>
              <h4>Tunisian Dinar</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tunisia;
