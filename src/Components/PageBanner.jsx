import React from "react";
import { Link } from "react-router-dom";
import "./PageBanner.css"

const PageBanner = (props) => {
  return (
    <>
      <div className="container-fluid PageBanner text-center">
        <div className="row">
          <div className="col-12 py-5">
              <h1 className="text-white my-5"> {props.title} </h1>
              <p className="my-5"> <Link to="/">Home</Link> / {props.title} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
