import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { GetStartedBtn } from "./GetStartedBtn";

function Header() {
  const [toggle, setToggle] = useState(false);
  const showHeader = useSelector((state) => state.userId);

  const USER = sessionStorage.getItem("USER")
  const isLoggin = JSON.parse(USER)
  


  const toggleAction = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const removeToggleAction = () => {
    setToggle(false);
    document.body.style.overflow = "scroll";
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </Navbar.Brand>
        <div
          className={!toggle ? "toggle" : "toggle close"}
          onClick={toggleAction}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Nav
          className={!toggle ? "" : "mobile-nav"}
          onClick={removeToggleAction}
        >
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/best-meme-marketing-company-india">Services</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </div>
          {
            isLoggin == null || isLoggin.userId == 0 ? 
            <div className="header-action">
            <Link to="/sign-in">Sign In</Link>
            <GetStartedBtn />
          </div> : <Link to="/dashboard/home" className="custom-btn">Go to Dashboard</Link>
          }
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
