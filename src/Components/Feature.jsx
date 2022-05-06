import React from "react";
import './Feature.css'
import fetImg from "../Assets/feature.png";

const Feature = () => {
  return (
    <>
      <div className="container mb-5 feature">
        <div className="row">
          <div className="col-md-4 ps-md-5">
            <div className="pt-5">
              <p>01.</p>
              <h4>Sapphire Crystal</h4>
              <p>
                Known for obtaining a remarkable hardness (nearly as hard as a
                diamond). Has a high scratch resistance which makes it a perfect
                material for wristwatches.
              </p>
            </div>
            <div className="pt-5">
              <p>02.</p>
              <h4>Sapphire Crystal</h4>
              <p>
                Known for obtaining a remarkable hardness (nearly as hard as a
                diamond). Has a high scratch resistance which makes it a perfect
                material for wristwatches.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center mt-md-5">
            <img src={fetImg} alt="" className="img-fluid w-75 w-md-100" />
          </div>
          <div className="col-md-4">
          <div className="pt-5">
              <p>03.</p>
              <h4>Sapphire Crystal</h4>
              <p>
                Known for obtaining a remarkable hardness (nearly as hard as a
                diamond). Has a high scratch resistance which makes it a perfect
                material for wristwatches.
              </p>
            </div>
            <div className="pt-5">
              <p>04.</p>
              <h4>Sapphire Crystal</h4>
              <p>
                Known for obtaining a remarkable hardness (nearly as hard as a
                diamond). Has a high scratch resistance which makes it a perfect
                material for wristwatches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
