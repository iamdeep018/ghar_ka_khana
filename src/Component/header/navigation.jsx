import React from 'react';
import '../header/navigation.css';
import logo from './logo.png'

const Naviga = ()=>{
    return (
        <div >
        <nav className='navbar'>
            <div className='menu'>
            <a href="http://www.google.com">
            <div className='brand'>
            <img  src={logo}  alt="logo" />
            <h4 className='bname'>Mummy'S</h4>
            </div>
            </a>
            <ul className='navlist menu'>
            <li>Category</li>
            <li>Location</li>
            <li>Popular Places</li>
            
            </ul>
            </div>
            <ul className='navlist'>
            <li><input type="search" name="main-search" placeholder='SEARCH'  /></li>
            <li>Log In/Sign In</li>            
            <li className='postad'>POST AD</li>   
            {/**icon arrow */}         
            </ul>
        </nav>
        </div>
    )
}

export default Naviga