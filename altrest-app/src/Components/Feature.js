import React from 'react';
import { BrowserRouter as Route, Link, Switch} from "react-router-dom";

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
            <Link to="/features/landlords"><b>For Landlords</b></Link>
            <Link to="/features/tenants"><b>For Tenants</b></Link>
            <Link to="/features/community"><b>For Community Associations</b></Link>
            <Link to="/features/servicepro"><b>For Service Providers</b></Link>
        </div>
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