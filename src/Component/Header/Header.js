import React ,{useState}from "react";
import "./Header.css";
import {Link} from "react-scroll";

function Header(){

  const [navbar , setNavBar] = useState(false);
  const changeNavbar = () =>{

    if(window.scrollY >= 150){
        setNavBar(true);
    } else {
      setNavBar(false);
    }
};


  window.addEventListener('scroll' , changeNavbar);



    return (
                <div className={navbar? 'head1' : 'head'}>
                  <div className="CompanyDetail">
                      <div className="text-cont">
                          <a className="p1">SOMESHWARA'S ASSOCIATES</a>
                          <a className="p2">ENGINEERS , CONTRACTORS & INTERIOR DESIGNERS</a>
                      </div>
                  </div>
                  <div className="PagesLink">
                    <ul className="NavBarPages">
                      <li className="NavBar-item">
                        <Link className="NavBar-links" to="homee" smooth={true}  offset={-50}>HOME</Link>
                      </li>
                      <li className="NavBar-item">
                        <Link className="NavBar-links" to="aboutusee" smooth={true}  offset={-80}>ABOUT US</Link>
                      </li>
                      <li className="NavBar-item">
                        <Link className="NavBar-links" to="vastuee" smooth={true}  offset={-90}>VASTU + TRENDS</Link>
                      </li>
                      <li className="NavBar-item">
                        <Link className="NavBar-links" to="projectee" smooth={true}  offset={-170}>PROJECTS</Link>
                      </li>
                      <li className="NavBar-item">
                        <Link className="NavBar-links" to="contactee" smooth={true}  offset={-100}>CONTACT US</Link>
                      </li>
                    </ul>
                  </div>
                </div>
    );
}

export default Header;