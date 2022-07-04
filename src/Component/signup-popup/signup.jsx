import React from "react";
import "./signup.css";

// function Modal({ setOpenModal }) {
  function Signup(){
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}> 
            X
          </button> */}
        </div>
        <div className="title">
          <h1>Amar Poem Sono</h1>
        </div>
        
        
        <div className='form_container'>
                <form className="form-log">
                    <div className='form-title'>I already have an account</div>
                    <br />
                    <div className='form-title'>LOG IN</div><br></br>
                    <div>
                    <div class="txt_field">
                          <input type="text" required />
                          <span></span>
                          <label>Username</label>
                        </div>
                        <div class="txt_field">
                          <input type="password" required />
                          <span></span>
                          <label>Password</label>
                        </div>
                        <div class="pass">Forgot Password?</div>
                        </div>
                        <button>Log In</button>
                </form>
                <div className='form-divide'>
                </div>
                <form className="form-sign" action="">
                    <div className='form-title'> I don't have an account</div><br />
                    <div className='form-title'>SIGN UP</div>
                    <div>
                      <div class="txt_field">
                      <input type="text" required />
                      <span></span>
                      <label>Name</label>
                      </div>
                      <div className="txt_field">
                      <input type="email" required/>
                      <span></span>
                      <label>Email</label>
                      </div>
                      <div className="txt_field">
                      <input type="password" required/>
                      <span></span>
                      <label>Password</label>
                      </div>
                      <div className="txt_field">
                      <input type="password" required/>
                      <span></span>
                      <label>Confirm Password</label>
                      </div>
                    </div>
                    <button>Sign Up</button>
                    <button className="google-sign"><i class="fa-brands fa-google"></i>Sign Up with Google</button>

                </form>
                </div>
      </div>
    </div>
  );
}

export default Signup;