import React ,{Component}from 'react';
import "./Body.css";
import Header from "./Header/Header.js";
import Home from "./Intro/Home.js";
import Footer from "./Footer/Footer.js";
import QPicBody from "./QualitiesPicBody/QPicBody.js";
import ProjSlid from "./Projects/ProjSlid.js";
import InteriorDesg from "./InteriorDesg/InteriorDesg.js";
import Mailer from "./Contact_Us/Mail2.js";



export default class Body extends Component {


    render(){
    return(
        <div className="main1">
            < Header/>
             <div className="homebody">
                < Home/>
                 <QPicBody
                    imageurlhome="/ImageBox/IntroImage/Homeer3.jpg"
                    texthome="We make you dream true. We build from scratch including planing, desiging and Estimating."
                    textplumbing="We also undertake all kind of plumbing works."
                    imageurlplumbing="/ImageBox/IntroImage/Plumbing.jpg"
                    textrenovating="We understand the attachement, we all have on our house and work placess.So, we also undertake Renovation and Demolition projects."
                    imageurlrenovating="/ImageBox/IntroImage/Renovating.jpg"
                    imageurlwiring="/ImageBox/IntroImage/wiring.jpg"
                    textwiring="Our team is so well trainned and advanced that we are capable of all kind of wiring to any kind of structures."
                    textpaint="We also do paint jobs."
                    imageurlpaint="/ImageBox/IntroImage/paint.jpg"
                />
                     <div className="AboutUsDetail_VastuTrends" id="vastuee">
                        <div className="Text-Contetn_VastuTrends">
                            <p className="Title-Home_VastuTrends">VASTU + TRENDS</p>
                            <p className="Content_VastuTrends">
                            We understand the importance of our cultural belife, 
                            so we give atmost importance to vastu in all our design's.
                            Our designe are so creative, that we make a great mash up of
                            both current trend designe and vastu. Our designe's are so well balanced
                            that it will satisfy both the generation's like showing the texture of our 
                            culture and outlook of the new creative designes that are trending market.
                            </p>
                        </div>
                        <div className="Image-Sector_VastuTrends">
                            <img className="Imageintitle_VastuTrends" src="/ImageBox/vastu.jpg" width="100%" alt="#"></img>
                        </div>
                    </div>
                    <div className="ProjectDetails">
                        <div className="Project-Text">
                            <p className="ProjectTitle">Projects</p>
                        </div>
                        <div className="Project-Image" id="projectee">
                            <div className="ConstructionSites">
                                <p className="ConstructionSites-text">Construction Project</p>
                                <div className="Project-Image-block">
                                    <ProjSlid
                                    Imageurl1="/ImageBox/ProjectImage/ProjectA-6.jpg"
                                    Imageurl2="/ImageBox/ProjectImage/ProjectA-1.jpg"
                                    Imageurl3="/ImageBox/ProjectImage/ProjectA-3.jpg"/>
                                    <div className="Protextcon">
                                        <ul className="pro type">Varthur Project</ul> 
                                        <ul className="typees">Dimension of Construction : 30x40</ul>
                                        <ul className="typees">Construction type : Duplex</ul>
                                        <ul className="typees">Duration of Construction: 6 Months</ul>
                                    </div>
                                </div>
                                <div className="Project-Image-block">
                                    <ProjSlid
                                    Imageurl1="/ImageBox/ProjectImage/ProjectC-3.jpg"
                                    Imageurl2="/ImageBox/ProjectImage/ProjectC-1.jpg"
                                    Imageurl3="/ImageBox/ProjectImage/ProjectC-2.jpg"/>
                                    <div className="Protextcon">
                                        <ul className="pro type">Nagarbavi Project</ul> 
                                        <ul className="typees">Dimension of Construction : 30x50</ul>
                                        <ul className="typees">Construction type : G+2 Floors</ul>
                                        <ul className="typees">Duration of Construction: 7 Months</ul>
                                    </div>
                                </div>
                                <div className="Project-Image-block">
                                    <ProjSlid
                                    Imageurl1="/ImageBox/ProjectImage/ProjectD-2.jpg"
                                    Imageurl2="/ImageBox/ProjectImage/ProjectD-1.jpg"
                                    Imageurl3="/ImageBox/ProjectImage/ProjectD-2.jpg"/>
                                    <div className="Protextcon">
                                        <ul className="pro type">Sheshadripuram Project</ul> 
                                        <ul className="typees">Dimension of Construction : 30x40</ul>
                                        <ul className="typees">Construction type : COMERCIAL BUILDING</ul>
                                        <ul className="typees">Duration of Construction: 4 Months</ul>
                                    </div>
                                </div>
                                <div className="Project-Image-block">
                                    <ProjSlid
                                    Imageurl1="/ImageBox/ProjectImage/ProjectE-3.jpg"
                                    Imageurl2="/ImageBox/ProjectImage/ProjectE-1.jpg"
                                    Imageurl3="/ImageBox/ProjectImage/ProjectE-2.jpg"/>
                                    <div className="Protextcon">
                                        <ul className="pro type">Hesaraghatta Project</ul> 
                                        <ul className="typees">Dimension of Construction : 30x50</ul>
                                        <ul className="typees">Construction type : Duplex</ul>
                                        <ul className="typees">Duration of Construction: 6 Months</ul>
                                    </div>
                                </div>
                                <div className="Project-Image-block">
                                    <ProjSlid
                                    Imageurl1="/ImageBox/ProjectImage/ProjectF-3.jpg"
                                    Imageurl2="/ImageBox/ProjectImage/ProjectF-1.jpg"
                                    Imageurl3="/ImageBox/ProjectImage/ProjectF-2.jpg"/>
                                    <div className="Protextcon">
                                        <ul className="pro type">HSR Layout Project</ul> 
                                        <ul className="typees">Dimension of Construction : 60x40</ul>
                                        <ul className="typees">Construction type : G+1 Floors</ul>
                                        <ul className="typees">Duration of Construction: 6 Months</ul>
                                    </div>
                                </div>
                                <div className="Project-Image-block">
                                    <ProjSlid
                                    Imageurl1="/ImageBox/ProjectImage/ProjectG-3.jpeg"
                                    Imageurl2="/ImageBox/ProjectImage/ProjectG-1.jpeg"
                                    Imageurl3="/ImageBox/ProjectImage/ProjectG-2.jpeg"/>
                                    <div className="Protextcon">
                                        <ul className="pro type">MEL Layout Project</ul> 
                                        <ul className="typees">Dimension of Construction : 30x40</ul>
                                        <ul className="typees">Construction type : G+2 Floors</ul>
                                        <ul className="typees">Duration of Construction: 7 Months</ul>
                                    </div>
                                </div>
                                </div>                                                
                        </div>
                        <InteriorDesg/>
                    </div>
                    <button className="rediie"></button>
                    <div className="contactblockinbody">
                        <Mailer/>
                    </div>
            </div>
            <Footer/> 
        </div>
    );
    }
}

