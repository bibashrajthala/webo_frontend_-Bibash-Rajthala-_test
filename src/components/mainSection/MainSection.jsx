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
    </main>
  );
};

export default MainSection;
