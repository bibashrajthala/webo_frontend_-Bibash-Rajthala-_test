import React from "react";
import faqImages from "../../assets";
import { faqData } from "../../constants/faqData";
import "./faq.scss";

const Faq = () => {
  return (
    <section className="faq">
      <h2 className="faq__heading">
        Fequently <br /> asked questions
      </h2>
      <div className="faq__content">
        <div className="faq__content-cards">
          <div className="faq__content-card1">
            <div className="faq__content-card1-card">
              <p className="faq__content-card-text">
                The expense windows adapted sir. Wrong widen drawn.
              </p>
              <img src={faqImages.faqPlusIcon} alt="FAQ plus icon" />
            </div>
            <div className="faq__extra">
              Offending belonging promotion provision an be oh consulted
              ourselves it. Blessing welcomed ladyship she met humoured sir
              breeding her.
            </div>
          </div>
          {faqData.map((data) => {
            const { id, text } = data;
            return (
              <div className="faq__content-card" key={id}>
                <p className="faq__content-card-text">{text}</p>
                <img src={faqImages.faqPlusIcon} alt="FAQ plus icon" />
              </div>
            );
          })}
        </div>
        <div className="faq__content--card">
          <img src={faqImages.faqCardIcon} alt="Card Icon FAQ" />
          <h4 className="faq__content--card-heading">
            Do you have more questions?
          </h4>
          <p className="faq__content--card-text">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <button className="faq__content--card-btn">
            Shoot a Direct Mail
          </button>
        </div>
      </div>

      <img src={faqImages.faqSide1} alt="FAQ side1" className="faq__side1" />
      <img src={faqImages.faqSide2} alt="FAQ side2" className="faq__side2" />
    </section>
  );
};

export default Faq;
