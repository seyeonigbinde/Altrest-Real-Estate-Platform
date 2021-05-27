import React from 'react';


const HowItWorks = ()=> {

    return(
        
    <div className="howitworks-container"> 
        <div className="howitworks-header">
        <h2>
            How It Works
        </h2>
        </div>
        <section className="howitworks">
        <div>
            <i className="fas fa-chart-pie fa-2x"></i><br/>
            <h3>Create An Account</h3><br/>
            <p>Register your details by filling our signup form</p>
        </div>
        <div>
            <i className="fas fa-globe fa-2x"></i><br/>
            <h3>Verify Your Email</h3><br/>
            <p>Check your email for the verification link.</p>
        </div>
        <div>
            <i className="fas fa-cog fa-2x"></i>
            <h3>Select Your Role</h3><br/>
            <p>Select your role on the platform (Landlord, Tenant or Community Association).</p>
        </div>
        <div>
            <i className="fas fa-users fa-2x"></i>
            <h3>Select Features</h3><br/>
            <p>Select the services you want to have access to on the platform</p>
        </div>
    </section>
    </div>
     
    
    )
}

export default HowItWorks;