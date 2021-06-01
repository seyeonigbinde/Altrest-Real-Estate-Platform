import './App.css';
import { BrowserRouter as Route, Link, NavLink, Switch } from "react-router-dom";

// import Header from './Components/Header';
import Banner from './Components/Banner';
import Services from './Components/Services'
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Login from './Components/Login'
import Signup from './Components/Signup';
import AboutUs from './Components/AboutUs';
import HowItWorks from './Components/HowItWorks';
import Blog from './Components/Blog';
import AddBlog from './Components/AddBlog';
import Dashboard from './Components/Dashboard';


import altrest from './image/altrest.png';
// import PrivateRoute from './Utils/PrivateRoute'
// import Header from './Components/Header';

function App() {
  return (
    <>
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
            <NavLink activeStyle={{ backgroundColor: "#81b214", borderRadius: "5px", color: "#fff"}} to="/"> Home</NavLink>
            <NavLink activeStyle={{ backgroundColor: "#81b214", borderRadius: "5px", color: "#fff"}} to="/about"> About Us</NavLink>
            <NavLink activeStyle={{ backgroundColor: "#81b214", borderRadius: "5px", color: "#fff"}} exact to="/features/landlords">Features</NavLink>
            <NavLink activeStyle={{ backgroundColor: "#81b214", borderRadius: "5px", color: "#fff"}} to="/blog">Blog</NavLink>
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
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
        <Route path="/addblog">
          <AddBlog/>
        </Route>
      </Switch>
          <Footer/>
    </div>
    <div>
     
    </div>
    </>
  );
}

export default App;
