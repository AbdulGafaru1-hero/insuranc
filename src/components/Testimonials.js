import React from 'react';
import { ImQuotesLeft,ImQuotesRight } from 'react-icons/im';
import './Testimonials.css';


function Testimonials() {
  return (
    <>
    <div className='testimonials'>
<h3>What our Customers <br /> love about Us</h3>

<div className="testimonialCards">
  <div className="testimonialCard">
    <img src="https://images.pexels.com/photos/6801865/pexels-photo-6801865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    <div className="qoute">
      <ImQuotesLeft className='qLeft q'/>
      <p className='text'>You have been absolutely wonderful <br /> for kinship Center, and I can't <br /> thank you enough for the skills</p> <ImQuotesRight className='qRight q'/>
      </div>
    <p className="name">Adam Mohr</p>
  </div>

  <div className="testimonialCard">
    <img className="secondImage" src="https://images.pexels.com/photos/7651748/pexels-photo-7651748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    <div className="qoute">
      <ImQuotesLeft className='qLeft q'/>
      <p className='text'>You have been absolutely wonderful <br /> for kinship Center, and I can't <br /> thank you enough for the skills</p> <ImQuotesRight className='qRight q'/>
      </div>
    <p className="name">Jeff Adams</p>
  </div>

  <div className="testimonialCard">
    <img src="https://images.pexels.com/photos/7567427/pexels-photo-7567427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    <div className="qoute">
      <ImQuotesLeft className='qLeft q'/>
      <p className='text'>You have been absolutely wonderful <br /> for kinship Center, and I can't <br /> thank you enough for the skills</p> <ImQuotesRight className='qRight q'/>
      </div>
    <p className="name">Nile Duppstodt</p>
  </div>

  </div>
  <div className="slideLines">
  <div className="slideLine"></div>
  <div className="slideLine color"></div>
  <div className="slideLine"></div>
  <div className="slideLine"></div>
  </div>
  </div>
  
  <div className='achievements'>
    <div className="left">
      <h3>Our Achievements</h3> 
      <p>The insured receives a contract, called insurance <br /> which details the conditions and circumstances under <br /> which the insurer will compensate.</p>

      <div className="Anumbers">
        <div className="number">
          <h3>180k+</h3>
          <p>Clients <br />Joined</p>
        </div>

        <div className="number">
          <h3>10+</h3>
          <p>Years of <br />Experience</p>
        </div>

        <div className="number">
          <h3>18+</h3>
          <p>Awards <br />Gained</p>
        </div>
      </div>
      <button>Learn More</button>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
  </div>
  
  
  </>
  
  )
}

export default Testimonials