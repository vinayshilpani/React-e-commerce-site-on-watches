import React from "react";
import "./Ab_Detail.css";
import img1 from "../Assets/about1.png";
import { Link } from "react-router-dom";

const Ab_Detail = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row ab_detail">
          <div className="col-md-6 p-4 p-md-5">
            <h2 className="my-md-3">INDIA'S PREMIER STORE FOR WRIST WATCHES</h2>
            <p className="my-5 text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              eaque, modi delectus architecto doloremque maiores adipisci alias
              eos ea quas velit eligendi ipsa enim unde minus obcaecati pariatur
              ducimus exercitationem.
            </p>
            <Link to="/collections" className="my-3 light_Btn">
              SHOP NOW
            </Link>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <img src={img1} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ab_Detail;
