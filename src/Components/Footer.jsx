import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row footer py-3 px-md-5 text-center text-md-start">
          <div className="col-md-4 ps-md-5 py-md-5">
            <img src={logo} alt="" srcset="" className="my-3" />
            <p className="my-md-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              tempora enim quas velit sunt sint adipisci culpa quo molestias
              magnam delectus
            </p>
          </div>
          <div className="col-md-3 offset-md-2 ps-md-5 py-md-5 d-none d-md-block">
            <Link to="/" className="f-btn">
              HOME
            </Link>
            <Link to="/collections" className="f-btn">
              COLLECTIONS
            </Link>
            <Link to="/about" className="f-btn">
              ABOUT
            </Link>
            <Link to="/contact" className="f-btn">
              CONTACT
            </Link>
            <Link to="/aa" className="f-btn">
              LOGIN
            </Link>
          </div>
          <div className="col-md-3 ps-5 py-5 d-none d-md-block">
            <Link to="/" className="f-btn">
              HOME
            </Link>
            <Link to="/collections" className="f-btn">
              COLLECTIONS
            </Link>
            <Link to="/about" className="f-btn">
              ABOUT
            </Link>
            <Link to="/contact" className="f-btn">
              CONTACT
            </Link>
            <Link to="/aa" className="f-btn">
              LOGIN
            </Link>
          </div>
          <div className="d-block d-md-none">
            <p className="text-muted">@2020 Copy Right</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
