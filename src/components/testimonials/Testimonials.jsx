import React from "react";
import testimonialImages from "../../assets";
import { testimonialsData } from "../../constants/testimonialData";

import "./testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="testimonials__heading">Testimonials </h3>
      <p className="testimonials__text">
        We so opinion friends me message as delight. Whole front do of plate
        heard oh ought. His defective nor convinced residence own.
      </p>
      <div className="testimonials__cards">
        {testimonialsData.map((testimonail) => {
          const { id, writer, text, image } = testimonail;
          return (
            <div className="testimonials__card" key={id}>
              <div className="testimonials__card-texts">
                <p className="testimonials__card-text">{text}</p>
                <p className="testimonials__card-writer">{writer}</p>
              </div>
              <img
                src={image}
                alt="Testimony"
                className="testimonials__card-img"
              />
              <img
                src={testimonialImages.testimonialQuote}
                alt="Quatation"
                className="testimonials__card-quote"
              />
            </div>
          );
        })}
      </div>
      <img
        src={testimonialImages.testimonialSide}
        alt="testimonials side"
        className="testimonials__side"
      />
    </section>
  );
};

export default Testimonials;
