import React from "react";
import "./companies.scss";

import { companies } from "../../constants/companyData";

const Companies = () => {
  return (
    <section className="companies">
      <p className="companies__header">
        Over 32k+ software businesses growing with AR Shakir.
      </p>

      <div className="companies__logos">
        {companies &&
          companies?.map((company) => {
            const { id, image } = company;
            return (
              <div key={id} className="companies__logo-container">
                <img
                  className="companies__logo"
                  src={image}
                  alt="COMPANY__LOGO"
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Companies;
