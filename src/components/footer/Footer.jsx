import React from "react";
import "./footer.scss";
import footerImages from "../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__socials">
          <h5 className="footer__heading">AR Shakir</h5>
          <p className="footer__text">
            Finance helps companies <br />
            manage payments easily.
          </p>
          <div className="footer__socials-icons">
            {[
              footerImages.footerLinkedIn,
              footerImages.footerMessenger,
              footerImages.footerTwitter,
              footerImages.footerTwoo,
            ].map((icon, index) => (
              <img
                key={index}
                src={icon}
                className="footer__socials-icon"
                alt="Footer icon"
              />
            ))}
          </div>
        </div>
        <div className="footer__company">
          <h5 className="footer__heading">Company</h5>
          <div className="footer__company-links">
            {["About Us", "Careers", "Blog", "Pricing"].map((link, index) => (
              <span key={index} className="footer__link">
                {link}
              </span>
            ))}
          </div>
        </div>
        <div className="footer__resources">
          <h5 className="footer__heading">Resources</h5>
          <div className="footer__resources-links">
            {[
              "Proposal Template",
              "Invoice Templateeers",
              "Tuturoial",
              "How to write a contract",
            ].map((link, index) => (
              <span key={index} className="footer__link">
                {link}
              </span>
            ))}
          </div>
        </div>
        <div className="footer__newsletter">
          <h5 className="footer__heading">Join Our Newsletter</h5>
          <form className="footer__form">
            <input
              className="footer__form-input"
              type="text"
              placeholder="Your email address"
            />
            <button className="footer__form-btn">Subscribe</button>
          </form>
          <p className="footer__text">
            * Will send you weekly updates for your better
            <br /> finance management.
          </p>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright @ AR Shakir 2022. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
