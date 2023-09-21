import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import axios from 'axios';
import { config } from '../components/Constant';
import DefaultLogo from '../images/Trell_logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={className} style={{ ...style }}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </div>
    )
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={className} style={{ ...style }}>
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    )
}
const settings = {
    infinite: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
};

const CaseStudy = ({ item,caseStudyDetail }) => {
    return (
        <div className='case-study-wrapper'>
            <Link to={`/case-study/${item?.header}`}>
            <div className="case-study" onClick={() => caseStudyDetail(item)}>
                <div className="case-study-logo">
                    {!item?.hasOwnProperty("logo") ? <img src={DefaultLogo} alt="" /> : <img src={item?.logo} alt="" /> }
                </div>
                <h3>{item?.header}</h3>
            </div>
        </Link>
        </div>
    )
}
const RecentWorks = ({caseStudyDetail}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${config.API_URL + '/getCaseStudy'}`).then(res => {
            if (res.status === 200) {
                setData(res.data.data)
          
            }
        });
    }, [])
    return (
        <Row className="justify-content-center">
            <Col md={11} sm={12}>
            {
                data?.length !== 0 ? <Slider {...settings}>
                {
                    data?.map((i,key) => (
                        <CaseStudy item={i} key={key} caseStudyDetail={caseStudyDetail}/>
                    ))
                }
            </Slider> : null
            }
                
            </Col>
        </Row>
    )
}

export default RecentWorks;