import React from "react";
import './Carousel.css'
import img1 from "../Assets/asset 1.png";
import img2 from "../Assets/asset 3.png";
import img3 from "../Assets/asset 2.png";

const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
      data-bs-touch="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <h1>Worlds</h1>
          <img src={img1} alt="" />
          <h1> Design </h1>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <h1>Luxury</h1>
          <img src={img2} alt="" />
          <h1> Brands </h1>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <h1>Newset</h1>
          <img src={img3} alt="" />
          <h1> Models </h1>
        </div>        
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span> Prev </span>
        <span class="carousel-control-prev-icon" aria-hidden="true"> </span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Carousel;
