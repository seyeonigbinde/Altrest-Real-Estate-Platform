import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
import altrest from '../image/altrest.png';
import {axiosWithAuth} from '../Utils/axiosWithAuth'


const Dashboard = ()=> {
    const signOut = () => {
        axiosWithAuth().post('/logout')
        .then(res=> {
          localStorage.removeItem("token");
          window.location.href = "/";
        })
        .catch(err=> {
          console.log(err);
        })
      };
    return(
        <>
    <Router>
        <div className="header">
        <div className="logo">
            <img src={altrest} alt="logo"/>
        </div>
        <div className="links">
            <Link to="/home"> Home</Link>
            <Link to="/about" > About Us</Link>
            <Link to="/features" >Features</Link>
            <Link>Blog</Link>
            <Link onClick={signOut}>Sign Out</Link>
        </div>
        </div>
    </Router>
    <div>


    </div>

    </>
   );
}

export default Dashboard;