import React from 'react';
import '../header/navigation.css';
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


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
            <li >Category<i class="arrow fa-solid fa-angle-right"></i></li>
            <li >Location<i class="arrow fa-solid fa-angle-right"></i></li>
            <li>Popular Places</li>
            
            </ul>
            </div>
            <ul className='navlist'>
            <li><input type="search" name="main-search" placeholder='SEARCH'  /></li>
            <li className='signin'>Log In/Sign In</li>            
            <li className='ad-form'>POST AD<i class="fa-solid fa-play"></i></li>
            </ul>
        </nav>
        </div>
    )
}

export default Naviga