import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Axios from 'axios';
import { useTranslation } from "react-i18next";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  let [blog, setBlog] = useState({});
  const {t} = useTranslation();
  useEffect(() => {
    Axios.get("https://api.edenlightservice.com/api/getblogs").then((data) => {
      setBlog(data.data[0]);
      console.log(data.data[0]);
    })
  },[])
  return (
    <React.Fragment>
      <div className="actualites">
        <Header />
      </div>
      <div className="eden__latest-blog section__margin">
        <div className="eden__latest-blog_title">
          <h2 className="gradient__text">{blog?.title}</h2>
          <h5>{new Date(blog?.date).toDateString()}</h5>
        </div>
        <div className="eden__latest-blog_content">
          <p dangerouslySetInnerHTML={{ __html:  blog.paragraph?.substring(0, 400) + "..."  }} />
          <div className="form__button">
            <button onClick={() => {
              navigate(`/post/${blog?.id}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>{t('home.latest.button')}</button>
          </div>
        </div>
      </div>
      <div className="eden__mission">
        <Mission />
      </div>
      <div className="eden__latest-esth section__padding">
        <div className="eden__latest-blog_title">
          <h2 className="gradient__text">{t('home.esth.title')}</h2>
        </div>
        <p>{t('home.esth.paragraph')}</p>
          <div className="eden__header_container-doctors">
            <button onClick={() => {
              navigate('/esth');
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>{t('home.esth.button')}</button>
          </div>
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
      
      {/*
      <div className="eden__footer">
        <Footer />
  </div> */}
    </React.Fragment>
  );
};

export default Home;
