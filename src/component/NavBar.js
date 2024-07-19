import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar =() =>{
    return (
        <div className="nav-container">
            <h3>LOAN MANAGEMENT SYSTEM</h3>
            <div className="nav">
                <Link to = "/home" style={{color: "blue", textDecoration: 'non', margin: '0 10px'}}> Home </Link>
                
                <Link to = "/reg" style={{color: "blue", textDecoration: 'non', margin: '0 10px'}}> Registration </Link>
                
                <Link to = "/page" style={{color: "blue", textDecoration: 'non', margin: '0 10px'}}>Apply  </Link>
                </div>

        </div>

        );

};

export default NavBar;

