import React from 'react'
import './redirect.css';
import { Link } from "react-router-dom";
const Redirect = () => {
    return (
        <div className='eden__redirect-content'>
            <div className="eden__redirect">
                <h1>Thank you for contacting us!</h1>
                <h3>An agent will contact you soon</h3>
                <span><Link to="/">Go Home</Link></span>
            </div>
        </div>
    )
}

export default Redirect