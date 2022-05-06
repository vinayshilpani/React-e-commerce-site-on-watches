import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-3 mb-md-0 pb-3 text-center product ">
        <div className="card" style={{ width: "18rem" }}>
          <div>
            <img
              src={props.imgsrc}
              alt=""
              srcset=""
              className="card-img-top m-auto"
            />
          </div>
          <div className="card-body">
            <h6> {props.title} </h6>
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="card-text text-muted"> {props.price} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
