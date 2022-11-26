import React from "react";
import "./cta.scss";
import ctaImages from "../../assets";

const Cta = () => {
  return (
    <section className="cta">
      <h2 className="cta__heading">
        Discover a better way to <br /> manage spending
      </h2>
      <button className="cta__btn">Get Started Now</button>
      <img src={ctaImages.ctaSide1} alt="CTA side 1" className="cta__side1" />
      <img src={ctaImages.ctaSide2} alt="CTA side 2" className="cta__side2" />
      <img src={ctaImages.ctaSide3} alt="CTA side 3" className="cta__side3" />
      <img src={ctaImages.ctaSide4} alt="CTA side 4" className="cta__side4" />
      <img src={ctaImages.ctaSide5} alt="CTA side 5" className="cta__side5" />
    </section>
  );
};

export default Cta;
