import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";


const Footer = () => {
    return (
       <footer>
        <div className="footer">
        <Container>
            <Row>
                <Col md={3} sm={12}>
                    <ul>
                        <li className="footer-heading">
                            COMPANY
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='https://www.linkedin.com/company/marque-berry/jobs' target="_blank">Careers-We're hiring!</Link>
                        </li>
                    </ul>
                </Col>
                <Col md={3} sm={12}>
                    <ul>
                        <li className="footer-heading">
                            Resources
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/work'>Work</Link>
                        </li>
                    </ul>
                </Col>
                <Col md={3} sm={12}>
                    <ul>
                        <li className="footer-heading">
                            Address
                        </li>
                        <li>
                        2232, Sector - 46, Gurugram, Haryana
                        </li>
                    </ul>
                </Col>
                <Col md={3} sm={12}>
                    <ul>
                        <li className="footer-heading">
                            Contact
                        </li>
                        <li>
                        +91 89206 32128​
                        </li>
                        <li>
                        +91 74007 05595
                        </li>
                        <li>
                            <a href="mailto:info@marqueberry.com">Info@marqueberry.com</a>
                        </li>
                    </ul>
                    <ul>
                        <li className="footer-heading">
                            Social
                        </li>
                        <SocialLinks />                      
                    </ul>
                </Col>
            </Row>
        </Container>
        </div>
        
       </footer>
    )
}

export default Footer;