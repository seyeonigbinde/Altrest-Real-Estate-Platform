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
            <Link to="/features/landlords">For Landlords</Link>
            <Link to="/features/tenants">For Tenants</Link>
            <Link to="/features/community">For Community Associations</Link>
            <Link to="/features/servicepro">For Service Providers</Link>
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