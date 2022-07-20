import React, { useState } from 'react';
import './postad.css'
import { Link, Router } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { toggleAdForm } from '../../reducers/adformReducer';
import {addDoc, collection} from 'firebase/firestore'
import { db,userauth } from '../../firebase-config';
import {useNavigate } from 'react-router-dom'


function AdForm(){
    const dispatch=useDispatch();
    const [adtitle,setadtitle]=useState("")
    const [addescp,setaddescp]=useState("")
    const [adprice,setadprice]=useState(0)
    let navigate=useNavigate()

    const postsCollectionRef=collection(db,"posts")
    const createPost=async(e)=>{
        e.preventDefault()
        await addDoc(postsCollectionRef, {title: adtitle, description:addescp, price:adprice});
        dispatch(toggleAdForm(false));
        navigate("/")
    }

    return(
        <>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <Link to="/">
                    <button
                        onClick={() => {
                        dispatch(toggleAdForm(false));
                        }}> 
                        X
                    </button>
                    </Link>
                </div>
                <div className='form-container form-ad'>
                    <form >
                        {/* <label>Type of Ad</label>
                        <input type="radio" name="ad-type" id="car" />
                        <label >Sell Car</label>
                        <input type="radio" name="ad-type" id="rent" />
                        <label >Rent My Place</label>
                        <input type="radio" name="ad-type" id="food" />
                        <label >Catering Service</label> */}
                        <div class="txt_field">
                        <input type="text" required onChange={(event)=>{setadtitle(event.target.value)}}/>
                        <span></span>
                        <label>Title for Ad</label>
                        </div>
                        <div class="txt_field">
                        <input type="text" required onChange={(event)=>{setaddescp(event.target.value)}} />
                        <span></span>
                        <label>Ad Description</label>
                        </div>
                        {/* <label>Location</label>
                        <input type="radio" name="ad-type" id="Delhi" />
                        <label >DELHI</label>
                        <input type="radio" name="ad-type" id="Mumbai" />
                        <label >MUMBAI</label>
                        <input type="radio" name="ad-type" id="Hyderabad" />
                        <label >HYDERABAD</label>
                        <input type="radio" name="ad-type" id="Bangalore" />
                        <label >BANGALORE</label><br /><br /><br />
                        <label>Upload Image for your Ad</label>
                        <input type="file" name="fileToUpload" id="fileToUpload" /> */}
                        <div class="txt_field">
                        <input type="text" required onChange={(event)=>{setadprice(event.target.value)}}/>
                        <span></span>
                        <label>Price</label>
                        </div>
                        <button onClick={createPost}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdForm;