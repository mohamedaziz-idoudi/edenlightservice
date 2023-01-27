import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { useNavigate, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./navbar.css";



const Navbar = () => {
  const {t,i18n} = useTranslation();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(()=> {
    for (let index = 0; index < document.getElementsByClassName("eden__lang").length; index++) {
      const element = document.getElementsByClassName("eden__lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  })
  const Menu = () => {
    return (
      <React.Fragment>
        <div className="eden__navbar-links_container">
          <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <Link to="/">{t('navbar.home')}</Link>
          </p>
          <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <Link to="/services">{t('navbar.services')}</Link>
          </p>
          <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <Link to="/packs">{t('navbar.packs')}</Link>
          </p>
          <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <Link to="/esth">{t('navbar.esth')}</Link>
          </p>
          <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <Link to="/partners">{t('navbar.partners')}</Link>
          </p>
          <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <Link to="/medicaltourism">{t('navbar.medtour')}</Link>
          </p>
          <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <Link to="/about">{t('navbar.about')}</Link>
          </p>
          <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <Link to="/blogs">Blogs</Link>
          </p>
        </div>
      </React.Fragment>
    );
  };
  const OnChangeLanguage = (e)=> {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <React.Fragment>
      <div className="eden__navbar">
        <div className="eden__navbar-links_logo">
          <img loading="lazy" src={logo} alt="logo" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: "smooth" }) }} />
          <div className="">
            <select class="form-select" aria-label="Default select example" onChange={OnChangeLanguage}>
              <option selected value="en" className="eden__lang">English</option>
              <option value="fr" className="eden__lang">Français</option>
            </select>
          </div>
        </div>
        <div className="eden__navbar-links">
          <Menu />
        </div>
        <div className="eden__navbar-sign">
          <button type="button" onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.contact')}</button>

        </div>
        <div className="eden__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="eden__navbar-menu_container scale-up-center">
              <div className="eden__navbar-menu_container-links">
                <p>
                  <Link to="/" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }} >{t('navbar.home')}</Link>
                </p>
                <p>
                  <Link to="/services" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {t('navbar.services')}
                  </Link>
                </p>
                <p>
                  <Link to="/packs" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.packs')}</Link>
                </p>
                <p>
                  <Link to="/esth" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.esth')}</Link>
                </p>
                <p>
                  <Link to="/partners" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.partners')}</Link>
                </p>
                <p>
                  <Link to="/medicaltourism" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.medtour')}</Link>
                </p>
                <p>
                  <Link to="/about" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.about')}</Link>
                </p>
                <p>
                  <Link to="/blogs" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>Blogs</Link>
                </p>
                <div className="eden__navbar-menu_container-links-sign">
                  <button onClick={() => { navigate('/contact'); setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }} >
                    {t('navbar.contact')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
