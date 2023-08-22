import React from "react"
import "./contact.css";

function Contact(){
    return(
        <div className="contactBlock" id="contactee" >
            <div className="Titlediv">
                <p className="TitlePP">CONTACT US</p>
            </div>
            <div className="contactBlockinside">
                <div className="text-content">
                    <div className="YourFirstName Contentin">
                        <p className="yourname texter">First Name</p>
                        <input className="input100" type="text" name="name" placeholder="FirstName" ></input>
                    </div>
                    <div className="YourSecondName Contentin">
                        <p className="yourname texter">second Name</p>
                        <input className="input100" type="text" name="name" placeholder="SecondName"></input>
                    </div>
                    <div className="YourEmail Contentin">
                        <p className="youremail texter">Email</p>
                        <input className="input100" type="text" name="name" placeholder="Mail"></input>
                    </div>
                    <div className="YourNumber Contentin">
                        <p className="yournumber texter">Your Number</p>
                        <input className="input100" type="text" name="name" placeholder="Number"></input>
                    </div>
                    <div className="YourMessage Contentin">
                        <p className="yourmessage texter">Your Message</p>
                        <input className="input100" type="text" name="name" placeholder="Message"></input>
                    </div>
                    <div className="buttoner-block">
                        <button className="buttoner" type="submit">Send</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;