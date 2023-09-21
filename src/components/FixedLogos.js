import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Amazon from '../images/homepage-client/amazon.png';
import Citroen from '../images/homepage-client/citroen.png';
import Jio from '../images/homepage-client/jio-studios.jpg';
import Prime from '../images/homepage-client/prime.png';
import Rusk from '../images/homepage-client/rusk.png';
import Star from '../images/homepage-client/star-gold.jpg';

const FixedLogos = () => {
    return (
        <section className="clients">
        <Container>
        <h6 className="text-center">1200+ BUSINESSES TRUST US WITH THEIR CONTENT</h6>
        <Row className="align-items-center">
                <Col md={2} sm={4} xs={6}>
                    <img src={Amazon} alt="" />
                </Col>
                <Col md={2} sm={4} xs={6}>
                    <img src={Jio} alt="" />
                </Col>
                <Col md={2} sm={4} xs={6}>
                    <img src={Citroen} alt="" />
                </Col>
                <Col md={2} sm={4} xs={6}>
                    <img src={Prime} alt="" />
                </Col>
                <Col md={2} sm={4} xs={6}>
                    <img src={Rusk} alt="" />
                </Col>
                <Col md={2} sm={4} xs={6}>
                    <img src={Star} alt="" />
                </Col>
            </Row>
        </Container>
         
        </section>
    )
}

export default FixedLogos;