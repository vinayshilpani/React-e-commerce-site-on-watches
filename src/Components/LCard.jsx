import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import product1 from "../Assets/product1.png";
import Deal from "./Deal";
import Card from "./Card";
import Wdata from "./WatchData";
import Footer from "./Footer";
import { useState } from "react";
import "./LCard.css";

const LCard = () => {
  const params = useParams();
  const [count, setCount] = useState(1);
  function con() {
    if (count <= 0) {
      return count;
    } else {
      return count - 1;
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row pb-5 pb-md-2 d-flex align-items-center">
          <div className="col-md-1 s-img order-1 order-md-0 text-center">
            <img src={product1} alt="" style={{ width: "100px" }} />
            <img src={product1} alt="" style={{ width: "100px" }} />
            <img src={product1} alt="" style={{ width: "100px" }} />
          </div>
          <div className="col-md-6 order-0 order-md-1">
            <img src={product1} alt="" className="h-100 img-fluid" />
          </div>
          <div className="col-md-5 py-md-5 order-2">
            <h2 className="pt-md-5 mt-3"> {params.title} </h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit,
              at voluptatibus optio odit accusantium est distinctio. Dolorum
              officiis sed accusantium nemo et mollitia, est dolor quidem,
              optio, modi obcaecati.
            </p>
            <h2 className="mt-3"> {params.price} </h2>
            <div>
              <div
                className="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div className="btn" role="group" aria-label="Third group m-0">
                  <button type="button" className="btn btn-dark me-1"></button>
                  <button type="button" className="btn btn-danger me-1"></button>
                </div>
              </div>
              <h6 className="mb-2 ps-2"> Select Dail Color </h6>
            </div>
            <div className="mb-3">
              <div className="btn" aria-label="Third group m-0">
                <button
                  type="button"
                  className="btn btn-dark me-1 px-2 py-1"
                  onClick={() => setCount(con())}
                >
                  -
                </button>
                <button type="button" className="btn btn-light me-1">
                  {count}
                </button>
                <button
                  type="button"
                  className="btn btn-dark me-1 px-1 py-1"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <Link to={"/login"} className="light_Btn">
              ADD TO CARD
            </Link>
          </div>
        </div>
      </div>
      <Deal />
      <div className="container text-center collect">
        <div className="row pb-5">
          <Link
            to={
              "/collection/" +
              Wdata[8].id +
              "/" +
              Wdata[8].title +
              "/" +
              Wdata[8].price
            }
            className="linkBlack"
            style={{ width: "20rem", margin: "auto" }}
          >
            <Card
              imgsrc={Wdata[8].imgsrc}
              title={Wdata[8].title}
              price={Wdata[8].price}
            />
          </Link>
          <Link
            to={
              "/collection/" +
              Wdata[7].id +
              "/" +
              Wdata[7].title +
              "/" +
              Wdata[7].price
            }
            className="linkBlack"
            style={{ width: "20rem", margin: "auto" }}
          >
            <Card
              imgsrc={Wdata[7].imgsrc}
              title={Wdata[7].title}
              price={Wdata[7].price}
            />
          </Link>
          <Link
            to={
              "/collection/" +
              Wdata[3].id +
              "/" +
              Wdata[3].title +
              "/" +
              Wdata[3].price
            }
            className="linkBlack"
            style={{ width: "20rem", margin: "auto" }}
          >
            <Card
              imgsrc={Wdata[3].imgsrc}
              title={Wdata[3].title}
              price={Wdata[3].price}
            />
          </Link>
          <div className="mb-3 my-md-5">
            <Link to="/collections" className="light_Btn">
              VIEW MORE COLLECTIONS
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LCard;
