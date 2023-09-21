import React, { useEffect }  from "react";
import { Container, Row, Col } from "react-bootstrap";

import HeroImage from '../images/home-hero.png';

import Brand from '../images/brand.png';
import What from '../images/why.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GetStartedBtn } from "../components/GetStartedBtn";
import CategorySlider from "../components/CategorySlider";
import FixedLogos from "../components/FixedLogos";
import RecentWorks from "../components/RecentWorks";




const Home = ({caseStudyDetail}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("FDS");
      }, []);
    return (
        <> 
            <section className="hero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5} sm={12}>
                            <h1>Get Your Meme at Ease. Simple</h1>
                            <p>Create an impactful brand image by creating and publishing high-quality content, at speed and scale</p>
                            <GetStartedBtn />
                        </Col>
                        <Col md={7} sm={12}>
                            <div className="hero-image ">
                            <img src={HeroImage} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

           <FixedLogos />

            <section className="category">
                <Container>
                    <h2>Different Meme categories to drive your business goals</h2>
                    <Row className="justify-content-center">
                        <Col md={6} sm={12}>
                            <CategorySlider />
                        </Col>
                    </Row>
                    {/* <Tabs
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        {
                            memeCat.map(item => (
                                <Tab eventKey={item.event} title={item.title}>
                                    <div className="category-wrapper">
                                        <img src={item.img} alt="" />
                                        <h4>{item.heading}</h4>
                                    </div>
        
                                </Tab>
                            ))
                        }
                    </Tabs> */}
                    <Row className="justify-content-center">
                        <Col md={6} sm={12}>
                        <div className="sub-content">
                            <p>Still Confused, We’re ready to take the journey of the grow through Memes</p>
                            <GetStartedBtn variant={2}/>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="brand-trust">
                <Container>
                    <Row>
                        <Col>
                            <h2>Why Over 1200+ Brand Trust Our Service</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5} sm={12}>
                            <img src={Brand} alt="" />
                        </Col>
                        <Col md={1} sm={12}></Col>
                        <Col md={6} sm={12}>
                            <ul>
                                <li>
                                    <h6>High-quality Viral Content</h6>
                                    <p>25000+ creators filtered by our technology as per their viral content expertise and our team of experts handpicked the best meme for your brand.</p>
                                </li>
                                <li>
                                    <h6>Quick and Transparent</h6>
                                    <p>We follow a transparent process and ensure a quick solution to your brand needs. A hassle-free and easy solution for your needs</p>
                                </li>
                                <li>
                                    <h6>Licensed Meme</h6>
                                    <p>Say Goodbye to IP right issue, Experience the newly licensed meme created exclusively for your brand as per your brand image.</p>
                                </li>
                            </ul>
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
                        <RecentWorks caseStudyDetail={caseStudyDetail}/>
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

export default Home;