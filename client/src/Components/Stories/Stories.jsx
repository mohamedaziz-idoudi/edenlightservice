import React from "react";
import "./stories.css";
import sideImage from "../../assets/bejaoui.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Stories = () => {
  let navigate = useNavigate();
  const { t } = useTranslation()
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
              <h2 dangerouslySetInnerHTML={{ __html: t('home.stories.title') }} />

            </div>
            <div className="eden__stories-paragraph">
              <p>
                {t('home.stories.paragraph')}
              </p>
              <button
                type="button"
                onClick={() => {
                  navigate("/partners");
                }}
              >
                {t('home.stories.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="eden__stories_container section__margin eden__stories__margin">
        <div className="eden__stories_container-header">
          <div className="eden__stories_container-header_left eden__stories_container-header_item">
            <h4>{t('home.vision.caption')}</h4>
            <h1>
              {t('home.vision.title')}
            </h1>
            <div className="eden__stories_container-header_left-decoration"></div>
          </div>
          <div className="eden__stories_container-header_right eden__stories_container-header_item">
            <p>
              {t('home.vision.paragraph')}
            </p>
          </div>
        </div>
        <div className="eden__stories_container-body">
          <div className="eden__stories_container-body_box">
            <h2>{t('home.vision.goal_title')}</h2>
            <p>
              {t('home.vision.goal_content')}
            </p>
          </div>
          <div className="eden__stories_container-body_box">
            <h2>{t('home.vision.couns_title')}</h2>
            <p>
              {t('home.vision.couns_content')}
            </p>
          </div>
          <div className="eden__stories_container-body_box">
            <h2>{t('home.vision.support_title')}</h2>
            <p>
              {t('home.vision.support_content')}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stories;
