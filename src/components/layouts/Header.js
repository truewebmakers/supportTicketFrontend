import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return ( 
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb- border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"> </svg>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    
        <li><Link to="/" className='nav-link px-2 link-secondary'>Home</Link></li>
        <li><Link to="/contact-us" className='nav-link px-2 link-secondary'>Contact Us</Link></li>
        <li><Link to="/about-us" className='nav-link px-2 link-secondary'>About Us</Link></li>
        <li><Link to="/login" className='nav-link px-2 link-secondary'>Login</Link></li> 
        <li><Link to="/signup" className='nav-link px-2 link-secondary'>Signup</Link></li> 
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>
    </header> 
  );
}
