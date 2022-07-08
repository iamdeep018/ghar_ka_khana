import React from 'react'
import './footer.css'

function Footer(){


    return(
        <>
        <div className='footer-container'>
            <div className='links'>
                <div>
                <a href="mailto:sahadeep10@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                <a href='https://www.linkedin.com/in/deep-saha97/'><i class="fa-brands fa-linkedin"></i></a>
                <a href='https://github.com/iamdeep018'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.instagram.com/heyiamdeep97/'><i class="fa-brands fa-instagram"></i></a>
                </div>
                © 2022 Mummy'S | All Rights Reserved
            </div>
            <div className='divide-line'></div>
            <div className='about'>
                <div className='about-title'>ABOUT ME</div>
                <div className='intro'>
                    <img className='dp' src="images/dp1.jpg" alt="" />                    <div>Deep Saha <br />
                    <span> Web Developer</span></div>
                </div>
                <div className='line'></div>
                <p className='para'>
                     I'm a proactive learner and like to challenge myself by getting my hands on new technologies. I like to work on projects which has real life usage and has potential to connect with the general public. </p>
            </div>
        </div>
        </>
    )
}

export default Footer;
