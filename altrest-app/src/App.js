import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

// import Header from './Components/Header';
import Banner from './Components/Banner';
import Services from './Components/Services'
// import { Route, Switch, Redirect } from "react-router-dom";
import Features from './Components/Features';
import Footer from './Components/Footer';
import Login from './Components/Login'
import Signup from './Components/Signup';

import altrest from './image/altrest.png';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div className="header_fixed">
       <div className="login">
          <Link to="/signup">Sign Up</Link>
              <p>Already have an account?</p>
        {/* <Link data-testid="logoutButton" onClick={logout}>logout</Link> */}
          <Link to="/login" >Log in</Link>
        </div>
        <div>
        <div className="header">
        <div className="logo">
            <img src={altrest} alt="logo"/>
        </div>
        <div className="links">
            <Link to="/home" > Home</Link>
            <Link to="/about" > About Us</Link>
            <Link to="/features" >Features</Link>
            <Link >Blog</Link>
            <Link >Contact Us</Link>
            {/* <Header/> */}
        </div>
        </div>
          <hr/>
        </div>
      </div>
      <Switch>
        <Route exact path="/home">
            <Banner/>
            <Services/>
            <Features/>
        </Route>
        <Route path="/login">
           <Login/>
        </Route>
        <Route path="/signup">
           <Signup/>
        </Route>
        <Route path="/features">
           <Features/>
        </Route>
        <Route path="/">
            <Redirect to="/home"/>
            </Route>
      </Switch>
          <Footer/>
    </div>
    
  );
}

export default App;
