import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import { NavLink,Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// const [showNav, setShowNav] = useState(false);





function Nav() {

  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav")
   };

  return (
    <>
<header className="navItems">
    <h3><NavLink to='/'>INSU<span>RANC.</span></NavLink></h3>
    <nav  className="navMenu" ref={navRef}>
      
        <ul>
        
            <li><NavLink to="/">Home</NavLink></li>
            <li>Feature</li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><Link to="contact">contact Us</Link></li>
            <button className='loginButton btn' type='submit'><Link to="login">Log In</Link></button>
            <button className='SignUpButton btn'type='submit'><Link to="signup">Sign Up</Link></button>
        </ul>
        <button className='nav-btn nav-close' onClick={showNav}><FaTimes /></button>
    </nav>
        <button className='nav-btn' onClick={showNav}><FaBars /></button>
</header>

    </>
  )
}

export default Nav;