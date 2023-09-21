import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HeroImage from '../images/work.png';

import logo_1 from "../images/clients/1.svg";
import logo_2 from "../images/clients/2.svg";
import logo_3 from "../images/clients/3.svg";
import logo_4 from "../images/clients/4.svg";
import logo_5 from "../images/clients/5.svg";
import logo_6 from "../images/clients/6.svg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GetStartedBtn } from "../components/GetStartedBtn";
import RecentWorks from "../components/RecentWorks";


const clientLogoArr = [logo_3,logo_4,logo_5,logo_6];

const Work = ({caseStudyDetail}) => {

    const [clientLogo, setClientLogo] = useState([]);
    const [hideBtn, setHideBtn] = useState(false); 
    // const [imgIndex , setImgIndex] = useState(0)

    const seeMore = (e) => {
        e.preventDefault();
        // if(clientLogo.length !== 4){
        //     setClientLogo(clientLogo => [...clientLogo, clientLogoArr[imgIndex]])
        //     setImgIndex(imgIndex + 1);

        //     if(clientLogo.length === 3){
        //         setHideBtn(true)
        //     }
        // }
        setClientLogo(clientLogoArr)
        setHideBtn(true)
    }
    return (

        
        <>
            <section className="hero">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5} sm={12}>
                            <h1>Our work speak for itself</h1>
                            <p>Over the years, Marque Berry has gone above and beyond to pull off some really incredible stuff. Here is a little glimpse from the millions of eye-catching content Marque Berry has helped curate over the years.</p>
                            
                        </Col>
                        <Col md={7} sm={12}>
                            <div className="hero-image">
                            <img src={HeroImage} alt="" />
                            </div>
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

            <section className="our-clients text-center d-flex justify-content-center">
                <Container>
                    <h2>Our Clients</h2>

                    <img src={logo_1} alt="client-logo" />
                    <img src={logo_2} alt="client-logo" />
                    {
                        clientLogo.map(item => (
                            <img src={item} alt="client-logo"/>
                        ))
                    }
                    {
                        !hideBtn && <button onClick={seeMore}>See More...</button>
                    }
                </Container>
            </section>
        </>
    )
}

export default Work;