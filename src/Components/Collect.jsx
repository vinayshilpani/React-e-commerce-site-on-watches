import React from "react";
import "./Collect.css";
import Card from "./Card";
import Wdata from "./WatchData";
import { Link } from "react-router-dom";


const Collect = () => {
  return (
    <>
      <div className="container text-center collect">
        <div className="row pb-5">
          <div className="col-12">
            <h1 className="mb-5 pt-md-5"> The Grani Collection </h1>
            <p className="m-md-5 px-md-5 px-2 text-muted">
              We are happy to introduce the new Lawson Collection. These are
              three quartz models designed with simplicity and elegance kept in
              mind. They come in different sizes and colors, and all feature a
              stainless steel back — leaving enough space for a personalized
              engraving. The engraving service is complimentary with any watch
              from the Lawson series.
            </p>
          </div>
          <Link to={"/collection/"+Wdata[0].id+"/"+Wdata[0].title+"/"+Wdata[0].price} className='linkBlack' style={{ width: "20rem",margin:"auto" }}>
          <Card
            imgsrc={Wdata[0].imgsrc}
            title={Wdata[0].title}
            price={Wdata[0].price}
          />
          </Link>
          <Link to={"/collection/"+Wdata[2].id+"/"+Wdata[2].title+"/"+Wdata[2].price} className='linkBlack' style={{ width: "20rem",margin:"auto" }}>
          <Card
            imgsrc={Wdata[2].imgsrc}
            title={Wdata[2].title}
            price={Wdata[2].price}
          />
          </Link>
          <Link to={"/collection/"+Wdata[1].id+"/"+Wdata[1].title+"/"+Wdata[1].price} className='linkBlack' style={{ width: "20rem",margin:"auto" }}>
          <Card
            imgsrc={Wdata[1].imgsrc}
            title={Wdata[1].title}
            price={Wdata[1].price}
          />
          </Link>
          <div className="my-5">
            <Link to="/collections" className="light_Btn"> VIEW MORE COLLECTIONS </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collect;
