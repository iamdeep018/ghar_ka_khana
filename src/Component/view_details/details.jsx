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

                
            </div>
        </div>
        </>
    )
}

export default View_details;