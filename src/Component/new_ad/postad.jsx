import React from 'react';
import './postad.css'
import {useSelector,useDispatch} from 'react-redux'
import { toggleAdForm } from '../../reducers/adformReducer';


function AdForm(){
    const adformstatus=useSelector((state)=>state.adform.value)
    const dispatch=useDispatch();

    return(
        <>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                        dispatch(toggleAdForm(!adformstatus));
                        }}> 
                        X
                    </button>
                </div>
                <div className='form-container'>
                    <form className='form-ad'>
                        <label>Type of Ad</label>
                        <input type="radio" name="ad-type" id="car" />
                        <label >Sell Car</label>
                        <input type="radio" name="ad-type" id="rent" />
                        <label >Rent My Place</label>
                        <input type="radio" name="ad-type" id="food" />
                        <label >Catering Service</label>
                        <div class="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>Title for Ad</label>
                        </div>
                        <div class="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>Ad Description</label>
                        </div>
                        <label>Location</label>
                        <input type="radio" name="ad-type" id="Delhi" />
                        <label >DELHI</label>
                        <input type="radio" name="ad-type" id="Mumbai" />
                        <label >MUMBAI</label>
                        <input type="radio" name="ad-type" id="Hyderabad" />
                        <label >HYDERABAD</label>
                        <input type="radio" name="ad-type" id="Bangalore" />
                        <label >BANGALORE</label>
                        <label>Upload Image</label>
                        <input type="file" name="fileToUpload" id="fileToUpload" />
                        <div class="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>Price</label>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
                    
            </div>
        </div>
        </>
    )
}

export default AdForm;