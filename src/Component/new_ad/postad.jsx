import React from 'react';
import './postad.css'

function AdForm(){
    
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

                <label htmlFor="type">Type of Ad</label>
                <input type="radio" name="" id="" />//type
                <label htmlFor="title"></label>
                <input type="text" />
                <label htmlFor="Descp">Descriprion</label>
                <input type="text" name="" id="" />
                <label htmlFor="location">Location</label>
                <input type="radio" name="" id="" />//location
                <label htmlFor="upload_image">Upload Image</label>
                <input type="image" src="" alt="" />
                <label htmlFor="price">Price</label>
                <input type="text" />

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

export default AdForm;