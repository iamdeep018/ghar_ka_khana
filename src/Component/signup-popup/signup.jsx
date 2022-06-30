import React from 'react'
import './signup.css'

function Register_form(){
    return(
        <>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                        setOpenModal(false);
                        }}> 
                        X
                    </button>
                </div>
                
                <div className='form_container'>
                <form >
                    <div>I already have an account</div>
                    <br />
                    <div>LOG IN</div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" />
                    <label htmlFor="password">Password:</label>
                    <input type="text" />
                    <input type="submit" value="" />
                </form>
                <div className='border'>
                </div>
                <form action="">
                    <div> I don't have an account</div><br />
                    <div>SIGN UP</div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="" />
                    <label htmlFor='email'>Email</label>
                    <input type="email" />
                    <label htmlFor='password'>Password</label>
                    <input type="password"></input>
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" />

                </form>
                </div>


                <div className="footer">
                    <button
                    onClick={() => {
                    setOpenModal(false);
                    }}
                    id="cancelBtn">
                    Cancel
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>


    
        </>
    )
}

export default Register_form;