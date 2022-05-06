import React from "react";
import plate from '../Assets/plate.svg'
import './Page404.css'


const Page404 = () => {
  return (
    <div className="page404">
      <img src={plate} alt="" />

      <div className="text">
        <h1>Oops....</h1>
        <p>The page you are looking for doesn't exists</p>
      </div>
      <a href="/"> Back to page </a>
    </div>
  );
};

export default Page404;
