import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <div className="footadi">
            <div className="footer_block">
                <ol className="sections3">
                    <ol className="OurService_footer">
                        <p className="titleeachcol">Our Service</p>
                        <p className="underline"></p>
                            <ol className="OurService_footer_order">
                                <div className="OurService_footer_order_cont1">
                                    <img className="arrow_svg" src="/ImageBox/logo/Arrow12.svg"></img>
                                    <ul className="Aboutus_footer_cont1">House Refurbishments</ul>
                                </div>
                                <div className="OurService_footer_order_cont1">
                                    <img className="arrow_svg" src="/ImageBox/logo/Arrow12.svg"></img>
                                    <ul className="Aboutus_footer_cont1">Kitchens & Bathrooms</ul>
                                </div>
                                <div className="OurService_footer_order_cont1">
                                    <img className="arrow_svg" src="/ImageBox/logo/Arrow12.svg"></img>
                                    <ul className="Aboutus_footer_cont1">Interior Designing</ul>
                                </div>
                                <div className="OurService_footer_order_cont1">
                                    <img className="arrow_svg" src="/ImageBox/logo/Arrow12.svg"></img>
                                    <ul className="Aboutus_footer_cont1">Planning and Estimation</ul>
                                </div>
                                <div className="OurService_footer_order_cont1">
                                    <img className="arrow_svg" src="/ImageBox/logo/Arrow12.svg"></img>
                                    <ul className="Aboutus_footer_cont1">Tiles & Granites</ul>
                                </div>
                                <div className="OurService_footer_order_cont1">
                                    <img className="arrow_svg" src="/ImageBox/logo/Arrow12.svg"></img>
                                    <ul className="Aboutus_footer_cont1">Plumbing & Fittings</ul>
                                </div>
                                <div className="OurService_footer_order_cont1">
                                    <img className="arrow_svg" src="/ImageBox/logo/Arrow12.svg"></img>
                                    <ul className="Aboutus_footer_cont1">Electrical Works</ul>
                                </div>
                            </ol>
                    </ol>
                    <ol className="Contact_footer">
                        <p className="titleeachcol">Contact detail</p>
                        <p className="underline"></p>
                        <ol className="Contact_footer_order">
                            <div className="Contact_footer_order_cont1">
                                <img className="contact_svg" src="/ImageBox/logo/Mail.svg"></img>
                                <ul className="Contact_footer_cont1">someshwarasassociates@gmail.com</ul>
                            </div>
                            <div className="Contact_footer_order_cont1">
                                <img className="contact_svg" src="/ImageBox/logo/call.svg"></img>
                                <ul className="Contact_footer_cont1">+91-9606575579</ul>
                            </div>
                            <div className="Contact_footer_order_cont1">
                                <img className="contact_svg" src="/ImageBox/logo/location.svg"></img>
                                <ul className="Contact_footer_cont1"># 9, 11th Cross, 3rd Main Prashanth Nagar, Bang-79</ul>
                            </div>
                            <ul className="Contact_footer_cont1"></ul>
                            <ul className="Contact_footer_cont1"></ul>
                        </ol>
                    </ol>
                </ol>
            </div>
            <div className="footer-copyright text-center py-3 enderblock">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> Nikhil Arya L</a>
            </div>
        </div>
    );
}

export default Footer;