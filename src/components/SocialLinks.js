import React from "react";
import { Link } from "react-router-dom";

import Linkedin from "../images/linkedin.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import { FacebookShareButton, WhatsappShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import WhatsappB from "../images/whatsapp-black.png";
import LinkedinB from "../images/linkedin-black.png";
import FacebookB from "../images/facebook-black.png";
import TwitterB from "../images/twitter-black.png";
export const SocialLinks = ({ share, url }) => {
    return (
        <>
            {
                !share ? (<li className="d-flex">
                    <Link to="https://www.instagram.com/marqueberry/" target={"_blank"}>
                        <img src={Instagram} alt="" />
                    </Link>
                    <Link to="https://www.linkedin.com/company/marque-berry/" target={"_blank"}>
                        <img src={Linkedin} alt="" />
                    </Link>
                    <Link to="https://www.facebook.com/profile.php?id=100063915163762" target={"_blank"}>
                        <img src={Facebook} alt="" />
                    </Link>
                    <Link to="https://twitter.com/Marqueberry1" target={"_blank"}>
                        <img src={Twitter} alt="" />
                    </Link>
                </li>) : (
                    <li>
                        <WhatsappShareButton url={url}>
                            <img src={WhatsappB} alt="" />
                        </WhatsappShareButton>
                        <LinkedinShareButton url={url}>
                            <img src={LinkedinB} alt="" />
                        </LinkedinShareButton>
                        <TwitterShareButton url={url}>
                            <img src={TwitterB} alt="" />
                        </TwitterShareButton>
                        <FacebookShareButton url={url}>
                            <img src={FacebookB} alt="" />
                        </FacebookShareButton>
                    </li>
                )
            }
        </>
    )
}