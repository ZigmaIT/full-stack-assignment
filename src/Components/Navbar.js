import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <Link to="/">
          <img
            src="https://www.riddle.com/blog/wp-content/uploads/2016/11/Riddle-logo-120x90-1.png"
            alt="Riddle- me"
            className='logo'
          />
        </Link>
        <div className='between-div'>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        </div>
        <div>
          <button className='button'>Get in Touch</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar