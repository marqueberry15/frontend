import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import DefaultImg from '../images/blog-default.jpeg';
import { GetStartedBtn } from '../components/GetStartedBtn';

const CaseStudyDetail = ({content}) => {

    return(
        <section className="blog-detail">
            <div className="blog-detail-path">
                <p>Home/Case Study/{content.header}</p>
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col sm={12}>
                        <div className="blog-detail-heading">
                            <h1>{content.header}</h1>
                            <p>Posted On {content.created_on.split(" ")[0]}</p>
                        </div>
                    </Col>
                    <Col md={8}>
                    <div className="blog-detail-image">
                        {
                                content?.image === null ? <img src={DefaultImg} alt=""/> : <img src={content?.image} alt="" />
                            }
                        </div>
                        <div className="blog-detail-description">
                            <p>
                                {content.description}
                            </p>
                        </div>
                        <div className='blog-detail-share text-center'>
                            <h3>Want to be next viral brand</h3>
                            <GetStartedBtn />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CaseStudyDetail;