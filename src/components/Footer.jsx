import React from 'react';
import './Footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <div className='footer'>
<div className="footerCard">
<div className="footerCard-left">
<h3>Easiest way to <br /> get your Insurance</h3>
<p>Growth as a centre for trade was increasing due <br /> to the the demand for marine insurance</p>
</div>
<div className="footerCard-right">
    <button>Get a qoute</button>
   <div className="profiles"> 
   <img src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

    <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

    <img src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    </div>
    <p>centre for trade was increasing <br /> to the the demand for marine</p>
</div>
</div>
<div className="footerMain">

<div className="footer1">
<h3>INSU<span>RANC.</span></h3>
<p>Life insurance provides a mandetory <br /> benefit to a decendent's family or other <br/> designated benficiary, and may <br /> specifically expenses.</p>

<div className="socialIcons">
    <div className="icons">
        <FaFacebookF className="icon"/>
    </div>
    <div className="icons">
        <FaInstagram className="icon"/>
    </div>
    <div className="icons">
        <FaLinkedinIn className="icon"/>
    </div>
    <div className="icons">
        <FaTwitter className="icon"/>
    </div>
</div>

</div>
<div className="footerR">
<div className="footer2">
    <strong>Product</strong>
    <p>Categories</p>
    <p>Products</p>
    <p>Pricing</p>
    <p>Discount</p>
</div>

<div className="footer3">
<strong>Discover</strong>
    <p>Customer</p>
    <p>Privacy</p>
    <p>FAQ's</p>
</div>

<div className="footer4">
<strong>About</strong>
    <p>Support</p>
    <p>News & Blog</p>
    <p>Products</p>
</div>
</div>
</div>
    </div>
    <div className="footerBottom">
        <div className="footerBottom-left">
            <p>Copyright 2023 Insu. All Rights Reserved</p>
        </div>
        <div className="footerBottom-right">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
        </div>
    </div>
    </>
  )
}

export default Footer