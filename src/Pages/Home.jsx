import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Categary from "../Components/Categary";
import Dail from "../Components/Dail";
import Collect from "../Components/Collect";
import Winter from "../Components/Winter";
import Deal from "../Components/Deal";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Categary />
      <Dail/>
      <Collect />
      <Winter />
      <Deal/>
      <Feature />
      <Footer/>
    </>
  );
};

export default Home;
