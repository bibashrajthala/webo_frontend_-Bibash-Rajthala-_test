import React from "react";
import "./mainSection.scss";
import mainSectionImages from "../../assets";
import { mainCardData } from "../../constants/mainCardData";

const MainSection = () => {
  return (
    <main className="main">
      <div className="main__header">
        <div className="main__header-left">
          <h3 className="main__header-heading">
            Automated
            <br />
            portfolio tracking
          </h3>
          <p className="main__header-text">
            Yet bed any for travelling assistance indulgence unpleasing.
            <br /> Not thoughts all exercise blessing.
          </p>
        </div>
        <div className="main__header-right main__header-testimonial">
          <div className="main__header-quotation ">
            <img
              src={mainSectionImages.quote1}
              alt="Quotation"
              className="main__header-quote-sign"
            />
            <p className="main__header-quote">
              Wise busy past both park when an ye no. Nay likely her length
              sooner thrown sex lively income. The expense windows adapted sir.
              Wrong widen.
            </p>
            <p className="main__header-quote-person">
              - Mike Taylor, Web Designer
            </p>
          </div>
        </div>
      </div>

      <div className="main__cards">
        {mainCardData.map((cardData) => {
          const { id, color, heading, text } = cardData;
          return (
            <div key={id} className="main__card">
              <span className="main__card-number">{id}</span>
              <img src={color} alt="" className="main__card-color" />
              <h4 className="main__card-heading">{heading}</h4>
              <p className="main__card-text">{text}</p>
            </div>
          );
        })}
      </div>

      <div className="main__content main__content1">
        <div className="main__content-card">
          <img
            src={mainSectionImages.mainContent1}
            alt=""
            className="main__content-img"
          />
          <img
            src={mainSectionImages.mainSide1}
            alt="Main Side Design"
            className="main__content-side1"
          />
        </div>
        <div className="main__content-texts">
          <span className="main__content-head">Why Choose Us</span>
          <h3 className="main__content-heading">
            Track your payments on the go with the best way possible
          </h3>
          <p className="main__content-text">
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.{" "}
          </p>

          <hr className="main__content-line" />

          <div className="main__content-lists">
            <p className="main__content-list">
              <img src={mainSectionImages.mainCheck} alt="CHECK BOX" />
              <span>Get Overview at a glance</span>
            </p>
            <p className="main__content-list">
              <img src={mainSectionImages.mainCheck} alt="CHECK BOX" />
              <span>Deposit funds easily, security</span>
            </p>
            <p className="main__content-list">
              <img src={mainSectionImages.mainCheck} alt="CHECK BOX" />
              <span>Get Live Support</span>
            </p>
          </div>
        </div>
      </div>

      <div className="main__content main__content2">
        <div className="main__content-texts">
          <span className="main__content-head">Why Choose Us</span>
          <h3 className="main__content-heading">
            Save money with proper transaction
          </h3>
          <p className="main__content-text">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>

          <div className="main__header-quotation ">
            <img
              src={mainSectionImages.quote1}
              alt="Quotation"
              className="main__header-quote-sign"
            />
            <p className="main__header-quote">
              Wise busy past both park when an ye no. Nay likely her length
              sooner thrown sex lively income. The expense windows.
            </p>
            <p className="main__header-quote-person">
              - Mike Taylor, Web Designer
            </p>
          </div>
        </div>
        <div className="main__content-card">
          <img
            src={mainSectionImages.mainContent2}
            alt=""
            className="main__content-img"
          />
          {/* <img
            src={mainSectionImages.mainSide2}
            alt="Main Side Design"
            className="main__content-side2"
          /> */}
        </div>
      </div>
    </main>
  );
};

export default MainSection;
