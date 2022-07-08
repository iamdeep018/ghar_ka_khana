import React from "react";
import './category.css';
import {useSelector, useDispatch} from 'react-redux';
import {categoryFilter} from '../../../reducers/catefilterReducer'


function Categorydd(){
    const dispatch=useDispatch();
    const contentfil=useSelector((state)=>state.catefil.value);
    return(
        <div className="cate-container">
            <ul>
                {/* <li >Catering</li> */}
                <li onClick={()=>{dispatch(categoryFilter("food"))}}>Catering</li>
                {/* <li >Rent house/flat</li> */}
                <li onClick={()=>{dispatch(categoryFilter("rent"))}}>Rent house/flat</li>
                {/* <li >Car Rentals</li> */}
                <li onClick={()=>{dispatch(categoryFilter("car"))}}>Car Rentals</li>
            </ul>
        </div>
    )
}
export default Categorydd;