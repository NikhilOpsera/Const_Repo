import React from "react";
import "./ProjSlid.css";

function ProjSlid(props){
    return(
        <div id="carouselExampleIndicators" className="carousel slide Exchanger QPIC1" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner sliderrs1"> 
            <div className="carousel-item active Imageesschichi1 paint">
                <img className="d-block" src={props.Imageurl1} alt="Third slide" ></img>
            </div>
            <div className="carousel-item Imageesschichi1 paint">
                <img className="d-block" src={props.Imageurl2} alt="Third slide" ></img>
            </div>
            <div className="carousel-item Imageesschichi1 paint">
                <img className="d-block" src={props.Imageurl3} alt="Third slide" ></img>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
}

export default ProjSlid;