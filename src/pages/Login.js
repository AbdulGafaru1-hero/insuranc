import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="LoginForm">
       
    <form className='form'>
       <h3>Enter your Login Details</h3>
    <label className="label1">Email:</label>
<input className='email' type="email" name="email" placeholder="Enter your email" required/>
<label>Password:</label>
<input className='password' type="password" name='password' placeholder='Enter your password' required/>
<button className='button' type='submit'>Log In</button>
<NavLink to="/">Back to Homepage</NavLink>
    </form>
    </div>
  )
}

export default Login;