import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Header from './Components/Header';
import Banner from './Components/Banner';
import Services from './Components/Services'
// import { Route, Switch, Redirect } from "react-router-dom";
import Features from './Components/Features';
import Footer from './Components/Footer';
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <div className="header_fixed">
       <div className="login">
          <a>Sign Up</a>
              <p>Already have an account?</p>
        {/* <Link data-testid="logoutButton" onClick={logout}>logout</Link> */}
          <Link to="/login" >Log in</Link>
        </div>
        <div>
          <Header/>
        </div>
      </div>
        <Banner/>
        <Services/>
        <Features/>
        <Footer/>
        <Route path="/login">
           <Login/>
        </Route>
    </div>
    
  );
}

export default App;
