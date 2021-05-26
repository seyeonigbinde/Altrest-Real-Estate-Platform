import React from 'react';


const Services = ()=> {

    return(
        <div className="service-container">
        <div className="serv-header">
            <h2>
                Our Services
            </h2>
        </div>
    <div className="services">
        <div className="option">
        <h2>For Landlord</h2>
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
            </li>
        </ul>
        </div>
        <div className="option">
        <h2>For Tenant</h2>
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
            </li>
        </ul>
        </div>
        <div className="option">
        <h2>For Community Association </h2>
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
                Announcements
            </li>
            <li>
                Violation Reports
            </li>
        </ul>
        </div><div className="option">
        <h2> For Service Provider</h2>
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
        </ul>
        </div>
        
    </div>
     
    </div>
    )
}

export default Services;