import React from "react";
//import MapContainer from "./MapContainer";


const Address = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
          {/* <MapContainer/>   */}
          <h1> MAP</h1>
          </div>
          <div className="col-md-6 px-md-5">
            <h2>How To Find Us</h2>
            <p>
              Get in touch to discuss your employee wellbeing needs today.
              Please give us a call, drop us an email or fill out the contact
              form and we’ll get back to you.
            </p>
            <p>
              <b>Mobile</b> <br /> +011 54548547{" "}
            </p>
            <p>
              <b>Address</b> <br /> PLOT NO -6 ,SHOP NO-227,SECOND FLOOR VEGAS
              MALL, Sector 14 Dwarka, Dwarka, Delhi, 110078{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
