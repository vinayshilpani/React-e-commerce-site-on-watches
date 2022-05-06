import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SignIn from "../Components/SignIn";

const Login = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="container-fluid login">
        <div className="row">
          <SignIn/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
