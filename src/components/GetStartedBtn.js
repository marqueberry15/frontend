import React from "react"
import { Link } from "react-router-dom"

export const GetStartedBtn = ({variant}) => {

    
    return (
        <Link className="custom-btn" to="/create-account" >{!variant ? 'Get Started' : 'Let’s Start the Journey'} &#8594;</Link>
    )
} 