import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Logo from '../../Images/Logo.png';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
       
     <nav className="navbar navbar-expand-md navbar-light">
             
             <div className="navbar-logo">
                <img src={Logo} width="40%" height="40%" alt="logo"/>
             </div>
            
             <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#NavMenu">
                 <span className="navbar-toggler-icon"></span>   
             </button>
             <div id="NavMenu" className="collapse navbar-collapse">
                 
                 <ul className="navbar-nav ms-3">
                     <NavLink className={({ isActive }) => (isActive ? "active" : "nav-link")} to="/">Home
                     </NavLink>
                     <NavLink className={({ isActive }) => (isActive ? "active" : "nav-link")} to="/about">About
                     </NavLink>
                     <NavLink className={({ isActive }) => (isActive ? "active" : "nav-link")} to="/portfolio">Portfolio
                     </NavLink>
                     <NavLink className={({ isActive }) => (isActive ? "active" : "nav-link")} to="/blog">Blog
                     </NavLink>
                     <NavLink className={({ isActive }) => (isActive ? "active" : "nav-link")} to="/contact">Contact
                     </NavLink>
                 </ul>
             </div>
           
     </nav>

    );
}

export default NavBar;