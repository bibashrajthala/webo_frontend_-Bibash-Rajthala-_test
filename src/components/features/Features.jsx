import React from "react";
import featuresImages from "../../assets";

import "./features.scss";

const Features = () => {
  return (
    <section className="features">
      <h3 className="features__heading">Features that blows mind</h3>
      <p className="features__text">
        {" "}
        We so opinion friends me message as delight. Whole front do of plate
        heard oh ought. His defective nor convinced residence own.
      </p>
      <div className="features__cards">
        <div className="features__card">
          <img src={featuresImages.featuresCard1} alt="Card 1" />
          <h4 className="features__card-heading">
            Really boy law county she unable her sister
          </h4>
          <p className="features__card-text">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </p>
        </div>
        <div className="features__card">
          <img src={featuresImages.featuresCard2} alt="Card 2" />
          <h4 className="features__card-heading">
            Among sex are leave law built now
          </h4>
          <p className="features__card-text">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </p>
        </div>
        <div className="features__smCards">
          <div className="features__smCard">
            <h4 className="features__card-heading">
              Merits behind on afraid or warmly
            </h4>
          </div>
          <div className="features__smCard">
            <h4 className="features__card-heading">
              Believing neglected so so allowance existence
            </h4>
          </div>
        </div>
      </div>
      <img
        src={featuresImages.featuresSide1}
        alt="Feature side"
        className="features__side"
      />
    </section>
  );
};

export default Features;
