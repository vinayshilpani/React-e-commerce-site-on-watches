import React from "react";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import Ab_Detail from "../Components/Ab_Detail";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <PageBanner title="About" />
      <Ab_Detail/>
      <Footer />
    </>
  );
};

export default About;
