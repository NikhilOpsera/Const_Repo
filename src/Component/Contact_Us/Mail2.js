import React ,{Component}from "react";
import emailjs from "emailjs-com";
import "./contact.css";

export default class Mail2 extends Component {

    sendEmail = (e) =>{
        e.preventDefault();
    
        emailjs.sendForm('service_raskkv5', 'template_7zop0j9', e.target, 'user_qaX29CjMcWz4GzlMGO9GV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    render(){
    return(
        <form className="contactBlock" id="contactee"  onSubmit={this.sendEmail}>
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
                        <input className="input100" type="text" name="secondname" placeholder="SecondName"></input>
                    </div>
                    <div className="YourEmail Contentin">
                        <p className="youremail texter">Email</p>
                        <input className="input100" type="text" name="email" placeholder="Mail"></input>
                    </div>
                    <div className="YourNumber Contentin">
                        <p className="yournumber texter">Your Number</p>
                        <input className="input100" type="text" name="pnumber" placeholder="Number"></input>
                    </div>
                    <div className="YourMessage Contentin">
                        <p className="yourmessage texter">Project Type</p>
                        <input className="input100" type="text" name="mess" placeholder="Project"></input>
                    </div>
                    <div className="buttoner-block">
                        <button className="buttoner" type="submit">Send</button>
                    </div>

                </div>
            </div>
        </form>
    );
}
}
