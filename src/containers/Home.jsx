import React from "react";
import AboveFold from "../components/aboveFold/AboveFold";
import Features from "../components/features/Features";
import MainSection from "../components/mainSection/MainSection";
import Stats from "../components/stats/Stats";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <AboveFold />
      <MainSection />
      <Features />
      <Testimonials />
      <Stats />
    </div>
  );
};

export default Home;
