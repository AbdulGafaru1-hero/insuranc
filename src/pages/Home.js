import React from 'react';
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import './Home.css';
import { BrowserRouter } from 'react-router-dom';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <div className="container">
    <Nav/>
    <HeroSection />
    <Services/>
    <CTA/>
    <Testimonials />
    <Footer/>

    </div>
    </>
  )
}

export default Home