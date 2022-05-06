import React from "react";
import "./MiniBanner.css";

const MiniBanner = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-md-5 py-3">
            <div className="b_img1 p-5">
              <p> 20% Off on</p>
              <h5 className="mb-4"> Premium Watchs </h5>
              <a href="" className="Dark_Btn"> SHOP NOW </a>
            </div>
          </div>
          <div className="col-md-6 p-md-5 py-3">
            <div className="b_img2 p-5">
              <p> 25% Off on</p>
              <h5 className="mb-4"> Stylish Watchs </h5>
              <a href="" className="Dark_Btn"> SHOP NOW </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniBanner;
