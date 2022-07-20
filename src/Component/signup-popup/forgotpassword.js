import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {provider,createUserDocument, db} from "../../firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSign } from "../../reducers/signReducer";
import { setIsAuth } from "../../reducers/authReducer";
import "./forgot-password.css";
import {userauth} from '../../firebase-config'
import { addDoc, collection } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";
// import { faDisplay } from "@fortawesome/free-solid-svg-icons";


function ForgotPassword(){

  const dispatch=useDispatch();
  let navigate=useNavigate();

  const [resetemail,setresetemail]=useState("")

  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(userauth, (currentUser) => {
        setUser(currentUser);
    });

  }, [])

  const resetPassword=async ()=>{
    try{
        sendPasswordResetEmail(userauth,resetemail)
        alert("check your inbox to reset password");
        setresetemail("");
    }catch(error){
      console.log(error.message)
    }
  }

  return (
    <div className="modallBackground">
      <div className="modallContainer">
        <div className="titleeCloseBtn">
          <Link to="/">
          <button
            onClick={() => {
                dispatch(toggleSign(false));

              navigate("/");
            }}> 
            X
          </button>
          </Link>
        </div>
        <div className='formm_container'>
                <form className="formm-log">
                    <div className='formm-title'>Password Reset</div>
                    <br />
                    <div className='formm-title'>LOG IN</div><br></br>
                    <div>
                    <div class="txt_field">
                          <input type="text" onChange={(event)=>{setresetemail(event.target.value)}} required />
                          <span></span>
                          <label>Email</label>
                        </div>
                        </div>
                        <button onClick={resetPassword}>Reset Password</button>
                        <Link to="/login"> <button >Log In</button></Link>
                </form>
                </div>
      </div>
    </div>
  );
}

export default ForgotPassword;