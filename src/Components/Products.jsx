import React from "react";
import Card from "../Components/Card";
import Wdata from "../Components/WatchData";
import { Link } from "react-router-dom";




const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row my-md-4 py-md-5">
          <div className="col-md-6 text-center text-md-start ps-md-5">
            <h6>SORT WATCHES BY</h6>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <button className="btn btn-light m-2"> Men </button>
            <button className="btn btn-light m-2"> Woman </button>
            <button className="btn btn-light m-2"> Low - High </button>
            <button className="btn btn-light m-2"> High - Low </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center my-5">
        {Wdata.map((product) => {
            return (
              <>
                <Link to={"/collection/"+product.id+"/"+product.title+"/"+product.price} className='linkBlack' style={{ width: "20rem",margin:"auto" }}>
                <Card imgsrc={product.imgsrc} title={product.title} price={product.price} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
