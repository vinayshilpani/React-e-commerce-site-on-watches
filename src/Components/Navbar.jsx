import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white">
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            className="d-block d-md-none navbar-brand w-25 my-2"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler">
              <i class="fa-solid fa-bars-staggered"></i>{" "}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-md-4 text-center text-md-start">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="navBtn">
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/collections" className="navBtn">
                        COLLECTIONS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="navBtn">
                        ABOUT
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="navBtn">
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <img src={logo} alt="" className="d-none d-md-block m-auto" />
                </div>
                <div className="col-md-4 text-center text-md-end py-3 pt-4 py-md-0">
                  <li className="nav-item">
                    <Link to="/login" className="navBtn">
                    <i class="fa-solid fa-magnifying-glass"></i> SEARCH
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="navBtn">
                      <i class="fa-solid fa-user-large"></i> LOGIN
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
