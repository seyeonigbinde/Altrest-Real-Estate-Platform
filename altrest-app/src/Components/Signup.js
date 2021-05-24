import React, { useState } from 'react';


const Signup = () => {

    const [state, setState] = useState({
        id:Date.now(),
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });

    }

    const handleSubmit = e => {
        e.preventDefault();
        // props.addSmurfs(state)
        // if (state.firstName === "" || state.lastName === "" || state.email === "") {
        //  props.errorMessage(errorMessage);
        // }
    }

    // const errorMessage = "";


    return(<section>
        <h1>Create Account</h1><br/>
        <p>Enter your information below to continue</p><br/>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input onChange={handleChange} value={state.firstName} name="firstName" id="firstName"  placeholder ="First Name" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={handleChange} value={state.lastName} name="lastName" id="lastName"  placeholder ="Last Name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input onChange={handleChange} value={state.email} name="email" id="email"  placeholder ="Email Address" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} value={state.password} name="password" id="password" type="password"   placeholder ="Password" className="password"/>
                {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
            </div>
            {/* {
                props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.error}</div>
            } */}
            <button>Create Account</button>
        </form>
    </section>);
}
  
  export default Signup;

