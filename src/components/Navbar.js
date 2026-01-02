import React, { useRef } from 'react'; 
import styles from '../styles/Navbar.css'
import Logo from '../assets/rest1.jpg';
import {Link} from "react-router-dom"


const Navbar =()=>{
    return(
        <div className="navbar">
            <div className="left-side">
            <img src={Logo} alt=""/>
              </div>
                
                 <div className="right-side">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    
            
            </div>
        </div>
    )
}
export default Navbar;