import React from "react";
import Companies from "../companies/Companies";
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import "./aboveFold.scss";

const AboveFold = () => {
  return (
    <section className="abovefold">
      <div className="abovefold__header">
        <NavBar />
        <Header />
      </div>
      <Companies />
    </section>
  );
};

export default AboveFold;
