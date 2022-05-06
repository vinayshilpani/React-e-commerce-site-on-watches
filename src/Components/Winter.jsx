import React from "react";
import "./Winter.css"
import img5 from "../Assets/asset 5.jpg";

const Winter = () => {
  return (
    <>
      <div className="container swiss">
        <div className="row pb-md-5 mb-5">
          <div className="col-md-6 text-center text-md-start order-1 ps-md-5">
            <h1>Winter 2022</h1>
            <p className="text-muted py-3">
              The first association that comes to one's mind with the phrase “a
              good wristwatch” is naturally one made somewhere in Switzerland.
              Do you want to know what makes Swiss watches stand out?
            </p>
            <a href="" className="d-none d-md-block light_Btn"> Learn More </a>
          </div>
          <div className="col-md-6 text-center order-0">
            <img src={img5} alt="" className="img-fluid mb-4 mb-md-0" />
            <a href="" className="d-block d-md-none light_Btn"> Learn More </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winter;
