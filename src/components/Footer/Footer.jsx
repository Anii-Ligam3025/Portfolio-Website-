import React from 'react'
import "./Footer.css"
import logo from "../../assets/logoani.png"
import user_icon from "../../assets/user_icon.png";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
           
            <p>I enjoy solving problems, learning new technologies, and turning ideas into functional applications. Currently, I'm working on projects that enhance both my front-end and back-end skills..</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" height="50px"/>
                <input type='email' placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bootom-left">
            0 2025 Aniket Ligam.All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
