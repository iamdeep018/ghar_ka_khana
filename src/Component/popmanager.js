import React from "react";
import Signup from "./signup-popup/signup";
import AdForm from "./new_ad/postad";
import {useSelector} from 'react-redux';


function Popup(){
    const signstatus=useSelector((state)=>state.sign.value)
    const adformstatus=useSelector((state)=>state.adform.value)

    return(
        <>
        {signstatus? <Signup />:<></>}
        {adformstatus? <AdForm />:<></>}
        </>
    )
}

export default Popup;