import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
import altrest from '../image/altrest.png';


const Header = ()=> {


    return(
    <Router>
        <div className="header">
        <div className="logo">
            <img src={altrest} alt="logo"/>
        </div>
        <div className="links">
            <Link to="/home" onClick={console.log("This is Good")}> Home</Link>
            <Link to="/about" > About Us</Link>
            <Link to="/features" >Features</Link>
            <Link >Blog</Link>
            <Link >Contact Us</Link>
        </div>
        </div>
    </Router>
   );
}

export default Header;