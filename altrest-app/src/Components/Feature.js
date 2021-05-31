import React from 'react';
import { BrowserRouter as Route, NavLink, Switch} from "react-router-dom";

import Tenants from './Tenants';
import Landlords from './Landlords';
import Community from './Community';
import ServicePro from './ServicePro';

const Feature = ()=> {

    return(
    <div className="features"> 
        <div className="featuresimg">
            <p className="features_caption">Features</p>
        </div>
        <div className="features_links">
            <NavLink activeStyle={{borderBottom: "4px solid #81b214", color: "red", textDecoration: "none"}} to="/features/landlords"><b>For Landlords</b></NavLink>
            <NavLink activeStyle={{borderBottom: "4px solid #81b214", color: "red", textDecoration: "none"}}  to="/features/tenants"><b>For Tenants</b></NavLink>
            <NavLink activeStyle={{borderBottom: "4px solid #81b214", color: "red", textDecoration: "none"}} to="/features/community"><b>For Community Associations</b></NavLink>
            <NavLink activeStyle={{borderBottom: "4px solid #81b214", color: "red", textDecoration: "none"}}  to="/features/servicepro"><b>For Service Providers</b></NavLink>
        </div>
        <p className="features_select">Select one option above</p>
        <div>
        <Switch>
            <Route path="/features/landlords">
                <Landlords/>
            </Route>
            <Route path="/features/tenants">
                <Tenants/>
            </Route>
            <Route path="/features/community">
                <Community/>
            </Route>
            <Route path="/features/servicepro">
                <ServicePro/>
            </Route>
        </Switch>
        </div>
    </div>
    )
}

export default Feature;