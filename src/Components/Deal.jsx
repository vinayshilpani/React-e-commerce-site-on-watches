import React from "react";
import './Deal.css'
import Deal_watch from "../Assets/deal-watch.png";

const Deal = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row deal">
          <div className="col-md-6 text-center py-2 m-4 m-md-0 ps-md-5">
              <h2>DEAL OF THE DAY</h2>
              <p> Bering Rose Gold Steel Mesh </p>
              <p> $100.00 - $350.00 </p>
              <a href="" className="light_Btn"> VIEW DETAILS </a>
          </div>
          <div className="col-md-6 py-5 text-center">
            <img src={Deal_watch} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Deal;
