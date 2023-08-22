import React from "react";
import "./Home.css";

function Home(){
    return(
        <div className="homebody" >
            <div className="TopwithText">
                <img className="fullimagees" src="/ImageBox/IntroImage/Homeer.jpg" alt=""></img>
            </div>
            <div className="AboutUsDetail" id="homee">
                <div className="Text-Contetn " >
                    <p className="Title-Home">SOMESHWARA'S ASSOCIATES</p>
                    <p className="Content">We in SOMESHWARA'S ASSOCIATES provide all kinds of services on Civil Works
                    likes Renovating , Demolition , Planning , Estimation , Painting , Plumbing etc... regardless of any structure. 
                    We provide allround full service like Designeing, Estimating and constructing of any structure's.
                    We are well know in industries for our work with competative price.
                    </p>
                </div>
                <div className="Image-Sector">
                    <img className="Imageintitle" src="/ImageBox/IntroImage/Homeer2.jpg" width="100%" alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default Home;
