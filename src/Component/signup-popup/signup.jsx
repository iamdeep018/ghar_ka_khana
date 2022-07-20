import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {provider, db} from "../../firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSign } from "../../reducers/signReducer";
import { setIsAuth } from "../../reducers/authReducer";
import "./signup.css";
import {userauth} from '../../firebase-config'
import { addDoc, collection } from "firebase/firestore";
// import { faDisplay } from "@fortawesome/free-solid-svg-icons";


function Signup(){

  const dispatch=useDispatch();
  let navigate=useNavigate();

  const userCollection=collection(db,"users");

  const [uname,setuname]=useState("")
  const [uemail,setuemail]=useState("")
  const [upassword,setupassword]=useState("")
  const [uconfirmpassword,setuconfirmpassword]=useState("")
  const [logemail,setlogemail]=useState("")
  const [logpassword,setlogpassword]=useState("")

  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(userauth, (currentUser) => {
        setUser(currentUser);
    });

  }, [])

  const signInWithGoogle=()=>{
    signInWithPopup(userauth,provider).then((result)=>{
      localStorage.setItem("isAuth",true);
      dispatch(setIsAuth(true));
      dispatch(toggleSign(false));
      navigate("/");
    })
  }

  const login=async ()=>{
    try{
      signInWithEmailAndPassword(
        userauth,
        logemail,
        logpassword,
      )
      localStorage.setItem("isAuth",true);
      dispatch(setIsAuth(true));
      dispatch(toggleSign(false));
      navigate("/");
    }catch(error){
      console.log(error.message)
    }
  }

  const register = async () => {
    try {
       return (createUserWithEmailAndPassword(
        userauth,
        uemail,
        uconfirmpassword
      )).then(result=>
      localStorage.setItem("isAuth",true),
      dispatch(setIsAuth(true)),
      dispatch(toggleSign(false)),
      navigate("/"),)
      
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <Link to="/">
          <button
            onClick={() => {
              dispatch(toggleSign(false));
            }}> 
            X
          </button>
          </Link>
        </div>
        <div className='form_container'>
                <form className="form-log">
                    <div className='form-title'>I already have an account</div>
                    <br />
                    <div className='form-title'>LOG IN</div><br></br>
                    <div>
                    <div class="txt_field">
                          <input type="text" onChange={(event)=>{setlogemail(event.target.value)}} required />
                          <span></span>
                          <label>Email</label>
                        </div>
                        <div class="txt_field">
                          <input type="password" onChange={(event)=>{setlogpassword(event.target.value)}} required />
                          <span></span>
                          <label>Password</label>
                        </div>
                        <Link to="/forgot-password" ><div class="pass">Forgot Password?</div></Link>
                        </div>
                        <button onClick={login}>Log In</button>
                </form>
                <div className='form-divide'>
                </div>
                <form className="form-sign" action="">
                    <div className='form-title'> I don't have an account</div><br />
                    <div className='form-title'>SIGN UP</div>
                    <div>
                      <div class="txt_field">
                      <input type="text" required onChange={(event)=>{setuname(event.target.value)}}/>
                      <span></span>
                      <label>Name</label>
                      </div>
                      <div className="txt_field">
                      <input type="email" required onChange={(event)=>{setuemail(event.target.value)}}/>
                      <span></span>
                      <label>Email</label>
                      </div>
                      <div className="txt_field">
                      <input type="password" required onChange={(event)=>{setupassword(event.target.value)}}/>
                      <span></span>
                      <label>Password</label>
                      </div>
                      <div className="txt_field">
                      <input type="password" required onChange={(event)=>{setuconfirmpassword(event.target.value)}}/>
                      <span></span>
                      <label>Confirm Password</label>
                      </div>
                    </div>
                    <button onClick={register}>Sign Up</button>
                </form>
                    <button className="google-sign" onClick={signInWithGoogle}><i class="fa-brands fa-google"></i>Log In with Google</button>
                </div>
      </div>
    </div>
  );
}

export default Signup;