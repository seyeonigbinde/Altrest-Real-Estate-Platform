import React from 'react';

import { Link } from 'react-router-dom';
import altrest from '../image/altrest.png';

const Header = ()=> {

    return(
        <div className="header">
        <div className="logo">
            <img src={altrest} alt="logo"/>
        </div>
        <div className="links">
            <a to="/movies" className="btn btn-success"> About Us</a>
            <a to="/movies" className="btn btn-primary">For Landlord</a>
            <a to="/movies" className="btn btn-primary">For Tenant</a>
            <a className="btn btn-primary">For ServicePro</a>
            <a className="btn btn-primary">Blog</a>
        </div>
        </div>
   );
}

export default Header;