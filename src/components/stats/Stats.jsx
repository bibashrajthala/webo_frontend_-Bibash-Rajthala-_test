import React from "react";
import { statsData } from "../../constants/statsdata";
import statsImages from "../../assets";

import "./stats.scss";

const Stats = () => {
  return (
    <section className="stats">
      <p className="stats__text">
        We speak with
        <br />
        our powerfull
        <br />
        statistics
      </p>
      <div className="stats__vl" />
      <div className="stats__stats">
        {statsData.map((stat) => {
          const { id, heading, symbol, text } = stat;
          return (
            <div className="stats__stat" key={id}>
              <h4 className="stats__stat-heading">{heading}</h4>
              <div className="stats__stat-texts">
                <img src={symbol} alt="Stat symbol" />
                <span className="stats__stat-text">{text}</span>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src={statsImages.statsSide}
        alt="stat side"
        className="stats__side"
      />
    </section>
  );
};

export default Stats;
