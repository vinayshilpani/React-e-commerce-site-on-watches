import React from "react";

const Form = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-center"> Send a Message </h2>
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control my-3" placeholder="Enter Your Name" />
            <input type="email" className="form-control my-3" placeholder="Enter Your Email"/>
          </div>
          <div className="col-md-6">
            <input type="tel" className="form-control my-3" placeholder="Enter Your mobile"/>
            <input type="text" className="form-control my-3" placeholder="Enter Your Details"/>
          </div>
          <div className="col">
              <input type="text" placeholder="Enter Your Message" className="form-control my-3 py-5" />
          </div>
          <div className="col-12 text-center">
              <button className="mb-2 light_Btn" type="subite"> Submit </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
