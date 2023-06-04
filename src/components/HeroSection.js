import React from 'react';
import './HeroSection.css';
import { NavLink } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='heroSection'>
<h1>We ensure a <br/> best <span>insurance</span> service.</h1>
<p>At the same time, the first insurance schemes for the underwriting of the business <br/> ventures became available of the insurance.</p>
<div className='buttons'>
   <button className='Qbtn'><NavLink to="services">Get a Qoute </NavLink></button>
   <button className='Cbtn'><NavLink to="contact">Contact Us </NavLink> </button>
</div>
<img src='https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
    </div>
  )
}

export default HeroSection