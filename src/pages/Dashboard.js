import React, { useEffect, useState } from "react";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Outlet, NavLink, useNavigate, Link  } from "react-router-dom";
import CreateCampaign from "../components/CreateCampaign";
import NavImg from "../images/header.png";
import Logo from "../images/logoAdmin.png";
import { logOut, currentPage } from "../actions";
import { useSelector } from "react-redux";
// import HomeImg from '../images/home.png';
// import AllProjectsImg from '../images/.png';

const Dashboard = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [currentPageRef, setCurrentPageRef] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const currentPageState = useSelector(state => state.currentPage)

  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    dispatch(currentPage(e.currentTarget.innerHTML))
  };

  const signOut = () => {
    dispatch(logOut());
    navigate("/", { replace: true });
    sessionStorage.clear();
    setRedirectToHome(true);
    window.location.reload(false);
  };


  
  useEffect(() => {
    let lastPath = window.location.pathname.split("/").pop();
    let refLastPath = lastPath.split("-").join(" ");

    setCurrentPageRef(refLastPath);
  }, []);
  const toggleAction = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const [toggle, setToggle] = useState(false);
  const showHeader = useSelector((state) => state.userId);

  const USER = sessionStorage.getItem("USER");
  const isLoggin = JSON.parse(USER);


  const removeToggleAction = () => {
    setToggle(false);
    document.body.style.overflow = "scroll";
  };

 const ref = () => {
  navigate("/", { replace: true });
  window.location.reload(false);
  
 }
  return (
    <section className="dashboard">
      {show && <CreateCampaign handleClose={handleClose} />}
      {
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
                <NavLink to="/dashboard/home" onClick={handleOnClick}>Home</NavLink>
                <NavLink to="/dashboard/all-projects" onClick={handleOnClick}>All Projects</NavLink>
                <NavLink to="/dashboard/change-password" onClick={handleOnClick}>
                  Change Password
                </NavLink>
              </div>
              <div className="d-flex justify-content-between w-100 align-items-center">
              <button className="custom-btn" onClick={handleShow}>
          + Create New Project
        </button>
              <div onClick={signOut}>Sign Out</div>
             
              </div>
            </Nav>
          </Container>
        </Navbar>
      }
      <div className="dashboard-nav">
        <div>
          <div className="dashboard-logo">
            <NavLink to="/" onClick={ref}><img src={Logo} alt="" /></NavLink>
          </div>

          <ul className="dashboard-link">
            <li>
              <NavLink to="/dashboard/home" onClick={handleOnClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/all-projects" onClick={handleOnClick}>
                All Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/change-password" onClick={handleOnClick}>
                Change Password
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="custom-btn" onClick={handleShow}>
          + Create New Project
        </button>
      </div>
      <div className="dashboard-content">
        <Container fluid>
          <div className="dashboard-header">
            <div className="dashboard-name">
              <img src={NavImg} alt="" />
              <h5>{currentPageState ? currentPageState : currentPageRef}</h5>
            </div>
            <div onClick={signOut} className="signOut">Sign Out</div>
          </div>
          <Row>
            <Outlet />
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Dashboard;
