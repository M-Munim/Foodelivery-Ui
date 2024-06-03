import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil esse, cumque aliquam mollitia eveniet perspiciatis aliquid officia expedita iusto maiores maxime. Earum molestias minima eum saepe rerum. Inventore, eos.</p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>HOME</li>
            <li>ABOUT_US</li>
            <li>DELIEVERY</li>
            <li>PRIVACY_POLICY</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>0330 2021926</li>
            <li>muhammadmunimoff330@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Tomato.com - All Rights Reserved
      </p>

    </div>
  )
}

export default Footer