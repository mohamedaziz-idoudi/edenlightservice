import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { useNavigate, useHistory } from "react-router-dom";
import "./navbar.css";

const Menu = () => {
  return (
    <React.Fragment>
      <div className="eden__navbar-links_container">
        <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <Link to="/">Home</Link>
        </p>
        <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
          <Link to="/services">Services</Link>
        </p>
        <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
          <Link to="/partners">Partners</Link>
        </p>
        <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
          <Link to="/medicaltourism">Medical Tourism</Link>
        </p>
        <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
          <Link to="/about">About us</Link>
        </p>
        <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
          <Link to="/blogs">Blogs</Link>
        </p>
      </div>
    </React.Fragment>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <React.Fragment>
      <div className="eden__navbar">
        <div className="eden__navbar-links_logo">
          <img loading="lazy" src={logo} alt="logo" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: "smooth" }) }} />
        </div>
        <div className="eden__navbar-links">
          <Menu />
        </div>
        <div className="eden__navbar-sign">
          <button type="button" onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: "smooth" }) }}>Contact Us</button>
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
                  <Link to="/" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }} >Home</Link>
                </p>
                <p>
                  <Link to="/services" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    Services
                  </Link>
                </p>
                <p>
                  <Link to="/partners" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>Partners</Link>
                </p>
                <p>
                  <Link to="/medicaltourism" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>Medical Tourism</Link>
                </p>
                <p>
                  <Link to="/about" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>About us</Link>
                </p>
                <p>
                  <Link to="/blogs" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>Blogs</Link>
                </p>
                <div className="eden__navbar-menu_container-links-sign">
                  <button onClick={() => { navigate('/contact'); setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }} >
                    Contact Us
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
