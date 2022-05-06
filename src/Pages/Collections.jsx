import React from "react";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import MiniBanner from "../Components/MiniBanner";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

const Collections = () => {
  return (
    <>
      <Navbar />
      <PageBanner title="Collections" />
      <MiniBanner />
      <Products />
      <div className="text-center my-5">
        <a href="" className="light_Btn"> Load More </a>
      </div>
      <Footer />
    </>
  );
};

export default Collections;
