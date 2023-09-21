import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import RecentWorks from "../components/RecentWorks";
import HeroImage from '../images/about-us.png';
import What from '../images/why.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GetStartedBtn } from "../components/GetStartedBtn";


const About = () => {
    return (
        <>
            <section className="hero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5} sm={12}>
                            <h1>Welcome to <br></br>Marque Berry</h1>
                            <p>We are Marque Berry, the finest and most creative brains in the field of meme marketing. We help brands reach out to their audience through a funny or unique humor act. We ensure a candid approach to engage the audiences.</p>
                            <GetStartedBtn />
                        </Col>
                        <Col md={7} sm={12}>
                           <div className="hero-image">
                           <img src={HeroImage} alt="" />
                           </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="how-we">
                <Container>
                    <Row>
                        <Col>
                            <h2>Here’s how we do it</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5} sm={12}>
                            <img src={What} alt="" />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={6} sm={12}>
                            <ul>
                                <li>
                                    <h6>Tell Us what you need</h6>
                                    <p>Login to your account and write your requirement, tell us what you need share details of your requirement.</p>
                                </li>
                                <li>
                                    <h6>Sourcing and creation</h6>
                                    <p>With help of technology and expert, we match your requirement with the right creators in our community. The memes were then filtered down as per the virality factor and picked as per the right match.</p>
                                </li>
                                <li>
                                    <h6>Delivery</h6>
                                    <p>Here you go, we deliver the best solution for your brand, a viral content ready</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="recent-works">
           <Container>
            <h2>Our Most Recent Works</h2>
            <RecentWorks />
           </Container>
            </section>

            <section className="lets-start">
                <Container>
                <h2>Let’s start the journey of Memes</h2>
                <GetStartedBtn />
                </Container>
            </section>
        </>
    )
}

export default About;