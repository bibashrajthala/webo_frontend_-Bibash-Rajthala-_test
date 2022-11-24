import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import NavTagImg from "../../assets/navtag.png";
import "./navBar.scss";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__heading">AR Shakir</h1>

        <ul className="navbar__items">
          <li className="navbar__item">
            <a href="#product">
              Product{" "}
              <span>
                <img src={NavTagImg} alt="Nav Tag" />
              </span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#template">
              Template{" "}
              <span>
                <img src={NavTagImg} alt="Nav Tag" />
              </span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#blog">Blog</a>
          </li>
          <li className="navbar__item">
            <a href="#pricing">Pricing</a>
          </li>
        </ul>

        <div className="navbar__btns">
          <button className="navbar__btns-signIn">Sign in</button>
          <button className="navbar__btns-start">Start Free</button>
        </div>

        <div className="navbar-mobile">
          {isMenuOpen ? (
            <GiCancel onClick={() => setIsMenuOpen((prev) => !prev)} />
          ) : (
            <GiHamburgerMenu onClick={() => setIsMenuOpen((prev) => !prev)} />
          )}
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="navbar-mobile__items">
          <li className="navbar-mobile__item">
            <a href="#product">
              Product{" "}
              <span>
                <img src={NavTagImg} alt="Nav Tag" />
              </span>
            </a>
          </li>
          <li className="navbar-mobile__item">
            <a href="#template">
              Template{" "}
              <span>
                <img src={NavTagImg} alt="Nav Tag" />
              </span>
            </a>
          </li>
          <li className="navbar-mobile__item">
            <a href="#blog">Blog</a>
          </li>
          <li className="navbar-mobile__item">
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
