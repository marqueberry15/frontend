import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import StaticMeme from '../images/staticmeme.png';
import GifMeme from '../images/gifMeme.png';
import VideoMeme from '../images/videomeme.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return(
       <div onClick={onClick}  className={className} style={{...style}}>
        <FontAwesomeIcon  icon={faAngleLeft} />
       </div>
    )
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return(
        <div onClick={onClick}  className={className} style={{...style}}>
        <FontAwesomeIcon  icon={faAngleRight} />
       </div>
    )
}

const settings1 = {
    infinite: false,
    arrows: true,
    dots: true,
    speed:0,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: i => (

        <div className="custom-dots">
          <h6>{memeCat[i].title}</h6>
        </div>
      )
  };

const memeCat = [{
    event: 'staticMeme',
    title: 'Static Meme',
    img: StaticMeme,
    heading: 'Every Second world is sharing a Static Memes',
    subHeading: 'Still Confused, We’re ready to take the journey of the grow through Memes'
},
{
    event: 'gifMeme',
    title: 'Gif Meme',
    img: GifMeme,
    heading: 'GIF is a new lingo of the Gen Z',
    subHeading: 'Still Confused, We’re ready to take the journey of the grow through Memes'
},
{
    event: 'videoMeme',
    title: 'Video Meme',
    img: VideoMeme,
    heading: 'Video Memes are the most relatable',
    subHeading: 'Still Confused, We’re ready to take the journey of the grow through Memes'
}
]

const CategorySlider = () => {
    return (
<Slider {...settings1}>
                    {
                            memeCat.map(item => (
                                
                                    <div className="category-wrapper">
                                        <img src={item.img} alt="" />
                                        <h4>{item.heading}</h4>
                                    </div>
        
                                
                            ))
                        }
                    </Slider>
    )
}

export default CategorySlider;