import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Slider from "react-slick";
import HeroImage from '../images/service-hero.png';
import Process1 from '../images/process-1.png';
import Process2 from '../images/process-2.png';
import Process3 from '../images/process-3.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GetStartedBtn } from "../components/GetStartedBtn";
import FixedLogos from "../components/FixedLogos";
import CategorySlider from "../components/CategorySlider";



const PrevArrow = (props) => {
    return(
       <div onClick={props.onClick}>
        <FontAwesomeIcon  icon={faAngleLeft} />
       </div>
    )
}

const NextArrow = (props) => {
    return(
       <div onClick={props.onClick}>
        <FontAwesomeIcon  icon={faAngleRight} />
       </div>
    )
}
const settings = {
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };


const ProcessContent = [{
    id: 1,
    img: Process1,
    heading: 'We understand your need',
    description: 'Login to your account and write your requirement, tell us what you need share details of your requirement.'
},{
    id: 2,
    img: Process2,
    heading: 'Meme creators start Memefying it',
    description: 'With help of technology and expert, we match your requirement with the right creators in our community. The memes were then filtered down as per the virality factor and picked as per the right match.'
},{
    id: 3,
    img: Process3,
    heading: 'Ready to become the next viral thing',
    description: 'Here you go, we deliver the best solution for your brand, a viral content ready'
}]
const Service = () => {
    return (
        <>
            <section className="hero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5} sm={12}>
                            <h1>India's Best Meme Marketing Company</h1>
                            <p>Marque Berry, the top meme marketing company of India, provides various opportunities for the influencers to establish and mark their presence in the marketing world so as to monetize all their efforts and an opportunity for the brands to choose the faces for their brands as well as the reach of their campaign.</p>
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
            <FixedLogos />
            <section className="category">
                <Container>
                    <h2>Different Meme categories to drive your business goals</h2>
                    <Row className="justify-content-center">
                        <Col md={6} sm={12}>
                            <CategorySlider />
                        </Col>
                    </Row>
                    </Container>
                    </section>
            <section className="process">
                <Container>
                    <h2>Let’s understand the process</h2>
                    {
                        ProcessContent.map(item => (
                            <Row className="align-items-center process-item">
                                <Col md={6} sm={12} className='text-center'>
                                    <img src={item.img} alt="" />
                                </Col>
                                <Col md={6} sm={12}>
                                    <span>
                                        <p>{item.id}</p>
                                    </span>
                                    <h3>{item.heading}</h3>
                                    <p>{item.description}</p>
                                </Col>
                            </Row>
                        ))
                    }
                </Container>
            </section>
            <section className="lets-start">
                <Container>
                <h2>Let’s make your Campaign Viral</h2>
                <GetStartedBtn />
                </Container>
            </section>
            <section className="resources">
           <Container>
            <h2>Resources</h2>
                        <Row className="justify-content-center">
                            <Col sm={12} md={8}>
                            <Slider {...settings}>
                                <div className="resources-item">
                                    <img src="" alt="" />
                                    <p>Content Title: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                                </div>
                                <div className="resources-item">
                                    <img src="" alt="" />
                                    <p>Content Title: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                                </div><div className="resources-item">
                                    <img src="" alt="" />
                                    <p>Content Title: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                                </div>
                                
                            </Slider>
                            </Col>
                        </Row>
           </Container>
            </section>
        </>
    )
}

export default Service;