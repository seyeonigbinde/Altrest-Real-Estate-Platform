// import axios from "axios";
import React, {useState } from "react";

// import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
// import Visibility from "@material-ui/icons/Visibility";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Input from "@material-ui/core/Input";

  const credentials={
    username: "",
    password: ""
}
const Login = () => {

  const [userLogin, setUserLogin] = useState(credentials)

  const handleChange = e => {
    setUserLogin({
      userLogin: {
        ...userLogin,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();

    
    
    
    //   axios.post('http://localhost:5000/api/login', userLogin)
    //     .then(res=>{
    //     localStorage.setItem("token", res.data.payload);
    //       push('/bubblePage');
    //     })
    //       .catch(err=>{
    //     console.log(err);
    //   });
  };

//   const [values, setValues] = useState({
//     password: "",
//     showPassword: false,
//   });
  
//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };
  
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
  
//   const handlePasswordChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };
  
  
  const error = ""
// ((userLogin.username === "") || (userLogin.password === "")) &&  "Username or Password not valid" 

  return (<section>
    <div>
      <div data-testid="loginForm" className="login-form">
        <h1>Login</h1><br/>

        <form onSubmit={login}>
        <div className="form-group">
          <label htmlFor="username">Username:  </label>
          <input
            type="text"
            name="username"
            data-testid="username"
            value={userLogin.username}
            onChange={handleChange}
            placeholder ="Enter Username"
          />
          </div>
         <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            data-testid="password"
            value={userLogin.password}
            onChange={handleChange}
            placeholder ="Enter Password"
          />
          </div>
          {/* <div>
              <InputLabel htmlFor="standard-adornment-password">
        Enter your Password
      </InputLabel>
      <Input
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      /></div> */}
          <button>Login</button>
        </form>

      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
    </section>
  );
};

export default Login;

