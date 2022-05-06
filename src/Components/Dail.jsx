import React from "react";
import './Dail.css'
import dail1 from "../Assets/dail-1.png";
import dail2 from "../Assets/dail-2.png";
import dail3 from "../Assets/dail-3.png";
import dail4 from "../Assets/dail-4.png";
import dail5 from "../Assets/dail-5.png";
import dail6 from "../Assets/dail-6.png";

const Dail = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1> Chosse a Dail </h1>
          </div>
        </div>
        <div className="row my-4 pt-md-4 text-center dail">
          <div className="col-md-4 col-lg-2 d-none d-md-block">
            <img src={dail1} alt=""/>
          </div>
          <div className="col-md-4 col-lg-2">
            <img src={dail2} alt=""/>
          </div>
          <div className="col-md-4 col-lg-2 d-none d-md-block">
            <img src={dail3} alt=""/>
          </div>
          <div className="col-md-4 col-lg-2">
            <img src={dail4} alt=""/>
          </div>
          <div className="col-md-4 col-lg-2">
            <img src={dail5} alt=""/>
          </div>
          <div className="col-md-4 col-lg-2">
            <img src={dail6} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dail;
