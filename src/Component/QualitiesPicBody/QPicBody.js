import React from "react";
import "./QPicBody.css";

function QPicBody(props){
    return(
      <div id="aboutusee">
        <div id="carouselExampleIndicators" className="carousel slide Exchanger QPIC" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner sliderrs"> 
          <div className="carousel-item active Imageesschichi House">
            <div className="textcont">{props.texthome}</div>
            <img className="d-block " src={props.imageurlhome} alt="First slide" ></img>
          </div>
          <div className="carousel-item Imageesschichi Plumbing">
          <div className="textcont Plumbingtt">{props.textplumbing}</div>
            <img className="d-block" src={props.imageurlplumbing} alt="Second slide" ></img>
          </div>
          <div className="carousel-item Imageesschichi Renovating">
          <div className="textcont">{props.textrenovating}</div>
            <img className="d-block" src={props.imageurlrenovating} alt="Third slide" ></img>
          </div>
          <div className="carousel-item Imageesschichi Wiring">
          <div className="textcont">{props.textwiring}</div>
            <img className="d-block" src={props.imageurlwiring} alt="Third slide" ></img>
          </div>
          <div className="carousel-item Imageesschichi paint">
          <div className="textcont">{props.textpaint}</div>
            <img className="d-block" src={props.imageurlpaint} alt="Third slide" ></img>
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
      </div>
    );
}

export default QPicBody;