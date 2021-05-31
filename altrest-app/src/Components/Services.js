import React from 'react';
import { BrowserRouter as Route, Link} from "react-router-dom";

const Services = ()=> {

    return(
        <div className="service-container">
        <div className="serv-header">
            <h2>
                Features
            </h2>
        </div>
    <div className="services">
        <div className="option">
        <h3>For Landlord</h3>
        <br/>
        <hr/>
        <ul>
            <li>
                Manage Maintenance Request
            </li>
            <li>
                Online Payments
            </li>
            <li>
                Account Summary
            </li>
            <li>
                Rental Agreements
            </li>
            <li>
                Notices
            </li><br/>
            <Link to="/features/landlords">Read More...</Link>
        </ul>
        </div>
        <div className="option">
        <h3>For Tenant</h3>
        <br/>
        <hr/>
        <ul>
            <li>
                Online Maintenance Request
            </li>
            <li>
                Online Payments
            </li>
            <li>
                Rental Agreements & E-sign
            </li><br/>
            <Link to="/features/tenants">Read More...</Link>
        </ul>
        </div>
        <div className="option">
        <h3>For Community Association </h3>
        <br/>
        <hr/>
        <ul>
            <li>
                Communication with Home Ownwers and Non-owner Residents
            </li>
            <li>
                Organize and Share Documents like Bye-Laws, Financials, Minutes
            </li>
            <li>
                Online Payment of Dues
            </li>
            <li>
            Announcements & Violation Reports
            </li><br/>
            <Link to="/features/community">Read More...</Link>
        </ul>
        </div><div className="option">
        <h3> For Service Provider</h3>
        <br/>
        <hr/>
        <ul>
            <li>
                Manage Invoices
            </li>
            <li>
                Online Payments
            </li>
            <li>
                Communicate with Clients
            </li>
            <li>
               Stay Organized with Calendar
            </li>
            <li>
                Build Business Profile
            </li>
        </ul><br/>
        <Route>
        <Link to="/features/servicepro">Read More...</Link>
        </Route>
        </div>
        
    </div>
     
    </div>
    )
}

export default Services;