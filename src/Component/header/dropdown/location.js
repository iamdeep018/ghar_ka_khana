import React from "react";
import './location.css'
import { useDispatch} from 'react-redux';
import {locationFilter} from '../../../reducers/locafilterReducer';

function Locationdd(){
    const dispatch=useDispatch();
    return(
        <div className="loca-container">
            <ul >
                {/* <li>Mumbai</li> */}
                <li onClick={()=>{dispatch(locationFilter("mumbai"))}}>Mumbai</li>
                <li onClick={()=>{dispatch(locationFilter("bangalore"))}}>Bangalore</li>
                <li onClick={()=>{dispatch(locationFilter("delhi"))}}>Delhi</li>
                <li onClick={()=>{dispatch(locationFilter("hyderabad"))}}>Hyderabad</li>

                {/* <li>Bangalore</li>
                <li>Delhi</li>
                <li>Hyderabad</li> */}
            </ul>
        </div>
 
    )
}

export default Locationdd;