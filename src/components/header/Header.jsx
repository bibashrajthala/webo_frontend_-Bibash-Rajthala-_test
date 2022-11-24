import React from "react";
import "./header.scss";

import headerImages from "../../assets";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__text--main">
          Managing freelance
          <br /> payments has never <br />
          been easier
        </h2>

        <p className="header__text">
          Yet bed any for travelling assistance indulgence <br />
          unpleasing. Not thoughts all exercise blessing.{" "}
        </p>

        <div className="header__btns">
          <button className="header__btns-btn1">Get Started</button>
          <div className="header__btns-btn2">
            <div className="header__btns-btn2-polygon">
              <img src={headerImages.headerBtn} alt="headerBtn" />
            </div>
            <span>See How It Works</span>
          </div>
        </div>

        <div className="header__checks">
          <div className="header__check">
            <img src={headerImages.headerCheck} alt="headerCheck" />
            <span>Free Register</span>
          </div>
          <div className="header__check">
            <img src={headerImages.headerCheck} alt="headerCheck" />
            <span>Great Service</span>
          </div>
        </div>
      </div>

      <div className="header__image">
        <img src={headerImages.headerImg} alt="headerImg" />
      </div>

      <div className="header__side header__side--1">
        <img src={headerImages.headerSide1} alt="headerSide1s" />
      </div>
      <div className="header__side header__side--2">
        <img src={headerImages.headerSide2} alt="headerSide2" />
      </div>
      <div className="header__side header__side--3">
        <img src={headerImages.headerSide3} alt="headerSide3" />
      </div>
    </header>
  );
};

export default Header;
