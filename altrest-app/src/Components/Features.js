import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Tenants from './Tenants';
import Landlords from './Landlords';
import Community from './Community';
import ServicePro from './ServicePro';

const Features = ()=> {

    return(
    <div className="features"> 
        <div className="featuresimg">
            <p className="features_caption">Features</p>
        </div>
        <div className="features_links">
            <Link to="/landlords">For Landlords</Link>
            <Link to="/tenants">For Tenants</Link>
            <Link to="/community">For Community Associations</Link>
            <Link to="/servicepro">For Service Providers</Link>
        </div>
        <div>
        <Switch>
            <Route path="/landlords">
                <Landlords/>
            </Route>
            <Route path="/tenants">
                <Tenants/>
            </Route>
            <Route path="/community">
                <Community/>
            </Route>
            <Route path="/servicepro">
                <ServicePro/>
            </Route>
        </Switch>
        </div>
    </div>
    )
}

export default Features;