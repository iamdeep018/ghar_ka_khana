import React from 'react'
import './details.css'

function View_details(){
    
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

                {/* content to be shown */}

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

export default View_details;