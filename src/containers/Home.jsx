import React from "react";
import AboveFold from "../components/aboveFold/AboveFold";
import Blogs from "../components/blogs/Blogs";
import Cta from "../components/cta/Cta";
import Faq from "../components/faq/Faq";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
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
      <Blogs />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
