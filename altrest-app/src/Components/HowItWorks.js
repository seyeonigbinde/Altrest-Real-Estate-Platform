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
            <i className="fas fa-plus-circle fa-2x" style={{ color: '#81b214' }}></i><br/>
            <h3>Create An Account</h3>
            <p>Register your details by filling our signup form</p>
        </div>
        <div>
            <i class="fas fa-envelope-open fa-2x" style={{ color: '#81b214' }}></i><br/>
            <h3>Verify Your Email</h3>
            <p>Check your email for the verification link.</p>
        </div>
        <div>
            <i className="fas fa-hand-pointer fa-2x" style={{ color: '#81b214' }}></i><br/>
            <h3>Select Your Role</h3>
            <p>Select your role on the platform (Landlord, Tenant or Community Association).</p>
        </div>
        <div>
            <i className="fas fa-users fa-2x" style={{ color: '#81b214' }}></i><br/>
            <h3>Select Features</h3>
            <p>Select the services you want to have access to on the platform</p>
        </div>
    </section>
    </div>
     
    
    )
}

export default HowItWorks;