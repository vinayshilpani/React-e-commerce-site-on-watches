import React from "react";
import "./Categary.css";
import { Link } from "react-router-dom";
import catImg1 from "../Assets/cat1.png";
import catImg2 from "../Assets/cat2.png";
import catImg3 from "../Assets/cat3.png";

const Categary = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row categary">
          <h1 className="text-center my-5">Browse Categary </h1>

          <div class="col-md-4 cont ">
            <div class="content">
              <div class="content-overlay"></div>
              <img class="content-image" src={catImg1} />
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">Woman's Watches</h3>
                <p>
                <Link to="/collections"> Show Collections </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 cont ">
            <div class="content">
              <div class="content-overlay"></div>
              <img class="content-image" src={catImg2} />
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">Men's Watches</h3>
                <p>
                <Link to="/collections"> Show Collections </Link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 cont ">
            <div class="content">
              <div class="content-overlay"></div>
              <img class="content-image" src={catImg3} />
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">Dress Watches</h3>
                <p>
                <Link to="/collections"> Show Collections </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categary;
