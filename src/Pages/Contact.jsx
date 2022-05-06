import React from "react";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import Form from '../Components/Form'
import Footer from "../Components/Footer";
import Address from "../Components/Address";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageBanner title="Contact" />
      <Address/>
      <Form/>
      <Footer />
    </>
  );
};

export default Contact;
