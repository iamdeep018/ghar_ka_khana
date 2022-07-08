import React,{useState} from 'react';
import '../header/navigation.css';
import logo from './logo.png'
import Categorydd from './dropdown/category';
import Locationdd from './dropdown/location';
import { toggleSign } from '../../reducers/signReducer';
import { toggleAdForm } from '../../reducers/adformReducer';
import { togglelocadd } from '../../reducers/locationReducer';
import { togglecatedd } from '../../reducers/categoryReducer';
import { contentFilter } from '../../reducers/confilterReducer';
import { categoryFilter } from '../../reducers/catefilterReducer';
import { locationFilter } from '../../reducers/locafilterReducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Naviga = ()=>{
    const [fil,setfil]=useState("");

    const dispatch=useDispatch();
    const signstatus=useSelector((state)=>state.sign.value)
    const adformstatus=useSelector((state)=>state.adform.value)
    const catestatus=useSelector((state)=>state.catedd.value)
    const locastatus=useSelector((state)=>state.locadd.value)
    function resetprops (){
        dispatch(contentFilter(""));
        dispatch(categoryFilter(""));
        dispatch(locationFilter(""));
    }

    function searchEnter(e){
        if(e.key=='Enter'){
        dispatch(contentFilter(fil));
        }
    }

    return ( 
        <div>
        <nav className='navbar'>
            <div className='menu' >
                {/* homePage */}
            
            <div className='brand' onClick={resetprops}>
            <img  src={logo}  alt="logo" />
            <h4 className='bname'>Mummy'S</h4>
            </div>
            
            <ul className='navlist menu'>
            <li onMouseEnter={()=>{dispatch(togglecatedd(true))}} 
            onMouseLeave={()=>{dispatch(togglecatedd(false))}}
            >Category {catestatus?<Categorydd />:<></>}<i class="arrow fa-solid fa-angle-right"></i></li>
            
            <li onMouseEnter={()=>{dispatch(togglelocadd(true))}} 
            onMouseLeave={()=>{dispatch(togglelocadd(false))}} 
            >Location {locastatus?<Locationdd />:<></>}<i class="arrow fa-solid fa-angle-right"></i></li>
            <li>Popular Places</li>
            </ul>




            </div>
            <ul className='navlist leftnav'>
            <li className='search-container'><input type="text" placeholder='SEARCH NAME' className='searchbox' onKeyDown={searchEnter} onChange={(event)=>{
                setfil(event.target.value);
            }}/><i class="fa-solid fa-magnifying-glass" onClick={
                ()=>{dispatch(contentFilter(fil))}
            }></i></li>
            <li className='signin' onClick={() => {
                dispatch(toggleSign(!signstatus));
            }}>
            Login/SignIn
            </li>        
            <li className='ad-form' onClick={()=>{
                dispatch(toggleAdForm(!adformstatus));
            }}>POST AD<i class="fa-solid fa-play"></i></li>
            </ul>
        </nav>
        </div>
    )
}

export default Naviga