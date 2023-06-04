import React from 'react'
import Services from '../components/Services'
import Nav from '../components/Nav';
import './ServicesPage.css';
import Footer from '../components/Footer';

function ServicesPage() {
  return (
    <>
    <Nav/>
    <div className="content">
    <h1>Explore our Amazing Insurance Services!</h1>
    <p>Our Trusted Partners</p>
    </div>
   
    <Services/>
    <hr />
    <Footer/>
    
    </>
  )
}

export default ServicesPage