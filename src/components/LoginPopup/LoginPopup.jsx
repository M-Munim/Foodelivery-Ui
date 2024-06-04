import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up")
  return (
    <div className='login-popup'>
      <div className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
          {
            currState === "Login" ? <></> : <input type="text" name="" id="" />
          }

          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
        </div>

        <button>{currState === "Sign up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, I agree to the term of use & provacy policy.</p>
        </div>

        {
          currState === "Login" ? <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click Here</span></p> : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
        }
      </div>
    </div>
  )
}

export default LoginPopup