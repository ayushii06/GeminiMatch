import React,{useState} from 'react'
// import styles from '../Register/Register.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Register() {

  let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5050/api/v1/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            navigate("/login")

        }
        else {
            alert(json.error, "Invalid Credentials")
        }


  }
  return (
    
    <>
         <div className="login-container">
         <h1 className="login-heading">Hi, Welcome to GeminiMatch!</h1>
        <p className="login-subheading">Sign Up Now</p>
        <form className='form' >
           <div className="flex-column">
                <input type="text" id="name" className='form-control input-login' value={credentials.name} onChange={onChange} name="name" placeholder="Enter your name"/>
          
            
                <input type="email" id="email" className='form-control input-login' value={credentials.email} onChange={onChange} name="email" placeholder="Enter your email"/>
    
                {/* <input type="number" id="mobile" className='form-control input-login' value={credentials.mobile} onChange={onChange} name="mobile" placeholder="Enter your mobile number"/> */}
       
                <input type="password" id="password" className='form-control input-login' value={credentials.password} onChange={onChange} name="password" placeholder="Enter your password"/>
            </div>
            <div className="text-center btns" onClick={handleSubmit} style={{"margin":"0px auto"}} >Register</div>
        </form>

        <div className="footer">
            <div className="first-text">already have an account ?</div>
            <div className="register"><Link to='/login'>Log in </Link></div>
        </div>
    </div>

    </>
  )
}

export default Register