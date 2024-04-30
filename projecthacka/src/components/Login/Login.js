import React, { useState } from 'react'
import '../Login/login.css'
import { Link, useNavigate} from 'react-router-dom'

const Login=()=> {
  let navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(credentials.email)
  console.log(credentials.password)
      const response = await fetch("http://localhost:5050/api/v1/user/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password }),

      });
      const json = await response.json();
      
      console.log(json)
      if (json.success) {
          //Save the auth taken and redirect
          
          localStorage.setItem('token', json.token)
          console.log(json.token)
          navigate("/")


      }
      else {
          alert("Invalid Credentials")
      }

  }
  
  return (
    <>
   
    
  
    <div className="login-container">
        <h1 className="login-heading">Hi, Welcome to GeminiMatch!</h1>
        <p className="login-subheading" >Log in to your account</p>
        <form className='form' >
           <div className="flex-column">
                <input className='input-login' type="email" id="email" value={credentials.email} onChange={onChange} name="email" placeholder="Enter your email"/>
                <input className='input-login' type="password" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="Enter your password"/>
            </div>
            <div onClick={handleSubmit} className="text-center btns" style={{"margin":"0px auto"}} type="button" >Verify</div>
        </form>

        <div className="footer">
            <div className="first-text">don't have an account yet ?</div>
            <div className="register"><Link to='/register'>create account</Link></div>
        </div>
    </div>
    </>
  )
}

export default Login