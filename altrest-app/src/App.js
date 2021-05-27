import './App.css';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";

// import Header from './Components/Header';
import Banner from './Components/Banner';
import Services from './Components/Services'
// import { Route, Switch, Redirect } from "react-router-dom";
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Login from './Components/Login'
import Signup from './Components/Signup';
import AboutUs from './Components/AboutUs';
import HowItWorks from './Components/HowItWorks';
import Blog from './Components/Blog';
import Dashboard from './Components/Dashboard'

import altrest from './image/altrest.png';
import PrivateRoute from './Utils/PrivateRoute'
// import Header from './Components/Header';

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
           <Link exact to="/"> <img src={altrest} alt="logo"/></Link>
        </div>
        <div className="links">
            <Link to="/"> Home</Link>
            <Link to="/about"> About Us</Link>
            <Link exact to="/features/landlords">Features</Link>
            <Link to="/blog">Blog</Link>
            <Link >Contact Us</Link>
            {/* <Header/> */}
        </div>
        </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
            <Banner/>
            <Services/>
            <HowItWorks/>
        </Route>
        <Route path="/login">
           <Login/>
        </Route>
        <Route path="/signup">
           <Signup/>
        </Route>
        <Route path="/about">
           <AboutUs/>
        </Route>
        <Route exact path="/features/landlords">
          <Feature/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        {/* <Route path="/dashboard">
          <Dashboard/>
        </Route> */}
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </Switch>
          <Footer/>
    </div>
    
  );
}

export default App;
